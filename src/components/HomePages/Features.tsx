// import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
// import { BellIcon, Share2Icon } from "lucide-react";

// import { Calendar } from "@/components/ui/calendar";
// import { cn } from "@/lib/utils";
// import { Marquee } from "../magicui/marquee";
// import { AnimatedListDemo } from "../magicui/animated-list-demo";
// // import AnimatedBeamMultipleOutputDemo from "../magicui/animated-beam-multiple-outputs";
// import { BentoCard, BentoGrid } from "../magicui/bento-grid";
// import { Globe } from "../magicui/globe";
// import { Skill } from "./Skill";

// const files = [
//   {
//     name: "projects.jsx",
//     body: "A showcase of dynamic, high-performance web applications developed using React.js, Next.js, and the MERN stack, focusing on scalability, efficiency, and modern UI/UX principles.",
//   },
//   {
//     name: "techstack.json",
//     body: "A structured overview of my technology stack, featuring React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, and REST & GraphQL APIs, optimized for full-stack development.",
//   },
//   {
//     name: "ui-design.css",
//     body: "A collection of handcrafted, reusable UI components built with Tailwind CSS and Framer Motion, ensuring seamless responsiveness, accessibility, and engaging user interactions.",
//   },
//   {
//     name: "clients.md",
//     body: "Authentic client testimonials and project collaborations highlighting problem-solving skills, clean code practices, and the impact of my web development expertise.",
//   },
//   {
//     name: "case-study.js",
//     body: "Detailed insights into complex project solutions, covering development challenges, strategic approaches, and optimized code implementations for scalable applications.",
//   },
// ];

// const features = [
//   {
//     Icon: FileTextIcon,
//     name: "Web Development Expertise",
//     description: "Crafting scalable, high-performance web solutions with modern tech.",
//     href: "#",
//     cta: "Learn more",
//     className: "col-span-3 lg:col-span-1 bgblack",
//     background: (
//       <Marquee
//         pauseOnHover
//         className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] bg-transparent"
//       >
//         {files.map((f, idx) => (
//           <figure
//             key={idx}
//             className={cn(
//               "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4 ",
//               "border-red-950/[.1] bg-gray-950/[1.01] hover:bg-gray-950/[.05]",
//               "border-red-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
//               "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
//             )}
//           >
//             <div className="flex flex-row items-center gap-2">
//               <div className="flex flex-col">
//                 <figcaption className="text-sm font-medium text-white ">
//                   {f.name}
//                 </figcaption>
//               </div>
//             </div>
//             <blockquote className="text-xs mt2">{f.body}</blockquote>
//           </figure>
//         ))}
//       </Marquee>
//     ),
//   },
//   {
//     Icon: BellIcon,
//     name: "Project Updates",
//     description: "Stay informed with real-time updates on new projects and features.",
//     href: "#",
//     cta: "Get Notified",
//     className: "col-span-3 lg:col-span-1",
//     background: (
//       <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
//     ),
//   },
//   {
//     Icon: BellIcon,
//     name: "Tech stacks I'm familiar with",
//     description: "Expertise in React, Next.js, Node.js, and scalable web solutions.",
//     href: "#",
//     cta: "Discover More",
//     className: "col-span-3 lg:col-span-1 bgblack  ",
//     background: (
//       <div
//         className={`absolute right2 lg:top-[-2.9rem] xl:top-0 h-[300px] w-full scale75 bg-transparent border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_50%)] group-hover:scale-90}`}
//       >
//         <Skill />
//       </div>
//     ),
//   },
//   {
//     Icon: Share2Icon,
//     name: "Global Reach",
//     description: "Delivering scalable and innovative web solutions for a worldwide audience.",
//     href: "#",
//     cta: "Explore",
//     className: "col-span-3 lg:col-span-2",
//     background: <Globe className="absolute left-28 lg:left-48 top-8 " />,
//   },
//   {
//     Icon: CalendarIcon,
//     name: "Schedule a Meeting",
//     description: "Book a time to discuss projects, collaborations, or ideas effortlessly.",
//     className: "col-span-3 lg:col-span-1",
//     href: "#",
//     cta: "Book Now",
//     background: (
//       <Calendar
//         mode="single"
//         selected={new Date(2022, 4, 11, 0, 0, 0)}
//         className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
//       />
//     ),
//   },
// ];

