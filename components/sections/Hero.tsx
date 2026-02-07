"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { motion } from "framer-motion";


export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col justify-center pt-20">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-3xl space-y-8">
                        <Reveal delay={0.2}>
                            <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                                Verfügbar für neue Projekte
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                                Dominik
                            </h1>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
                                Ich entwickle Softwarelösungen sowohl im Frontend als auch im Backend. <br />
                                Projekte, Technologien und Erfahrungen auf einen Blick.
                            </p>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button href="#kontakt">
                                    Kontakt aufnehmen
                                </Button>
                                <Button variant="outline" href="#projekte">
                                    Projekte ansehen
                                </Button>
                            </div>
                        </Reveal>
                    </div>

                    <Reveal delay={0.6} className="flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                x: [0, 20, 0],
                            }}
                            transition={{
                                scale: { duration: 1.5, ease: "easeOut" },
                                opacity: { duration: 1.5, ease: "easeOut" },
                                x: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "mirror",
                                    delay: 1.5,
                                },
                            }}
                            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
                        >
                            <img
                                src="/images/avatar.png"
                                alt="dom5inik"
                                className="w-full h-full object-contain drop-shadow-2xl scale-x-[-1]"
                            />
                        </motion.div>
                    </Reveal>
                </div>
            </Container>

            {/* Background Gradient / Noise if desired - kept minimal */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </section>
    );
}
