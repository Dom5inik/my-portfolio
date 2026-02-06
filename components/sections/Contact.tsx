"use client";

import React from "react";
import { Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function Contact() {
    return (
        <Section id="kontakt">
            <div className="max-w-xl mx-auto text-center mb-12">
                <Reveal width="100%">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Kontakt
                    </h2>
                    <p className="text-muted-foreground">
                        Sie suchen einen Entwickler für Ihr Projekt? <br />
                        Ich bin offen für neue Projekte und freue mich über eine Kontaktaufnahme.
                    </p>
                </Reveal>
            </div>

            <div className="max-w-md mx-auto">
                <Reveal width="100%" delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://github.com/Dom5inik"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto"
                        >
                            <Button className="w-full gap-2" variant="outline">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                                GitHub Profile
                            </Button>
                        </a>
                        <a
                            href="mailto:dom5inik@gmail.com"
                            className="w-full sm:w-auto"
                        >
                            <Button className="w-full gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                                E-Mail schreiben
                            </Button>
                        </a>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
