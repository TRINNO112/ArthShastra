import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaBookOpen, FaCalculator } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { practiceData, Fraction } from './MeanPracticeData';

const PracticeAccordion = ({ title, problems }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 border border-slate-700 rounded-xl overflow-hidden shadow-lg bg-slate-900/50 backdrop-blur-sm"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-5 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 text-white flex justify-between items-center cursor-pointer hover:bg-slate-800 transition-colors"
            >
                <div className="flex items-center gap-3 text-lg font-semibold text-blue-400">
                    <FaBookOpen className="text-xl" />
                    <span>{title}</span>
                </div>
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <FaChevronDown className="text-slate-400" />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 bg-slate-900/80 space-y-8">
                            {problems.map((prob, idx) => (
                                <div key={idx} className="border-b border-slate-700/50 last:border-0 pb-8 last:pb-0">
                                    <div className="flex items-start gap-4 mb-4">
                                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap mt-1 shadow-sm">
                                            Q{idx + 1}
                                        </span>
                                        <div className="w-full">
                                            <p className="text-slate-200 text-base font-medium leading-relaxed mb-3">
                                                {prob.q}
                                            </p>

                                            {prob.table && (
                                                <div className="my-4 overflow-x-auto rounded-lg border border-slate-700 shadow-sm">
                                                    {prob.table}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <details className="group">
                                        <summary className="flex items-center gap-2 text-emerald-400 font-semibold cursor-pointer select-none hover:text-emerald-300 transition-colors mb-3">
                                            <FaCalculator />
                                            <span>Show Detailed Solution</span>
                                            <FaChevronDown className="w-3 h-3 transition-transform group-open:rotate-180" />
                                        </summary>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="pl-4 border-l-2 border-emerald-500/30 ml-2 space-y-4"
                                        >
                                            {prob.solTable && (
                                                <div className="overflow-x-auto rounded-lg border border-slate-700 bg-slate-800/50">
                                                    {prob.solTable}
                                                </div>
                                            )}

                                            <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700">
                                                <h4 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Calculation Steps</h4>
                                                <div className="text-white text-lg font-mono">
                                                    {prob.calc}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </details>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const MeanPractice = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 space-y-6 animate-fadeIn">
            <div className="text-center mb-10 space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Master Arithmetic Mean
                </h2>
                <p className="text-slate-400 text-lg">
                    Comprehensive practice set covering all series types
                </p>
            </div>

            {practiceData.map((section) => (
                <PracticeAccordion
                    key={section.id}
                    title={section.title}
                    problems={section.problems}
                />
            ))}

            <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg text-center text-amber-200 text-sm">
                <p>💡 Tip: Pay attention to the assumed mean (A) in Short-cut and Step-Deviation methods.</p>
            </div>
        </div>
    );
};

export default MeanPractice;
