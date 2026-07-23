// import { motion } from "framer-motion";
// import { Brain, Sparkles } from "lucide-react";

// const hero = {
//   badge: "100% FREE AI PLATFORM",
//   title: "Land Your Dream Job",
//   subtitle: "with AI-powered Preparation",
//   description: "Practice DSA, AI Resume Review, Mock Interviews, Aptitude Tests and Company-wise Interview Preparation in one intelligent platform.",
// };

// function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-slate-950">
//       {/* Background Glow */}
//       <div className="absolute left-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[170px]" />
//       <div className="absolute right-[-150px] bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[170px]" />

//       <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center justify-between gap-14 px-6 py-12 lg:flex-row">
//         {/* LEFT */}
//         <motion.div
//           initial={{ opacity: 0, x: -70 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="w-full lg:w-1/2"
//         >
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2">
//             <Sparkles size={18} className="text-cyan-400" />
//             <span className="text-sm font-semibold tracking-wide text-cyan-300">
//               {hero.badge}
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
//             {hero.title}
//             <span className="mt-2 block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               {hero.subtitle}
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
//             {hero.description}
//           </p>
//         </motion.div>

//         {/* RIGHT */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex w-full justify-center lg:w-1/2"
//         >
//           <div className="relative">
//             <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-[120px]" />

//             <motion.div
//               animate={{ y: [0, -18, 0] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 4,
//               }}
//               className="relative flex h-[280px] w-[280px] items-center justify-center rounded-[40px] border border-slate-800 bg-slate-900 shadow-2xl sm:h-[350px] sm:w-[350px] lg:h-[480px] lg:w-[480px]"
//             >
//               <Brain size={170} className="text-cyan-400" />
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";

const hero = {
  badge: "100% FREE AI PLATFORM",
  title: "Land Your Dream Job",
  subtitle: "with AI-powered Preparation",
  description:
    "Practice DSA, AI Resume Review, Mock Interviews, Aptitude Tests and Company-wise Interview Preparation in one intelligent platform.",
};

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Subtle Background Glows (Cleaned up opacity for a modern look) */}
      <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute right-[-10%] bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 py-16 lg:flex-row">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-center lg:w-1/2 lg:text-left"
        >
          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 lg:mx-0">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-xs font-bold tracking-wider text-cyan-300">
              {hero.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            {hero.title}
            <span className="mt-3 block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text pb-2 text-transparent">
              {hero.subtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-slate-400 lg:mx-0">
            {hero.description}
          </p>
        </motion.div>

        {/* RIGHT IMAGE/ICON (Animation Removed & UI Cleaned) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex w-full justify-center lg:w-1/2"
        >
          <div className="relative">
            {/* Behind Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[100px]" />

            {/* Main Card - Static, No y-axis animation, cleaner modern borders */}
            <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-[3rem] border border-white/5 bg-slate-900/80 shadow-2xl backdrop-blur-xl sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px]">
              <Brain 
                size={140} 
                strokeWidth={1.5} 
                className="text-cyan-400 sm:h-[180px] sm:w-[180px]" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;