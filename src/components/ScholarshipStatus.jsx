import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScholarshipStatus = () => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    const total = 20;
    const secured = 15;
    const percentage = (secured / total) * 100;

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 2000;
            const increment = secured / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= secured) {
                    setCount(secured);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [inView]);

    return (
        <section ref={ref} className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="bg-white p-12 md:p-20 rounded-[60px] shadow-subtle border border-gray-100 flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                            Seize the <br />
                            <span className="text-primary italic">Moment</span> Now!
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 font-medium">
                            Join the elite group of students who have already secured their future. Our scholarship slots are filling up fast!
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                            <div className="px-6 py-4 bg-gray-900 text-white rounded-3xl">
                                <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-1">Students Secured</p>
                                <p className="text-4xl font-black">{count}</p>
                            </div>
                            <div className="px-6 py-4 bg-red-600 text-white rounded-3xl">
                                <p className="text-xs uppercase font-bold tracking-widest text-red-200 mb-1">Slots Left</p>
                                <p className="text-4xl font-black">05</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex-shrink-0">
                        <svg className="w-64 h-64 transform -rotate-90">
                            <circle cx="128" cy="128" r="110" stroke="currentColor" strokeWidth="20" fill="transparent" className="text-gray-100" />
                            <motion.circle
                                cx="128" cy="128" r="110" stroke="currentColor" strokeWidth="20"
                                strokeDasharray="691"
                                initial={{ strokeDashoffset: 691 }}
                                animate={inView ? { strokeDashoffset: 691 - (691 * percentage) / 100 } : {}}
                                transition={{ duration: 2, ease: "easeOut" }}
                                fill="transparent"
                                strokeLinecap="round"
                                className="text-primary"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-black text-gray-900">{Math.round(percentage)}%</span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Capacity Reached</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScholarshipStatus;
