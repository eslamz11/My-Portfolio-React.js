
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev === 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // Wait a bit before finishing
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Adjust speed here

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden"
        >
            {/* 3D Cube Container */}
            <div className="relative w-32 h-32 mb-12 perspective-1000">
                <motion.div
                    animate={{
                        rotateX: [0, 360],
                        rotateY: [0, 360],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="w-full h-full relative preserve-3d"
                >
                    {/* Cube Faces */}
                    <div
                        className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/50 backdrop-blur-sm flex items-center justify-center text-4xl font-bold"
                        style={{ transform: 'translateZ(4rem)' }}
                    >
                        E
                    </div>
                    <div
                        className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/50 backdrop-blur-sm flex items-center justify-center text-4xl font-bold"
                        style={{ transform: 'rotateY(180deg) translateZ(4rem)' }}
                    >
                        Z
                    </div>
                    <div
                        className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/50 backdrop-blur-sm flex items-center justify-center text-2xl font-bold"
                        style={{ transform: 'rotateY(90deg) translateZ(4rem)' }}
                    >
                        DEV
                    </div>
                    <div
                        className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/50 backdrop-blur-sm flex items-center justify-center text-2xl font-bold"
                        style={{ transform: 'rotateY(-90deg) translateZ(4rem)' }}
                    >
                        CODE
                    </div>
                    <div
                        className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/50 backdrop-blur-sm flex items-center justify-center"
                        style={{ transform: 'rotateX(90deg) translateZ(4rem)' }}
                    >
                        <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
                    </div>
                    <div
                        className="absolute inset-0 bg-emerald-500/20 border border-emerald-500/50 backdrop-blur-sm flex items-center justify-center"
                        style={{ transform: 'rotateX(-90deg) translateZ(4rem)' }}
                    >
                        <div className="w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
                    </div>
                </motion.div>
            </div>

            {/* Name Reveal */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold font-outfit tracking-wider mb-2">
                    <span className="text-white">Eslam</span>{" "}
                    <span className="text-emerald-500">Zayed</span>
                </h1>
                <p className="text-gray-400 text-sm md:text-base tracking-[0.3em] uppercase">
                    Portfolio Loading
                </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative">
                <motion.div
                    className="absolute top-0 left-0 h-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${count}%` }}
                />
            </div>

            <div className="mt-2 font-mono text-emerald-500 text-sm">
                {count}%
            </div>
        </motion.div>
    );
};

export default SplashScreen;
