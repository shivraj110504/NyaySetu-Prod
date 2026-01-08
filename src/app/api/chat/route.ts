// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Call your Python backend API
    // Force Render URL to ensure we aren't using a stale localhost environment variable
    const pythonApiUrl = "https://vois-nyaysetu-chatbot.onrender.com/chat";
    // const pythonApiUrl = process.env.PYTHON_API_URL || "https://vois-nyaysetu-chatbot.onrender.com/chat";

    console.log("Sending request to:", pythonApiUrl);

    // Sanitize history to ensure we only send what's needed
    // Removing timestamp to avoid any serialization issues
    const sanitizedHistory = Array.isArray(history) ? history.map((msg: any) => ({
      text: msg.text,
      sender: msg.sender
    })) : [];

    const requestBody = {
      message: message,
      history: sanitizedHistory,
    };

    console.log("Sending Payload:", JSON.stringify(requestBody, null, 2));

    try {
      const response = await fetch(pythonApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
        signal: AbortSignal.timeout(60000) // 60 second timeout
      });

      if (!response.ok) {
        // Handle Cold Start / Timeout (502 Bad Gateway / 504 Gateway Timeout)
        if (response.status === 502 || response.status === 504) {
          console.warn(`Python API Cold Start/Timeout: ${response.status}`);
          return NextResponse.json({
            response: "The AI system is currently warming up or restarting. This may take up to 2-3 minutes. Please try again shortly.",
            error: "Service Temporarily Unavailable" // helpful for frontend logic if needed
          });
        }

        const errorText = await response.text();
        console.error(`Python API error: ${response.status} ${response.statusText}`, errorText);
        throw new Error(`Backend responded with ${response.status}: ${errorText || response.statusText}`);
      }

      const data = await response.json();
      console.log("Python Backend Response:", JSON.stringify(data, null, 2));

      return NextResponse.json({
        response: data.reply || data.response || data.message || data.answer || "I'm not sure how to respond to that.",
      });
    } catch (error: any) {
      console.error("Chat API error:", error);

      // Return the actual error message for debugging
      return NextResponse.json({
        error: "Internal Server Error",
        details: error.message,
        response: `Error: ${error.message}. Please check server logs.`,
      }, { status: 500 });
    }
  } catch (error: any) { // Top level catch for request parsing errors
    console.error("Request parsing error:", error);
    return NextResponse.json({
      error: "Bad Request",
      response: "Invalid request format."
    }, { status: 400 });
  }
}