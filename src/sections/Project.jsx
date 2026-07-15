import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMemo, useState, useEffect, useRef } from "react";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Automation Framework",
    desc: "Built a scalable web automation framework for the SauceDemo application using Robot Framework, Python, SeleniumLibrary and the Page Object Model (POM). Automated Login, Inventory, Cart and Checkout workflows with reusable keywords, Data-Driven Testing, Cross-Browser execution, screenshots on failure, Robot Reports, Jenkins-ready architecture and Git/GitHub integration.",
    tech: [
      "Robot Framework",
      "Python",
      "SeleniumLibrary",
      "Page Object Model",
      "Data-Driven Testing",
      "Cross Browser Testing",
      "Robot Reports",
      "Jenkins",
      "Git",
      "GitHub"
    ],
    category: "Automation",
    github: "https://github.com/arijitmukherjee1603-jpg"
  },

  {
    id: 2,
    title: "REST API Automation Framework",
    desc: "Developed a reusable API automation framework using Rest Assured, Java, TestNG and Maven. Automated CRUD operations by validating HTTP status codes, headers, payloads and JSON responses from Swagger APIs while managing the project using Git and GitHub.",
    tech: [
      "Java",
      "Rest Assured",
      "TestNG",
      "Maven",
      "Swagger UI",
      "API Testing",
      "Git",
      "GitHub"
    ],
    category: "Automation",
    github: "https://github.com/arijitmukherjee1603-jpg"
  },

  {
    id: 3,
    title: "QA Testing – E-Commerce Web Application",
    desc: "Executed functional, boundary and negative testing for Registration, Login, Cart, Checkout, Payment and Order modules. Validated REST APIs using Postman and tracked defects using JIRA.",
    tech: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "API Testing",
      "Postman",
      "JIRA"
    ],
    category: "Manual",
    github: "https://github.com/arijitmukherjee1603-jpg"
  },

  {
    id: 4,
    title: "QA Testing – Hospital Management System",
    desc: "Designed and executed test cases for Patient Registration, Appointment Scheduling, Billing and Doctor Management modules while performing Functional, Smoke, Regression and Exploratory Testing.",
    tech: [
      "Manual Testing",
      "Test Case Design",
      "Smoke Testing",
      "Regression Testing",
      "Exploratory Testing",
      "JIRA",
      "TestRail"
    ],
    category: "Manual",
    github: "https://github.com/arijitmukherjee1603-jpg"
  },

  {
    id: 5,
    title: "AI Fitness Trainer",
    desc: "Developed a full-stack AI-powered fitness application using Next.js, Tailwind CSS, Convex, Clerk, Gemini AI and Vapi AI featuring secure authentication, personalized workout generation and voice-based AI assistance. Performed functional and UI testing before deployment.",
    tech: [
      "Next.js",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "Gemini AI",
      "Vapi AI"
    ],
    category: "Development",
    github: "https://github.com/arijitmukherjee1603-jpg"
  }
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20, scale: 0.50, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("latest");
  const [favorites, setFavorites] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

 const categories = [
  "All",
  "Automation",
  "Manual",
  "Development"
];

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const toggleFav = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((f) => f !== id)
        : [...prev, id]
    );
  };

  const processed = useMemo(() => {
    let data = [...projectsData];

    if (filter !== "All") {
      data = data.filter((p) => p.category === filter);
    }

    if (search) {
      data = data.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.desc.toLowerCase().includes(search.toLowerCase()) ||
          p.tech.join(" ").toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "az") {
      data.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort === "latest") {
      data.sort((a, b) => b.id - a.id);
    }

    return data;
  }, [search, filter, sort]);

  return (
    <div id="projects" className="relative min-h-screen text-white px-6 py-10 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
      <div className="absolute inset-0 opacity-40" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10"
      >

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Project Hub</h1>
          <p className="text-gray-400 mt-2">
            Smart filtering • Search • Favorites • Animation system
          </p>
        </div>

        {/* STATS */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
            Total: {projectsData.length}
          </div>
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
            Showing: {processed.length}
          </div>
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
            Favorites: {favorites.length}
          </div>
        </div>

        {/* SEARCH + SORT */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10"
          />

          <select
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
          >
            <option value="latest" className="bg-black">Latest</option>
            <option value="az" className="bg-black">A - Z</option>
          </select>
        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition ${filter === cat
                ? "bg-white text-black"
                : "border-white/20 text-gray-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {processed.map((project) => (
            <motion.div
              key={project.id}
              variants={card}
              onClick={() => setSelectedProject(project)}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0px 10px 30px rgba(0,255,255,0.08)",
              }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 relative cursor-pointer"
            >

              {/* FAVORITE */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFav(project.id);
                }}
                className="absolute top-3 right-3 text-sm"
              >
                {favorites.includes(project.id) ? "❤️" : "🤍"}
              </button>

              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-400 mt-2">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/10 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>

      {/*  MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 w-[90%] max-w-lg relative"
            >

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 transform transition duration-300 hover:scale-125 hover:text-white"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold">
                {selectedProject.title}
              </h2>

              <p className="text-gray-400 mt-3">
                {selectedProject.desc}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {selectedProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-white/10 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 
                bg-gradient-to-r from-cyan-400 to-purple-500 
               text-black font-semibold rounded-lg 
                transition-all duration-300 ease-in-out 
                hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                View on GitHub
              </a>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-80"></div>
    </div>
  );
}