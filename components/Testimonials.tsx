import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Sparkles, Quote, ChevronRight, ChevronLeft, ShieldCheck, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
    id: string;
    quote: string;
    author: string;
    role: string;
    org: string;
    category: 'Colleague' | 'Manager' | 'Client';
    image?: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: "I am thrilled to recommend Sagar who time and again has proven to be an invaluable team player and a very hard worker. Sagar always brings a positive attitude to everything he does and loves to lend a helping hand regardless of what he has on his plate. Sagar dedicates himself to continuously build his knowledge. He has persistently worked hard to gain Salesforce certifications and learn about the platform inside and out. Now, he is the team's go-to person for any Salesforce-related inquiries, where he is always ready to provide insightful advice to the SDR team. Sagar is a person who always strives to do his best at everything - with an outstanding work ethic, a strong ability to grasp new things, and his helping nature, he is a great asset to the team!",
        author: "Austin Thogaru",
        role: "Team Lead",
        org: "Generate KiwiSaver",
        category: 'Colleague',
        image: "https://media.licdn.com/dms/image/v2/D5603AQH4RI7Jn5ZRAg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1688036352953?e=1749081600&v=beta&t=zcnT_B64ZRak-10YuF8kuNJn7kPD_PbObLeag2X1jtc"
    },
    {
        id: '2',
        quote: "I have had the pleasure of working closely with Sagar for over a year at Generate KiwiSaver. In this time, I have consistently been impressed by his dedication, professionalism, and exceptional skills. He consistently delivers high-quality work under tight deadlines and remains calm and composed in challenging situations. Sagar has been our go-to person for all and any salesforce issues we faced, he has also implemented effective streamlining processes to help aid SDR and make the Salesforce platform more of an enjoyable experience. Sagar is not only a valuable asset to any team but also a pleasure to work alongside. He brings a positive attitude and collaborative spirit to every project, making his presence invaluable. I have no doubt that Sagar will excel in any future endeavors and highly recommend him without hesitation!",
        author: "Eileen Katoa",
        role: "Colleague",
        org: "Generate KiwiSaver",
        category: 'Colleague',
        image: "https://media.licdn.com/dms/image/v2/D4E03AQGmG460UAPfGQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1716353517388?e=1749081600&v=beta&t=LC8xNmuMdMY_4TrEcZ0TVTxE9olz-X8yynn60YHxcJY"
    },
    {
        id: '3',
        quote: "I highly recommend Sagar, a former colleague I had the pleasure of working with. During our time together, Sagar demonstrated remarkable dedication and a proactive attitude, notably in his self-driven study of Salesforce. Sagar consistently demonstrated professionalism, dedication, and an unwavering commitment to excellence. His strong work ethic, coupled with his exceptional communication skills, made him an invaluable member of the team. As well as his infectiously positive nature, Sagar is a highly skilled professional who would be a tremendous asset to any team. I do not doubt that he will continue to excel in his future endeavors.",
        author: "Bradley Princeton",
        role: "Colleague",
        org: "Generate KiwiSaver",
        category: 'Colleague',
        image: "https://media.licdn.com/dms/image/v2/C4D03AQHEe3n8zAPrTw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1661897018839?e=1749081600&v=beta&t=uZDsN55LKLNLBG7C2QAbLxJXN_HF1azOBK9fhB_hiwo"
    },
    {
        id: '4',
        quote: "It was a pleasure to work together with Sagar, who was an excellent customer champion. At One New Zealand, he continuously displayed a strong work ethic and a commitment to achievement. He has excellent relationships with both current and potential clients of the business because of his interpersonal skills. Sagar was someone I frequently considered to be a professional sales representative and a real team player. Any business would be lucky to have Sagar on board.",
        author: "Heidi England",
        role: "Colleague",
        org: "One New Zealand",
        category: 'Colleague',
        image: ""
    }
];

export const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsExpanded(false);
    };
    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsExpanded(false);
    };

    const t = testimonials[currentIndex];

    return (
        <section className="py-24 relative px-4 flex flex-col items-center">
            {/* Background Ambient Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl w-full mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-500 text-[10px] font-mono tracking-widest uppercase mb-6">
                    <Sparkles size={10} />
                    Testimonials
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    What People Say.
                </h2>
                <p className="text-zinc-400 mt-4 max-w-xl">Professional recommendations from colleagues and team members who I've had the privilege of working with.</p>
            </div>

            <div className="relative w-full max-w-6xl group">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <GlassCard className="!p-0 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border-white/[0.05]">
                            <div className="flex flex-col">
                                
                                {/* Header with Author Info */}
                                <div className="p-8 md:p-10 border-b border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 rounded-2xl border-2 border-white/10 overflow-hidden bg-zinc-800 flex items-center justify-center shadow-xl">
                                                {t.image ? (
                                                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                                                ) : (
                                                    <span className="text-white font-bold text-2xl">{t.author.charAt(0)}</span>
                                                )}
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-xl">{t.author}</div>
                                                <div className="text-zinc-400 text-sm">{t.role}</div>
                                                <div className="text-blue-400 text-sm font-medium">{t.org}</div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-4">
                                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-xs font-mono tracking-widest uppercase">
                                                <ShieldCheck size={14} />
                                                LinkedIn Verified
                                            </div>
                                            <div className="flex gap-1">
                                                {[1,2,3,4,5].map((star) => (
                                                    <Star key={star} size={16} className="text-amber-400 fill-amber-400" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Quote Content - Full Height with Scroll */}
                                <div className="p-8 md:p-10 relative">
                                    <Quote size={48} className="text-blue-600/10 absolute top-6 left-6" />
                                    
                                    <div className="relative z-10">
                                        <blockquote 
                                            className={`text-lg md:text-xl text-zinc-300 leading-relaxed font-light transition-all duration-300 ${
                                                isExpanded ? '' : 'line-clamp-6 md:line-clamp-4'
                                            }`}
                                        >
                                            "{t.quote}"
                                        </blockquote>
                                        
                                        {t.quote.length > 300 && (
                                            <button 
                                                onClick={() => setIsExpanded(!isExpanded)}
                                                className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors flex items-center gap-1"
                                            >
                                                {isExpanded ? 'Show less' : 'Read full testimonial'}
                                                <ChevronRight size={14} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Navigation Footer */}
                                <div className="p-6 md:p-8 border-t border-white/5 bg-[#0A0A0A]/50 flex items-center justify-between">
                                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                                        {currentIndex + 1} / {testimonials.length} • Professional References
                                    </div>
                                    
                                    <div className="flex gap-3">
                                        <button 
                                            onClick={prev}
                                            className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white hover:bg-zinc-800 transition-all active:scale-95"
                                        >
                                            <ChevronLeft size={18} />
                                        </button>
                                        <button 
                                            onClick={next}
                                            className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white hover:bg-zinc-800 transition-all active:scale-95"
                                        >
                                            <ChevronRight size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Indicators */}
            <div className="flex gap-2 mt-8">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setCurrentIndex(i);
                            setIsExpanded(false);
                        }}
                        className={`h-2 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-white/10 hover:bg-white/20'}`}
                    />
                ))}
            </div>
        </section>
    );
};