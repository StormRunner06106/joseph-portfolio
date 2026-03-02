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
      "resume.pdf",
    );

    // Read the file
    const fileBuffer = readFileSync(filePath);

    // Create response with proper headers
    const response = new NextResponse(new Uint8Array(fileBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });

    return response;
  } catch (error) {
    console.error("Error serving resume:", error);
    return new NextResponse("Resume not found", { status: 404 });
  }
}
