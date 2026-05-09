"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CouncilMember {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

const councilMembers: CouncilMember[] = [
  {
    name: "Pastor Benny Ho",
    title: "Leadership Mentor",
    description:
      "Serves as the Leadership Mentor of Faith Community Church in Perth. He is also consultant to several churches, non-for-profits and social enterprises both in Asia and Australia. His twin passions in ministry are expository preaching and mentoring. Pastor Benny founded Arrows Ministry more than 10 years ago with the primary purpose of helping local churches to equip every member to become a minister for Christ. He is also passionate about equipping and empowering marketplace leaders to make an impact through their professional spheres. He is married to Cecilia and they have 3 children and 6 grandchildren.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Timothy Wong",
    title: "MD Group Research, DBS",
    description:
      "Has been involved in investment research for the last 30 years, and is currently MD Group Research at DBS. He helps to facilitate a Missional community at the Book Cafe which has been running a marketplace alpha course for the last 22 years. Tim is also a co-ordinator for the the SG500 Asia Cities Forum which is a joint initiative between Antioch for Asia Ltd and Movement.org, to catalyse gospel movements in the 500 largest cities of Asia by the year 2033.",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dr David Ang PBM",
    title: "CEO of Zion Inc.",
    description:
      "Is a versatile leader merging corporate excellence with a heart for service. Professionally, he is a Chartered Accountant and the CEO of Zion Inc, bringing a unique perspective shaped by his PhD in Christian Entrepreneurship. He is also the co-founder of iPGA, a pioneering professional guardianship firm. Deeply committed to volunteerism, Dr Ang serves on the boards of CaringSG, Praxeis Singapore, and Elijah7000, and is a member of the Gatekeepers Council of Elders. Alongside his wife Amy, he champions marriage restoration through their ministry, Back to the Garden. He is a proud father of three adult children.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Pastor Leong Sow Hoe",
    title: "Senior Pastor, Bethesda Cathedral",
    description:
      "Is the Senior Pastor of Bethesda Cathedral, bringing over 40 years of marketplace leadership to his ministry. A titan in the financial sector, he served as a top-tier Group Financial Services Director and a member of Prudential's CEO Council. He is a prominent industry advocate, having served as President of IFPAS and currently chairing the IFPAS STAR Team. Driven by a passion for missions, he founded I-Go-Mission (iGM) and remains deeply active within the LoveSingapore networks. He seamlessly bridges the corporate and spiritual worlds, supported by his wife and their family of three adult children and one grandchild.",
    imageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Pastor Susan Dunn",
    title: "Businesswoman, Author & CFP",
    description:
      "Is a businesswoman, author, and Certified Financial Planner who has demonstrated exceptional expertise in financial planning and advisory services. Together with her group of managers, she leads a team of 50 (and growing) skilled Consultants as Dunn & Partners Branch – representing Manulife Financial Advisers. Beyond her business pursuits, Susan co-leads a thriving church in Southern California with her husband, Derek Dunn. She is the founder of WOW31, a women's ministry aimed at empowering women to navigate life's seasons successfully. Besides being a mother of three beautiful children, she is also a family counsellor and seasoned platform speaker.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
];

export interface CouncilCarouselProps {
  className?: string;
  autoPlayInterval?: number;
}

export function CouncilCarousel({ 
  className, 
  autoPlayInterval = 6000 
}: CouncilCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleNext = useCallback(() =>
    setCurrentIndex((index) => (index + 1) % councilMembers.length), []);

  const handlePrevious = useCallback(() =>
    setCurrentIndex(
      (index) => (index - 1 + councilMembers.length) % councilMembers.length
    ), []);

  const handleManualAction = (idx?: number) => {
    setIsAutoPlaying(false);
    if (typeof idx === "number") {
      setCurrentIndex(idx);
    }
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext, autoPlayInterval]);

  const currentMember = councilMembers[currentIndex];

  return (
    <div 
      className={cn("w-full max-w-7xl mx-auto px-4", className)}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Desktop layout */}
      <div className='hidden lg:flex relative items-center justify-center min-h-[600px] gap-0'>
        {/* Avatar Container */}
        <div className='w-[480px] h-[600px] rounded-2xl overflow-hidden bg-secondary flex-shrink-0 shadow-2xl relative z-0 -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out p-1 border border-gold/20'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentMember.imageUrl}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className='w-full h-full rounded-xl overflow-hidden'
            >
              <img
                src={currentMember.imageUrl}
                alt={currentMember.name}
                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000'
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card Content */}
        <div className='bg-white border border-gold/10 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-14 ml-[-40px] z-10 max-w-2xl relative'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentMember.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: "anticipate" }}
            >
              <div className='mb-8'>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block mb-4">Advisory Council</span>
                <h2 className='serif-display text-4xl text-ink mb-2 font-bold'>
                  {currentMember.name}
                </h2>

                <p className='text-sm font-bold text-gold tracking-widest uppercase'>
                  {currentMember.title}
                </p>
              </div>

              <div className="h-px w-12 bg-gold/30 mb-8" />

              <p className='text-ink/70 text-lg leading-relaxed mb-8 font-light italic'>
                "{currentMember.description}"
              </p>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold">
                   <User className="w-4 h-4" />
                </div>
                <div className="text-xs text-ink/40 flex flex-col justify-center">
                  <span className="font-bold uppercase tracking-tighter">Verified</span>
                  <span>Kingdom Partner</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile/Tablet layout */}
      <div className='lg:hidden max-w-xl mx-auto text-center'>
        {/* Avatar */}
        <div className='w-full aspect-[4/5] bg-secondary rounded-2xl overflow-hidden mb-8 shadow-xl'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentMember.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className='w-full h-full'
            >
              <img
                src={currentMember.imageUrl}
                alt={currentMember.name}
                className='w-full h-full object-cover grayscale'
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className='px-4 text-left'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentMember.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-bold block mb-2">Council</span>
              <h2 className='serif-display text-3xl text-ink mb-2 font-bold'>
                {currentMember.name}
              </h2>
              
              <p className='text-[10px] font-bold text-gold tracking-widest uppercase mb-6'>
                {currentMember.title}
              </p>
              
              <p className='text-ink/70 text-base leading-relaxed mb-8 font-light italic'>
                "{currentMember.description}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className='flex justify-center items-center gap-8 mt-12'>
        <button
          onClick={() => { handlePrevious(); handleManualAction(); }}
          className='w-14 h-14 rounded-full bg-white border border-gold/10 shadow-lg flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-500 cursor-pointer group active:scale-95'
        >
          <ChevronLeft className='w-6 h-6 transition-transform group-hover:-translate-x-1' />
        </button>

        <div className='flex gap-3'>
          {councilMembers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleManualAction(idx)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-500 cursor-pointer",
                idx === currentIndex
                  ? "bg-gold scale-125 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                  : "bg-ink/10 hover:bg-ink/30"
              )}
            />
          ))}
        </div>

        <button
          onClick={() => { handleNext(); handleManualAction(); }}
          className='w-14 h-14 rounded-full bg-white border border-gold/10 shadow-lg flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-500 cursor-pointer group active:scale-95'
        >
          <ChevronRight className='w-6 h-6 transition-transform group-hover:translate-x-1' />
        </button>
      </div>
    </div>
  );
}
