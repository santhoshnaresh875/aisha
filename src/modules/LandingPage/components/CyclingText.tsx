import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CyclingText = memo(() => {
    const [termIndex, setTermIndex] = useState(0);
    const terms = [
        "Quantum Teams",
        "Innovation Teams",
        "R&D Teams",
        "Data & AI Teams",
        "Academic Researchers"
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTermIndex((prevIndex) => (prevIndex + 1) % terms.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [terms.length]);

    const getTermColor = (term: string) => {
        if (term === "Innovation Teams" || term === "Data & AI Teams") {
            return '#9058C9';
        }
        return '#3B82F6';
    };

    return (
        <div className="relative" style={{ height: '3rem', overflow: 'hidden' }}>
            <AnimatePresence>
                {terms.map((term, index) => (
                    index === termIndex && (
                        <motion.h2
                            key={term}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8 }}
                            className="text-2xl absolute w-full mt-4"
                            style={{ whiteSpace: 'nowrap', color: getTermColor(term) }}
                        >
                            {term}
                        </motion.h2>
                    )
                ))}
            </AnimatePresence>
        </div>
    );
});

CyclingText.displayName = 'CyclingText';

export default CyclingText;
