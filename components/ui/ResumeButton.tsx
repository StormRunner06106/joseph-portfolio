"use client";

import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

interface ResumeButtonProps {
  resumeUrl: string;
  className?: string;
}

const ResumeButton = ({ resumeUrl, className }: ResumeButtonProps) => {
  const handleResumeClick = async () => {
    try {
      // Add timestamp to bypass cache
      const cacheBuster = `?t=${Date.now()}`;
      const response = await fetch(resumeUrl + cacheBuster, {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch resume");
      }

      // Get the blob data
      const blob = await response.blob();

      // Create a blob URL
      const blobUrl = URL.createObjectURL(blob);

      // Create a download link and trigger it
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "resume.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the blob URL after a short delay
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 1000);
    } catch (error) {
      console.error("Error downloading resume:", error);
      // Fallback: try to open the API endpoint directly with cache buster
      window.open(resumeUrl + `?t=${Date.now()}`, "_blank");
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      className={className}
      onClick={handleResumeClick}
      fullWidth
      startIcon={<DownloadIcon />}
      sx={{
        borderRadius: 0,
        padding: "12px 24px",
        fontSize: "16px",
        textTransform: "none",
      }}
    >
      Download Resume
    </Button>
  );
};

export default ResumeButton;
