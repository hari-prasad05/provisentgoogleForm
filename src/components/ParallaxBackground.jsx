import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
    const { scrollYProgress } = useScroll();

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 250]);
    const rotateS = useTransform(scrollYProgress, [0, 1], [0, 180]);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div
                style={{ y: y1, rotate: rotateS }}
                className="absolute top-[5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary-light/10 blur-[120px]"
            />
            <motion.div
                style={{ y: y1 }}
                className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]"
            />

            {/* Decorative vector shapes */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-1/3 w-32 h-32 border-2 border-primary/10 rounded-3xl"
            />
        </div>
    );
};

export default ParallaxBackground;
