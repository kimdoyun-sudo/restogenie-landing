import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="group flex flex-col items-center mt-6 gap-3 lg:gap-4 lg:flex-row lg:items-start p-5 rounded-2xl bg-gradient-to-br from-white to-soft-cream/30 border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            variants={childVariants}
            whileHover={{ scale: 1.02, y: -2 }}
        >
            <div className="flex justify-center mx-auto lg:mx-0 flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-amber-warm items-center shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <div className="text-dark-charcoal">
                    {icon}
                </div>
            </div>
            <div className="text-center lg:text-left">
                <h4 className="text-lg font-bold text-foreground mb-1 font-display">
                    {title}
                </h4>
                <p className="text-base text-foreground-accent leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet