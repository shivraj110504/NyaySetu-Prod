"use client";

import React, { useState, useEffect } from "react";
import { IconScale, IconMicrophone } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import DashNavbar from "@/components/navbar/DashNavbar";
import FooterComponent from "@/components/footer/FooterComponent";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function IPCPredictionPage() {
    const [incidentDescription, setIncidentDescription] = useState("");
    const { data: session, isPending } = useSession();
    const router = useRouter();

    // Show loading state while checking auth
    if (isPending) {
        return (
            <div className="min-h-screen w-full bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading...</p>
                </div>
            </div>
        );
    }

    // If not authenticated, show login prompt
    if (!session) {
        return (
            <div className="min-h-screen w-full bg-background flex flex-col">
                <NavbarComponent />

                <div className="flex-1 flex flex-col items-center justify-center p-4 pt-32 pb-20">
                    <div className="w-full max-w-3xl flex flex-col items-center text-center space-y-6">

                        <div className="bg-muted p-4 rounded-2xl shadow-sm">
                            <IconScale className="w-8 h-8 text-primary" stroke={2} />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                            IPC Section Prediction
                        </h1>

                        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                            Describe the incident in detail and our AI will predict the most relevant IPC sections with confidence scores and legal guidance.
                        </p>

                        {/* Login Required Card */}
                        <div className="w-full bg-card rounded-2xl shadow-2xl overflow-hidden border border-border mt-8">
                            <div className="bg-primary/5 dark:bg-primary/10 p-4 border-b border-border flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <div className="ml-4 text-xs text-muted-foreground font-mono">Authentication Required</div>
                            </div>

                            <div className="p-8 md:p-12 text-center space-y-6">
                                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                                    <p className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                                        🔒 Login Required
                                    </p>
                                    <p className="text-yellow-700 dark:text-yellow-300">
                                        Please log in or sign up to use the IPC Section Prediction feature.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/login">
                                        <Button className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-xl">
                                            Log In
                                        </Button>
                                    </Link>
                                    <Link href="/signup">
                                        <Button className="px-8 py-6 text-lg font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg rounded-xl">
                                            Sign Up
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FooterComponent />
            </div>
        );
    }

    // Authenticated user - show full functionality
    return (
        <div className="min-h-screen w-full bg-background flex flex-col">
            <DashNavbar />

            <div className="flex-1 flex flex-col items-center justify-center p-4 pt-32 pb-20">
                <div className="w-full max-w-3xl flex flex-col items-center text-center space-y-6">

                    <div className="bg-muted p-4 rounded-2xl shadow-sm">
                        <IconScale className="w-8 h-8 text-primary" stroke={2} />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        IPC Section Prediction
                    </h1>

                    <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
                        Describe the incident in detail and our AI will predict the most relevant IPC sections with confidence scores and legal guidance.
                    </p>

                    <div className="w-full bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
                        <div className="bg-primary/5 dark:bg-primary/10 p-4 border-b border-border flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                            <div className="ml-4 text-xs text-muted-foreground font-mono">IPC Prediction Tool</div>
                        </div>

                        <div className="p-6 md:p-8 text-left space-y-4">
                            <h2 className="text-xl font-semibold text-primary/80">Describe the Incident</h2>
                            <p className="text-muted-foreground text-sm">
                                Provide as much detail as possible about what happened, including date, time, location, and parties involved.
                            </p>

                            <div className="relative">
                                <textarea
                                    className="w-full min-h-[200px] p-4 pr-12 rounded-xl border-2 border-primary/20 bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-all resize-none text-base"
                                    placeholder="E.g., 'Yesterday evening around 7 PM, someone broke into my parked car near the market and stole my laptop bag containing important documents and cash worth ₹50,000...'"
                                    value={incidentDescription}
                                    onChange={(e) => setIncidentDescription(e.target.value)}
                                />

                                <button
                                    disabled
                                    className="absolute bottom-4 right-4 p-2 rounded-full bg-muted/50 text-muted-foreground/40 cursor-not-allowed"
                                    title="Voice input coming soon"
                                >
                                    <IconMicrophone className="w-5 h-5" stroke={2} />
                                </button>
                            </div>

                            <Button
                                className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-xl transition-all"
                            >
                                Predict IPC Section
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
}
