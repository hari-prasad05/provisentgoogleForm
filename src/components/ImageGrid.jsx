import React from 'react';
import { motion } from 'framer-motion';

const images = [
    { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', label: 'Collaboration' },
    { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80', label: 'Global Reach' },
    { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', label: 'Technical Mastery' },
    { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', label: 'Future Leaders' },
];

const ImageGrid = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8, y: 100 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            whileHover={{ y: -30, rotate: i % 2 === 0 ? 2 : -2 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="aspect-[3/4] rounded-[60px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] relative border-8 border-white">
                                <img
                                    src={img.src}
                                    alt={img.label}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                                    <span className="text-white font-black text-3xl italic tracking-tighter leading-none">{img.label}</span>
                                </div>
                            </div>

                            <motion.div
                                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: i }}
                                className="absolute -top-6 -right-6 bg-white shadow-2xl p-6 rounded-[30px] text-4xl z-20"
                            >
                                {i % 2 === 0 ? '✨' : '🚀'}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageGrid;
