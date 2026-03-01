import { NextResponse } from "next/server";
import path from "path";
import { readFileSync } from "fs";

export async function GET() {
  try {
    // Get the resume file path
    const filePath = path.join(
      process.cwd(),
      "private",
      "documents",
      "resume.docx",
    );

    // Read the file
    const fileBuffer = readFileSync(filePath);

    // Create response with proper headers
    const response = new NextResponse(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": 'attachment; filename="resume.docx"',
        "Cache-Control": "public, max-age=31536000", // Cache for 1 year
      },
    });

    return response;
  } catch (error) {
    console.error("Error serving resume:", error);
    return new NextResponse("Resume not found", { status: 404 });
  }
}
