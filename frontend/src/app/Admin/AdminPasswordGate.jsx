"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  FiLock,
  FiUnlock,
  FiShield,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
  FiAlertCircle,
  FiKey,
} from "react-icons/fi";
import { useAdminAuth } from "./AdminAuthContext";

export default function AdminPasswordGate() {
  const { login } = useAdminAuth();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // Auto-focus password input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!password.trim()) {
      setError("Please enter the password");
      triggerShake();
      if (inputRef.current) inputRef.current.focus();
      return;
    }

    setIsLoading(true);
    setError("");

    const result = await login(password, rememberDevice);

    if (!result.success) {
      setIsLoading(false);
      setError(result.message || "Incorrect password. Access denied.");
      triggerShake();
      setPassword("");
      if (inputRef.current) inputRef.current.focus();
    }
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 600);
  };

  return (
    <div className="admin-gate-overlay">
      <div className="admin-gate-ambient-glow" />

      <div className={`admin-gate-card ${shake ? "gate-shake" : ""}`}>
        {/* Shield Icon Badge */}
        <div className="admin-gate-icon-wrapper">
          <div className="admin-gate-icon-halo" />
          <div className="admin-gate-icon">
            <FiShield />
          </div>
        </div>

        {/* Header Texts */}
        <div className="admin-gate-header">
          <h1 className="admin-gate-title">Admin Protected Area</h1>
          <p className="admin-gate-subtitle">
            Enter the admin password to unlock the management portal and edit your portfolio content.
          </p>
        </div>

        {/* Error Alert Box */}
        {error && (
          <div className="admin-gate-error" role="alert">
            <FiAlertCircle className="admin-gate-error-icon" />
            <span>{error}</span>
          </div>
        )}

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="admin-gate-form" noValidate>
          <div className="admin-gate-field">
            <label htmlFor="admin-password-input" className="admin-gate-label">
              Admin Password
            </label>
            <div className="admin-gate-input-wrapper">
              <span className="admin-gate-input-left-icon">
                <FiKey />
              </span>
              <input
                id="admin-password-input"
                ref={inputRef}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter password..."
                className={`admin-gate-input ${error ? "input-error" : ""}`}
                autoComplete="current-password"
                disabled={isLoading}
              />
              <button
                type="button"
                className="admin-gate-show-btn"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Remember this device checkbox */}
          <div className="admin-gate-options">
            <label className="admin-gate-checkbox-label">
              <input
                type="checkbox"
                checked={rememberDevice}
                onChange={(e) => setRememberDevice(e.target.checked)}
                className="admin-gate-checkbox"
              />
              <span>Remember login on this browser</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="admin-gate-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="admin-gate-btn-spinner-content">
                <span className="admin-gate-spinner" />
                <span>Verifying...</span>
              </span>
            ) : (
              <span className="admin-gate-btn-content">
                <FiUnlock />
                <span>Unlock Dashboard</span>
              </span>
            )}
          </button>
        </form>

        {/* Footer Return Link */}
        <div className="admin-gate-footer">
          <Link href="/" className="admin-gate-back-link">
            <FiArrowLeft />
            <span>Return to Live Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
