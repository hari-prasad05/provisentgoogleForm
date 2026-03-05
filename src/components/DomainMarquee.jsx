import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Shield, Database, Cloud, Smartphone } from 'lucide-react';

const domains = [
    { icon: <Brain />, name: 'Artificial Intelligence', desc: 'Predicting the future with neural nets.' },
    { icon: <Code />, name: 'Web Development', desc: 'Building modern reactive interfaces.' },
    { icon: <Shield />, name: 'Cyber Security', desc: 'Protecting digital landscapes.' },
    { icon: <Database />, name: 'Data Science', desc: 'Unlocking insights from data.' },
    { icon: <Cloud />, name: 'Cloud Computing', desc: 'Scaling applications globally.' },
    { icon: <Smartphone />, name: 'Android Development', desc: 'Crafting mobile experiences.' },
];

const DomainMarquee = () => {
    return (
        <section className="py-24 bg-gray-50/50 overflow-hidden relative">
            <div className="text-center mb-20 px-8">
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">Master In-Demand <span className="text-primary italic text-gradient underline decoration-primary/20">Domains</span></h2>
                <p className="text-xl text-gray-500 font-semibold max-w-2xl mx-auto">Choose your elite path with our heavy-duty industrial training modules.</p>
            </div>

            <div className="relative flex overflow-hidden group">
                <div className="flex animate-marquee whitespace-nowrap gap-10 py-6 px-10 group-hover:[animation-play-state:paused]">
                    {[...domains, ...domains].map((domain, idx) => (
                        <div
                            key={idx}
                            className="inline-flex flex-col items-center justify-center min-w-[350px] p-12 bg-white/80 backdrop-blur-2xl rounded-[60px] border border-white shadow-2xl hover:shadow-primary/20 hover:border-primary/50 transition-all duration-500 scale-95 hover:scale-100"
                        >
                            <div className="w-20 h-20 bg-primary shadow-[0_10px_20px_rgba(230,165,32,0.3)] text-white rounded-3xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                                {domain.icon}
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4 whitespace-normal text-center tracking-tight">{domain.name}</h3>
                            <p className="text-gray-500 font-medium whitespace-normal text-center leading-relaxed">
                                {domain.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Fades */}
                <div className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
                <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
            </div>
        </section>
    );
};

export default DomainMarquee;
