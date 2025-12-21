// API route for newsletter unsubscribe
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

        // Connect to MongoDB
        const client = new MongoClient(MONGODB_URI);
        await client.connect();

        const db = client.db(DB_NAME);
        const usersCollection = db.collection("user");

        // Update user newsletter subscription to inactive using email
        const result = await usersCollection.updateOne(
            { email: session.user.email },
            {
                $set: {
                    "newsletterSubscription.status": "inactive",
                    "newsletterSubscription.unsubscribedAt": new Date(),
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
            message: "Successfully unsubscribed from newsletter",
        });

    } catch (error) {
        console.error("Newsletter unsubscribe error:", error);
        return NextResponse.json(
            { error: "Failed to unsubscribe from newsletter" },
            { status: 500 }
        );
    }
}
