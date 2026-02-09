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

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(skills).map(([category, items], index) => {
                    const Icon = categoryIcons[category] || Code2;

                    return (
                        <Reveal key={category} delay={index * 0.1} width="100%" className="h-full">
                            <div className="h-full px-4 py-8 rounded-xl border border-border bg-card/50 space-y-6">
                                <div className="flex items-center gap-3 border-b border-border pb-3">
                                    <div className="p-2 rounded-lg bg-foreground/5 text-foreground">
                                        <Icon size={18} />
                                    </div>
                                    <h3 className="text-lg font-semibold tracking-tight capitalize">
                                        {categoryLabels[category] || category}
                                    </h3>
                                </div>

                                {/* Compact grid-based layout for zero overflow */}
                                <ul className="space-y-4">
                                    {items.map((skill) => (
                                        <li
                                            key={skill.name}
                                            className="grid grid-cols-[1fr_auto] items-center gap-2 group w-full"
                                        >
                                            <span className={cn(
                                                "text-xs transition-colors whitespace-normal leading-tight",
                                                skill.level === "advanced"
                                                    ? "text-foreground font-medium"
                                                    : skill.level === "intermediate"
                                                        ? "text-foreground/90"
                                                        : "text-muted-foreground/80"
                                            )}>
                                                {skill.name}
                                            </span>

                                            <span className={cn(
                                                "text-[9px] font-bold px-2 py-1 rounded-full border shadow-sm transition-all flex items-center justify-center w-[95px] shrink-0 whitespace-nowrap",
                                                skill.level === "advanced"
                                                    ? "bg-blue-600 text-white border-blue-500 shadow-blue-900/20"
                                                    : skill.level === "intermediate"
                                                        ? "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-700/50 dark:text-foreground/90 dark:border-white/10"
                                                        : "bg-zinc-100 text-zinc-500 border-zinc-200 dark:bg-zinc-800/50 dark:text-muted-foreground dark:border-white/5"
                                            )}>
                                                {skill.level === "advanced"
                                                    ? "Beste Kenntnisse"
                                                    : skill.level === "intermediate"
                                                        ? "Sicherer Umgang"
                                                        : "Basiswissen"}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    );
                })}
            </div>

            {/* Legend Section removed for cleaner look as badges are self-explanatory */}
        </Section>
    );
}
