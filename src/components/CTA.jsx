import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="py-40 bg-[#050505] text-white relative overflow-hidden">
            {/* Ultra Premium Background */}
            <div className="absolute inset-0 z-0">
                {/* Massive Glowing Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full opacity-60" />

                {/* Animated Light Beams */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-30"
                        style={{ rotate: `${i * 60}deg` }}
                    />
                ))}

                {/* Subtle Grid with Perspective */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter leading-[0.9] text-white drop-shadow-2xl">
                        Secure Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary italic pr-4">Career Path</span> Today.
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
                        Don't let the opportunity slip away. Join the top 1% of students building the future of technology.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-8">
                        <motion.a
                            href="https://forms.gle/xcELsyFpcSYZurFH8"
                            target="_blank"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 60px rgba(230, 165, 32, 0.6)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center justify-center px-16 py-8 bg-primary text-white rounded-[40px] text-3xl font-black shadow-2xl transition-all duration-300"
                        >
                            <span className="relative z-10">Register Now</span>
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-[-4px] bg-primary/30 rounded-[44px] blur-2xl z-0"
                            />
                        </motion.a>

                        <div className="flex items-center gap-4 text-gray-500 font-bold uppercase tracking-[0.2em] text-sm mt-4">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            Only 5 slots remaining this week
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
