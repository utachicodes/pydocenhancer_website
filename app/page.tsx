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
      title: "Installation",
      description: "Install PyDocEnhancer using pip",
      code: "pip install pydocenhancer",
      language: "bash",
      key: "install-cmd",
      icon: <Package className="w-4 h-4" />,
    },
    {
      title: "Basic Usage",
      description: "Generate documentation with Python API",
      code: `from pydocenhancer import DocEnhancer

# Create enhancer instance
enhancer = DocEnhancer("./src")

# Generate documentation
enhancer.generate_docs("./docs")`,
      language: "python",
      key: "basic-usage",
      icon: <Code className="w-4 h-4" />,
    },
    {
      title: "Advanced Configuration",
      description: "Customize your documentation generation",
      code: `from pydocenhancer import DocEnhancer

# Advanced configuration
enhancer = DocEnhancer(
    source_path="./src",
    output_format="markdown",
    include_private=False,
    theme="modern"
)

# Generate with custom settings
enhancer.generate_docs(
    output_path="./docs",
    include_examples=True,
    auto_link=True
)`,
      language: "python",
      key: "advanced-usage",
      icon: <Zap className="w-4 h-4" />,
    },
    {
      title: "Command Line",
      description: "Use the CLI for quick documentation generation",
      code: `# Basic CLI usage
pydocenhancer ./src --output ./docs

# With custom format
pydocenhancer ./src --output ./docs --format markdown

# Include examples and private methods
pydocenhancer ./src --output ./docs --include-private --examples`,
      language: "bash",
      key: "cli-usage",
      icon: <Terminal className="w-4 h-4" />,
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
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Python docs,
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                made simple
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              AI-powered Python plugin to enhance documentation with summaries, code explanations, examples, semantic search, automated example testing, and multilingual documentation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-gray-400 hover:text-white px-8 py-3 text-base font-medium transition-colors duration-200"
                asChild
              >
                <a href="https://github.com/AbdoullahNdao/PyDocEnhancer#readme" target="_blank" rel="noopener noreferrer">
                  Documentation
                </a>
              </Button>
            </div>

            {/* Installation Preview */}
            <motion.div
              className="max-w-xl mx-auto mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-400 font-medium">Quick Install</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("pip install pydocenhancer", "hero-install")}
                    className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  >
                    <AnimatePresence mode="wait">
                      {copiedStates["hero-install"] ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" />
                      )}
                    </AnimatePresence>
                  </button>
                </div>
                <div className="bg-black rounded-lg p-4 font-mono">
                  <code className="text-blue-400 text-sm">pip install pydocenhancer</code>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Features</h2>
            <p className="text-lg text-gray-400">Everything you need for next-level Python documentation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Auto-Generated Summaries",
                description: "Summarize modules, classes, and functions with concise, AI-generated overviews.",
                icon: <FileText className="w-5 h-5" />,
              },
              {
                title: "Code Explanations",
                description: "Plain-English explanations of code logic for better understanding and onboarding.",
                icon: <Book className="w-5 h-5" />,
              },
              {
                title: "Semantic Search",
                description: "Query documentation with natural language (e.g., 'find data processing functions').",
                icon: <Search className="w-5 h-5" />,
              },
              {
                title: "Auto-Generated Examples",
                description: "Create working code examples from docstrings automatically.",
                icon: <Code className="w-5 h-5" />,
              },
              {
                title: "Automated Example Testing",
                description: "Extracts and runs code examples from docstrings, reporting results in the docs.",
                icon: <Zap className="w-5 h-5" />,
              },
              {
                title: "Multilingual Documentation",
                description: "Generate documentation in multiple languages (English, French, Spanish, Chinese) using LLM translation.",
                icon: <Users className="w-5 h-5" />,
              },
              {
                title: "Local LLM Support",
                description: "Privacy-first processing with local models (e.g., LLaMA 3.2, ctransformers backend).",
                icon: <Package className="w-5 h-5" />,
              },
              {
                title: "Integrations",
                description: "Works with Sphinx, MkDocs, and Jupyter Notebooks for seamless documentation workflows.",
                icon: <ExternalLink className="w-5 h-5" />,
              },
              {
                title: "README Generation",
                description: "Automatically generate a project-level README summarizing your module, classes, and functions.",
                icon: <FileText className="w-5 h-5" />,
              },
            ].map((feature, index) => (
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
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-200">
                      <div className="text-blue-400">{feature.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section with Modern Code Interface */}
      <section id="installation" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Quick Start</h2>
            <p className="text-lg text-gray-400">Get up and running in minutes</p>
            <div className="mt-4 text-base text-blue-300 font-medium">
              <span>LLM Requirement:</span> PyDocEnhancer requires a real LLM provider and model.<br />
              <span className="text-gray-300">Specify a valid provider (e.g., <code>local</code> for ctransformers/Ollama, or <code>openai</code> for OpenAI API) and a model (e.g., <code>ollama/llama3.2:latest</code>). Mock mode is not supported.</span>
            </div>
          </div>

          {/* Modern Code Interface */}
          <motion.div
            className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Header with Tabs */}
            <div className="bg-gray-800/50 border-b border-gray-700 px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-medium">PyDocEnhancer Examples</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">
                    {currentExample + 1} of {codeExamples.length}
                  </span>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-gray-900/50 rounded-lg p-1">
                {[
                  {
                    title: "Install (Recommended)",
                    description: "Install PyDocEnhancer with local LLM support (no C++ build tools required)",
                    code: "pip install pydocenhancer[local]",
                    language: "bash",
                    key: "install-local",
                    icon: <Package className="w-4 h-4" />,
                  },
                  {
                    title: "Install (llama-cpp-python)",
                    description: "Install with llama-cpp-python backend (requires C++ build tools on Windows)",
                    code: "pip install pydocenhancer[llama]",
                    language: "bash",
                    key: "install-llama",
                    icon: <Package className="w-4 h-4" />,
                  },
                  {
                    title: "Python API Quick Start",
                    description: "Generate docs, README, and search with the Python API",
                    code: `from pydocenhancer import DocEnhancer\n\n# Initialize with a real LLM (Ollama or LLaMA)\nenhancer = DocEnhancer(provider=\"local\", model=\"ollama/llama3.2:latest\", language=\"en\")\nenhancer.generate_docs(module_path=\"my_project/utils.py\", output_dir=\"docs\", language=\"en\")\n\n# Generate a README for your project\nenhancer.generate_readme(module_path=\"my_project/utils.py\", output_path=\"README.generated.md\", language=\"en\")\n\n# Search documentation\nresults = enhancer.search_docs(\"file handling functions\", \"docs\")\nprint(results)`,
                    language: "python",
                    key: "python-api",
                    icon: <Code className="w-4 h-4" />,
                  },
                  {
                    title: "CLI: Generate Docs",
                    description: "Generate documentation with Ollama in English, with example testing",
                    code: "pydocenhancer enhance --module my_project/utils.py --output docs/ --provider local --model ollama/llama3.2:latest --language en",
                    language: "bash",
                    key: "cli-generate-docs",
                    icon: <Terminal className="w-4 h-4" />,
                  },
                  {
                    title: "CLI: Generate README",
                    description: "Generate a project-level README from your codebase",
                    code: "pydocenhancer generate-readme --module my_project/utils.py --output README.generated.md --provider local --model ollama/llama3.2:latest --language en",
                    language: "bash",
                    key: "cli-generate-readme",
                    icon: <FileText className="w-4 h-4" />,
                  },
                  {
                    title: "CLI: Search Docs",
                    description: "Search documentation with natural language",
                    code: "pydocenhancer search --query \"data processing functions\" --docs-dir docs/",
                    language: "bash",
                    key: "cli-search",
                    icon: <Search className="w-4 h-4" />,
                  },
                ].map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentExample(index)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      currentExample === index
                        ? "bg-blue-600 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`}
                  >
                    {example.icon}
                    <span className="hidden sm:inline">{example.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6">
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
                      <h3 className="text-xl font-semibold text-white mb-2">{codeExamples[currentExample].title}</h3>
                      <p className="text-sm text-gray-400">{codeExamples[currentExample].description}</p>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(codeExamples[currentExample].code, codeExamples[currentExample].key)
                      }
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <AnimatePresence mode="wait">
                        {copiedStates[codeExamples[currentExample].key] ? (
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
                  <div className="bg-black/50 rounded-xl p-6 border border-gray-800/50">
                    <pre className="text-sm font-mono overflow-x-auto">
                      <code className="text-blue-400 leading-relaxed">{codeExamples[currentExample].code}</code>
                    </pre>
                  </div>

                  {/* Language Badge and Navigation */}
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        {codeExamples[currentExample].language}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          setCurrentExample((prev) => (prev - 1 + codeExamples.length) % codeExamples.length)
                        }
                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 disabled:opacity-50"
                        disabled={currentExample === 0}
                      >
                        <ChevronLeft className="w-4 h-4 text-gray-400" />
                      </button>
                      <button
                        onClick={() => setCurrentExample((prev) => (prev + 1) % codeExamples.length)}
                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 disabled:opacity-50"
                        disabled={currentExample === codeExamples.length - 1}
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
      <section className="py-20 px-6 bg-gray-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Use Cases</h2>
            <p className="text-lg text-gray-400">Trusted by developers worldwide</p>
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
      <section id="documentation" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Resources</h2>
            <p className="text-lg text-gray-400">Everything you need to get started</p>
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
