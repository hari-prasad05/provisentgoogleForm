import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Compass, Users, TrendingUp, HandCoins, Award, BookOpen } from 'lucide-react';

const benefits = [
    {
        icon: <Briefcase />,
        title: 'Internship Projects',
        desc: 'Work on real-world industry cases and gain practical experience.',
        img: '/benefits/internship.png'
    },
    {
        icon: <Compass />,
        title: 'Career Guidance',
        desc: 'Personalized roadmap to help you navigate your professional journey.',
        img: '/benefits/guidance.png'
    },
    {
        icon: <Users />,
        title: 'Mentor Assistance',
        desc: 'Direct guidance from industry experts and experienced professionals.',
        img: '/benefits/mentor.png'
    },
    {
        icon: <TrendingUp />,
        title: '100% Placement Support',
        desc: 'Resume building, mock interviews, and direct hiring opportunities.',
        img: '/benefits/placement.png'
    },
    {
        icon: <HandCoins />,
        title: 'Stipend Opportunities',
        desc: 'Earn while you learn with performance-based stipend rewards.',
        img: '/benefits/stipend.png'
    },
    {
        icon: <Award />,
        title: 'Premium Certifications',
        desc: 'Get industry-recognized certificates to boost your resume.',
        img: '/benefits/certification.png'
    },
    {
        icon: <BookOpen />,
        title: 'Lifetime Access',
        desc: 'Unlimited access to all our study materials and resources forever.',
        img: '/benefits/access.png'
    },
];

const Benefits = () => {
    return (
        <section id="benefits" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-black text-gray-900 mb-8"
                    >
                        Built for <span className="text-primary italic">Excellence</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
                    >
                        We've engineered every aspect of this program to ensure your transition from student to professional is seamless and powerful.
                    </motion.p>
                </div>

                {/* Infinite Marquee Container */}
                <div className="relative flex overflow-hidden group">
                    <div className="flex animate-marquee whitespace-nowrap gap-10 py-10 px-10 group-hover:[animation-play-state:paused]">
                        {[...benefits, ...benefits].map((benefit, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -15 }}
                                className="inline-flex flex-col min-w-[380px] bg-white rounded-[48px] p-2 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(230,165,32,0.1)] transition-all duration-500 whitespace-normal"
                            >
                                <div className="relative h-64 rounded-[40px] overflow-hidden mb-8">
                                    <img
                                        src={benefit.img}
                                        alt={benefit.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        className="absolute top-6 left-6 bg-white shadow-xl p-4 rounded-2xl text-primary"
                                    >
                                        {benefit.icon}
                                    </motion.div>
                                </div>

                                <div className="px-8 pb-10">
                                    <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-500 font-medium leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Edge Fades for Seamless Look */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default Benefits;
