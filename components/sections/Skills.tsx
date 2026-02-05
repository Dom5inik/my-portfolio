import React from "react";
import { Section } from "../ui/Section";
import { skills } from "@/lib/data";

export function Skills() {
    return (
        <Section id="skills" className="bg-muted/50">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Technische Expertise
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                    Mein Tech-Stack entwickelt sich ständig weiter. Hier ist ein Überblick über die Werkzeuge, die ich täglich nutze.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="space-y-4">
                        <h3 className="text-lg font-semibold capitalize border-b border-border pb-2">
                            {category}
                        </h3>
                        <ul className="space-y-2">
                            {items.map((skill) => (
                                <li key={skill} className="text-muted-foreground text-sm flex items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-foreground mr-2 opacity-50"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
