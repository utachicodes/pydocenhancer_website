# PyDocEnhancer Website

Welcome to the website for **PyDocEnhancer** an AI-powered Python plugin that enhances your documentation with summaries, code explanations, examples, semantic search, automated example testing, and multilingual support.

## What is PyDocEnhancer?
PyDocEnhancer is a powerful tool designed to supercharge your Python documentation using the latest AI models. It provides:
- **Auto-Generated Summaries** for modules, classes, and functions
- **Plain-English Code Explanations**
- **Semantic Search** (natural language queries)
- **Auto-Generated and Tested Examples**
- **Multilingual Documentation** (English, French, Spanish, Chinese, and more)
- **Local LLM Support** for privacy-first workflows
- **Integrations** with Sphinx, MkDocs, and Jupyter Notebooks

## About This Website
Here you can:
- **Explore Features**: Learn about what PyDocEnhancer can do for your projects
- **Read Documentation**: Find installation guides, requirements, and troubleshooting tips
- **Get Support**: Access common error solutions and platform-specific advice (especially for Windows users)
- **Stay Updated**: Get the latest news and release information
- **Find Links**: Quickly access the PyPI and GitHub pages for installation and advanced usage

## Quick Links
- **PyDocEnhancer on PyPI**: [https://pypi.org/project/pydocenhancer/](https://pypi.org/project/pydocenhancer/)
- **PyDocEnhancer GitHub**: [https://github.com/utachicodes/PyDocEnhancer](https://github.com/utachicodes/PyDocEnhancer)

## Requirements & Installation
- **Python 3.8+**
- **Local LLM** (e.g., llama 3.2 via ctransformers) recommended for privacy and performance
- **Sphinx or MkDocs** (optional, for integration)

For most users, install with:
```bash
pip install pydocenhancer[local]
```
This uses the ctransformers backend (no C++ build tools required on most platforms).

For advanced backends (e.g., llama-cpp-python), see the [GitHub documentation](https://github.com/utachicodes/PyDocEnhancer#readme) for platform-specific instructions and troubleshooting.

## LLM Requirement
> **As of version 3.1.0, PyDocEnhancer requires a real LLM provider and model.**
> - Specify a valid provider (e.g., `local` for ctransformers/Ollama, or `openai` for OpenAI API) and a model (e.g., `ollama/llama3.2:latest`).
> - The tool will not run in mock mode or with fake data.

## Troubleshooting & Windows Support
- No C++ build tools required for ctransformers wheels (`pip install pydocenhancer[local]`)
- For llama-cpp-python backend, Visual Studio Build Tools are required (see GitHub for details)
- Common errors and solutions are documented on the [GitHub Issues](https://github.com/utachicodes/PyDocEnhancer/issues) page
- Consider using [WSL](https://learn.microsoft.com/en-us/windows/wsl/) for easier native code compilation on Windows

## Documentation
Full documentation, usage examples, and advanced configuration are available on:
- This website (see navigation)
- [PyDocEnhancer GitHub README](https://github.com/utachicodes/PyDocEnhancer#readme)

## License
MIT © Abdoullah Ndao <abdoullahaljersi@gmail.com>
