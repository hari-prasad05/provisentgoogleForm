import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Wallet, Gem } from 'lucide-react';

const details = [
    {
        icon: <Calendar size={32} />,
        label: 'Program Duration',
        value: '3 months',
        grad: 'from-amber-200 to-primary'
    },
    {
        icon: <Wallet size={32} />,
        label: 'Registration Fee',
        value: '₹1000',
        grad: 'from-primary to-primary-dark'
    },
    {
        icon: <Gem size={32} />,
        label: 'Special Offer',
        value: 'Buy One Get One Domain',
        grad: 'from-gray-800 to-black',
        dark: true
    },
];

const ProgramDetails = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Overview</h2>
                    <p className="text-gray-600 text-lg">Transparent excellence for your career journey.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {details.map((detail, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03, y: -5 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`p-10 rounded-[40px] shadow-xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden ${detail.dark ? 'bg-gray-950 text-white' : 'bg-white'}`}
                        >
                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${detail.grad} flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20`}>
                                {detail.icon}
                            </div>
                            <h4 className={`text-lg font-medium mb-2 ${detail.dark ? 'text-gray-400' : 'text-gray-500'}`}>{detail.label}</h4>
                            <p className="text-2xl font-black">{detail.value}</p>

                            {index === 2 && (
                                <div className="mt-6 px-4 py-1.5 bg-primary text-white rounded-full text-xs font-black tracking-widest uppercase">
                                    Limited Time Exclusive
                                </div>
                            )}

                            {/* Decorative accent */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramDetails;
