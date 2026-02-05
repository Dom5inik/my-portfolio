import React from "react";
import { Section } from "../ui/Section";
import { experience } from "@/lib/data";

export function Experience() {
    return (
        <Section id="erfahrung">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Berufserfahrung
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                    Mein beruflicher Werdegang und bisherige Stationen.
                </p>
            </div>

            <div className="space-y-12">
                {experience.map((job, index) => (
                    <div key={index} className="relative pl-8 sm:pl-32 py-2 group">
                        {/* Timeline Line */}
                        <div className="absolute left-2 sm:left-[8.5rem] top-0 bottom-0 w-px bg-border group-last:bottom-auto group-last:h-6"></div>
                        {/* Timeline Dot */}
                        <div className="absolute left-[0.2rem] sm:left-[8.2rem] top-3 w-3 h-3 rounded-full bg-foreground border-4 border-background"></div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-start">
                            <span className="text-sm font-mono text-muted-foreground pt-0.5 sm:w-24 sm:text-right shrink-0">
                                {job.period}
                            </span>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">{job.role}</h3>
                                <div className="text-sm font-medium text-muted-foreground pb-2">
                                    {job.company}
                                </div>
                                <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm leading-relaxed">
                                    {job.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
