// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { HiStar } from 'react-icons/hi2';
// import { testimonials } from '@/data/testimonials';

// const Testimonials: React.FC = () => {
//     return (
//         <div className="grid gap-8 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
//             {testimonials.map((testimonial, index) => (
//                 <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: index * 0.15 }}
//                     whileHover={{ y: -5, scale: 1.02 }}
//                     className="relative bg-gradient-to-br from-white to-soft-cream/40 p-8 rounded-3xl border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
//                 >
//                     {/* Decorative quote mark */}
//                     <div className="absolute top-4 right-6 text-8xl font-serif text-primary/10 leading-none select-none">
//                         &quot;
//                     </div>

//                     {/* Rating Stars */}
//                     <div className="flex gap-1 mb-4">
//                         {[...Array(5)].map((_, i) => (
//                             <HiStar key={i} className="w-5 h-5 text-amber-warm" />
//                         ))}
//                     </div>

//                     {/* Testimonial Message */}
//                     <p className="text-foreground-accent text-base leading-relaxed mb-6 relative z-10">
//                         &quot;{testimonial.message}&quot;
//                     </p>

//                     {/* Author Info */}
//                     <div className="flex items-center gap-4 pt-6 border-t-2 border-primary/10">
//                         <div className="relative">
//                             <div className="absolute inset-0 bg-gradient-to-br from-primary to-amber-warm rounded-full blur-sm opacity-50"></div>
//                             <Image
//                                 src={testimonial.avatar}
//                                 alt={`${testimonial.name} avatar`}
//                                 width={56}
//                                 height={56}
//                                 className="relative rounded-full ring-2 ring-white shadow-md"
//                             />
//                         </div>
//                         <div>
//                             <h3 className="text-lg font-bold text-foreground font-display">
//                                 {testimonial.name}
//                             </h3>
//                             <p className="text-sm text-foreground-accent font-medium">
//                                 {testimonial.role}
//                             </p>
//                         </div>
//                     </div>
//                 </motion.div>
//             ))}
//         </div>
//     );
// };

// export default Testimonials;

// Testimonials 컴포넌트는 현재 사용되지 않습니다
const Testimonials = () => null;
export default Testimonials;
