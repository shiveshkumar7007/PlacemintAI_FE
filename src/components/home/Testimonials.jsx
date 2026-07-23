import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    college: "IIT Student",
    review:
      "PlaceMint AI helped me create a structured DSA roadmap and improve my interview preparation.",
  },
  {
    name: "Ananya Singh",
    college: "Computer Science Student",
    review:
      "The AI mock interview feature gave me confidence before my actual placements.",
  },
  {
    name: "Arjun Patel",
    college: "Engineering Student",
    review:
      "Resume analysis helped me understand exactly what recruiters look for.",
  },
];

function Testimonials() {
  // return (
  //   <section className="bg-slate-950 py-24">
  //     <div className="mx-auto max-w-7xl px-6">
  //       {/* Cards Only */}
  //       <div className="grid gap-8 md:grid-cols-3">
  //         {testimonials.map((student, index) => (
  //           <motion.div
  //             key={student.name}
  //             initial={{ opacity: 0, y: 40 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             viewport={{ once: true }}
  //             transition={{ delay: index * 0.15 }}
  //             className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8"
  //           >
  //             <div className="flex gap-1">
  //               {[1, 2, 3, 4, 5].map((star) => (
  //                 <Star key={star} size={18} fill="gold" color="gold" />
  //               ))}
  //             </div>

  //             <p className="mt-6 leading-7 text-slate-300">
  //               "{student.review}"
  //             </p>

  //             <div className="mt-8">
  //               <h3 className="text-lg font-semibold text-white">
  //                 {student.name}
  //               </h3>
  //               <p className="text-slate-400">{student.college}</p>
  //             </div>
  //           </motion.div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}

export default Testimonials;
