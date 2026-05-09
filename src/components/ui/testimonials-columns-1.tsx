import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  text: string;
  image?: string;
  initials?: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role, initials }, i) => (
                <div 
                  className="p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 max-w-xs w-full group" 
                  key={i}
                >
                  <div className="relative">
                    <Quote className="h-6 w-6 text-gold/30 absolute -top-2 -left-2 group-hover:text-gold/50 transition-colors" />
                    <p className="text-sm leading-relaxed text-ivory italic relative z-10 font-light">"{text}"</p>
                  </div>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
                    {image ? (
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover border border-gold/40 shadow-sm"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center text-[10px] font-bold text-gold border border-gold/30">
                        {initials}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <div className="font-bold text-ivory tracking-tight leading-tight text-sm uppercase">{name}</div>
                      <div className="text-[10px] uppercase tracking-widest text-gold font-semibold mt-1 opacity-80">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
