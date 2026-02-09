"use client";

import React, { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { navigation } from "@/lib/data";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border py-4`}
            >
                <Container className="flex items-center justify-between">
                    <a
                        href="/"
                        className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? "text-foreground" : ""
                            }`}
                        onClick={() => setIsOpen(false)}
                    >
                        dom5inik
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 relative z-[70] hover:bg-accent rounded-full transition-colors"
                        aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="transition-transform duration-300"
                        >
                            {isOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="4" y1="12" x2="20" y2="12" />
                                    <line x1="4" y1="6" x2="20" y2="6" />
                                    <line x1="4" y1="18" x2="20" y2="18" />
                                </>
                            )}
                        </svg>
                    </button>
                </Container>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-background z-[50] md:hidden transition-all duration-500 ease-in-out ${isOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
            >
                <div className="flex flex-col items-center justify-center min-h-screen px-6">
                    <nav className="flex flex-col items-center gap-10">
                        {navigation.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-4xl font-bold tracking-tight transition-all duration-300 hover:text-muted-foreground ${isOpen
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <div className={`mt-20 pt-10 border-t border-border w-full max-w-[200px] text-center transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0"
                        }`} style={{ transitionDelay: "500ms" }}>
                        <p className="text-sm text-muted-foreground">Lass uns reden</p>
                        <a href="mailto:dom5inik@gmail.com" className="text-sm font-medium mt-2 block">dom5inik@gmail.com</a>
                    </div>
                </div>
            </div>
        </>
    );
}
