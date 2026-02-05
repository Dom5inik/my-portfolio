import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col justify-center pt-20">
            <Container>
                <div className="max-w-3xl space-y-8">
                    <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        Verfügbar für neue Projekte
                    </div>

                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        Dominik.
                    </h1>

                    <p className="max-w-xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
                        Full-Stack Developer mit Fokus auf Next.js, TypeScript und saubere UI-Systeme. Ich baue digitale Produkte, die schnell, zugänglich und schön sind.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button href="#kontakt">
                            Kontakt aufnehmen
                        </Button>
                        <Button variant="outline" href="#projekte">
                            Projekte ansehen
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Background Gradient / Noise if desired - kept minimal */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </section>
    );
}
