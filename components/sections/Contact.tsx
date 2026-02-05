"use client";

import React, { useState } from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            // Reset after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <Section id="kontakt">
            <div className="max-w-xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Kontakt
                </h2>
                <p className="text-muted-foreground">
                    Haben Sie eine Projektidee oder möchten Sie einfach Hallo sagen? Füllen Sie das Formular aus oder senden Sie mir eine E-Mail.
                </p>
            </div>

            <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-zinc-200 dark:border-zinc-800 focus:ring-zinc-900 dark:focus:ring-zinc-300"
                            placeholder="Max Mustermann"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            E-Mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-zinc-200 dark:border-zinc-800 focus:ring-zinc-900 dark:focus:ring-zinc-300"
                            placeholder="max@beispiel.de"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Nachricht
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-zinc-200 dark:border-zinc-800 focus:ring-zinc-900 dark:focus:ring-zinc-300 resize-none"
                            placeholder="Wie kann ich Ihnen helfen?"
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={status === "submitting"}>
                        {status === "idle" && "Senden"}
                        {status === "submitting" && "Senden..."}
                        {status === "success" && "Nachricht gesendet!"}
                        {status === "error" && "Fehler beim Senden"}
                    </Button>
                </form>
            </div>
        </Section>
    );
}
