"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { supabase } from "@/lib/supabase";

// ==========================================
// TYPES & INTERFACES
// ==========================================
interface Notice {
  id: number;
  title: string;
  tag: string;
  date: string;
  is_active: boolean;
}

interface StatItem {
  value: number;
  label: string;
  sub: string;
  suffix?: string;
  prefix?: string;
}

interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
  icon: string;
}

interface GallerySlide {
  id: number;
  src: string;
  title: string;
  cat: string;
  desc: string;
}

interface Topper {
  id: number;
  name: string;
  class: string;
  score: string;
  year: string;
  image: string;
  achieve: string;
}

interface StreamTab {
  id: string;
  title: string;
  tagline: string;
  subjects: string[];
  features: string[];
  icon: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// ==========================================
// MOCK DATA & REALISTIC CONTENT
// ==========================================
const FALLBACK_NOTICES: Notice[] = [
  {
    id: 101,
    title: "Class 10th & 12th UP Board Examination Timetable Released 2026",
    tag: "Exam",
    date: "2026-03-10",
    is_active: true,
  },
  {
    id: 102,
    title: "New Academic Session Registration & Admission Open for 2026-27",
    tag: "Admission",
    date: "2026-03-05",
    is_active: true,
  },
  {
    id: 103,
    title: "Annual Athletic Meet & Inter-House Sports Championship 2026",
    tag: "Event",
    date: "2026-02-28",
    is_active: true,
  },
  {
    id: 104,
    title: "Mandatory Parent-Teacher Interaction (PTM) for All Wings",
    tag: "Notice",
    date: "2026-02-20",
    is_active: true,
  },
  {
    id: 105,
    title: "Science & Computer Practical Examination Schedule & Guidelines",
    tag: "Exam",
    date: "2026-02-15",
    is_active: true,
  },
];

// Expanded 6 Hero Slides for a rich, dynamic presentation
const HERO_SLIDES = [
  {
    src: "/images/one.jpg",
    subtitle: "Welcome to TPSIC Ayodhya",
    title: "Empowering Minds, Shaping Tomorrow",
    desc: "Providing holistic education with modern interactive classrooms, practical science labs, and strong moral values.",
  },
  {
    src: "/images/eight.jpg",
    subtitle: "Modern Infrastructure",
    title: "State-of-the-Art Academic Campus",
    desc: "Equipped with high-tech visual learning systems, modern computer labs, and safe study environments.",
  },
  {
    src: "/images/eleven.jpg",
    subtitle: "Holistic Development",
    title: "Nurturing Sports & Creative Potential",
    desc: "Encouraging sportsmanship, leadership skills, and artistic pursuits alongside academic brilliance.",
  },
  {
    src: "/images/seven.jpg",
    subtitle: "Smart Classrooms",
    title: "Digital Learning & Smart Boards",
    desc: "Interactive multimedia lessons that make complex concepts completely simple and easy to understand.",
  },
  {
    src: "/images/six.jpg",
    subtitle: "Practical Labs",
    title: "Advanced Physics & Chemistry Labs",
    desc: "Hands-on experimentation under expert guidance to foster true scientific curiosity.",
  },
  {
    src: "/images/ten.jpg",
    subtitle: "Sports & Athletics",
    title: "Sprawling Playgrounds & Training",
    desc: "Wide open fields for cricket, football, kabaddi, and track events ensuring physical fitness.",
  },
];

const STATS_DATA: StatItem[] = [
  { value: 400, label: "Active Students", sub: "Thriving Community", suffix: "+" },
  { value: 100, label: "Pass Percentage", sub: "UP Board Record", suffix: "%" },
  { value: 10, label: "Expert Educators", sub: "Experienced Faculty", suffix: "+" },
  { value: 2011, label: "Year Established", sub: "15+ Years Trust", prefix: "Est. " },
];

// 8 Advanced Features with interactive hover highlights
const FEATURES_DATA: FeatureItem[] = [
  {
    id: "01",
    tag: "Digital Classrooms",
    title: "Smart Visual Classrooms",
    description: "Equipped with interactive screens and visual modules for clear, engaging concept retention.",
    badge: "Smart Tech",
    icon: "💻",
  },
  {
    id: "02",
    tag: "Practical Science",
    title: "Advanced Science Labs",
    description: "Fully equipped Physics, Chemistry, Biology, and Computer practical centers promoting hands-on experiments.",
    badge: "High-Tech Labs",
    icon: "🔬",
  },
  {
    id: "03",
    tag: "Safety First",
    title: "24/7 CCTV & Secure Campus",
    description: "Complete perimeter surveillance with gated entry ensuring complete safety for every student.",
    badge: "Secured Campus",
    icon: "🛡️",
  },
  {
    id: "04",
    tag: "Mentorship",
    title: "Expert Faculty & Sports",
    description: "Dedicated mentorship under Principal Rajesh Kumar, supported by vast sports facilities and a rich library.",
    badge: "All-Round Growth",
    icon: "🎓",
  },
  {
    id: "05",
    tag: "Library & Study",
    title: "Resourceful Central Library",
    description: "Hundreds of reference books, encyclopedias, journals, and daily competitive magazines for scholars.",
    badge: "Knowledge Hub",
    icon: "📚",
  },
  {
    id: "06",
    tag: "Transportation",
    title: "Safe Student Transport",
    description: "Dedicated fleet of college buses and vans covering major connecting routes with live tracking support.",
    badge: "Wide Coverage",
    icon: "🚌",
  },
  {
    id: "07",
    tag: "NCERT Curriculum",
    title: "NCERT-Aligned Modern Syllabus",
    description: "UP Board now follows NCERT curriculum, ensuring stronger conceptual learning and national-level exam readiness.",
    badge: "NCERT Based",
    icon: "📘",
  },
  {
    id: "08",
    tag: "Extracurricular",
    title: "Cultural & Arts Activities",
    description: "Annual cultural fests, debate competitions, science exhibitions, and music clubs to boost confidence.",
    badge: "Creative Arts",
    icon: "🎨",
  },
];

const GALLERY_SLIDES: GallerySlide[] = [
  {
    id: 1,
    src: "/images/eight.jpg",
    title: "Main School Building & Façade",
    cat: "Infrastructure",
    desc: "Spacious architectural layout surrounded by vibrant green grounds.",
  },
  {
    id: 2,
    src: "/images/eleven.jpg",
    title: "Morning Assembly & Discipline",
    cat: "Campus Life",
    desc: "Daily morning prayer assembly fostering unity, moral values, and fitness.",
  },
  {
    id: 3,
    src: "/images/seven.jpg",
    title: "Interactive Smart Class Session",
    cat: "Academics",
    desc: "Advanced multimedia teaching methods making concepts crystal clear.",
  },
  {
    id: 4,
    src: "/images/six.jpg",
    title: "Science Laboratory Experiment",
    cat: "Laboratories",
    desc: "Students performing practical testing under faculty supervision.",
  },
  {
    id: 5,
    src: "/images/ten.jpg",
    title: "Sports Championship & Ground",
    cat: "Sports",
    desc: "Sprawling playgrounds supporting cricket, football, volleyball, and track events.",
  },
];

const ACADEMIC_STREAMS: StreamTab[] = [
  {
    id: "science",
    title: "Science Stream (PCM / PCB)",
    tagline: "Empowering Future Engineers, Doctors & Researchers",
    subjects: ["Physics", "Chemistry", "Mathematics / Biology", "General Hindi", "English"],
    features: [
      "Regular practical laboratory experiments",
      "Special guidance for entrance exam foundations",
      "Personalized doubt resolution sessions",
    ],
    icon: "🧪",
  },
  {
    id: "arts",
    title: "Humanities & Arts Stream",
    tagline: "Building Future Civil Servants, Analysts & Thinkers",
    subjects: ["History", "Geography", "Political Science", "Economics", "Hindi Literature", "English"],
    features: [
      "Conceptual history and political science analysis",
      "Debates and active current affairs discussions",
      "Comprehensive board exam mastery",
    ],
    icon: "📖",
  },
  {
    id: "commerce",
    title: "Commerce Stream",
    tagline: "Fostering Tomorrow's Business & Finance Leaders",
    subjects: ["Accountancy", "Business Studies", "Economics", "General Hindi", "English"],
    features: [
      "Practical accounting workshops",
      "Basic financial literacy and spreadsheet tools",
      "Real-world business exposure",
    ],
    icon: "📊",
  },
  {
    id: "junior",
    title: "Primary & Junior Wing (Classes 1st - 8th)",
    tagline: "Laying a Strong Academic & Moral Foundation",
    subjects: ["Mathematics", "Science", "Social Studies", "Hindi", "English", "Computers"],
    features: [
      "Activity-based visual learning",
      "Focus on reading, writing, and basic math logic",
      "Small class groups for personal attention",
    ],
    icon: "🌱",
  },
];

const TOPPERS_DATA: Topper[] = [
    {
    id: 1,
    name: "Jhanvi Singh",
    class: "Class 10th (Science)",
    score: "94%",
    year: "2023",
    image: "/images/jhanvi.jpg",
    achieve: "School Topper",
  },
  {
    id: 2,
    name: "Raja Bhavesh",
    class: "Class 10th (Science)",
    score: "92.17%",
    year: "2018",
    image: "/images/rajabhavesh1.jpg",
    achieve: "District Rank 3rd",
  },
  {
    id: 3,
    name: "Agrima Singh",
    class: "Class 10th (Science)",
    score: "91.3%",
    year: "2020",
    image: "/images/agrima.jpg",
    achieve: "District Rank 4th",
  }, 
  {
    id: 4,
    name: "Shivanshu Maurya",
    class: "Class 10th (Science)",
    score: "91%",
    year: "2023",
    image: "/images/shivanshu.jpg",
    achieve: "School Rank 2",
  },
  {
    id: 5,
    name: "Jeet Vishwas",
    class: "Class 10th (Science)",
    score: "91%",
    year: "2023",
    image: "/images/jeet.jpg",
    achieve: "School Rank 2",
  },
  {
    id: 6,
    name: "Raja Bhavesh",
    class: "Class 12th (Mathematics)",
    score: "89.6%",
    year: "2020",
    image: "/images/rajabhavesh1.jpg",
    achieve: "District Rank 1st",
  },
  {
    id: 7,
    name: "Kallu Rawat",
    class: "Class 10th (Science)",
    score: "87%",
    year: "2023",
    image: "/images/kallu.jpg",
    achieve: "school Rank 3",
  },
  {
    id: 8,
    name: "Aakriti Panday",
    class: "Class 10th (Science)",
    score: "87%",
    year: "2023",
    image: "/images/aakriti.jpg",
    achieve: "school Rank 3",
  },
  {
    id: 9,
    name: "Agrima Singh",
    class: "Class 12th (Biology)",
    score: "86.2%",
    year: "2022",
    image: "/images/agrima.jpg",
    achieve: "School Topper",
  },
  {
    id: 10,
    name: "Nandani Singh",
    class: "Class 12th (Biology)",
    score: "86%",
    year: "2023",
    image: "/images/nandani.jpg",
    achieve: "School Topper",
  },
  {
    id: 11,
    name: "Abhinandan Singh",
    class: "Class 12th (Biology)",
    score: "85%",
    year: "2023",
    image: "/images/abhinandan.jpg",
    achieve: "School Rank 2",
  },
  {
    id: 12,
    name: "Neha Panday",
    class: "Class 12th (Biology)",
    score: "84%",
    year: "2023",
    image: "/images/neha.jpg",
    achieve: "School Rank 3",
  },
];

const FAQ_DATA: FAQItem[] = [
  {
    question: "How can I apply for admission for Session 2026–2027?",
    answer:
      "Admissions can be submitted directly at the school administrative counter or through our quick online inquiry form on this website.",
  },
  {
    question: "Which board is TPSIC affiliated with?",
    answer:
      "The college is affiliated with UP Board (UPMSP, Prayagraj), providing quality education from Primary to Senior Secondary classes.",
  },
  {
    question: "Is transport facility available for nearby villages?",
    answer:
      "Yes, we operate a fleet of safe buses and vans covering major nearby routes for comfortable student commute.",
  },
  {
    question: "What safety measures are present on campus?",
    answer:
      "Complete perimeter surveillance with CCTV cameras, monitored campus access, and absolute peace of mind for parents.",
  },
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// ==========================================
// ANIMATED COUNTER COMPONENT (Smooth Number Animation)
// ==========================================
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2200; // ms
    const frameTime = 16;
    const totalFrames = Math.round(duration / frameTime);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      const currentVal = Math.floor(easedProgress * end);

      if (frame >= totalFrames || currentVal >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(currentVal);
      }
    }, frameTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0.85, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, type: "spring", stiffness: 180 }}
      className="inline-block tabular-nums"
    >
      {prefix}
      {count}
      {suffix}
    </motion.span>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function Home() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [noticesLoading, setNoticesLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("science");
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [isHeroPaused, setIsHeroPaused] = useState(false);

  // Autoslide Hero with pause capability on hover
  useEffect(() => {
    if (isHeroPaused) return;
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHeroPaused]);

  // Fetch Supabase Notices
  useEffect(() => {
    async function fetchNotices() {
      try {
        const { data, error } = await supabase
          .from("notices")
          .select("*")
          .eq("is_active", true)
          .order("date", { ascending: false });

        if (error || !data || data.length === 0) {
          setNotices(FALLBACK_NOTICES);
        } else {
          setNotices(data);
        }
      } catch {
        setNotices(FALLBACK_NOTICES);
      } finally {
        setNoticesLoading(false);
      }
    }
    fetchNotices();
  }, []);

  // Filter Notices
  const filteredNotices = useMemo(() => {
    const list = notices.length > 0 ? notices : FALLBACK_NOTICES;
    return list.filter((n) => {
      const matchesTag =
        selectedTag.toLowerCase() === "all" ||
        (n.tag && n.tag.trim().toLowerCase() === selectedTag.trim().toLowerCase());

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        (n.title && n.title.toLowerCase().includes(q)) ||
        (n.tag && n.tag.toLowerCase().includes(q));

      return matchesTag && matchesSearch;
    });
  }, [notices, selectedTag, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-amber-500 selection:text-white">
      
      {/* ================= HERO SECTION (Enhanced 6 Slides & Natural Brightness) ================= */}
      <section 
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
        className="relative pt-40 sm:pt-48 pb-28 sm:pb-36 bg-slate-950 text-white flex flex-col justify-center overflow-hidden"
      >
        
        {/* Natural balanced background lighting - vibrant and clear */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHeroSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={HERO_SLIDES[currentHeroSlide].src}
              alt={HERO_SLIDES[currentHeroSlide].title}
              fill
              className="object-cover opacity-80 filter contrast-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/40 to-slate-950/90" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-amber-300 text-xs font-extrabold uppercase tracking-widest mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            {HERO_SLIDES[currentHeroSlide].subtitle}
          </motion.span>

          <motion.h1
            key={`title-${currentHeroSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] mb-4 text-white drop-shadow-md"
          >
            Tejpal Smarak <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Inter College
            </span>
          </motion.h1>

          <p className="text-base sm:text-xl text-amber-200/95 font-semibold mb-3 tracking-wide" lang="hi">
            शिक्षा से सशक्तिकरण — उज्ज्वल भविष्य की ओर
          </p>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed font-normal drop-shadow">
            {HERO_SLIDES[currentHeroSlide].desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-8 py-3.5 rounded-2xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-xl shadow-amber-400/25 transition-all hover:scale-105 active:scale-95 text-sm"
            >
              Admission Inquiry →
            </button>
            <Link
              href="/about"
              className="px-8 py-3.5 rounded-2xl font-semibold text-white bg-white/10 hover:bg-white/25 border border-white/30 backdrop-blur-md transition-all hover:scale-105 text-sm"
            >
              Explore Campus
            </Link>
          </div>
        </div>

        {/* Carousel Indicator Dots & Counter (Shows active slide out of total 6) */}
        <div className="relative z-10 flex flex-col items-center gap-2 mt-12">
          <div className="flex justify-center items-center gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentHeroSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentHeroSlide ? "bg-amber-400 w-10" : "bg-white/40 w-2.5 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-white/75 tracking-wider mt-1">
            Slide {currentHeroSlide + 1} of {HERO_SLIDES.length}
          </span>
        </div>
      </section>

      {/* ================= STATS CARD SECTION (Animated Numbers with Spring Bounce) ================= */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-slate-950/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-4 rounded-2xl hover:bg-amber-50/40 transition-all border border-transparent hover:border-amber-200/50 text-center group"
            >
              <p className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight flex items-center justify-center group-hover:text-amber-600 transition-colors">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <div className="mt-2">
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PRINCIPAL'S MESSAGE ================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-48 h-48 rounded-3xl overflow-hidden border-2 border-amber-400/60 shadow-lg mb-4">
              <Image src="/images/rajesh_kumar.jpg" alt="Rajesh Kumar" fill className="object-cover" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Rajesh Kumar</h3>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mt-0.5">
              Principal, TPSIC
            </p>
          </div>

          <div className="lg:col-span-8">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full inline-block mb-4">
              Principal's Message
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-5 leading-snug tracking-tight">
              "Nurturing Character, Curiosity & Value-Based Education"
            </h2>
            <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                At Tejpal Smarak Inter College, our primary objective is to offer premier academic tools, digital classrooms, and disciplined learning in a caring, structured atmosphere.
              </p>
              <p className="text-slate-500 text-xs sm:text-sm">
                Every child possesses unique potential. Through balanced academic rigor, practical science lab modules, and active sports programs, we prepare our students to excel in board examinations and life challenges.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= COMPREHENSIVE FEATURES GRID (Advanced Flex Cards & Hover Micro-interactions) ================= */}
      <section className="py-20 sm:py-28 bg-slate-100/70 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/80 border border-amber-200/80 px-4 py-1.5 rounded-full">
              Campus Facilities & Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
              Modern Facilities Designed for All-Round Growth
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {FEATURES_DATA.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white border border-slate-200/90 hover:border-amber-400/80 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 group relative flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white text-xl flex items-center justify-center shadow-md shadow-slate-900/10 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors duration-300">
                      {item.icon}
                    </div>

                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-amber-50 group-hover:text-amber-800 group-hover:border-amber-200 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-extrabold text-amber-600 uppercase tracking-widest">
                    {item.tag}
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2.5 group-hover:text-amber-900 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-amber-700 transition-colors">
                  <span>Feature #{item.id}</span>
                  <span>Explore →</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= ACADEMIC WINGS TABS ================= */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full">
            Academic Wings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">Explore Academic Streams</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {ACADEMIC_STREAMS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-900/15 scale-105"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span className="text-base">{tab.icon}</span>
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {ACADEMIC_STREAMS.map((stream) => {
          if (stream.id !== activeTab) return null;
          return (
            <motion.div
              key={stream.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div>
                <span className="text-4xl mb-4 block">{stream.icon}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{stream.title}</h3>
                <p className="text-amber-700 text-xs sm:text-sm font-bold mb-6">{stream.tagline}</p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Subjects Included:
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {stream.subjects.map((sub, idx) => (
                    <span key={idx} className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200/85 text-xs font-bold text-slate-700">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 flex flex-col justify-center">
                <h4 className="text-xs font-bold uppercase text-slate-500 mb-5 tracking-wider flex items-center gap-2">
                  <span className="text-amber-500 text-base">★</span> Key Learning Highlights
                </h4>
                <ul className="space-y-4">
                  {stream.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center shrink-0 mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ================= NOTICE BOARD ================= */}
      <section className="py-20 sm:py-28 bg-slate-100/70 border-y border-slate-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/80 border border-amber-200/80 px-4 py-1.5 rounded-full">
              Notice Board
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">Campus Announcements</h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              {["All", "Exam", "Admission", "Event", "Notice"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    selectedTag.toLowerCase() === tag.toLowerCase()
                      ? "bg-amber-400 text-slate-950 shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="w-full sm:w-72">
              <input
                type="text"
                placeholder="Search notices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 text-xs bg-white border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl focus:outline-none focus:border-amber-500 shadow-sm"
              />
            </div>
          </div>

          {noticesLoading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-slate-200/60 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : filteredNotices.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs font-medium">
              No matching announcements found.
            </div>
          ) : (
            <div className="space-y-3.5">
              {filteredNotices.map((notice) => {
                const dateObj = new Date(notice.date);
                const day = dateObj.toLocaleDateString("en-IN", { day: "2-digit" });
                const month = dateObj.toLocaleDateString("en-IN", { month: "short" });

                return (
                  <motion.div
                    key={notice.id}
                    whileHover={{ scale: 1.01 }}
                    className="bg-white hover:border-amber-400/80 border border-slate-200/80 p-5 rounded-2xl shadow-sm transition-all flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-amber-50 border border-amber-200/80 text-amber-800 rounded-xl px-3.5 py-2 text-center min-w-[55px] shrink-0">
                        <p className="text-lg font-black leading-none">{day}</p>
                        <p className="text-[10px] font-bold uppercase mt-0.5">{month}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-800 transition-colors">
                          {notice.title}
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Tejpal Smarak Inter College Official Notice</p>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold uppercase px-3 py-1 rounded-lg bg-slate-100 text-slate-600 shrink-0">
                      {notice.tag}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ================= GALLERY SLIDER (object-contain with no cropping and full natural view) ================= */}
      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full">
              Gallery Slider
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4">Life at TPSIC Campus</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setGalleryIndex((prev) => (prev - 1 + GALLERY_SLIDES.length) % GALLERY_SLIDES.length)}
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all text-xs font-bold shadow-sm"
              aria-label="Previous slide"
            >
              ←
            </button>
            <button
              onClick={() => setGalleryIndex((prev) => (prev + 1) % GALLERY_SLIDES.length)}
              className="p-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all text-xs font-bold shadow-sm"
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>

        {/* Use object-contain with balanced neutral background so full image is never cut */}
        <div className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={galleryIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={GALLERY_SLIDES[galleryIndex].src}
                alt={GALLERY_SLIDES[galleryIndex].title}
                fill
                className="object-contain"
              />
              {/* Subtle bottom gradient banner only for text info */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                  {GALLERY_SLIDES[galleryIndex].cat}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">{GALLERY_SLIDES[galleryIndex].title}</h3>
                <p className="text-slate-200 text-xs sm:text-sm mt-0.5">{GALLERY_SLIDES[galleryIndex].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Gallery Thumbnails Selector */}
        <div className="flex items-center justify-center gap-3 mt-6 overflow-x-auto pb-2">
          {GALLERY_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setGalleryIndex(idx)}
              className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                idx === galleryIndex ? "border-amber-500 scale-105 shadow-md" : "border-slate-200 opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={slide.src} alt={slide.title} fill className="object-cover" />
            </button>
          ))}
        </div>
      </section>

      {/* ================= TOPPERS CARDS ================= */}
      <section className="py-20 sm:py-28 bg-slate-100/70 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/80 border border-amber-200/80 px-4 py-1.5 rounded-full">
              Academic Pride
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">Board Examination Toppers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TOPPERS_DATA.map((top) => (
              <motion.div
                key={top.id}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200/90 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-amber-400 mb-4 relative shadow-md group-hover:scale-105 transition-transform">
                  <Image src={top.image} alt={top.name} fill className="object-cover" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-extrabold">
                  {top.score}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-3">{top.name}</h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">{top.class}</p>
                <p className="text-[11px] font-bold text-amber-700 uppercase tracking-wider mt-2.5">
                  {top.achieve} • {top.year}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 sm:py-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100/70 border border-amber-200/80 px-4 py-1.5 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openFAQ === idx;
            return (
              <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFAQ(isOpen ? null : idx)}
                  className="w-full text-left p-5 text-sm font-bold text-slate-800 flex justify-between items-center gap-4 hover:text-amber-800 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-amber-600 font-bold text-lg">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      {/* ================= ADMISSION INQUIRY MODAL ================= */}
      <AnimatePresence>
        {inquiryModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl"
            >
              <button
                onClick={() => setInquiryModalOpen(false)}
                className="absolute right-5 top-5 text-slate-400 hover:text-slate-800 text-sm font-bold p-1"
              >
                ✕
              </button>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Admission Inquiry Form</h3>
              <p className="text-xs text-slate-500 mb-6">Please enter details and our administrative desk will call back.</p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Inquiry submitted successfully!");
                  setInquiryModalOpen(false);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">Student Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter full name"
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">Contact Phone</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-xl hover:bg-amber-300 transition-all mt-2 shadow-md shadow-amber-400/20"
                >
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}