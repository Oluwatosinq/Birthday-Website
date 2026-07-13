import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Heart,
  Sparkles,
  Star,
  Music,
  Cake,
  Gift,
  ChevronDown,
  PartyPopper,
  Sun,
  Moon,
  Send,
  X,
  MessageCircle,
  Eye,
  RotateCcw,
  ArrowRight,

} from 'lucide-react';
import img1 from './assets/Yetu_13.jpeg'
import img2 from './assets/Yetu_14.jpeg'
import img3 from './assets/Yetu_11.jpeg'

import yetu1 from './assets/Yetu_1.jpeg';
import yetu2 from './assets/Yetu_2.jpeg';
import yetu3 from './assets/Yetu_3.jpeg';
import yetu4 from './assets/Yetu_4.jpeg';
import yetu5 from './assets/Yetu_5.jpeg';
import yetu6 from './assets/Yetu_6.jpeg';
import yetu7 from './assets/Yetu_7.jpeg';
import yetu8 from './assets/Yetu_8.jpeg';
import yetu9 from './assets/Yetu_9.jpeg';
import yetu10 from './assets/Yetu_10.jpeg';
import yetu11 from './assets/Yetu_11.jpeg';
import yetu12 from './assets/Yetu_12.jpeg';
import yetu13 from './assets/Yetu_13.jpeg';
import yetu14 from './assets/Yetu_14.jpeg';
import yetu15 from './assets/Yetu_15.jpeg';
import yetu16 from './assets/Yetu_16.jpeg';
import yetu17 from './assets/Yetu_17.jpeg';
import yetu18 from './assets/Yetu_18.jpeg';

const row1Images = [yetu1, yetu2, yetu3, yetu4, yetu5, yetu6, yetu7, yetu8, yetu9];
const row2Images = [yetu10, yetu11, yetu12, yetu13, yetu14, yetu15, yetu16, yetu17, yetu18];

gsap.registerPlugin(ScrollTrigger);

/* ─── Types ─── */
interface Wish {
  id: string;
  message: string;
  sender_name: string;
  created_at: string;
}

/* ─── Shooting Star Effect ─── */
function launchShootingStar(container: HTMLElement, text?: string) {
  const star = document.createElement('div');
  star.className = 'fixed pointer-events-none z-[100]';
  star.style.cssText = 'top:0;left:0;';

  const inner = document.createElement('div');
  inner.className = 'relative';

  const head = document.createElement('div');
  head.className = 'w-5 h-5 rounded-full bg-white shadow-lg';
  head.style.cssText = 'box-shadow:0 0 40px 15px rgba(255,255,255,0.9),0 0 80px 30px rgba(255,215,0,0.6),0 0 120px 50px rgba(255,107,133,0.3);';

  const tail = document.createElement('div');
  tail.className = 'absolute top-1/2 left-1/2 origin-left -translate-y-1/2';
  tail.style.cssText = 'width:400px;height:3px;background:linear-gradient(90deg,rgba(255,255,255,0.95),rgba(255,215,0,0.7),rgba(255,107,133,0.3),transparent);transform:translate(-100%,-50%) rotate(42deg);border-radius:2px;';

  inner.appendChild(tail);
  inner.appendChild(head);
  star.appendChild(inner);
  container.appendChild(star);

  gsap.fromTo(
    star,
    { x: '-15vw', y: '-15vh', opacity: 0, scale: 0.3 },
    {
      x: '120vw',
      y: '120vh',
      opacity: 1,
      scale: 1.3,
      duration: 2.2,
      ease: 'power1.in',
      onComplete: () => star.remove(),
    }
  );

  if (text) {
    const label = document.createElement('div');
    label.textContent = text;
    label.className = 'fixed pointer-events-none z-[100] font-script text-gold-200 text-xl whitespace-nowrap';
    label.style.cssText = 'text-shadow:0 0 20px rgba(255,215,0,0.8);';
    container.appendChild(label);
    gsap.fromTo(
      label,
      { x: '-15vw', y: '-15vh', opacity: 0 },
      {
        x: '120vw',
        y: '120vh',
        opacity: 1,
        duration: 2.2,
        ease: 'power1.in',
        delay: 0.1,
        onComplete: () => label.remove(),
      }
    );
  }
}

