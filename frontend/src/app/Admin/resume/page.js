"use client";

import { useState, useEffect, useRef } from "react";
import {
  FiFileText,
  FiUploadCloud,
  FiCheckCircle,
  FiDownload,
  FiRefreshCw,
  FiTrash2,
  FiLink,
  FiSave,
  FiExternalLink,
  FiEye,
} from "react-icons/fi";
import { API_BASE_URL } from "@/utils/api";

export default function ResumeAdmin() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState(null);
  const [useUrlMode, setUseUrlMode] = useState(false);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    resumeText: "Download CV",
    resumeLink: "",
    resumeFile: "",
    resumeFileName: "",
  });

  useEffect(() => {
    fetchResumeData();
  }, []);

  const fetchResumeData = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/about`);
      if (res.ok) {
        const data = await res.json();
        if (data && !data.message) {
          setFormData({
            resumeText: data.resumeText || "Download CV",
            resumeLink: data.resumeLink || "",
            resumeFile: data.resumeFile || "",
            resumeFileName: data.resumeFileName || "",
          });

          if (!data.resumeFile && data.resumeLink && data.resumeLink !== "#contact") {
            setUseUrlMode(true);
          }
        }
      }
    } catch (err) {
      console.warn("Could not fetch resume data:", err);
    } finally {
      setLoading(false);
    }
  };

  const processFile = (file) => {
    if (!file) return;

    const lower = file.name.toLowerCase();
    const isDoc =
      lower.endsWith(".pdf") || lower.endsWith(".docx") || lower.endsWith(".doc");

    if (!isDoc) {
      alert("Please upload a PDF or Word document (.pdf, .docx, .doc).");
      return;
    }

    if (file.size > 25 * 1024 * 1024) {
      alert("File size exceeds 25MB limit. Please compress or choose a smaller file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setFormData((prev) => ({
        ...prev,
        resumeFile: e.target.result,
        resumeFileName: file.name,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleRemove = () => {
    setFormData((prev) => ({
      ...prev,
      resumeFile: "",
      resumeFileName: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setNotification(null);

    try {
      // First get existing about data so we don't overwrite biography or image
      const existingRes = await fetch(`${API_BASE_URL}/about`);
      const existingData = existingRes.ok ? await existingRes.json() : {};

      const payload = {
        ...existingData,
        resumeText: formData.resumeText.trim() || "Download CV",
        resumeFile: useUrlMode ? "" : formData.resumeFile,
        resumeFileName: useUrlMode ? "" : formData.resumeFileName,
        resumeLink: useUrlMode ? formData.resumeLink.trim() : "",
      };

      const res = await fetch(`${API_BASE_URL}/about`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setNotification({
          type: "success",
          text: "CV file saved and published to your live portfolio successfully!",
        });
        setTimeout(() => setNotification(null), 4000);
      } else {
        setNotification({
          type: "error",
          text: "Server error occurred while updating CV.",
        });
      }
    } catch (err) {
      console.error("Save error:", err);
      setNotification({
        type: "error",
        text: "Network error: Failed to connect to backend server.",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      {/* Top Header */}
      <div className="admin-header">
        <div>
          <h1 className="admin-title">CV & Resume Management</h1>
          <p className="admin-subtitle">
            Upload your professional resume (PDF) or link an external document for visitors to download.
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            title="View live portfolio"
          >
            <FiExternalLink /> Live Portfolio
          </a>
        </div>
      </div>

      {notification && (
        <div
          className={`alert-banner ${notification.type}`}
          style={{ marginBottom: "1.5rem" }}
        >
          {notification.type === "success" ? <FiCheckCircle /> : <FiTrash2 />}
          <span>{notification.text}</span>
        </div>
      )}

      {/* Main Container Card */}
      <div className="admin-card" style={{ maxWidth: "860px" }}>
        <form onSubmit={handleSubmit}>
          {/* Active Status Header */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              backgroundColor: "#0d0f14",
              border: "1px solid #1f232d",
              borderRadius: "10px",
              marginBottom: "1.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor:
                    formData.resumeFile || formData.resumeLink
                      ? "rgba(16, 185, 129, 0.15)"
                      : "rgba(59, 130, 246, 0.15)",
                  color:
                    formData.resumeFile || formData.resumeLink ? "#34d399" : "#60a5fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                }}
              >
                <FiFileText />
              </div>
              <div>
                <h3 style={{ margin: "0 0 4px", fontSize: "1rem", color: "#ffffff" }}>
                  {formData.resumeFileName
                    ? formData.resumeFileName
                    : formData.resumeLink
                    ? "External Resume Link Active"
                    : "Default System CV Active (MohammedAfsal_Fullstack_Developer.pdf)"}
                </h3>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color:
                      formData.resumeFile || formData.resumeLink ? "#10b981" : "#8b92a5",
                  }}
                >
                  {formData.resumeFile
                    ? "Custom file uploaded • Direct download ready on About section"
                    : formData.resumeLink
                    ? `External link: ${formData.resumeLink}`
                    : "Serves MohammedAfsal_Fullstack_Developer.pdf"}
                </span>
              </div>
            </div>

            {/* Test Download Link */}
            {(formData.resumeFile || !formData.resumeLink) && (
              <a
                href={formData.resumeFile || "/images/MohammedAfsal_Fullstack_Developer.pdf"}
                download={formData.resumeFileName || "MohammedAfsal_Fullstack_Developer.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: "0.82rem", display: "inline-flex", gap: "6px" }}
              >
                <FiDownload /> Download Preview
              </a>
            )}
          </div>

          {/* Button Label Settings */}
          <div className="form-group" style={{ marginBottom: "1.5rem" }}>
            <label className="form-label">
              Button Label on Website
            </label>
            <input
              type="text"
              className="form-input"
              value={formData.resumeText}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, resumeText: e.target.value }))
              }
              placeholder="e.g. Download CV, View Resume"
              required
              style={{ maxWidth: "380px" }}
            />
            <span className="form-hint">
              This text appears on the primary action button inside the About section.
            </span>
          </div>

          {/* Mode Switcher */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
              paddingBottom: "0.75rem",
              borderBottom: "1px solid #1a1d24",
            }}
          >
            <h3 style={{ fontSize: "1rem", margin: 0, color: "#ffffff" }}>
              Upload Option
            </h3>
            <button
              type="button"
              onClick={() => setUseUrlMode(!useUrlMode)}
              style={{
                background: "none",
                border: "none",
                color: "#60a5fa",
                cursor: "pointer",
                fontSize: "0.85rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              {useUrlMode ? (
                <>
                  <FiUploadCloud /> Switch to Direct PDF File Upload
                </>
              ) : (
                <>
                  <FiLink /> Or enter External Link (Google Drive, Notion)
                </>
              )}
            </button>
          </div>

          {!useUrlMode ? (
            /* FILE UPLOAD DRAG AND DROP ZONE */
            <div className="form-group">
              <input
                type="file"
                ref={fileInputRef}
                accept=".pdf,.doc,.docx,application/pdf"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />

              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                style={{
                  border: "2px dashed #2a2e3b",
                  borderRadius: "12px",
                  padding: "2.5rem 1.5rem",
                  textAlign: "center",
                  backgroundColor: "#0b0c10",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3b82f6";
                  e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2e3b";
                  e.currentTarget.style.backgroundColor = "#0b0c10";
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(59, 130, 246, 0.12)",
                    color: "#3b82f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                    fontSize: "1.6rem",
                  }}
                >
                  <FiUploadCloud />
                </div>

                <h4 style={{ margin: "0 0 6px", fontSize: "1.05rem", color: "#ffffff" }}>
                  {formData.resumeFileName
                    ? `Selected File: ${formData.resumeFileName}`
                    : "Click to browse or drag & drop your CV file"}
                </h4>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#8b92a5" }}>
                  Recommended format: <strong>.PDF</strong> (supports .DOC, .DOCX up to 25MB)
                </p>
              </div>

              {/* Uploaded File Actions */}
              {formData.resumeFile && (
                <div
                  style={{
                    marginTop: "1.25rem",
                    padding: "1rem 1.25rem",
                    backgroundColor: "#0d0f14",
                    border: "1px solid #1f232d",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <FiCheckCircle color="#34d399" size={18} />
                    <span style={{ fontSize: "0.9rem", color: "#ffffff", fontWeight: 500 }}>
                      {formData.resumeFileName || "Uploaded Document"}
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="btn-secondary"
                      style={{ fontSize: "0.78rem" }}
                    >
                      <FiRefreshCw /> Replace
                    </button>
                    <button
                      type="button"
                      onClick={handleRemove}
                      style={{
                        background: "rgba(239, 68, 68, 0.15)",
                        border: "1px solid rgba(239, 68, 68, 0.3)",
                        color: "#f87171",
                        borderRadius: "6px",
                        padding: "0.4rem 0.75rem",
                        fontSize: "0.78rem",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <FiTrash2 /> Remove
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* EXTERNAL URL MODE */
            <div className="form-group">
              <label className="form-label">
                External CV / Resume URL
              </label>
              <input
                type="url"
                className="form-input"
                value={formData.resumeLink}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, resumeLink: e.target.value }))
                }
                placeholder="https://drive.google.com/file/d/.../view"
                required
              />
              <span className="form-hint">
                Paste a public Google Drive view link, Dropbox link, or Notion portfolio URL.
              </span>
            </div>
          )}

          {/* Submit Actions */}
          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid #1a1d24",
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
            }}
          >
            <button
              type="submit"
              disabled={saving}
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <FiSave />
              <span>{saving ? "Saving Changes..." : "Save & Publish CV"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
