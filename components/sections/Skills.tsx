"use client";

import React from "react";
import { Section } from "../ui/Section";
import { skills } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { cn } from "@/lib/utils";
import {
    Monitor,
    Server,
    Cloud,
    Wrench,
    Code2
} from "lucide-react";

const categoryIcons: Record<string, any> = {
    frontend: Monitor,
    backend: Server,
    devops: Cloud,
    tools: Wrench,
};

const categoryLabels: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    tools: "Tools & Workflow",
};

export function Skills() {
    return (
        <Section id="skills" className="bg-muted/30">
            <div className="mb-12">
                <Reveal width="100%">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Technische Expertise
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Mein Tech-Stack entwickelt sich ständig weiter. <br />
                        Hier ist ein Überblick über die Technologien, die ich gelernt und in Projekten eingesetzt habe.
                    </p>
                </Reveal>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(skills).map(([category, items], index) => {
                    const Icon = categoryIcons[category] || Code2;

                    return (
                        <Reveal key={category} delay={index * 0.1} width="100%" className="h-full">
                            <div className="h-full p-6 rounded-xl border border-border bg-card/50 space-y-6">
                                <div className="flex items-center gap-3 border-b border-border pb-3">
                                    <div className="p-2 rounded-lg bg-foreground/5 text-foreground">
                                        <Icon size={18} />
                                    </div>
                                    <h3 className="text-lg font-semibold tracking-tight capitalize">
                                        {categoryLabels[category] || category}
                                    </h3>
                                </div>

                                {/* Skills list with visual indicators for proficiency levels */}
                                <ul className="space-y-3">
                                    {items.map((skill) => (
                                        <li
                                            key={skill.name}
                                            className={cn(
                                                "text-sm flex items-center transition-colors",
                                                // Fade text for basic skills, hold for advanced
                                                skill.level === "advanced"
                                                    ? "text-foreground font-medium"
                                                    : skill.level === "intermediate"
                                                        ? "text-foreground/90"
                                                        : "text-muted-foreground/50"
                                            )}
                                        >
                                            {/* Dot indicator: Advanced (glow), Intermediate (solid), Basic (muted) */}
                                            <span className={cn(
                                                "w-1.5 h-1.5 rounded-full mr-3 transition-all duration-500",
                                                skill.level === "advanced"
                                                    ? "bg-foreground shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                                                    : skill.level === "intermediate"
                                                        ? "bg-foreground/70"
                                                        : "bg-zinc-400 dark:bg-zinc-700"
                                            )}></span>
                                            {skill.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </Section>
    );
}
