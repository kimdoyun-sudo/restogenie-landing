'use client';

import clsx from "clsx";
import { motion } from "framer-motion";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={clsx(
                "relative w-full max-w-sm mx-auto rounded-3xl border-2 lg:max-w-full overflow-hidden transition-all duration-300",
                {
                    "bg-gradient-to-br from-white via-soft-cream/20 to-primary/5 border-primary shadow-2xl ring-4 ring-primary/20": highlight,
                    "bg-white border-gray-200 hover:border-primary/30 hover:shadow-xl": !highlight
                }
            )}
        >
            {/* Most Popular Badge */}
            {highlight && (
                <div className="absolute -top-0 -right-0 bg-gradient-to-br from-orange-accent to-deep-orange text-white px-6 py-2 rounded-bl-2xl shadow-lg flex items-center gap-1.5">
                    <HiSparkles className="w-4 h-4" />
                    <span className="text-sm font-bold">Most Popular</span>
                </div>
            )}

            {/* Header */}
            <div className={clsx("p-8 border-b rounded-t-3xl", {
                "bg-gradient-to-br from-primary/10 to-amber-warm/10 border-primary/20": highlight,
                "border-gray-200": !highlight
            })}>
                <h3 className="text-2xl font-bold mb-2 font-display">{name}</h3>
                <div className="flex items-end gap-2 mb-6">
                    <p className={clsx("text-5xl md:text-6xl font-black font-display", {
                        "text-transparent bg-clip-text bg-gradient-to-r from-orange-accent to-amber-warm": highlight,
                        "text-foreground": !highlight
                    })}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </p>
                    {typeof price === 'number' && (
                        <span className="text-lg font-medium text-foreground-accent mb-2">/mo</span>
                    )}
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={clsx(
                        "w-full py-4 px-6 rounded-full font-bold text-base transition-all duration-300 shadow-md",
                        {
                            "bg-gradient-to-r from-orange-accent to-amber-warm text-white hover:shadow-xl hover:from-deep-orange hover:to-orange-accent": highlight,
                            "bg-gradient-to-r from-gray-100 to-gray-200 text-foreground hover:from-primary/20 hover:to-amber-warm/20 hover:shadow-lg": !highlight
                        }
                    )}
                >
                    Get Started
                </motion.button>
            </div>

            {/* Features */}
            <div className="p-8">
                <p className="font-bold text-sm tracking-wider text-foreground-accent mb-1">FEATURES</p>
                <p className="text-sm text-foreground-accent mb-6">Everything in basic, plus...</p>
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                        >
                            <BsFillCheckCircleFill className={clsx("h-5 w-5 flex-shrink-0 mt-0.5", {
                                "text-orange-accent": highlight,
                                "text-secondary": !highlight
                            })} />
                            <span className="text-foreground-accent leading-relaxed">{feature}</span>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}

export default PricingColumn