// export function BentoDemo() {
//   return (
//     <BentoGrid>
//       {features.map((feature, idx) => (
//         <BentoCard key={idx} {...feature} />
//       ))}
//     </BentoGrid>
//   );
// }









// FILE: components/sections/Features.tsx

// "use client";

// import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
// import { BellIcon, Share2Icon } from "lucide-react";
// import { Calendar } from "@/components/ui/calendar";
// import { cn } from "@/lib/utils";
// import { Marquee } from "../magicui/marquee";
// import { AnimatedListDemo } from "../magicui/animated-list-demo";
// import { BentoCard, BentoGrid } from "../magicui/bento-grid";
// import { Globe } from "../magicui/globe";
// import { Skill } from "./Skill";
// import { motion } from "framer-motion";

// // Detect Windows + Low-end devices
// const isWindows =
//   typeof navigator !== "undefined" &&
//   navigator.userAgent.includes("Windows");

// // Reduce animation usage for Windows devices
// const ANIMATION_ENABLED = !isWindows;

// // Dummy Files Content
// const files = [
//   {
//     name: "projects.jsx",
//     body: "A showcase of dynamic, modern web applications built using React.js, Next.js, and the MERN stack.",
//   },
//   {
//     name: "techstack.json",
//     body: "Overview of technologies: React.js, Next.js, Node.js, MongoDB, Tailwind CSS, and more.",
//   },
//   {
//     name: "ui-design.css",
//     body: "Reusable UI components made with Tailwind CSS and Framer Motion.",
//   },
//   {
//     name: "clients.md",
//     body: "Real client testimonials highlighting problem-solving and clean code practices.",
//   },
//   {
//     name: "case-study.js",
//     body: "Detailed insights into development challenges and scalable solutions.",
//   },
// ];

// // Feature List
// const features = [
//   {
//     Icon: FileTextIcon,
//     name: "Web Development Expertise",
//     description: "Building high-performance, scalable websites and applications.",
//     href: "#",
//     cta: "Learn more",
//     className: "col-span-3 lg:col-span-1 bgblack",
//     background: ANIMATION_ENABLED ? (
//       <Marquee
//         pauseOnHover
//         className="absolute top-10 [--duration:40s] bg-transparent"
//       >
//         {files.map((f, idx) => (
//           <figure
//             key={idx}
//             className={cn(
//               "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
//               "border-white/10 bg-gray-50/[.08] hover:bg-gray-50/[.12]",
//               "transition-opacity duration-200"
//             )}
//           >
//             <figcaption className="text-sm font-medium text-white">
//               {f.name}
//             </figcaption>
//             <blockquote className="mt-2 text-xs text-gray-300">
//               {f.body}
//             </blockquote>
//           </figure>
//         ))}
//       </Marquee>
//     ) : null,
//   },

//   {
//     Icon: BellIcon,
//     name: "Project Updates",
//     description: "Get real-time updates on new features and releases.",
//     href: "#",
//     cta: "Get Notified",
//     className: "col-span-3 lg:col-span-1",
//     background: ANIMATION_ENABLED ? (
//       <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 transition-all duration-200" />
//     ) : null,
//   },

//   {
//     Icon: BellIcon,
//     name: "Tech Stack I Use",
//     description: "Specialized in React, Next.js, Node.js and scalable systems.",
//     href: "#",
//     cta: "Discover More",
//     className: "col-span-3 lg:col-span-1 bgblack",
//     background: (
//       <div className="absolute top-0 h-[300px] w-full scale-75 transition-all duration-200 bg-transparent">
//         <Skill />
//       </div>
//     ),
//   },

