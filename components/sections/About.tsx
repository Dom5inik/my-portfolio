import React from "react";
import { Section } from "../ui/Section";
import { about } from "@/lib/data";

export function About() {
    return (
        <Section id="ueber-mich" className="bg-muted/50 rounded-3xl my-12">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                        Über mich
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {about.text}
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Wenn ich nicht code, finde ich Inspiration in minimalistischem Design, Architektur oder bei einer guten Tasse Kaffee. Ich bin stets auf der Suche nach neuen Technologien, die das Web schneller und besser machen.
                    </p>
                </div>
                <div className="relative aspect-square sm:aspect-video lg:aspect-square overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
                    {/* Placeholder for Profile Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm font-mono">
                        [Profilbild Platzhalter]
                    </div>
                </div>
            </div>
        </Section>
    );
}
