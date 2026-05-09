"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import moolahLogo from "@/assets/moolahplay.jpg";
import saltLogo from "@/assets/salt&light.png";
import thirstLogo from "@/assets/thir.st.png";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
  isText?: boolean;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Our Ecosystem Collaborators",
  logos = [
    {
      id: "logo-1",
      description: "Thirst",
      image: thirstLogo,
      className: "h-24 md:h-28",
    },
    {
      id: "logo-2",
      description: "Moolah Play",
      image: moolahLogo,
      className: "h-20 md:h-24",
    },
    {
      id: "logo-3",
      description: "Salt & Light",
      image: saltLogo,
      className: "h-16 md:h-20",
    },
  ],
  className,
}: Logos3Props) => {
  return (
    <section className={cn("py-32 bg-secondary/20 border-t border-ink/5 overflow-hidden", className)}>
      <div className="container-x mb-16">
        <div className="text-center space-y-4">
          <h2 className="serif-display text-4xl md:text-5xl text-ink font-bold tracking-tight">
            {heading}
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto rounded-full" />
        </div>
      </div>
      
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              speed: 0.8,
              playOnInit: true,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-12">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <CarouselItem
                key={`${logo.id}-${index}`}
                className="pl-12 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="flex items-center justify-center p-12 bg-white/60 backdrop-blur-md border border-ink/5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-700 h-60 md:h-64 group cursor-pointer">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={cn("w-auto object-contain select-none transition-all duration-700 group-hover:scale-110", logo.className)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        {/* Soft edge masks */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export { Logos3 };