/* ─── Present / Gift Box Component ─── */
function PresentBox({ onOpen }: { onOpen: () => void }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const lidRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!boxRef.current) return;
    // Entrance animation
    gsap.fromTo(
      boxRef.current,
      { y: 200, opacity: 0, scale: 0.6, rotateY: -30 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 1.4,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  useEffect(() => {
    if (!glowRef.current) return;
    gsap.to(glowRef.current, {
      scale: hovered ? 1.3 : 1,
      opacity: hovered ? 0.6 : 0.3,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, [hovered]);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);

    // Lid flies off
    gsap.to(lidRef.current, {
      y: -300,
      x: 80,
      rotateZ: 25,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });

    // Box shakes then opens
    gsap.to(boxRef.current, {
      rotateZ: [0, -5, 5, -3, 3, 0],
      duration: 0.4,
      ease: 'power2.inOut',
      onComplete: () => {
        // Light burst from inside
        const burst = document.createElement('div');
        burst.className = 'absolute inset-0 rounded-3xl';
        burst.style.cssText = 'background:radial-gradient(circle,rgba(255,215,0,0.9),rgba(255,107,133,0.5),transparent 70%);transform:scale(0);';
        boxRef.current?.appendChild(burst);
        gsap.to(burst, {
          scale: 3,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.out',
          onComplete: () => burst.remove(),
        });

        // Sparkles shoot out
        for (let i = 0; i < 20; i++) {
          const spark = document.createElement('div');
          spark.className = 'absolute w-2 h-2 rounded-full';
          spark.style.cssText = `background:${['#FFD54F', '#FF8FA3', '#fff', '#9FA8DA'][i % 4]};top:50%;left:50%;`;
          boxRef.current?.appendChild(spark);
          gsap.to(spark, {
            x: (Math.random() - 0.5) * 400,
            y: (Math.random() - 0.5) * 400 - 100,
            opacity: 0,
            scale: 0,
            duration: 1 + Math.random(),
            ease: 'power2.out',
            onComplete: () => spark.remove(),
          });
        }

        setTimeout(onOpen, 800);
      },
    });
  };

  return (
    <div className="flex flex-col items-center gap-6 py-20">
      <div
        ref={boxRef}
        className="relative cursor-pointer"
        style={{ perspective: '800px' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleOpen}
      >
        {/* Glow */}
        <div
          ref={glowRef}
          className="absolute -inset-8 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.5), transparent 70%)' }}
        />

        {/* Box body */}
        <div
          className="relative w-48 h-40 rounded-2xl shadow-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #C42A4A 0%, #E83A5F 50%, #FF4D6D 100%)',
            boxShadow: hovered
              ? '0 20px 60px rgba(255,77,109,0.5), 0 0 40px rgba(255,215,0,0.3)'
              : '0 20px 40px rgba(255,77,109,0.3)',
            transition: 'box-shadow 0.4s ease',
          }}
        >
          {/* Ribbon vertical */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-b from-gold-300 to-gold-500" />
          {/* Ribbon horizontal */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-gold-300 to-gold-500" />

          {/* Bow */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-1">
              <div className="w-10 h-6 rounded-full bg-gradient-to-r from-gold-400 to-gold-300 -rotate-12" />
              <div className="w-4 h-4 rounded-full bg-gold-500" />
              <div className="w-10 h-6 rounded-full bg-gradient-to-l from-gold-400 to-gold-300 rotate-12" />
            </div>
          </div>

          {/* Label */}
          {!isOpen && (
            <div className="relative z-10 bg-white/90 rounded-xl px-4 py-2 shadow-lg transform rotate-2">
              <span className="font-script text-rose-600 text-lg">Open Me</span>
            </div>
          )}

          {/* Light from inside when opened */}
          {isOpen && (
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-gold-400/60 to-rose-400/40 animate-pulse" />
            </div>
          )}
        </div>

        {/* Lid */}
        <div
          ref={lidRef}
          className="absolute -top-4 left-[-8px] right-[-8px] h-12 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #D32F2F 0%, #E83A5F 100%)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          }}
        >
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-b from-gold-300 to-gold-500" />
        </div>
      </div>

      {!isOpen && (
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/50 text-sm">Click to unwrap</span>
          <ChevronDown className="w-5 h-5 text-white/50" />
        </div>
      )}
    </div>
  );
}

/* ─── Floating Story Card ─── */
function StoryCard({
  img,
  title,
  subtitle,
  icon,
  iconBg,
  iconColor,
  label,
  labelColor,
  body,
  direction,
  index,
}: {
  img: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  label: string;
  labelColor: string;
  body: string;
  direction: 'left' | 'right';
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !imgRef.current || !textRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: 1,
      },
    });

    // Image floats in from its direction
    tl.fromTo(
      imgRef.current,
      {
        x: direction === 'left' ? -150 : 150,
        rotateY: direction === 'left' ? 25 : -25,
        rotateZ: direction === 'left' ? -5 : 5,
        opacity: 0.3,
        scale: 0.85,
      },
      {
        x: 0,
        rotateY: 0,
        rotateZ: 0,
        opacity: 1,
        scale: 1,
        ease: 'none',
      },
      0
    );

    // Text fades in
    tl.fromTo(
      textRef.current,
      { x: direction === 'left' ? 40 : -40, opacity: 0 },
      { x: 0, opacity: 1, ease: 'none' },
      0.1
    );

    // Subtle continuous float
    gsap.to(imgRef.current, {
      y: -15,
      rotateZ: direction === 'left' ? 1 : -1,
      duration: 3 + index * 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => { tl.kill(); };
  }, [direction, index]);

  return (
    <div ref={cardRef} className="flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 md:py-24">
      <div className={`w-full md:w-3/5 ${direction === 'right' ? 'md:order-2' : ''}`}>
        <div
          ref={imgRef}
          className="relative perspective-1000"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={img}
              alt={title}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Floating badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md">
              {icon}
              <span className="text-white text-sm font-medium">{subtitle}</span>
            </div>
          </div>

          {/* Decorative orb behind */}
          <div
            className="absolute -z-10 rounded-full blur-3xl opacity-30"
            style={{
              width: '80%',
              height: '80%',
              top: '10%',
              left: direction === 'left' ? '-20%' : '20%',
              background: iconBg.includes('rose')
                ? 'radial-gradient(circle, #FF8FA3, transparent)'
                : iconBg.includes('gold')
                  ? 'radial-gradient(circle, #FFD54F, transparent)'
                  : 'radial-gradient(circle, #9FA8DA, transparent)',
            }}
          />
        </div>
      </div>

      <div ref={textRef} className={`w-full md:w-2/5 ${direction === 'right' ? 'md:order-1 md:text-right' : ''}`}>
        <div className={`flex items-center gap-3 mb-4 ${direction === 'right' ? 'md:justify-end' : ''}`}>
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${iconBg}`}>
            {icon}
          </div>
          <span className={`font-script ${labelColor} text-xl`}>{label}</span>
        </div>
        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-midnight-900 mb-6 leading-tight">
          {title}
        </h3>
        <p className="text-midnight-700/70 text-lg leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  );
}

/* ─── Surprise Modal ─── */
function SurpriseModal({ onClose }: { onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalRef.current || !contentRef.current) return;
    gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
    gsap.fromTo(
      contentRef.current,
      { scale: 0.5, rotateY: -90, opacity: 0 },
      { scale: 1, rotateY: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 0.1 }
    );
  }, []);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white"
      onClick={onClose}
    >
      <div
        ref={contentRef}
        className="relative max-w-lg w-full bg-gradient-to-br from-rose-50 to-gold-50 rounded-3xl p-8 md:p-12 text-center shadow-2xl"
        style={{ transformStyle: 'preserve-3d' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/50 hover:bg-white/80 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-midnight-700" />
        </button>

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-300 to-rose-300 flex items-center justify-center animate-float">
            <Gift className="w-10 h-10 text-white" />
          </div>
        </div>

        <p className="font-script text-2xl text-blue-500 mb-4">
          "The best things in life are the people we love, the places we have been, and the memories we have made along the way."
        </p>

        <p className="text-midnight-700 leading-relaxed mb-6">
          You are one of those rare souls who makes the world feel like a warmer, kinder place. Every moment with you is a gift, and I am so grateful our paths crossed.
        </p>

        <div className="flex justify-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 text-gold-400 animate-sparkle"
              fill="currentColor"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        <button
          onClick={onClose}
          className="px-8 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-gold-500 text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
        >
          Close with a Smile
        </button>
      </div>
    </div>
  );
}

/* ─── Cursor Sparkle Trail ─── */
function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; age: number; color: string; size: number }[]>([]);
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#FFD54F', '#FF8FA3', '#9FA8DA', '#FF6B85', '#FFE082', '#fff'];

    const onMove = (e: MouseEvent) => {
      for (let i = 0; i < 4; i++) {
        points.current.push({
          x: e.clientX + (Math.random() - 0.5) * 30,
          y: e.clientY + (Math.random() - 0.5) * 30,
          age: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 4 + 2,
        });
      }
    };
    window.addEventListener('mousemove', onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      points.current = points.current.filter((p) => {
        p.age += 1;
        if (p.age > 50) return false;
        const alpha = 1 - p.age / 50;
        const size = p.size * (1 - p.age / 50);
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        return true;
      });
      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
    />
  );
}

/* ─── Main App ─── */
function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const presentSectionRef = useRef<HTMLDivElement>(null);
  const shootingStarContainerRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [presentOpened, setPresentOpened] = useState(false);
  const [wishText, setWishText] = useState('');
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [showWishes, setShowWishes] = useState(false);
  const [wishSent, setWishSent] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [secretRevealed, setSecretRevealed] = useState(false);

  /* Initial load */
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  /* Mouse tracking */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /* GSAP animations */
  useEffect(() => {
    if (!isLoaded) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 80, rotateX: -30 }, { opacity: 1, y: 0, rotateX: 0, duration: 1.8, ease: 'power3.out', delay: 0.3 });
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.4, ease: 'power3.out', delay: 0.8 });
      gsap.fromTo(scrollIndicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 2 });
    }, heroRef);
    return () => ctx.revert();
  }, [isLoaded]);

  /* Secret click handler */
  const handleSecretClick = useCallback(() => {
    const next = clickCount + 1;
    setClickCount(next);
    if (next >= 5) {
      setSecretRevealed(true);
      setClickCount(0);
      setTimeout(() => setShowSurprise(true), 500);
    }
  }, [clickCount]);

  /* Send wish */
  const sendWish = async () => {
    if (!wishText.trim()) return;
    setWishSent(true);
    setWishText('');
    if (shootingStarContainerRef.current) {
      launchShootingStar(shootingStarContainerRef.current, wishText.trim().slice(0, 30));
    }
  };

  /* Scroll to stories after present opens */
  const scrollToStories = () => {
    const el = document.getElementById('story-journey');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const storyData = [
    {
      img: img1,
      title: 'Yetu-Light, you brighten every room',
      subtitle: 'Golden warmth',
      icon: <Sun className="w-5 h-5 text-rose-500" />,
      iconBg: 'bg-rose-100',
      iconColor: 'text-rose-500',
      label: "You're a Light",
      labelColor: 'text-rose-400',
      body: 'There is a warmth about you that makes everyone feel at home. Your laughter is the melody that turns ordinary days into celebrations. You do not just light up spaces — you light up hearts.',
      direction: 'left' as const,
    },
    {
      img: img2,
      title: 'You are our guiding light, Baby girl',
      subtitle: 'An enduring spirit',
      icon: <Moon className="w-5 h-5 text-midnight-500" />,
      iconBg: 'bg-midnight-100',
      label: 'Your Resilience',
      labelColor: 'text-midnight-400',
      body: 'Even through trying times, your endurance and cheerful attitude never fade. That bright energy is completely infectious, serving as a constant source of encouragement and motivation for everyone around you.',
      direction: 'right' as const,
    },
    {
      img: img3,
      title: 'You love without limits',
      subtitle: 'Endless love',
      icon: <Heart className="w-5 h-5 text-gold-600" fill="currentColor" />,
      iconBg: 'bg-gold-100',
      iconColor: 'text-gold-600',
      label: 'Your Heart',
      labelColor: 'text-gold-600',
      body: 'The way you care for others is nothing short of magic, Yetu. You give so much of yourself, and today is about giving back to you. May this year bring you all the love you so generously share with the world.',
      direction: 'left' as const,
    },
  ];

  return (
    <div ref={shootingStarContainerRef} className="relative overflow-hidden">
      <CursorTrail />

      {/* Surprise Modal */}
      {showSurprise && <SurpriseModal onClose={() => setShowSurprise(false)} />}

      {/* Secret revealed toast */}
      {secretRevealed && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[90] px-6 py-3 rounded-2xl bg-gradient-to-r from-gold-400 to-rose-400 text-white font-medium shadow-xl animate-float">
          <span className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Secret unlocked! A surprise awaits...
          </span>
        </div>
      )}

      {/* ─── Section 1: Hero ─── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0D1642 0%, #1A237E 20%, #283593 45%, #5C6BC0 70%, #7986CB 90%, #9FA8DA 100%)' }}
      >
        {/* Gradient orbs */}
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #FFD54F 0%, transparent 70%)', top: '10%', left: '10%', transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)`, transition: 'transform 0.8s ease-out' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #FF8FA3 0%, transparent 70%)', bottom: '20%', right: '15%', transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)`, transition: 'transform 0.8s ease-out' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #9FA8DA 0%, transparent 70%)', top: '50%', left: '50%', transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`, transition: 'transform 0.8s ease-out' }} />

        {/* Floating elements */}
        <div className="absolute top-[15%] left-[8%] animate-float-slow opacity-40"><Star className="w-8 h-8 text-gold-300" fill="currentColor" /></div>
        <div className="absolute top-[25%] right-[12%] animate-float opacity-30"><Sparkles className="w-6 h-6 text-rose-200" /></div>
        <div className="absolute bottom-[30%] left-[15%] animate-float-delayed opacity-35"><Heart className="w-7 h-7 text-rose-300" fill="currentColor" /></div>
        <div className="absolute top-[40%] left-[25%] animate-float opacity-25"><Music className="w-5 h-5 text-gold-200" /></div>
        <div className="absolute bottom-[20%] right-[20%] animate-float-slow opacity-30"><Gift className="w-8 h-8 text-rose-200" /></div>
        <div className="absolute top-[60%] right-[8%] animate-float-delayed opacity-25"><Cake className="w-6 h-6 text-gold-300" /></div>
        <div className="absolute top-[10%] right-[30%] animate-float opacity-20"><PartyPopper className="w-5 h-5 text-rose-100" /></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ perspective: '1000px' }}>
          <div className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card" style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}>
            <Sparkles className="w-4 h-4 text-gold-300" />
            <span className="text-gold-100 text-sm font-medium tracking-widest uppercase">World Yetu Day</span>
            <Sparkles className="w-4 h-4 text-gold-300" />
          </div>

          <h1 ref={titleRef} className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-shadow-glow" style={{ color: '#FAF7F2' }}>
            Happy<br /><span className="gradient-text">Birthday</span>
          </h1>

          <p ref={subtitleRef} className="font-script text-2xl sm:text-3xl md:text-4xl text-gold-100/90 mb-4">
            to the absolute love of my life
          </p>

          <div ref={scrollIndicatorRef} className="mt-16 flex flex-col items-center gap-2 opacity-0">
            <span className="text-white/50 text-sm tracking-wider">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-white/50 animate-bounce" />
          </div>
        </div>

        {/* Secret click zones */}
        <button onClick={handleSecretClick} className="absolute top-[20%] right-[25%] w-12 h-12 rounded-full opacity-0 hover:opacity-20 transition-opacity z-20 cursor-pointer" title="?" />
        <button onClick={handleSecretClick} className="absolute bottom-[25%] left-[20%] w-12 h-12 rounded-full opacity-0 hover:opacity-20 transition-opacity z-20 cursor-pointer" title="?" />
      </section>

      {/* ─── Section 2: The Present ─── */}
      <section
        ref={presentSectionRef}
        className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #9FA8DA 0%, #FAF7F2 100%)' }}
      >
        <PresentBox onOpen={scrollToStories} />
      </section>

      {/* ─── Section 3: Magical Story Journey ─── */}
      <section id="story-journey" className="relative py-16 overflow-hidden" style={{ background: '#FAF7F2' }}>
        {/* Journey path decoration */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-300/30 to-transparent -translate-x-1/2 hidden md:block" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-script text-rose-400 text-2xl">To someone I love deeply</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-midnight-900 mt-2">
              Letsuwa-<span className="gradient-text-warm">Joy Yetu</span>
            </h2>
          </div>

          <div className="relative">
            {storyData.map((story, i) => (
              <StoryCard key={i} {...story} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: The Cake ─── */}
      <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FAF7F2 0%, #E8EAF6 50%, #0D1642 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-midnight-900 mt-2 mb-4">
              The Cake—kinda.
            </h2>
            <p className="text-midnight-600/60 max-w-md mx-auto">
              Yetu,
              you deserve so much more, I'm so sorry I couldnt get you a real cake this time... E pain me ohhh
            </p>
          </div>

          <div className="perspective-1000 max-w-lg mx-auto">
            <div
              className="relative transition-transform duration-700"
              style={{
                transform: `rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.3}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/30018814/pexels-photo-30018814.jpeg"
                  alt="Birthday cake"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/80 via-midnight-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-script text-gold-200 text-3xl mb-2">Blow out the candles</p>
                  <p className="text-white/70">May every wish you make come true</p>
                </div>

                {/* Candles */}
                <div className="absolute top-[20%] left-[30%] animate-float opacity-80">
                  <div className="w-3 h-12 bg-gradient-to-t from-white to-gold-300 rounded-full" />
                  <div className="w-6 h-8 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full -mt-4 -ml-1.5 animate-glow blur-sm" />
                </div>
                <div className="absolute top-[15%] right-[30%] animate-float-delayed opacity-80">
                  <div className="w-3 h-12 bg-gradient-to-t from-white to-gold-300 rounded-full" />
                  <div className="w-6 h-8 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full -mt-4 -ml-1.5 animate-glow blur-sm" />
                </div>
                <div className="absolute top-[18%] left-[50%] animate-float-slow opacity-80">
                  <div className="w-3 h-12 bg-gradient-to-t from-white to-gold-300 rounded-full" />
                  <div className="w-6 h-8 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full -mt-4 -ml-1.5 animate-glow blur-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 4.5: Memory Lane Photo Marquee ─── */}
      <section className="relative py-20 overflow-hidden" style={{ background: '#0D1642' }}>
        {/* Background Glows */}
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #FFD54F 0%, transparent 70%)', top: '10%', left: '10%' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #FF8FA3 0%, transparent 70%)', bottom: '10%', right: '10%' }} />

        <div className="max-w-6xl mx-auto px-6 text-center mb-16 relative z-10">
          <span className="font-script text-gold-300 text-2xl">Capture the Moments</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mt-2 mb-4">
            Our Memory Lane
          </h2>
          <p className="text-white/50 max-w-md mx-auto">
            A glimpse into the beautiful smiles, laughter, and memories we've shared.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex flex-col gap-6 md:gap-8 overflow-hidden select-none">

          {/* Top Row: Scrolls Right */}
          <div className="flex overflow-hidden w-full group">
            <div className="flex gap-4 md:gap-6 shrink-0 animate-marquee-right group-hover:[animation-play-state:paused] pr-4 md:pr-6">
              {row1Images.map((img, i) => (
                <div key={i} className="relative w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 transition-all duration-500 ease-out cursor-pointer flex-shrink-0">
                  <img src={img} alt={`Yetu row1-${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex gap-4 md:gap-6 shrink-0 animate-marquee-right group-hover:[animation-play-state:paused] pr-4 md:pr-6" aria-hidden="true">
              {row1Images.map((img, i) => (
                <div key={`dup1-${i}`} className="relative w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 transition-all duration-500 ease-out cursor-pointer flex-shrink-0">
                  <img src={img} alt={`Yetu row1-${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Scrolls Left */}
          <div className="flex overflow-hidden w-full group">
            <div className="flex gap-4 md:gap-6 shrink-0 animate-marquee-left group-hover:[animation-play-state:paused] pr-4 md:pr-6">
              {row2Images.map((img, i) => (
                <div key={i} className="relative w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(255,107,133,0.5)] hover:scale-105 transition-all duration-500 ease-out cursor-pointer flex-shrink-0">
                  <img src={img} alt={`Yetu row2-${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex gap-4 md:gap-6 shrink-0 animate-marquee-left group-hover:[animation-play-state:paused] pr-4 md:pr-6" aria-hidden="true">
              {row2Images.map((img, i) => (
                <div key={`dup2-${i}`} className="relative w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(255,107,133,0.5)] hover:scale-105 transition-all duration-500 ease-out cursor-pointer flex-shrink-0">
                  <img src={img} alt={`Yetu row2-${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─── Section 5: Make a Wish ─── */}
      <section className="relative py-32 overflow-hidden" style={{ background: '#0D1642' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="mb-12">
            <span className="font-script text-gold-300 text-2xl">Make a Wish</span>
            <p className="text-white/40 max-w-lg mx-auto">
              Whisper your wish for Yetu. Watch it soar across the night sky like a shooting star...
            </p>
          </div>

          <div className="relative">
            {/* Star field background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-sparkle"
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    background: Math.random() > 0.5 ? '#FFD54F' : '#fff',
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                    opacity: 0.5,
                  }}
                />
              ))}
            </div>

            <div className="relative max-w-md mx-auto">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                {wishSent ? (
                  <div className="py-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-rose-400 flex items-center justify-center mx-auto mb-6 animate-float">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Your Wish is Soaring!</h3>
                    <p className="text-white/50 mb-6">It streaks across the sky, joining the constellation of wishes for Yetu.</p>
                    <button
                      onClick={() => { setWishSent(false); setWishText(''); }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Make Another Wish
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <textarea
                        placeholder="A wish for Yetu..."
                        value={wishText}
                        onChange={(e) => setWishText(e.target.value)}
                        rows={3}
                        className="w-full px-5 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-gold-400/50 transition-colors resize-none text-lg text-center"
                      />
                    </div>
                    <button
                      onClick={sendWish}
                      disabled={!wishText.trim()}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-gold-500 via-rose-400 to-gold-500 text-white font-bold text-lg shadow-lg shadow-gold-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 hover:shadow-gold-500/40 hover:scale-[1.02]"
                      style={{ backgroundSize: '200% 100%', animation: 'gradient-shift 3s ease infinite' }}
                    >
                      <Send className="w-5 h-5" />
                      Send My Wish Into the Sky
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Wishes Wall */}
          {wishes.length > 0 && (
            <div className="mt-16">
              <button
                onClick={() => setShowWishes(!showWishes)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-white/70 hover:text-white hover:bg-white/10 transition-all mb-8"
              >
                <MessageCircle className="w-5 h-5" />
                {showWishes ? 'Hide' : 'View'} the Wish Constellation ({wishes.length})
                <Eye className="w-4 h-4" />
              </button>

              {showWishes && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto p-2">
                  {wishes.map((wish) => (
                    <div
                      key={wish.id}
                      className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 text-left hover:bg-white/10 transition-colors"
                    >
                      <p className="text-white/80 text-sm leading-relaxed mb-3">"{wish.message}"</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gold-300/60 text-xs">— {wish.sender_name}</span>
                        <Star className="w-3 h-3 text-gold-400/30" fill="currentColor" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ─── Section 6: Final Message ─── */}
      <section className="relative py-32 overflow-hidden" style={{ background: '#0D1642' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-8">
              <Heart className="w-5 h-5 text-rose-400 animate-pulse" fill="currentColor" />
              <Heart className="w-6 h-6 text-rose-300 animate-pulse" fill="currentColor" style={{ animationDelay: '0.2s' }} />
              <Heart className="w-5 h-5 text-rose-400 animate-pulse" fill="currentColor" style={{ animationDelay: '0.4s' }} />
            </div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Here is to <span className="gradient-text">Baby girl</span>,<br />
              <span className="font-script text-3xl md:text-5xl text-gold-200">today and always</span>
            </h2>

            <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              On this day, the world celebrates the gift of you. May the year ahead be filled with adventures, laughter, dreams come true, and moments that take your breath away. You deserve every beautiful thing.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setShowSurprise(true)}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 transition-shadow flex items-center gap-2"
              >
                <Cake className="w-5 h-5" />
                Happy Birthday, Yetu!
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-4 rounded-2xl glass-card text-white/90 font-medium hover:bg-white/15 transition-colors flex items-center gap-2"
              >
                <ArrowRight className="w-5 h-5 text-gold-300" />
                Back to the Stars
              </button>
            </div>
          </div>

          <div className="mt-24 flex justify-center gap-6 opacity-30">
            <Star className="w-4 h-4 text-gold-300 animate-sparkle" fill="currentColor" />
            <Sparkles className="w-4 h-4 text-rose-300 animate-sparkle" style={{ animationDelay: '0.5s' }} />
            <Star className="w-4 h-4 text-gold-300 animate-sparkle" fill="currentColor" style={{ animationDelay: '1s' }} />
            <Sparkles className="w-4 h-4 text-rose-300 animate-sparkle" style={{ animationDelay: '1.5s' }} />
            <Star className="w-4 h-4 text-gold-300 animate-sparkle" fill="currentColor" style={{ animationDelay: '2s' }} />
          </div>

          <p className="mt-8 text-white/20 text-sm">Made with love, just for you, Yetu</p>
        </div>
      </section>
    </div>
  );
}

export default App;
