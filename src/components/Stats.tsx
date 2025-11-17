// 'use client';

// import { motion } from "framer-motion";
// import { stats } from "@/data/stats"

// const Stats: React.FC = () => {
//     return (
//         <section id="stats" className="py-10 lg:py-20">
//             <div className="grid sm:grid-cols-3 gap-8">
//                 {stats.map((stat, index) => (
//                     <motion.div
//                         key={stat.title}
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.6, delay: index * 0.15 }}
//                         whileHover={{ y: -5, scale: 1.03 }}
//                         className="group text-center sm:text-left max-w-md sm:max-w-full mx-auto p-8 rounded-3xl bg-gradient-to-br from-white to-soft-cream/40 border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300"
//                     >
//                         <div className="relative mb-5 flex items-center gap-4 justify-center sm:justify-start">
//                             {/* Icon with gradient background */}
//                             <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-amber-warm flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
//                                 <div className="text-dark-charcoal text-2xl">
//                                     {stat.icon}
//                                 </div>
//                             </div>

//                             {/* Title with gradient text */}
//                             <h3 className="text-4xl md:text-5xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-orange-accent to-amber-warm">
//                                 {stat.title}
//                             </h3>
//                         </div>

//                         <p className="text-base text-foreground-accent leading-relaxed">
//                             {stat.description}
//                         </p>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     )
// }

// export default Stats

// Stats 컴포넌트는 현재 사용되지 않습니다
const Stats = () => null;
export default Stats;