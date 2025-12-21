// API route for newsletter subscription
import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { auth } from "@/lib/auth";

const MONGODB_URI = process.env.MONGODB_URI!;
const DB_NAME = process.env.DB_NAME || "nyaysetu";

export async function POST(req: NextRequest) {
    try {
        // Get authenticated session
        const session = await auth.api.getSession({ headers: req.headers });

        if (!session) {
            return NextResponse.json(
                { error: "Unauthorized. Please log in first." },
                { status: 401 }
            );
        }

        const { email } = await req.json();

        // Validate email is provided
        if (!email || !email.trim()) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        // Validate email matches user's account email
        if (email.toLowerCase() !== session.user.email.toLowerCase()) {
            return NextResponse.json(
                {
                    error: "Please use the same email you used to create your account.",
                    userEmail: session.user.email
                },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        const client = new MongoClient(MONGODB_URI);
        await client.connect();

        const db = client.db(DB_NAME);
        const usersCollection = db.collection("user");

        // Update user with newsletter subscription using email to find user
        const result = await usersCollection.updateOne(
            { email: session.user.email },
            {
                $set: {
                    newsletterSubscription: {
                        status: "active",
                        subscribedAt: new Date(),
                    }
                }
            }
        );

        await client.close();

        if (result.matchedCount === 0) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Successfully subscribed to newsletter!",
        });

    } catch (error) {
        console.error("Newsletter subscription error:", error);
        return NextResponse.json(
            { error: "Failed to subscribe to newsletter" },
            { status: 500 }
        );
    }
}
