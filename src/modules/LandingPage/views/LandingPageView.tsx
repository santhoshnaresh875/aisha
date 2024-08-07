"use client"
import React, { useCallback } from 'react';
import { Button, Card } from '@nextui-org/react';
import Icons from "../../../theme/icons/icons"
import IPVLogo from "../../../../public/assets/ipvLogo.png"
import Bloq from "../../../../public/assets/bloq.png"
import Upper from "../../../../public/assets/grid-upper.png"
import Lower from "../../../../public/assets/gird-lower.png"
import Image from 'next/image'
import "./landingPageView.css"
import CyclingText from '../components/CyclingText';
import { motion } from 'framer-motion';
import Gradient from "../../../../public/assets/gradient.png"

type IconType = keyof typeof Icons;

export default function LandingPageView() {

    const featureCardsData: { icon: IconType, title: string, description: string }[] = [
        {
            icon: 'Circuit',
            title: 'Build Quantum Algorithms with ease',
            description: 'Our low-code platform enables you to create quantum algorithms effortlessly.'
        },
        {
            icon: 'Funnel',
            title: 'Accelerate Experimentation',
            description: 'Experiment with various algorithms and parameters quickly, and obtain results for each iteration, enhancing your research efficiency.'
        },
        {
            icon: 'Gear',
            title: 'Advanced Customization',
            description: 'Access the quantum code to enable interactive, adaptive, and robust customizations based on your specific needs.'
        },
        {
            icon: 'Insights',
            title: 'Gain Business Insights',
            description: 'Leverage quantum insights to gain valuable business insights, including risk assessments, technical feasibility, strategic decisions, and potential use cases.'
        },
        {
            icon: 'Key',
            title: 'Access Leading Quantum Algorithms',
            description: 'Utilize a wide array of cutting-edge quantum algorithms, including QAOA, QNN, QML, QGR, VQE, and more, and deploy them to the best hardware at your disposal.'
        },
        {
            icon: 'CircuitPurple',
            title: 'Deploy on Any Quantum Hardware',
            description: 'Run your algorithms on various quantum hardware platforms, ensuring maximum flexibility and convenience to match your computing needs.'
        }
    ];

    const scrollToSection = useCallback(() => {
        const section = document.getElementById('fast-tracking-section');
        if (section) { 
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const handleRedirect = () => {
        window.open('https://topmate.io/sreekuttan/160986', '_blank');
    }

    const spinTransition = {
        repeat: Infinity,
        ease: "linear",
        duration: 2,
        times: [0, 0.5, 1],
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="fixed top-0 left-0 right-0 z-50 bg-transparent px-4 sm:px-8 pb-2 pt-6">
                <header className="header w-full header flex justify-between items-center px-4 sm:px-8 py-4 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-500">
                        <Image
                            src={Bloq}
                            alt="bloq"
                            width={70}
                            height={70}
                        />
                    </div>
                   <div>
                     <Button onClick={() => window.open('https://analyticsindiamag.com/ai-news-updates/bloq-quantum-raises-inr-1-3-crore-to-accelerate-enterprise-adoption-of-quantum-computing/', '_blank')}  className="bg-blue-500 text-white px-0 me-3">Blogs</Button>
                    <Button onClick={handleRedirect} className="bg-blue-500 text-white">Book a demo</Button>
                   </div>
                   
                </header>
            </div>

            {/* Main Content */}
            <div className="pt-32">
                <main className="flex flex-col items-center justify-center text-center px-4">
                    <div onClick={() => window.open('https://ipventures.in/', '_blank')} className="cursor-pointer z-20 flex items-center space-x-2 mt-8 border-large border-[#006FEE] py-1 px-4 rounded-full">
                        <Image
                            alt="IPVLogo"
                            src={IPVLogo}
                            width={24}
                            height={24}
                            className="inline-block"
                        />
                        <span className="font-size-10 text-[#E4E4E7]">Backed by IPV</span>
                    </div>
                    <div className="bg-purple-800 z-20 flex items-center space-x-2 -mb-6 mt-10 py-1 px-4 rounded-full">
                        <span onClick={() => window.open('https://analyticsindiamag.com/ai-news-updates/bloq-quantum-raises-inr-1-3-crore-to-accelerate-enterprise-adoption-of-quantum-computing/', '_blank')} className="cursor-pointer text-base text-[#E4E4E7]">We have raised 1.3 Cr ($155K) in pre-seed round from IPV 🎉 &#8250;</span><span className="cursor-pointer text-base text-gray-800">|</span><span onClick={() => window.open('https://rebrand.ly/bloqhiring/', '_blank')} className="cursor-pointer text-base text-[#E4E4E7]">We&apos;re hiring!</span>
                    </div>
                    <div className="flex flex-col items-center justify-center ">
                        <span className="absolute mt-24 z-10 w-auto">
                            <Image
                                src={Upper}
                                alt="bloq"
                                width={1440}
                                height={269}
                            />
                        </span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 mt-10 leading-loose sm:leading-10 md:leading-[96px] z-10">
                        <span className="text-blue-500">Quantum</span> Algorithm Development made
                        <br />
                        <span className="text-4xl sm:text-5xl md:text-6xl text-white">10x {" "}</span>
                        <span className="text-4xl sm:text-5xl md:text-6xl text-blue-500">Faster {" "}</span>
                        <span className="text-4xl sm:text-5xl md:text-6xl text-white">and {" "}</span>
                        <span className="text-4xl sm:text-5xl md:text-6xl text-blue-500">Easier</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-lg lg:text-lg mb-8 leading-relaxed sm:leading-loose text-neutral-400 z-10">
                        Build quantum algorithms for any of your use cases with
                        <br />
                        simple inputs, <span style={{
                            margin: '0 -0.2em',
                            padding: '0.2em 0.6em',
                            borderRadius: '0.8em 0.3em',
                            background: '#000042',
                            WebkitBoxDecorationBreak: 'clone',
                            boxDecorationBreak: 'clone',
                        }} className="text-purple-300 font-bold">No Coding Required!</span>
                    </p>
                    <Button onClick={handleRedirect} radius='sm' className="bg-blue-500 text-white mb-8 z-10">Book a demo</Button>
                    <div className="flex flex-col items-center justify-center">
                        <span className="absolute z-1 w-auto">
                            <Image
                                src={Lower}
                                alt="bloq"
                                width={1440}
                                height={269}
                            />
                        </span>
                    </div>
                    <div className="flex flex-col items-center z-10">
                        <p className="text-sm sm:text-base text-gray-400 mb-2">Scroll to find out more!</p>
                        <motion.span
                            className="mt-1 cursor-pointer"
                            onClick={scrollToSection}
                            animate={{ rotate: [0, -180, -180, -180] }}
                            transition={spinTransition}
                        >
                            {Icons.Scroll}
                        </motion.span>
                    </div>
                </main>

                {/* Features */}
                <section className="bg-black text-white py-16 mt-16 px-4 md:px-8" id="fast-tracking-section">
                    <div className="text-center mb-10">
                        <div className="flex justify-center items-center mb-4">
                            <span className="inline-block">
                                {Icons.Speedometer}
                            </span>
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Fast-Tracking Quantum Algorithm Development for</h1>
                        <CyclingText />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-24">
                        {featureCardsData.map((card, index) => (
                            <Card
                                key={index}
                                shadow="sm"
                                className="h-50 w-full md:w-50 p-12 text-center bg-[#18181B] flex flex-col items-center gap-8 rounded-2xl"
                            >
                                <div className="flex justify-center items-center h-12 mb-4">
                                    <span className="block mx-auto mb-4">{Icons[card.icon]}</span>
                                </div>
                                <h3 className="text-xl font-bold -mb-4">{card.title}</h3>
                                <p className="text-md text-gray-400">{card.description}</p>
                            </Card>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <p className="lg:text-lg sm:text-md mb-4">Fast track your Quantum Adoption Journey</p>
                        <Button onClick={handleRedirect} size="lg" radius='sm' className="bg-blue-500 text-white px-4 sm:px-6 py-2">Book a demo</Button>
                    </div>
                    <hr className='border-neutral-700 mx-8 mt-8'></hr>
                    <div className="text-center mt-12">
                        <div className="relative">
                            <div className="relative z-10 flex justify-center items-center">
                                <span className="inline-block">
                                    <Image
                                        src={Gradient}
                                        alt="bloq"
                                        width={1440}
                                        height={223}
                                    />
                                </span>
                                <div className="absolute inset-0 flex justify-center items-center">
                                    <Image
                                        src={Bloq}
                                        alt="bloq"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='border-neutral-700 mx-8 mt-8'></hr>
                    <div className="text-center mt-8 text-gray-500 text-xs sm:text-sm">
                        © 2024 Bloq Quantum Pvt Ltd. All Rights Reserved
                    </div>
                </section>
            </div>
        </div>
    );
}