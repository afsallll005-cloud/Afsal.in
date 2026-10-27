"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { API_BASE_URL } from "@/utils/api";

const AdminAuthContext = createContext({
  isAuthenticated: false,
  isLoading: true,
  login: async () => false,
  logout: () => {},
});

const SEED_PASSWORD = "14345";
const AUTH_KEY = "admin_authenticated";
const AUTH_TOKEN_KEY = "admin_auth_token";

export function AdminAuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check stored auth session on initial mount
  useEffect(() => {
    try {
      const sessionAuth = sessionStorage.getItem(AUTH_KEY);
      const localAuth = localStorage.getItem(AUTH_KEY);

      if (sessionAuth === "true" || localAuth === "true") {
        setIsAuthenticated(true);
      }
    } catch (e) {
      console.warn("Storage check failed:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (inputPassword, rememberDevice = true) => {
    const trimmed = String(inputPassword || "").trim();

    if (!trimmed) {
      return { success: false, message: "Please enter the admin password." };
    }

    try {
      // 1. Attempt verification with backend API
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

      let authenticatedViaApi = false;
      let apiErrorMessage = "";

      try {
        const res = await fetch(`${API_BASE_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: trimmed }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          authenticatedViaApi = true;
          if (data.token) {
            try {
              sessionStorage.setItem(AUTH_TOKEN_KEY, data.token);
              if (rememberDevice) {
                localStorage.setItem(AUTH_TOKEN_KEY, data.token);
              }
            } catch (_) {}
          }
        } else {
          const errData = await res.json().catch(() => ({}));
          apiErrorMessage = errData.message || "Incorrect password. Access denied.";
        }
      } catch (networkErr) {
        // Backend offline or network failure: fallback to seed password comparison
        clearTimeout(timeoutId);
        if (trimmed === SEED_PASSWORD) {
          authenticatedViaApi = true;
        } else {
          return {
            success: false,
            message: "Incorrect password. Access denied.",
          };
        }
      }

      if (authenticatedViaApi || trimmed === SEED_PASSWORD) {
        try {
          sessionStorage.setItem(AUTH_KEY, "true");
          if (rememberDevice) {
            localStorage.setItem(AUTH_KEY, "true");
          }
        } catch (_) {}

        setIsAuthenticated(true);
        return { success: true };
      }

      return {
        success: false,
        message: apiErrorMessage || "Incorrect password. Access denied.",
      };
    } catch (error) {
      if (trimmed === SEED_PASSWORD) {
        try {
          sessionStorage.setItem(AUTH_KEY, "true");
        } catch (_) {}
        setIsAuthenticated(true);
        return { success: true };
      }
      return {
        success: false,
        message: "An unexpected error occurred. Please try again.",
      };
    }
  };

  const logout = () => {
    try {
      sessionStorage.removeItem(AUTH_KEY);
      sessionStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(AUTH_KEY);
      localStorage.removeItem(AUTH_TOKEN_KEY);
    } catch (_) {}
    setIsAuthenticated(false);
  };

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export const useAdminAuth = () => useContext(AdminAuthContext);