//   {
//     Icon: Share2Icon,
//     name: "Global Reach",
//     description: "Delivering web solutions to clients worldwide.",
//     href: "#",
//     cta: "Explore",
//     className: "col-span-3 lg:col-span-2",
//     background: (
//       <Globe
//         className="absolute left-20 lg:left-48 top-8 globe-animation"
//         quality={0.6}
//         scale={0.7}
//         fps={28}
//       />
//     ),
//   },

//   {
//     Icon: CalendarIcon,
//     name: "Schedule a Meeting",
//     description: "Book a call to discuss your project or ideas.",
//     className: "col-span-3 lg:col-span-1",
//     href: "#",
//     cta: "Book Now",
//     background: ANIMATION_ENABLED ? (
//       <Calendar
//         mode="single"
//         selected={new Date()}
//         className="absolute right-0 transition-all duration-200 scale-75 bg-transparent top-10"
//       />
//     ) : null,
//   },
// ];

// // Component Render
// export function BentoDemo() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ amount: 0.2 }}
//     >
//       <BentoGrid>
//         {features.map((feature, idx) => (
//           <BentoCard key={idx} {...feature} />
//         ))}
//       </BentoGrid>
//     </motion.div>
//   );
// }











import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import { AnimatedListDemo } from "../magicui/animated-list-demo";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import { Globe } from "../magicui/globe";
import { Skill } from "./Skill";
import { motion } from "framer-motion";

const files = [
  {
    name: "projects.jsx",
    body: "A showcase of dynamic, high-performance web applications developed using React.js, Next.js, and the MERN stack.",
  },
  {
    name: "techstack.json",
    body: "My technology stack includes React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.",
  },
  {
    name: "ui-design.css",
    body: "Handcrafted UI components built with Tailwind CSS and Framer Motion.",
  },
  {
    name: "clients.md",
    body: "Client testimonials and real project collaborations showcasing my problem-solving skills.",
  },
  {
    name: "case-study.js",
    body: "Detailed insights into projects, challenges, strategies, and scalable solutions.",
  },
];

// ---------------------------------------------
// OPTIMIZED ANIMATION (NO UI CHANGE)
// ---------------------------------------------
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const features = [
  {
    Icon: FileTextIcon,
    name: "Web Development Expertise",
    description: "Crafting scalable, high-performance web solutions with modern tech.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 bgblack",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:35s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] bg-transparent"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-red-50/[.08] bg-gray-50/[.08] hover:bg-gray-50/[.15]",
              "transition-opacity duration-200",
              "transformgpu blur-[0.8px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <figcaption className="text-sm font-medium text-white">
              {f.name}
            </figcaption>
            <blockquote className="mt-2 text-xs opacity-70">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },

  {
    Icon: BellIcon,
    name: "Project Updates",
    description: "Stay informed with real-time updates on new projects and features.",
    href: "#",
    cta: "Get Notified",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
),
  },

  {
    Icon: BellIcon,
    name: "Tech stacks I'm familiar with",
    description: "Expertise in React, Next.js, Node.js, and scalable web solutions.",
    href: "#",
    cta: "Discover More",
    className: "col-span-3 lg:col-span-1 bgblack",
    background: (
      <div className="absolute lg:top-[-2.9rem] xl:top-0 h-[300px] w-full bg-transparent transition-all duration-300 ease-out">
        <Skill />
      </div>
    ),
  },

  {
    Icon: Share2Icon,
    name: "Global Reach",
    description: "Delivering scalable and innovative web solutions for a worldwide audience.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Globe className="absolute left-28 lg:left-48 top-8" />
    ),
  },

  {
    Icon: CalendarIcon,
    name: "Schedule a Meeting",
    description: "Book a time to discuss projects, collaborations, or ideas effortlessly.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Book Now",
    background: (
      <Calendar
              mode="single"
              selected={new Date(2022, 4, 11, 0, 0, 0)}
              className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
            />
    ),
  },
];

export function BentoDemo() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeIn}
    >
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </motion.div>
  );
}
