"use client";

import React from "react";
import { Section } from "../ui/Section";
import { about } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { motion } from "framer-motion";

export function About() {
    return (
        <Section id="auesser-coding" className="bg-muted/50 rounded-3xl my-12">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
                <Reveal>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            Außer Coding
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {about.text}
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={0.4} className="flex justify-center">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                            x: [0, 15, 0],
                        }}
                        viewport={{ once: true }}
                        transition={{
                            scale: { duration: 1.2, ease: "easeOut" },
                            opacity: { duration: 1.2, ease: "easeOut" },
                            x: {
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                repeatType: "mirror",
                                delay: 1.2,
                            },
                        }}
                        className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]"
                    >
                        <img
                            src="/images/avatarv2.png"
                            alt="dom5inik avatar"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </Reveal>
            </div>
        </Section>
    );
}
