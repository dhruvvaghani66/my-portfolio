import { motion } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: "1+" },
  { label: "Projects Delivered", value: "10+" },
  { label: "Primary Stack", value: "React / Next Js" },
  { label: "Availability", value: "Open to Work" },
];

const About = () => {
  return (
    <section className="mb-12 py4 md:mb-16 min-hscreen">
      <div className="max-w-6xl px-6 mx-auto">
        {/* CENTER HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center md:mb-16"
        >
          <h1 className="text-5xl font-bold text-[#f4f4f5]">About Me</h1>
        </motion.div>

        <div className="grid items-start gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-medium leading-tight text-[#f4f4f5]">
              Building software that{" "}
              <span className="text-[#a1a1aa]">solves real problems.</span>
            </h2>

            {/* Name */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-2xl font-semibold text-[#f4f4f5]">
                Dhruv Vaghani
              </h3>
              <p className="mt-2 text-base text-[#a1a1aa]">Frontend Engineer</p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-[#a1a1aa] leading-relaxed">
              <p>
                I’m a Frontend Engineer specializing in building clean,
                responsive, and accessible user interfaces for modern web
                applications.
              </p>
              <p>
                My work focuses on performance, usability, and design
                consistency — translating complex requirements into intuitive
                experiences that scale across devices and teams.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="
    inline-flex items-center gap-2
    px-6 py-3 text-sm font-medium
    text-[#f4f4f5]
    border border-white/15
    rounded-md
    bg-transparent
    transition-all duration-300 ease-out
    hover:bg-white
    hover:text-black
    hover:border-white
  "
            >
              Let’s work together →
            </motion.a>
          </motion.div>

          {/* RIGHT - STATS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4 lg:mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="p-6 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.25] hover:bg-white/[0.05] transition"
              >
                <div className="text-3xl font-semibold text-[#f4f4f5]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[#a1a1aa]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
