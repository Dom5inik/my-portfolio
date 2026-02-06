import React from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function Footer() {
    return (
        <footer className="border-t border-border py-8 mt-12 bg-muted/30">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} dom5inik. Alle Rechte vorbehalten.
                    </div>
                    <div className="flex gap-6 text-sm font-medium text-muted-foreground">
                        <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
                        <a href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
