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
      // Fetch the resume from our API
      const response = await fetch(resumeUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch resume");
      }

      // Get the blob data
      const blob = await response.blob();

      // Create a blob URL
      const blobUrl = URL.createObjectURL(blob);

      // Open in new tab
      window.open(blobUrl, "_blank");

      // Clean up the blob URL after a short delay
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 1000);
    } catch (error) {
      console.error("Error opening resume:", error);
      // Fallback: try to open the API endpoint directly
      window.open(resumeUrl, "_blank");
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
