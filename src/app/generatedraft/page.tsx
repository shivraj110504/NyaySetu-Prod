"use client";

import React, { useState } from "react";
import { IconFileText, IconAlertCircle, IconSquareRoundedX } from "@tabler/icons-react";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import DashNavbar from "@/components/navbar/DashNavbar";
import FooterComponent from "@/components/footer/FooterComponent";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

export default function DraftGenerationPage() {
    const documentTypes = [
        "Right to Information (RTI)",
        "Bail Application",
        "Affidavit"
    ];

    const { data: session, isPending } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const loadingStates = [
        { text: "Select Document Type" },
        { text: "Upload Information" },
        { text: "Tap Submit Button" },
        { text: "Wait for AI to process" },
        { text: "AI has processed your document" },
        { text: "Download or get on Email" },
    ];

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
                            <IconFileText className="w-8 h-8 text-primary" stroke={2} />
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                            Draft Generator
                        </h1>

                        <div className="space-y-2">
                            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mx-auto">
                                Generate professional legal documents automatically with AI assistance.
                                Select a document type to get started.
                            </p>
                            <p className="text-red-500 font-medium text-sm flex items-center justify-center gap-2">
                                <IconAlertCircle className="w-4 h-4" />
                                This is a demo version. Generated documents should be reviewed by a legal professional.
                            </p>
                        </div>

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
                                        Please log in or sign up to use the Legal Draft Generator feature.
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
                        <IconFileText className="w-8 h-8 text-primary" stroke={2} />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                        Draft Generator
                    </h1>

                    <div className="space-y-2">
                        <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mx-auto">
                            Generate professional legal documents automatically with AI assistance.
                            Select a document type to get started.
                        </p>
                        <p className="text-red-500 font-medium text-sm flex items-center justify-center gap-2">
                            <IconAlertCircle className="w-4 h-4" />
                            This is a demo version. Generated documents should be reviewed by a legal professional.
                        </p>
                    </div>

                    <div className="w-full bg-card rounded-2xl shadow-2xl overflow-hidden border border-border mt-8">
                        <div className="bg-primary/5 dark:bg-primary/10 p-4 border-b border-border flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                            <div className="ml-4 text-xs text-muted-foreground font-mono">Legal Draft Generator</div>
                        </div>

                        <div className="p-8 md:p-12 text-center space-y-8">
                            <div className="text-left space-y-1">
                                <h2 className="text-xl font-semibold text-primary/80">Step 1) Select Document Type</h2>
                                <p className="text-muted-foreground text-sm">
                                    Choose the type of legal document you want to generate
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 w-full max-w-2xl mx-auto">
                                {documentTypes.map((type) => (
                                    <button
                                        key={type}
                                        className="w-full py-4 px-6 rounded-xl border border-input bg-background/50 hover:bg-muted/50 text-foreground font-medium transition-all shadow-sm hover:shadow-md flex items-center justify-center text-base md:text-lg group"
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>

                            <div className="pt-8 text-left border-t border-border/50">
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    <span className="font-bold text-primary/80">Disclaimer:</span> The documents generated by this tool are for informational purposes only and do not constitute legal advice. Always consult with a qualified attorney before using any legal document. NyaySetu is not responsible for any consequences arising from the use of generated documents.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* MultiStepLoader Component */}
                    <div className="w-full flex flex-col items-center space-y-4 mt-8">
                        <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

                        <button
                            onClick={() => setLoading(true)}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-foreground font-medium transition-all duration-200 h-12 rounded-xl px-8 flex items-center justify-center shadow-md hover:shadow-lg gap-2 group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 16v-4" />
                                <path d="M12 8h.01" />
                            </svg>
                            Need Help? View Step-by-Step Guide
                        </button>

                        {loading && (
                            <button
                                className="fixed top-24 right-4 text-foreground hover:text-red-500 z-[120] transition-colors"
                                onClick={() => setLoading(false)}
                                title="Close guide"
                            >
                                <IconSquareRoundedX className="h-10 w-10" />
                            </button>
                        )}
                    </div>

                    {/* <div className="text-sm text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer underline underline-offset-4">
                        Need help? Learn more about document types
                    </div> */}
                </div>
            </div>

            <FooterComponent />
        </div>
    );
}
