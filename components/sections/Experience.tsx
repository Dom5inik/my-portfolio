import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "../ui/Section";
import { experience } from "@/lib/data";
import { Reveal } from "../ui/Reveal";

export function Experience() {
    return (
        <Section id="erfahrung">
            <div className="mb-12">
                <Reveal width="100%">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Berufserfahrung
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Mein beruflicher Werdegang und bisherige Stationen.
                    </p>
                </Reveal>
            </div>

            <div>
                {experience.map((job, index) => {
                    const isLast = index === experience.length - 1;

                    return (
                        <Reveal key={index} delay={index * 0.1} width="100%">
                            <div className={cn(
                                "relative pl-8 sm:pl-44 group",
                                isLast ? "py-2" : "pt-2 pb-12"
                            )}>
                                {/* Timeline Line: Absolutely positioned to create a continuous vertical axis */}
                                <div className={cn(
                                    "absolute left-2 sm:left-[8.5rem] top-0 w-px bg-border",
                                    isLast ? "h-38" : "bottom-0" // Stretch to bottom for all but the last item
                                )}></div>
                                {/* Timeline Dot: Centered on the vertical axis */}
                                <div className="absolute left-[0.2rem] sm:left-[8.2rem] top-3 w-3 h-3 rounded-full bg-foreground border-4 border-background"></div>

                                <div className="flex flex-col gap-2 items-start">
                                    {/* Period: Absolutely positioned on desktop to the left of the timeline */}
                                    <span className="text-sm font-mono text-muted-foreground pt-0.5 sm:absolute sm:left-0 sm:top-2 sm:w-32 sm:text-right sm:pr-8 shrink-0">
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
                        </Reveal>
                    );
                })}
            </div>
        </Section>
    );
}
