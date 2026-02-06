"use client";

import React from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { projects } from "@/lib/data";
import { Reveal } from "../ui/Reveal";
import { motion } from "framer-motion";

export function Projects() {
    return (
        <Section id="projekte">
            <div className="mb-12">
                <Reveal width="100%">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Ausgewählte Projekte
                    </h2>
                    <p className="text-muted-foreground max-w-2xl">
                        Eine Auswahl an aktuellen Arbeiten, die meine Leidenschaft für Performance und Design widerspiegeln.
                    </p>
                </Reveal>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <Reveal key={project.title} delay={index * 0.1} width="100%" className="h-full">
                        <motion.div
                            // Scale up on hover and boost z-index to stay on top of neighbors
                            whileHover={{ scale: 1.1, zIndex: 10 }}
                            transition={{ duration: 0.2 }}
                            className="h-full relative" // relative is required for z-index to work
                        >
                            <Card className="flex flex-col h-full">
                                <div className="flex-1 space-y-4">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center gap-4 pt-4 border-t border-border">
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium hover:underline flex items-center gap-1"
                                    >
                                        Live Demo
                                        <svg
                                            className="w-3 h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium hover:underline flex items-center gap-1"
                                    >
                                        GitHub
                                        <svg
                                            className="w-3 h-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </Card>
                        </motion.div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
