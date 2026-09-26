"use client";

import { AnimatePresence, motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

interface TextMorphProps {
  words: string[];
  interval?: number;
  className?: string;
}

const ease = [0.22, 1, 0.36, 1] as const;

const word: Variants = {
  enter: { transition: { staggerChildren: 0.035 } },
  exit: { transition: { staggerChildren: 0.02 } },
};

const letter: Variants = {
  initial: { opacity: 0, y: "0.35em", filter: "blur(6px)" },
  enter: { opacity: 1, y: "0em", filter: "blur(0px)", transition: { duration: 0.5, ease } },
  exit: { opacity: 0, y: "-0.3em", filter: "blur(6px)", transition: { duration: 0.3, ease } },
};

export function TextMorph({ words, interval = 2800, className }: TextMorphProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((current) => (current + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [interval, words.length]);

  return (
    <span className={cn("relative inline-block whitespace-nowrap", className)}>
      <span className="sr-only">{words.join(", ")}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          aria-hidden
          variants={word}
          initial="initial"
          animate="enter"
          exit="exit"
          className="inline-block"
        >
          {Array.from(words[index]).map((character, characterIndex) => (
            <motion.span key={characterIndex} variants={letter} className="inline-block">
              {character === " " ? " " : character}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
