import React from "react";
import { Container } from "./Container";

interface SectionProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
    return (
        <section id={id} className={`py-20 md:py-32 ${className}`}>
            <Container>{children}</Container>
        </section>
    );
}
