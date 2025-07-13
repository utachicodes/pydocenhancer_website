"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Copy,
  Check,
  Github,
  ExternalLink,
  Book,
  Package,
  Code,
  FileText,
  Search,
  Terminal,
  Zap,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"

export default function PyDocEnhancerSite() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({})
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentExample, setCurrentExample] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStates((prev) => ({ ...prev, [key]: true }))
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [key]: false }))
      }, 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const codeExamples = [
    {
      title: "Install (Recommended)",
      description: "Install PyDocEnhancer with local LLM support (no C++ build tools required)",
      code: "pip install pydocenhancer[local]",
      language: "bash",
      key: "install-local",
      icon: Package,
    },
    {
      title: "Install (llama-cpp-python)",
      description: "Install with llama-cpp-python backend (requires C++ build tools on Windows)",
      code: "pip install pydocenhancer[llama]",
      language: "bash",
      key: "install-llama",
      icon: Package,
    },
    {
      title: "Python API Example",
      description: "Generate docs with the Python API",
      code: `from pydocenhancer import DocEnhancer\n\n# Initialize\nenhancer = DocEnhancer(provider=\"local\", model=\"ollama/llama3.2:latest\", language=\"en\")\nenhancer.generate_docs(module_path=\"my_project/utils.py\", output_dir=\"docs\", language=\"en\")`,
      language: "python",
      key: "python-api",
      icon: Code,
    },
  ]

  const features = [
    {
      title: "Auto-Generated Summaries",
      description: "Summarize modules, classes, and functions with concise, AI-generated overviews.",
      icon: FileText,
    },
    {
      title: "Code Explanations",
      description: "Plain-English explanations of code logic for better understanding and onboarding.",
      icon: Book,
    },
    {
      title: "Semantic Search",
      description: "Query documentation with natural language (e.g., 'find data processing functions').",
      icon: Search,
    },
    {
      title: "Auto-Generated Examples",
      description: "Create working code examples from docstrings automatically.",
      icon: Code,
    },
    {
      title: "Automated Example Testing",
      description: "Extracts and runs code examples from docstrings, reporting results in the docs.",
      icon: Zap,
    },
    {
      title: "Multilingual Documentation",
      description: "Generate documentation in multiple languages (English, French, Spanish, Chinese) using LLM translation.",
      icon: Users,
    },
    {
      title: "Local LLM Support",
      description: "Privacy-first processing with local models (e.g., LLaMA 3.2, ctransformers backend).",
      icon: Package,
    },
    {
      title: "Integrations",
      description: "Works with Sphinx, MkDocs, and Jupyter Notebooks for seamless documentation workflows.",
      icon: ExternalLink,
    },
    {
      title: "README Generation",
      description: "Automatically generate a project-level README summarizing your module, classes, and functions.",
      icon: FileText,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50" : "bg-transparent"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <motion.div
              className="text-xl font-semibold text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              PyDocEnhancer
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {["Features", "Installation", "Documentation"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-200 bg-transparent text-gray-300 hover:text-white"
                  asChild
                >
                  <a href="https://github.com/AbdoullahNdao/PyDocEnhancer" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center min-h-[80vh] px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9] overflow-hidden text-center">
        <div className="container mx-auto max-w-5xl z-10 pt-32 pb-12">
          <motion.h1
            className="text-6xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(14,165,233,0.7)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Python docs, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">made simple</span>
          </motion.h1>
          <p className="mt-8 text-2xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_0_8px_rgba(14,165,233,0.4)]">
            AI-powered documentation with summaries, code explanations, semantic search, and more.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-blue-500/40 text-white px-8 py-3 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-200">
              Get Started
            </Button>
            <Button variant="ghost" className="text-blue-200 hover:text-white border border-blue-400/30 rounded-full px-8 py-3">
              Documentation
            </Button>
          </div>
          {/* Glowy pip install code block */}
          <div className="mt-14 flex justify-center">
            <div className="flex items-center gap-3 px-7 py-5 rounded-2xl bg-white/10 border border-cyan-400/30 shadow-xl shadow-cyan-400/20 backdrop-blur-md relative">
              <Terminal className="w-6 h-6 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" />
              <span className="font-mono text-lg text-blue-100 select-all">pip install pydocenhancer</span>
              <button
                onClick={() => copyToClipboard("pip install pydocenhancer", "hero-install")}
                className="ml-2 p-2 rounded-lg bg-cyan-700/60 hover:bg-cyan-600/80 transition-colors border border-cyan-400/30 shadow-md"
                aria-label="Copy install command"
              >
                <AnimatePresence mode="wait">
                  {copiedStates["hero-install"] ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-cyan-100" />
                  )}
                </AnimatePresence>
              </button>
              <div className="absolute inset-0 rounded-2xl pointer-events-none animate-pulse bg-gradient-to-r from-cyan-400/10 to-blue-500/10 blur-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_12px_rgba(14,165,233,0.7)]">Features</h2>
            <p className="text-lg text-blue-100/90">Everything you need for next-level Python documentation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="bg-gradient-to-br from-blue-900/60 to-blue-800/30 border border-blue-400/30 rounded-2xl p-8 shadow-xl shadow-blue-500/20 hover:shadow-blue-400/40 transition-all duration-300 group relative"
                whileHover={{ scale: 1.04 }}
              >
                <div className="w-14 h-14 flex items-center justify-center mb-6 bg-blue-500/20 rounded-full shadow-lg shadow-blue-400/30 group-hover:shadow-blue-400/60">
                  {React.createElement(feature.icon, { className: "w-8 h-8 text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" })}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100/90">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-16 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9] border-b border-blue-800/40">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(14,165,233,0.7)]">Requirements</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-left">
            <div className="flex items-center gap-4">
              <Package className="w-7 h-7 text-cyan-300" />
              <div>
                <span className="font-semibold text-white">Python 3.8+</span>
                <div className="text-blue-100/90 text-sm">Compatible with modern Python versions</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Zap className="w-7 h-7 text-cyan-300" />
              <div>
                <span className="font-semibold text-white">Local LLM</span>
                <div className="text-blue-100/90 text-sm">e.g., LLaMA 3.2 via ctransformers backend</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ExternalLink className="w-7 h-7 text-cyan-300" />
              <div>
                <span className="font-semibold text-white">Optional: Sphinx or MkDocs</span>
                <div className="text-blue-100/90 text-sm">For documentation integration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section with Modern Code Interface */}
      <section id="installation" className="py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(14,165,233,0.7)]">Quick Start</h2>
            <p className="text-lg text-blue-100/90">Get up and running in minutes</p>
          </div>

          {/* Modern Code Interface */}
          <motion.div
            className="bg-gradient-to-br from-blue-900/60 to-blue-800/30 border border-blue-400/30 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Header with Tabs */}
            <div className="bg-gray-800/50 border-b border-gray-700 px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm font-medium">PyDocEnhancer Quick Start</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">
                  {currentExample + 1} of 3
                </span>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 bg-gray-900/50 rounded-lg p-1">
              {codeExamples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentExample(index)}
                  className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-sm border border-transparent ${
                    currentExample === index
                      ? "bg-blue-600 text-white shadow-lg border-blue-500"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50 border-gray-800"
                  }`}
                >
                  {React.createElement(example.icon, { className: "w-4 h-4" })}
                  <span className="mt-1">{example.title}</span>
                </button>
              ))}
            </div>

            {/* Code Content */}
            <div className="p-8 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 rounded-b-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentExample}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Example Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                        {React.createElement(codeExamples[currentExample].icon, { className: "w-5 h-5" })}
                        {[
                          "Install (Recommended)",
                          "Install (llama-cpp-python)",
                          "Python API Example",
                        ][currentExample]}
                      </h3>
                      <p className="text-sm text-gray-400">{
                        [
                          "Install PyDocEnhancer with local LLM support (no C++ build tools required)",
                          "Install with llama-cpp-python backend (requires C++ build tools on Windows)",
                          "Generate docs with the Python API",
                        ][currentExample]
                      }</p>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard([
                          "pip install pydocenhancer[local]",
                          "pip install pydocenhancer[llama]",
                          `from pydocenhancer import DocEnhancer\n\n# Initialize\nenhancer = DocEnhancer(provider=\"local\", model=\"ollama/llama3.2:latest\", language=\"en\")\nenhancer.generate_docs(module_path=\"my_project/utils.py\", output_dir=\"docs\", language=\"en\")`,
                        ][currentExample], [
                          "install-local",
                          "install-llama",
                          "python-api",
                        ][currentExample])
                      }
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <AnimatePresence mode="wait">
                        {copiedStates[[
                          "install-local",
                          "install-llama",
                          "python-api",
                        ][currentExample]] ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center space-x-2"
                          >
                            <Check className="w-4 h-4 text-green-400" />
                            <span className="text-green-400">Copied!</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center space-x-2"
                          >
                            <Copy className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-400">Copy</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>

                  {/* Code Block */}
                  <div className="bg-black/70 rounded-xl p-8 border border-blue-900/40 shadow-lg mt-2">
                    <pre className="text-sm font-mono overflow-x-auto text-blue-300">
                      <code>{[
                        "pip install pydocenhancer[local]",
                        "pip install pydocenhancer[llama]",
                        `from pydocenhancer import DocEnhancer\n\n# Initialize\nenhancer = DocEnhancer(provider=\"local\", model=\"ollama/llama3.2:latest\", language=\"en\")\nenhancer.generate_docs(module_path=\"my_project/utils.py\", output_dir=\"docs\", language=\"en\")`,
                      ][currentExample]}</code>
                    </pre>
                  </div>

                  {/* Language Badge and Navigation */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        {[
                          "bash",
                          "bash",
                          "python",
                        ][currentExample]}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          setCurrentExample((prev) => (prev - 1 + 3) % 3)
                        }
                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 disabled:opacity-50"
                        disabled={currentExample === 0}
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-400" />
                      </button>
                      <button
                        onClick={() => setCurrentExample((prev) => (prev + 1) % 3)}
                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 disabled:opacity-50"
                        disabled={currentExample === 2}
                      >
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_12px_rgba(14,165,233,0.7)]">Use Cases</h2>
            <p className="text-lg text-blue-100/90">Trusted by developers worldwide</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Open Source Projects",
                description:
                  "Maintain consistent, professional documentation across releases. Generate comprehensive API references automatically.",
                icon: <Github className="w-6 h-6" />,
              },
              {
                title: "Development Teams",
                description:
                  "Standardize documentation practices across your team. Integrate seamlessly with existing workflows.",
                icon: <Users className="w-6 h-6" />,
              },
              {
                title: "Data Scientists",
                description:
                  "Document complex algorithms and data processing pipelines with clear, accessible explanations.",
                icon: <Code className="w-6 h-6" />,
              },
              {
                title: "Independent Developers",
                description:
                  "Create professional documentation without overhead. Focus on building while maintaining quality docs.",
                icon: <Terminal className="w-6 h-6" />,
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="border-gray-800 hover:border-gray-700 transition-all duration-200 h-full bg-gray-900/40 backdrop-blur-sm hover:bg-gray-900/60">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-200">
                      <div className="text-blue-400">{useCase.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="documentation" className="py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-[0_0_12px_rgba(14,165,233,0.7)]">Resources</h2>
            <p className="text-lg text-blue-100/90">Everything you need to get started</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "PyPI Package",
                url: "https://pypi.org/project/pydocenhancer/",
                icon: Package,
                desc: "Official Package",
              },
              {
                name: "GitHub",
                url: "https://github.com/AbdoullahNdao/PyDocEnhancer",
                icon: Github,
                desc: "Source Code",
              },
              {
                name: "Documentation",
                url: "https://github.com/AbdoullahNdao/PyDocEnhancer#readme",
                icon: Book,
                desc: "README Guide",
              },
              {
                name: "Support",
                url: "mailto:abdoullahaljersi@gmail.com",
                icon: ExternalLink,
                desc: "Get Help",
              },
            ].map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="h-auto p-6 flex-col space-y-3 bg-gray-900/40 hover:bg-gray-800/60 border-gray-800 hover:border-gray-700 transition-all duration-200 backdrop-blur-sm w-full group-hover:scale-105"
                >
                  <a
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    <link.icon className="w-8 h-8 text-blue-400" />
                    <span className="font-semibold text-white text-base">{link.name}</span>
                    <span className="text-xs text-gray-500">{link.desc}</span>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6 bg-gray-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <span className="text-gray-500 text-sm">
              © 2025 PyDocEnhancer • Created by <span className="text-gray-400 font-medium">Abdoullah Ndao</span>
            </span>
            <div className="flex items-center space-x-8 text-sm">
              <a
                href="https://github.com/AbdoullahNdao/PyDocEnhancer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-400 transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://github.com/AbdoullahNdao/PyDocEnhancer#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-400 transition-colors duration-200"
              >
                Documentation
              </a>
              <span className="text-gray-600">MIT License</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}