"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiGrid,
  FiBriefcase,
  FiStar,
  FiUser,
  FiZap,
  FiMail,
  FiExternalLink,
  FiMenu,
  FiX,
  FiShield,
  FiFileText,
  FiLock,
} from "react-icons/fi";
import { AdminAuthProvider, useAdminAuth } from "./AdminAuthContext";
import AdminPasswordGate from "./AdminPasswordGate";
import "./admin.css";

export default function AdminLayout({ children }) {
  return (
    <AdminAuthProvider>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AdminAuthProvider>
  );
}

function AdminLayoutInner({ children }) {
  const { isAuthenticated, isLoading, logout } = useAdminAuth();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close mobile sidebar and reset scroll on route change
  useEffect(() => {
    setMobileOpen(false);
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [pathname]);

  // Clean path calculation for active link detection (client-safe)
  const cleanPath =
    isMounted && pathname
      ? pathname.split("?")[0].replace(/\/+$/, "").toLowerCase()
      : "";

  const isItemActive = (targetHref) => {
    if (!isMounted || !cleanPath) return false;
    const cleanTarget = targetHref.toLowerCase().replace(/\/+$/, "");
    if (cleanTarget === "/admin") {
      return cleanPath === "/admin";
    }
    return cleanPath === cleanTarget || cleanPath.startsWith(cleanTarget + "/");
  };

  const navItems = [
    { name: "Dashboard", href: "/Admin", icon: <FiGrid /> },
    { name: "Projects", href: "/Admin/projects", icon: <FiBriefcase /> },
    { name: "Hero Section", href: "/Admin/hero", icon: <FiStar /> },
    { name: "About", href: "/Admin/about", icon: <FiUser /> },
    { name: "CV / Resume", href: "/Admin/resume", icon: <FiFileText /> },
    { name: "Skills", href: "/Admin/skills", icon: <FiZap /> },
    { name: "Contacts", href: "/Admin/contacts", icon: <FiMail /> },
  ];

  // If still checking authentication state, render subtle dark loading screen
  if (isLoading) {
    return (
      <div className="admin-loading-screen">
        <div className="admin-gate-spinner" />
        <p>Loading Admin Panel...</p>
      </div>
    );
  }

  // If not authenticated, prompt with password box
  if (!isAuthenticated) {
    return <AdminPasswordGate />;
  }

  return (
    <div className="admin-layout">
      {/* Mobile Top Header */}
      <header className="admin-mobile-header">
        <Link href="/Admin" className="admin-mobile-brand">
          <div className="admin-brand-icon mini">A</div>
          <span className="admin-mobile-title">MHDAFSAL Admin</span>
        </Link>
        <div className="admin-mobile-actions">
          <button
            type="button"
            className="admin-mobile-lock-btn"
            onClick={logout}
            title="Lock Admin Panel"
            aria-label="Lock Admin Panel"
          >
            <FiLock />
          </button>
          <button
            type="button"
            className="admin-mobile-toggle-btn"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Backdrop for mobile drawer */}
      {mobileOpen && (
        <div
          className="admin-sidebar-backdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="admin-sidebar-top">
          {/* Brand Header */}
          <div className="admin-brand-wrapper">
            <Link href="/Admin" className="admin-brand-link">
              <div className="admin-brand">
                <div className="admin-brand-icon">A</div>
                <div className="admin-brand-info">
                  <h2>MHDAFSAL</h2>
                  <div className="admin-brand-status">
                    <span className="admin-status-dot"></span>
                    <span>Admin Panel</span>
                  </div>
                </div>
              </div>
            </Link>
            <button
              type="button"
              className="admin-sidebar-close-btn"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <FiX />
            </button>
          </div>

          {/* Nav Section Label */}
          <div className="admin-nav-section-title">Navigation</div>

          {/* Navigation Links */}
          <nav className="admin-nav" aria-label="Admin Navigation" suppressHydrationWarning>
            {navItems.map((item) => {
              const isActive = isItemActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`admin-nav-item ${isActive ? "active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                  suppressHydrationWarning
                >
                  <span className="admin-nav-icon">{item.icon}</span>
                  <span className="admin-nav-label">{item.name}</span>
                  {isActive && <span className="admin-nav-active-pill" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="admin-sidebar-bottom">
          <Link
            href="/"
            className="admin-view-site-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink />
            <span>View Live Website</span>
          </Link>

          {/* Admin user card */}
          <div className="admin-user-card">
            <div className="admin-user-avatar">
              <FiShield />
            </div>
            <div className="admin-user-details">
              <span className="admin-user-name">Mhd Afsal</span>
              <span className="admin-user-role">Administrator</span>
            </div>
          </div>

          {/* Lock / Log Out Button */}
          <button
            type="button"
            className="admin-sidebar-lock-btn"
            onClick={logout}
            title="Lock Admin Panel"
          >
            <FiLock />
            <span>Lock / Logout</span>
          </button>

          <div className="admin-sidebar-footer-note">
            <span>Portfolio CMS • v2.0</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main ref={mainRef} className="admin-main">{children}</main>
    </div>
  );
}
