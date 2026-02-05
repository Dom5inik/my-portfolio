import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    href?: string;
    external?: boolean;
}

export function Button({
    className = "",
    variant = "primary",
    href,
    external,
    children,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-foreground text-background hover:bg-foreground/90",
        secondary: "bg-accent text-accent-foreground hover:bg-accent/80",
        outline: "border border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={combinedClassName}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
