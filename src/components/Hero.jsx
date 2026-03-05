import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center bg-white pt-24 pb-12 overflow-hidden relative">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-[120%] bg-[radial-gradient(circle_at_50%_-20%,#FFD77A_0,transparent_50%)] opacity-30" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary-light/20 blur-[100px] rounded-full" />
            </div>

            {/* Floating Particles */}
            {[...Array(25)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.4, 0],
                        scale: [0, Math.random() * 1.5 + 0.5, 0],
                        x: [0, (Math.random() - 0.5) * 300],
                        y: [0, (Math.random() - 0.5) * 300]
                    }}
                    transition={{
                        duration: Math.random() * 6 + 6,
                        repeat: Infinity,
                        delay: Math.random() * 5
                    }}
                    className="absolute z-1 w-1 h-1 bg-primary rounded-full shadow-glow"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">
                {/* Left Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-bold text-primary-dark mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Nationwide Skill-Building Campaign
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-[0.95] mb-8 tracking-tighter">
                        Provisent <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark via-primary to-primary-light italic">Career Guidance</span> <br />
                        Edutech
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold">
                        Empowering Tomorrow’s Leaders with <span className="text-gray-900 font-black decoration-primary decoration-4 underline underline-offset-8">AICTE / MSME Approved</span> Training Programs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
                        <motion.a
                            href="https://forms.gle/xcELsyFpcSYZurFH8"
                            target="_blank"
                            whileHover={{ scale: 1.05, boxShadow: "var(--shadow-premium-hover)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-primary text-white rounded-[24px] font-black text-xl shadow-2xl relative group overflow-hidden"
                        >
                            <span className="relative z-10">Register Now</span>
                            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 linear" />
                        </motion.a>

                        <motion.a
                            href="https://www.provisent.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-white text-primary border-2 border-primary/20 rounded-[24px] font-black text-xl shadow-xl hover:bg-primary/5 transition-all"
                        >
                            Visit Website
                        </motion.a>
                    </div>

                    <div className="flex items-center gap-4 justify-center lg:justify-start mt-8">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-md">
                                    <img src={`https://i.pravatar.cc/150?u=s${i}`} alt="Student" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-4 border-white bg-primary text-white flex items-center justify-center text-xs font-black shadow-md">
                                +15
                            </div>
                        </div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Joined by 1000+ Students</p>
                    </div>
                </motion.div>

                {/* Right Side: Animated Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="relative z-10 animate-float drop-shadow-[0_50px_50px_rgba(230,165,32,0.2)]">
                        <img
                            src="/hero-main.png"
                            alt="Elite Learning"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Floating Icons */}
                    {[
                        { icon: "🎓", delay: 0, top: "5%", left: "-5%" },
                        { icon: "📜", delay: 1, bottom: "10%", right: "-5%" },
                        { icon: "⚡", delay: 1.5, top: "40%", right: "-15%" },
                        { icon: "💻", delay: 2, bottom: "40%", left: "-15%" },
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            animate={{
                                y: [0, -30, 0],
                                rotate: [0, 15, -15, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                delay: item.delay,
                                ease: "easeInOut"
                            }}
                            className="absolute z-20 text-6xl pointer-events-none drop-shadow-2xl filter brightness-110"
                            style={{ ...item }}
                        >
                            {item.icon}
                        </motion.div>
                    ))}

                    {/* Glowing Aura */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[120px] rounded-full z-0 opacity-50" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
