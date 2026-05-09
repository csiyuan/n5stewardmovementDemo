"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  num: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  curriculum?: string[];
  audience: string;
  note?: string;
  buttonText: string;
  glowColor?: "gold" | "ink" | "blue";
  className?: string;
  image?: string;
  badge?: string;
  link?: string;
  imagePosition?: string;
}

export function FeatureCard({
  num,
  title,
  tagline,
  description,
  items,
  curriculum,
  audience,
  note,
  buttonText,
  glowColor = "gold",
  className,
  image,
  badge,
  link,
  imagePosition = "object-center",
}: FeatureCardProps) {
  const glowColorMap: Record<
    string,
    { glow: string; button: string; check: string }
  > = {
    gold: {
      glow: "bg-gold/30",
      button: "from-gold to-gold-dark text-ink",
      check: "bg-gold text-ink",
    },
    ink: {
      glow: "bg-ink/15",
      button: "from-ink to-ink/80 text-ivory",
      check: "bg-ink text-gold",
    },
    blue: {
      glow: "bg-blue-600/20",
      button: "from-blue-600 to-cyan-500 text-white",
      check: "bg-blue-600 text-white",
    },
  };

  const selected = glowColorMap[glowColor] || glowColorMap.gold;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn("relative group row-span-11 grid grid-rows-subgrid", className)}
    >
      {/* Dynamic Glow Effect */}
      <motion.div
        className={cn(
          "absolute -inset-4 rounded-[2.5rem] blur-2xl -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
          selected.glow
        )}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />

      <Card className="relative row-span-11 grid grid-rows-subgrid rounded-[2rem] p-0 bg-background border border-ink/20 shadow-md group-hover:shadow-2xl transition-all duration-700 overflow-hidden">
        {/* Animated Background Border Path */}
        <motion.div
          className="absolute inset-0 -z-10 opacity-15"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          style={{
            backgroundImage:
              glowColor === "gold" 
                ? "radial-gradient(at 0% 0%, #E2B053 0px, transparent 50%), radial-gradient(at 100% 100%, #C4953D 0px, transparent 50%)"
                : "radial-gradient(at 0% 0%, #0A1121 0px, transparent 50%), radial-gradient(at 100% 100%, #1a2a4a 0px, transparent 50%)",
          }}
        />

        {/* 1. Image Header - Bleed into border to eliminate sub-pixel gaps */}
        <div className="relative -m-[1px] aspect-[16/10] overflow-hidden bg-ink/5 rounded-t-[2rem]">
          {image && (
            <img 
              src={image} 
              alt={title} 
              className={cn(
                "w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000",
                imagePosition
              )}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent opacity-80" />
          
          {badge && (
            <div className="absolute top-6 left-6 bg-background/95 backdrop-blur-md px-4 py-2 rounded-full border border-border/20 shadow-sm z-10">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-dark">{badge}</span>
            </div>
          )}
          
          <div className="absolute bottom-6 left-8 z-10">
            <span className="serif-display text-4xl text-white drop-shadow-lg opacity-60">{num}</span>
          </div>
        </div>

        {/* 2. Title */}
        <div className="px-8 md:px-10 pt-8 flex items-start">
          <h3 className="serif-display text-3xl font-bold text-ink min-h-[96px] flex items-start group-hover:text-gold-dark transition-colors duration-500 leading-tight tracking-tight">
            {title}
          </h3>
        </div>

        {/* 3. Tagline */}
        <div className="px-8 md:px-10 py-4">
          <p className="text-base text-ink/70 font-medium leading-relaxed">{tagline}</p>
        </div>

        {/* 4. Long Description */}
        <div className="px-8 md:px-10 py-2">
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {/* 5. Divider */}
        <div className="px-8 md:px-10 py-4">
          <hr className="border-ink/15" />
        </div>

        {/* 6. Benefits Header */}
        <div className="px-8 md:px-10 pt-4">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-dark">
            WHAT YOU'LL GAIN
          </p>
        </div>

        {/* 7. Benefits List */}
        <div className="px-8 md:px-10 py-4">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className={cn(
                  "flex items-center justify-center w-5 h-5 rounded-md mt-0.5 shrink-0 shadow-sm transition-transform group-hover:scale-110",
                  selected.check
                )}>
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span className="text-sm text-ink/80 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 8. Curriculum (Optional row) */}
        <div className="px-8 md:px-10 py-4">
          {curriculum && (
            <div className="space-y-3">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-dark mb-4">
                THE CURRICULUM
              </p>
              {curriculum.map((m, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/40 border border-border/10">
                  <BookOpen className="h-4 w-4 text-gold-dark/60" />
                  <span className="text-xs font-medium text-ink/80">{m}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 9. Audience */}
        <div className="px-8 md:px-10 py-4">
          <div className="bg-secondary/30 p-6 rounded-2xl border-l-4 border-gold shadow-inner h-full">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
              WHO SHOULD ATTEND
            </p>
            <p className="text-sm text-ink/70 leading-relaxed italic">
              "{audience}"
            </p>
          </div>
        </div>

        {/* 10. Note */}
        <div className="px-8 md:px-10 py-2">
          {note && (
            <p className="text-[11px] text-muted-foreground font-medium italic border-t border-border/20 pt-3">
              Note: {note}
            </p>
          )}
        </div>

        {/* 11. CTA Button */}
        <div className="px-8 md:px-10 pb-10 pt-4 mt-auto">
          <a href={link} target="_blank" rel="noopener noreferrer" className="block">
            <Button
              className={cn(
                "w-full rounded-2xl py-7 text-xs font-bold tracking-[0.2em] uppercase bg-gradient-to-br shadow-xl group-hover:shadow-2xl transition-all duration-300",
                selected.button
              )}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </Card>
    </motion.div>
  );
}
