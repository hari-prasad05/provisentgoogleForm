import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 w-full z-[1000] py-6 bg-white/50 backdrop-blur-xl border-b border-white/20 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="p-1 bg-white rounded-xl shadow-sm border border-slate-100">
                        <img
                            src="/logo.png"
                            alt="Provisent Edutech Logo"
                            className="w-10 h-10 object-contain"
                        />
                    </div>
                    <span className="text-2xl font-black tracking-tight text-gray-900">
                        Provisent <span className="text-primary italic">Edutech</span>
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://www.provisent.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 font-bold hover:text-primary transition-colors hidden md:block"
                    >
                        Visit Website
                    </a>
                    <motion.a
                        href="https://forms.gle/xcELsyFpcSYZurFH8"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/20"
                    >
                        Apply Now
                    </motion.a>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
