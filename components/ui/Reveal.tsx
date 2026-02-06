"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
}

export const Reveal = ({
    children,
    width = "fit-content",
    className,
    delay = 0.25,
    duration = 0.5,
    yOffset = 75,
}: RevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    // Local state to manage overflow during vs after animation
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants: Record<string, Variant> = {
        hidden: { opacity: 0, y: yOffset },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div
            ref={ref}
            style={{ position: "relative", width, overflow: isVisible ? "visible" : "hidden" }}
            className={cn(className)}
        >
            <motion.div
                variants={variants}
                initial="hidden"
                animate={mainControls}
                transition={{ duration, delay }}
                // Toggle overflow to visible only after animation finishes to prevent clipping during movement
                onAnimationComplete={() => setIsVisible(true)}
                className="h-full w-full"
            >
                {children}
            </motion.div>
        </div>
    );
};
