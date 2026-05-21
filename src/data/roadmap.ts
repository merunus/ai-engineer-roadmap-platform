import type { Phase } from '../types';

/**
 * AI Engineer Roadmap — content source of truth.
 *
 * Editing tips
 * - Task ids are stable kebab-case (e.g. `p1-m2-streaming`). NEVER change an id once you've
 *   shipped it — it's the primary key in IndexedDB. Change titles freely.
 * - Target ~80% practice / 20% theory overall.
 * - Each task: 1–4 hours, 2–4 resources with real URLs.
 */
export const roadmap: Phase[] = [
  // ===================================================================
  // PHASE 0 — FOUNDATIONS (~45h)
  // ===================================================================
  {
    id: 'p0',
    order: 0,
    title: 'Phase 0 — Foundations',
    summary:
      'Get Python fluency, a working dev environment, and the mental model you need to talk about LLMs without hand-waving. ~45h.',
    modules: [
      {
        id: 'p0-m1',
        title: '0.1 Python for JavaScript Developers',
        goal: 'Become comfortable enough in Python that the language stops being the bottleneck — you reach for it as easily as JS.',
        tasks: [
          {
            id: 'p0-m1-install',
            title: 'Install Python 3.12 and uv',
            type: 'practice',
            estimatedHours: 1,
            description:
              'Install Python 3.12 and `uv` (the fast Astral package manager). Verify with `python --version` and `uv --version`. Create a throwaway project with `uv init demo && cd demo && uv run python -c "print(1+1)"`.',
            deliverable:
              'A working `uv` install. `uv run python --version` prints 3.12.x.',
            resources: [
              {
                label: 'uv — installation',
                url: 'https://docs.astral.sh/uv/getting-started/installation/',
                kind: 'docs',
              },
              {
                label: 'uv — project workflow',
                url: 'https://docs.astral.sh/uv/guides/projects/',
                kind: 'docs',
              },
              {
                label: 'python.org downloads',
                url: 'https://www.python.org/downloads/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p0-m1-syntax-translation',
            title: 'JS → Python syntax cheatsheet',
            type: 'theory',
            estimatedHours: 2,
            description:
              'Build a one-page mental map: variables, functions, classes, modules, conditionals, loops, exceptions, truthiness, equality, scope. Write the JS version next to the Python version for each.',
            resources: [
              {
                label: 'Python tutorial (official)',
                url: 'https://docs.python.org/3/tutorial/',
                kind: 'docs',
              },
              {
                label: 'Python for JS devs (RealPython)',
                url: 'https://realpython.com/python-vs-javascript/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p0-m1-comprehensions',
            title: 'List / dict / set comprehensions + generators',
            type: 'practice',
            estimatedHours: 2,
            description:
              'Rewrite 10 common JS `.map`/`.filter`/`.reduce` snippets as Python comprehensions. Then write 3 generators with `yield` and consume them with `for`.',
            deliverable:
              'A notebook (`comprehensions.ipynb`) with 10 translated snippets and 3 generators.',
            resources: [
              {
                label: 'List comprehensions',
                url: 'https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions',
                kind: 'docs',
              },
              {
                label: 'Generators',
                url: 'https://docs.python.org/3/howto/functional.html#generators',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p0-m1-strings-fstrings',
            title: 'Strings, f-strings, and formatting',
            type: 'practice',
            estimatedHours: 1,
            description:
              'Practice f-strings (alignment, precision, debugging `=` syntax), `str.format`, multiline strings, common `str` methods. Build a small report-printer that formats a list of dicts as an aligned table using only stdlib.',
            deliverable: 'A `format_table.py` that prints an aligned table.',
            resources: [
              {
                label: 'f-strings (PEP 498)',
                url: 'https://peps.python.org/pep-0498/',
                kind: 'docs',
              },
              {
                label: 'Format spec mini-language',
                url: 'https://docs.python.org/3/library/string.html#format-specification-mini-language',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p0-m1-exercism-1-10',
            title: 'Exercism Python katas 1–10',
            type: 'practice',
            estimatedHours: 4,
            description:
              'Work through the first 10 exercises on the Exercism Python track. Focus on idiomatic Python — submit, read mentor feedback / community solutions, then refactor.',
            deliverable: '10 passing Exercism submissions, refactored after review.',
            resources: [
              {
                label: 'Exercism — Python track',
                url: 'https://exercism.org/tracks/python',
                kind: 'course',
              },
            ],
          },
          {
            id: 'p0-m1-exercism-11-20',
            title: 'Exercism Python katas 11–20',
            type: 'practice',
            estimatedHours: 4,
            description:
              'Continue the Python track. By the end you should be reaching for dict/set/comprehension/`enumerate`/`zip` without thinking.',
            deliverable: '10 more Exercism solutions submitted.',
            resources: [
              {
                label: 'Exercism — Python track',
                url: 'https://exercism.org/tracks/python',
                kind: 'course',
              },
            ],
          },
          {
            id: 'p0-m1-cli-tool',
            title: 'Build a small CLI tool with argparse',
            type: 'practice',
            estimatedHours: 2,
            description:
              'Build a CLI that does something genuinely useful for you — e.g. a word counter, a JSON pretty-printer, or a markdown link extractor. Use `argparse`, exit codes, and stdin support.',
            deliverable:
              'A single-file CLI runnable with `uv run my-tool ...` and `--help`.',
            resources: [
              {
                label: 'argparse tutorial',
                url: 'https://docs.python.org/3/howto/argparse.html',
                kind: 'docs',
              },
              {
                label: 'Click (alternative)',
                url: 'https://click.palletsprojects.com/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p0-m1-type-hints',
            title: 'Type hints + mypy strict',
            type: 'practice',
            estimatedHours: 2,
            description:
              'Annotate your CLI tool with full type hints. Run `mypy --strict` and fix every error. Understand `Optional`, `Union`, `TypedDict`, `Protocol`, and the new `|` union syntax.',
            deliverable: '`mypy --strict` passes on your CLI with zero errors.',
            resources: [
              {
                label: 'mypy — getting started',
                url: 'https://mypy.readthedocs.io/en/stable/getting_started.html',
                kind: 'docs',
              },
              {
                label: 'typing — official docs',
                url: 'https://docs.python.org/3/library/typing.html',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p0-m1-asyncio',
            title: 'asyncio + async URL fetcher',
            type: 'practice',
            estimatedHours: 2,
            description:
              'Learn `async`/`await`, `asyncio.gather`, and async context managers. Build a CLI that takes a list of URLs and fetches them concurrently with `httpx.AsyncClient`, printing status + latency for each.',
            deliverable:
              'A `fetch.py` that fetches N URLs in parallel and prints a per-URL summary.',
            resources: [
              {
                label: 'asyncio — official intro',
                url: 'https://docs.python.org/3/library/asyncio.html',
                kind: 'docs',
              },
              {
                label: 'httpx async client',
                url: 'https://www.python-httpx.org/async/',
                kind: 'docs',
              },
              {
                label: 'RealPython — async IO walkthrough',
                url: 'https://realpython.com/async-io-python/',
                kind: 'article',
              },
            ],
          },
        ],
      },
      {
        id: 'p0-m2',
        title: '0.2 Dev Environment & Tooling',
        goal: 'A productive notebook + script workflow with secrets, env, and HTTP — so the rest of the roadmap is friction-free.',
        tasks: [
          {
            id: 'p0-m2-vscode-python',
            title: 'Configure VS Code for Python',
            type: 'practice',
            estimatedHours: 1,
            description:
              'Install the official Python and Jupyter extensions. Wire up the `uv`-managed interpreter. Get linting (Ruff) + formatting on save working.',
            deliverable:
              'VS Code recognizes your uv venv; format-on-save works on a `.py` file.',
            resources: [
              {
                label: 'VS Code — Python tutorial',
                url: 'https://code.visualstudio.com/docs/python/python-tutorial',
                kind: 'docs',
              },
              {
                label: 'Ruff — VS Code extension',
                url: 'https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff',
                kind: 'tool',
              },
            ],
          },
          {
            id: 'p0-m2-jupyter-pandas',
            title: 'First notebook: load a CSV with pandas',
            type: 'practice',
            estimatedHours: 2,
            description:
              'Open a Jupyter notebook in VS Code. Load a public CSV (e.g. NYC taxi sample, Iris, or a Kaggle dataset). Use pandas to inspect shape/dtypes, group, and plot a chart with matplotlib.',
            deliverable:
              'A notebook with: `df.head()`, one `groupby` aggregation, one chart.',
            resources: [
              {
                label: 'Jupyter in VS Code',
                url: 'https://code.visualstudio.com/docs/datascience/jupyter-notebooks',
                kind: 'docs',
              },
              {
                label: 'pandas — 10 minutes intro',
                url: 'https://pandas.pydata.org/docs/user_guide/10min.html',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p0-m2-httpx-api',
            title: 'Call a public API with httpx',
            type: 'practice',
            estimatedHours: 2,
            description:
              'In a notebook, call a public REST API (GitHub, OpenWeather free tier, JSONPlaceholder). Parse JSON, handle errors, retry on 5xx. Try the same call with both sync and async clients.',
            deliverable:
              'A notebook that fetches and renders a small dataset from one public API.',
            resources: [
              {
                label: 'httpx — quickstart',
                url: 'https://www.python-httpx.org/quickstart/',
                kind: 'docs',
              },
              {
                label: 'GitHub REST API',
                url: 'https://docs.github.com/en/rest',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p0-m2-env-secrets',
            title: 'Secrets management with .env',
            type: 'practice',
            estimatedHours: 1,
            description:
              'Set up `python-dotenv` (or `pydantic-settings`). Add `.env` to `.gitignore`, load API keys via env vars, and document the env shape in a `.env.example`.',
            deliverable:
              'A repo template you reuse: `.env.example`, `.env` gitignored, settings loaded with type-safe defaults.',
            resources: [
              {
                label: 'python-dotenv',
                url: 'https://pypi.org/project/python-dotenv/',
                kind: 'tool',
              },
              {
                label: 'pydantic-settings',
                url: 'https://docs.pydantic.dev/latest/concepts/pydantic_settings/',
                kind: 'docs',
              },
              {
                label: '12-Factor — config',
                url: 'https://12factor.net/config',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p0-m2-git-template',
            title: 'Personal Python project template',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Make a GitHub template repo: pyproject.toml, uv lockfile, Ruff config, .env.example, README skeleton. You'll reuse this for every project in this roadmap.",
            deliverable:
              'A `python-llm-template` repo on GitHub you can `gh repo create --template` from.',
            resources: [
              {
                label: 'GitHub — template repositories',
                url: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository',
                kind: 'docs',
              },
              {
                label: 'Ruff — configuration',
                url: 'https://docs.astral.sh/ruff/configuration/',
                kind: 'docs',
              },
            ],
          },
        ],
      },
      {
        id: 'p0-m3',
        title: '0.3 ML & Neural-Net Intuition',
        goal: "Build the mental model: what a neural net is, how training/inference differ, what embeddings and attention mean — at the depth an AI app engineer needs.",
        tasks: [
          {
            id: 'p0-m3-3b1b-nn',
            title: '3Blue1Brown — Neural Networks series',
            type: 'theory',
            estimatedHours: 4,
            description:
              "Watch the full 4-video 'Neural Networks' series. After each video, write 3 sentences in your notes summarizing what's actually happening.",
            resources: [
              {
                label: '3Blue1Brown — Neural Networks',
                url: 'https://www.3blue1brown.com/topics/neural-networks',
                kind: 'video',
              },
              {
                label: 'Karpathy — Neural Networks: Zero to Hero',
                url: 'https://karpathy.ai/zero-to-hero.html',
                kind: 'video',
              },
            ],
          },
          {
            id: 'p0-m3-3b1b-transformers',
            title: '3Blue1Brown — Transformers / GPT visual intro',
            type: 'theory',
            estimatedHours: 3,
            description:
              "Watch the 'But what is a GPT?' and attention videos. Be able to explain — out loud, to a rubber duck — what a transformer does in 90 seconds.",
            resources: [
              {
                label: '3Blue1Brown — Transformers chapter',
                url: 'https://www.youtube.com/watch?v=wjZofJX0v4M',
                kind: 'video',
              },
              {
                label: '3Blue1Brown — Attention',
                url: 'https://www.youtube.com/watch?v=eMlx5fFNoYc',
                kind: 'video',
              },
            ],
          },
          {
            id: 'p0-m3-karpathy-intro',
            title: 'Karpathy — Intro to LLMs (1-hour talk)',
            type: 'theory',
            estimatedHours: 2,
            description:
              "Watch the full 1-hour 'Intro to LLMs' talk. Write down the 5 most important things you didn't already know.",
            resources: [
              {
                label: 'Karpathy — Intro to LLMs',
                url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g',
                kind: 'video',
              },
            ],
          },
          {
            id: 'p0-m3-glossary',
            title: 'Build a personal LLM glossary',
            type: 'theory',
            estimatedHours: 2,
            description:
              'Define in your own words: parameter, weight, loss, gradient, backprop, training vs inference, embedding, token, attention, context window, fine-tuning, RAG. One sentence each — short enough that you actually understand them.',
            deliverable: 'A `glossary.md` you keep updating across the roadmap.',
            resources: [
              {
                label: 'Hugging Face — NLP course (glossary chapter)',
                url: 'https://huggingface.co/learn/nlp-course/chapter1/1',
                kind: 'course',
              },
            ],
          },
          {
            id: 'p0-m3-embeddings-cosine',
            title: 'Embed sentences + cosine similarity',
            type: 'practice',
            estimatedHours: 3,
            description:
              "In a notebook, embed ~20 sentences with OpenAI's `text-embedding-3-small` (or a local sentence-transformer if you don't want to spend yet). Compute cosine similarity between all pairs, render as a heatmap. Eyeball that semantically-close sentences score higher.",
            deliverable:
              'A notebook with a labeled cosine-similarity heatmap of your sentences.',
            resources: [
              {
                label: 'OpenAI — embeddings guide',
                url: 'https://platform.openai.com/docs/guides/embeddings',
                kind: 'docs',
              },
              {
                label: 'sentence-transformers (local alt)',
                url: 'https://www.sbert.net/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p0-m3-tiktoken',
            title: 'Tokenization with tiktoken',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Use `tiktoken` to tokenize a paragraph in English, code, and another language. Compare token counts. Visualize the tokens of one paragraph (`enc.decode([t])` for each). Notice how 'AI' vs ' AI' tokenize differently.",
            deliverable:
              'A notebook showing token counts and a per-token visualization for 3 inputs.',
            resources: [
              {
                label: 'tiktoken — repo',
                url: 'https://github.com/openai/tiktoken',
                kind: 'repo',
              },
              {
                label: 'OpenAI — tokenizer playground',
                url: 'https://platform.openai.com/tokenizer',
                kind: 'tool',
              },
            ],
          },
          {
            id: 'p0-m3-applied-llms',
            title: 'Read: What We Learned from a Year of Building with LLMs',
            type: 'theory',
            estimatedHours: 1,
            description:
              "Read the full essay end-to-end. Highlight 5 lessons you want to remember when you start building. You'll re-read this around phase 3 and again at phase 5.",
            resources: [
              {
                label: 'applied-llms.org — full essay',
                url: 'https://applied-llms.org/',
                kind: 'article',
              },
            ],
          },
        ],
      },
    ],
  },
  // ===================================================================
  // PHASE 1 — LLM FUNDAMENTALS & PROMPT ENGINEERING (~55h)
  // ===================================================================
  {
    id: 'p1',
    order: 1,
    title: 'Phase 1 — LLM Fundamentals & Prompt Engineering',
    summary:
      'Get from "LLMs are magic" to "I know exactly which knobs I have." API access, streaming, structured outputs, and a real prompt-engineering toolkit. ~56h.',
    modules: [
      {
        id: 'p1-m1',
        title: '1.1 How LLMs Work in Practice',
        goal: 'Understand the concrete primitives — tokens, context, sampling — and their failure modes.',
        tasks: [
          {
            id: 'p1-m1-tokens-context',
            title: 'Tokens, context window, messages — the mental model',
            type: 'theory',
            estimatedHours: 2,
            description:
              'Read the model docs for both Claude and GPT. Understand: token = unit of billing, context window = total tokens (input+output), messages have roles (system/user/assistant). Note current model context sizes.',
            resources: [
              {
                label: 'Anthropic — model overview',
                url: 'https://docs.claude.com/en/docs/about-claude/models',
                kind: 'docs',
              },
              {
                label: 'OpenAI — models reference',
                url: 'https://platform.openai.com/docs/models',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m1-sampling',
            title: 'Temperature, top-p, and sampling — sweep notebook',
            type: 'practice',
            estimatedHours: 3,
            description:
              'In a notebook, run the same prompt at temperature [0, 0.3, 0.7, 1.0] and top_p [0.5, 0.9, 1.0]. Use a creative prompt and a deterministic one. Write down what you observed.',
            deliverable:
              'A notebook with a 4×3 grid of outputs and a short conclusion on when to crank each knob.',
            resources: [
              {
                label: 'Anthropic — controlling output (parameters)',
                url: 'https://docs.claude.com/en/api/messages',
                kind: 'docs',
              },
              {
                label: 'OpenAI — temperature & top_p explained',
                url: 'https://platform.openai.com/docs/api-reference/chat/create',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m1-limits-hallucination',
            title: 'Failure modes — hallucination, cutoff, nondeterminism',
            type: 'theory',
            estimatedHours: 2,
            description:
              'Read about hallucination, knowledge cutoffs, and why even temp=0 is not fully deterministic. Make a one-page note of the 5 ways LLMs fail in production.',
            resources: [
              {
                label: 'Anthropic — be aware of limitations',
                url: 'https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations',
                kind: 'docs',
              },
              {
                label: 'applied-llms.org (re-read § failure modes)',
                url: 'https://applied-llms.org/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p1-m1-non-determinism',
            title: 'Empirically measure nondeterminism',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Send the same prompt 20 times at temperature 0. Measure: how many unique outputs? Diff them. Now repeat at temperature 1. Reflect on the implications for testing your apps.",
            deliverable:
              'A short writeup with the numbers + your testing-strategy takeaway.',
            resources: [
              {
                label: 'OpenAI — reproducible outputs (seed)',
                url: 'https://platform.openai.com/docs/advanced-usage/reproducible-outputs',
                kind: 'docs',
              },
            ],
          },
        ],
      },
      {
        id: 'p1-m2',
        title: '1.2 Working with LLM APIs',
        goal: 'Be able to wire up Claude/OpenAI from Python and TypeScript with streaming, retries, structured outputs, and an eye on cost.',
        tasks: [
          {
            id: 'p1-m2-keys-setup',
            title: 'Get API keys + safe local setup',
            type: 'practice',
            estimatedHours: 1,
            description:
              'Create accounts and API keys for Anthropic and OpenAI. Add small budgets / spend limits. Store keys in `.env` (never commit). Optionally: set up billing alerts.',
            deliverable: 'Both keys working from a `.env` in a hello-world script.',
            resources: [
              {
                label: 'Anthropic — quickstart',
                url: 'https://docs.claude.com/en/docs/get-started',
                kind: 'docs',
              },
              {
                label: 'OpenAI — quickstart',
                url: 'https://platform.openai.com/docs/quickstart',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m2-cost-planning',
            title: 'Cost model for the whole roadmap — budget + alerts',
            type: 'theory',
            estimatedHours: 1,
            description:
              "Estimate before you spend. This roadmap leans on paid APIs in many places (embedding sweeps, RAG iteration, LLM-as-judge with Ragas, multi-tier model comparisons, a fine-tune, repeated agent runs). Realistic total program API spend: **~$50–150** if you stay disciplined — Ragas and agent loops are the main blowout risks (a careless 200-item judge eval can be a $5–10 run; rerun it 20 times and you've burned the budget).\n\nDo all of this now:\n1. Hard spend limit on both Anthropic and OpenAI accounts (e.g. $30/month each to start).\n2. Billing email alerts at 50% / 90% of cap.\n3. Build a habit: before any loop over a dataset, multiply (rows × avg tokens × $/token) on paper. If it is over $1, sample-run on 5 items first.\n4. Default to the cheapest viable model (Haiku / 4o-mini / similar) for iteration; reserve the flagship for the final pass.",
            resources: [
              {
                label: 'Anthropic — pricing',
                url: 'https://www.anthropic.com/pricing',
                kind: 'docs',
              },
              {
                label: 'OpenAI — pricing',
                url: 'https://openai.com/api/pricing/',
                kind: 'docs',
              },
              {
                label: 'Anthropic — usage & limits (console settings)',
                url: 'https://docs.claude.com/en/api/rate-limits',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m2-first-calls-py',
            title: 'First API calls — Python (both providers)',
            type: 'practice',
            estimatedHours: 2,
            description:
              'In Python, call both Claude (`anthropic`) and GPT (`openai`). Same prompt, two providers. Note response shape differences.',
            deliverable:
              'A `hello_llm.py` script that calls both and prints both outputs.',
            resources: [
              {
                label: 'anthropic-sdk-python',
                url: 'https://github.com/anthropics/anthropic-sdk-python',
                kind: 'repo',
              },
              {
                label: 'openai-python',
                url: 'https://github.com/openai/openai-python',
                kind: 'repo',
              },
            ],
          },
          {
            id: 'p1-m2-first-calls-ts',
            title: 'First API calls — TypeScript (both providers)',
            type: 'practice',
            estimatedHours: 2,
            description:
              'Same hello-world, but in TypeScript with `@anthropic-ai/sdk` and `openai`. Run with `tsx`.',
            deliverable: 'A `hello-llm.ts` you can `tsx hello-llm.ts`.',
            resources: [
              {
                label: '@anthropic-ai/sdk',
                url: 'https://github.com/anthropics/anthropic-sdk-typescript',
                kind: 'repo',
              },
              {
                label: 'openai-node',
                url: 'https://github.com/openai/openai-node',
                kind: 'repo',
              },
            ],
          },
          {
            id: 'p1-m2-streaming',
            title: 'Streaming responses',
            type: 'practice',
            estimatedHours: 2,
            description:
              'Stream responses from both Claude and GPT — print tokens as they arrive. Note how each SDK exposes the stream (async iterator vs event handlers).',
            deliverable:
              'Two scripts (`stream.py`, `stream.ts`) that print streamed output to stdout in real time.',
            resources: [
              {
                label: 'Anthropic — streaming',
                url: 'https://docs.claude.com/en/api/messages-streaming',
                kind: 'docs',
              },
              {
                label: 'OpenAI — streaming',
                url: 'https://platform.openai.com/docs/api-reference/streaming',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m2-multi-turn',
            title: 'Multi-turn conversations + memory',
            type: 'practice',
            estimatedHours: 2,
            description:
              'Build a function that maintains a `messages` array across turns. Send a 5-turn conversation. Compare: what happens when you trim the oldest messages? What about summarizing them?',
            deliverable:
              'A `chat_loop.py` REPL with a sliding-window memory option.',
            resources: [
              {
                label: 'Anthropic — multi-turn conversations',
                url: 'https://docs.claude.com/en/docs/build-with-claude/conversation',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m2-structured-output',
            title: 'Structured outputs with Pydantic / Zod',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Force a model to return a typed object. Python: OpenAI's `response_format` with a Pydantic model, or Anthropic with a JSON-schema'd tool. TS: Zod schema with the same approach. Build an entity extractor: text → {name, email, phone, role}.",
            deliverable:
              'Two scripts (`extract.py`, `extract.ts`) that round-trip text → typed object → back to Python/TS objects.',
            resources: [
              {
                label: 'OpenAI — structured outputs',
                url: 'https://platform.openai.com/docs/guides/structured-outputs',
                kind: 'docs',
              },
              {
                label: 'Anthropic — JSON output via tools',
                url: 'https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/increase-consistency',
                kind: 'docs',
              },
              {
                label: 'Zod',
                url: 'https://zod.dev/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m2-errors-retries',
            title: 'Errors, rate limits, retries',
            type: 'practice',
            estimatedHours: 2,
            description:
              'Trigger and handle: invalid API key, rate limit (429), context-length error, network timeout. Add exponential backoff via the SDK retry options or `tenacity`. Log failures usefully.',
            deliverable: 'A small wrapper module with retries + clean error logging.',
            resources: [
              {
                label: 'Anthropic — errors',
                url: 'https://docs.claude.com/en/api/errors',
                kind: 'docs',
              },
              {
                label: 'OpenAI — rate limits',
                url: 'https://platform.openai.com/docs/guides/rate-limits',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m2-tokens-cost',
            title: 'Token counting + cost math',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Add a `cost(messages, model)` helper that counts tokens (tiktoken / Anthropic count_tokens) and multiplies by per-model input/output pricing. Run it on a 10-turn conversation and a 5k-token document, print the predicted $.",
            deliverable:
              'A `cost.py` utility module reused in later projects.',
            resources: [
              {
                label: 'Anthropic — pricing',
                url: 'https://www.anthropic.com/pricing',
                kind: 'docs',
              },
              {
                label: 'OpenAI — pricing',
                url: 'https://openai.com/api/pricing/',
                kind: 'docs',
              },
              {
                label: 'tiktoken',
                url: 'https://github.com/openai/tiktoken',
                kind: 'repo',
              },
            ],
          },
          {
            id: 'p1-m2-cli-chatbot',
            title: 'Project — CLI chatbot with memory + streaming',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Combine everything in this module: a polished CLI chatbot (`chat`) that streams responses, keeps multi-turn memory, supports `/reset`, `/save <file>`, and prints token + cost after each turn.",
            deliverable: 'A `chat` CLI you actually want to use. Push it to GitHub.',
            resources: [
              {
                label: 'Rich (pretty CLI output)',
                url: 'https://rich.readthedocs.io/',
                kind: 'docs',
              },
            ],
          },
        ],
      },
      {
        id: 'p1-m3',
        title: '1.3 Prompt Engineering',
        goal: 'Build a real toolkit of prompting techniques and an evaluation habit so you can iterate prompts deliberately, not by vibes.',
        tasks: [
          {
            id: 'p1-m3-anthropic-guide',
            title: "Read Anthropic's prompt engineering guide",
            type: 'theory',
            estimatedHours: 3,
            description:
              "Read the full guide end-to-end. Take notes on: clarity, examples (multishot), CoT, XML tags, role/system prompts, prefilling, chaining. You'll refer back to this constantly.",
            resources: [
              {
                label: 'Anthropic — prompt engineering overview',
                url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview',
                kind: 'docs',
              },
              {
                label: 'Anthropic — interactive prompt-engineering tutorial',
                url: 'https://github.com/anthropics/prompt-eng-interactive-tutorial',
                kind: 'repo',
              },
            ],
          },
          {
            id: 'p1-m3-openai-guide',
            title: "Read OpenAI's prompting guide",
            type: 'theory',
            estimatedHours: 2,
            description:
              'Read the OpenAI prompting / GPT-best-practices guide. Note where it agrees with Anthropic and where it differs (e.g. XML tags vs markdown delimiters).',
            resources: [
              {
                label: 'OpenAI — prompt engineering',
                url: 'https://platform.openai.com/docs/guides/prompt-engineering',
                kind: 'docs',
              },
              {
                label: 'promptingguide.ai — comprehensive cross-provider guide',
                url: 'https://www.promptingguide.ai/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m3-zero-few-shot',
            title: 'Zero-shot vs few-shot — measure the lift',
            type: 'practice',
            estimatedHours: 3,
            description:
              'Pick a small classification task (e.g. sentiment, intent, or "is this email spam"). Build 20 labeled test cases. Run zero-shot, then 3-shot, then 8-shot. Measure accuracy at each step.',
            deliverable:
              'A notebook with accuracy numbers at 0/3/8 shots and 1–2 sentence interpretation.',
            resources: [
              {
                label: 'Anthropic — use examples (multishot)',
                url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m3-cot',
            title: 'Chain-of-thought prompting',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Pick a multi-step reasoning task (word problems, simple SQL generation). Compare: bare prompt vs 'think step by step' vs structured `<thinking>...</thinking>` scratchpad. Measure correctness.",
            deliverable:
              'A notebook with 3 prompting variants and accuracy on 15 test cases each.',
            resources: [
              {
                label: 'Anthropic — chain of thought',
                url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m3-role-delimiters',
            title: 'Role prompts, delimiters, output formatting',
            type: 'practice',
            estimatedHours: 2,
            description:
              'Take one weak prompt and rewrite it 4 ways: (1) add a role/system prompt, (2) wrap input in XML tags, (3) demand JSON output, (4) all three. Compare on 10 test inputs.',
            deliverable: 'A notebook with side-by-side outputs and your conclusion.',
            resources: [
              {
                label: 'Anthropic — system prompts',
                url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/system-prompts',
                kind: 'docs',
              },
              {
                label: 'Anthropic — use XML tags',
                url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m3-templates',
            title: 'Reusable prompt templates',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Build a small `prompts/` library: each prompt lives in its own file or function, with placeholders. Add a tiny render function. You'll grow this across the roadmap.",
            deliverable: 'A `prompts.py` module with 3 templates and a `render()` function.',
            resources: [
              {
                label: 'Prompt template patterns (article)',
                url: 'https://www.promptingguide.ai/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p1-m3-prompt-tester',
            title: 'Prompt-tester notebook',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Build a notebook that takes a prompt template + a CSV of test cases (input + expected) and runs the prompt over every row, printing pass/fail and the model's output. This is your prototype eval harness — you'll evolve it in phase 5.",
            deliverable:
              'A `prompt_tester.ipynb` that runs a prompt over N test cases and tallies pass rate.',
            resources: [
              {
                label: 'Promptfoo (inspiration)',
                url: 'https://www.promptfoo.dev/docs/intro/',
                kind: 'tool',
              },
            ],
          },
          {
            id: 'p1-m3-content-transformer',
            title: 'Project — Content transformer',
            type: 'practice',
            estimatedHours: 5,
            description:
              'Build a CLI or small notebook tool that takes text and runs one of three transformations: (1) summarize at chosen length, (2) rewrite in a chosen tone, (3) extract entities as JSON. Use the prompt-tester to verify it works on 10 inputs per mode.',
            deliverable:
              'A `transformer` tool + a `tests.csv` and pass-rate per mode.',
            resources: [
              {
                label: 'Anthropic — long context tips',
                url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/long-context-tips',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p1-m3-prompting-patterns',
            title: 'Survey: advanced prompting patterns',
            type: 'theory',
            estimatedHours: 4,
            description:
              "Skim the Prompt Engineering Guide site for techniques you haven't seen — self-consistency, ReAct, Tree-of-Thought, prompt chaining. Note which ones you can imagine needing, and when.",
            resources: [
              {
                label: 'Prompt Engineering Guide',
                url: 'https://www.promptingguide.ai/',
                kind: 'article',
              },
              {
                label: 'Anthropic prompting cookbook',
                url: 'https://github.com/anthropics/anthropic-cookbook',
                kind: 'repo',
              },
            ],
          },
        ],
      },
    ],
  },
  // ===================================================================
  // PHASE 2 — BUILDING LLM APPLICATIONS (~70h)
  // ===================================================================
  {
    id: 'p2',
    order: 2,
    title: 'Phase 2 — Building LLM Applications',
    summary:
      'Move from notebooks to real apps: streaming chat UIs, tool use, multi-step workflows, multimodal inputs, and a small voice demo in TypeScript. ~73h.',
    modules: [
      {
        id: 'p2-m1',
        title: '2.1 The TypeScript LLM Stack — Vercel AI SDK',
        goal: "Ship a polished React chat app you'd actually demo. This is where your front-end skills become your edge.",
        tasks: [
          {
            id: 'p2-m1-setup',
            title: 'Set up Vercel AI SDK in a React+Vite app',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Spin up a fresh Vite + React + TS project. Install `ai` and the relevant provider package (`@ai-sdk/anthropic` and/or `@ai-sdk/openai`). Get a non-streaming `generateText` working from a client-side dev script (acknowledge that production needs a server route — note it for later).",
            deliverable: 'A repo with a hello-world `generateText` call working.',
            resources: [
              {
                label: 'AI SDK — getting started',
                url: 'https://ai-sdk.dev/docs/getting-started',
                kind: 'docs',
              },
              {
                label: 'AI SDK — providers',
                url: 'https://ai-sdk.dev/providers/ai-sdk-providers',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m1-streaming-ui',
            title: 'Streaming chat UI with useChat',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Use the AI SDK's `useChat` (or `useCompletion`) hook to build a streaming chat UI. Render messages as they arrive. Add a thinking indicator and an input that disables while streaming.",
            deliverable:
              'A working streaming chat page with smooth incremental rendering.',
            resources: [
              {
                label: 'AI SDK — useChat',
                url: 'https://ai-sdk.dev/docs/ai-sdk-ui/chatbot',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m1-server-route',
            title: 'Server route for the chat backend',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Add a minimal server (Hono, Express, or a Next.js route handler) that takes the messages and streams `streamText` back. Never expose your API key to the client.",
            deliverable: 'Chat UI calls a server endpoint; key lives only in server env.',
            resources: [
              {
                label: 'AI SDK — streaming API route',
                url: 'https://ai-sdk.dev/docs/ai-sdk-ui/chatbot',
                kind: 'docs',
              },
              {
                label: 'Hono — quickstart',
                url: 'https://hono.dev/docs/getting-started/basic',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m1-tools',
            title: 'Tool calling with the AI SDK',
            type: 'practice',
            estimatedHours: 4,
            description:
              'Add two tools: one that calls a weather API, one that does math/units. Define them with Zod schemas. Let the model decide when to call them; render tool calls + results in the UI.',
            deliverable: 'Chat app with 2 working tools, visibly invoked in the UI.',
            resources: [
              {
                label: 'AI SDK — tool calling',
                url: 'https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m1-structured-objects',
            title: 'generateObject — structured generation',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Use `generateObject` with a Zod schema to return a typed object from a free-text input. Build a side feature: 'turn this prose into structured meeting notes'.",
            deliverable:
              'Feature in the app that turns prose → typed object → rendered form.',
            resources: [
              {
                label: 'AI SDK — generateObject',
                url: 'https://ai-sdk.dev/docs/ai-sdk-core/generating-structured-data',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m1-persist-history',
            title: 'Persist chat history in IndexedDB',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Save threads locally with `idb`. Add a sidebar with thread list, rename, delete. (Same pattern you're using in this roadmap app.)",
            deliverable: 'Chat threads survive a reload; multi-thread UI.',
            resources: [
              {
                label: 'idb',
                url: 'https://github.com/jakearchibald/idb',
                kind: 'repo',
              },
            ],
          },
          {
            id: 'p2-m1-polish-deploy',
            title: 'Polish + deploy',
            type: 'practice',
            estimatedHours: 6,
            description:
              "Markdown rendering, code blocks with syntax highlighting, copy-to-clipboard, a `Stop` button, error toasts, model selector, light/dark mode. Deploy to Vercel/Netlify. This becomes a portfolio piece.",
            deliverable: 'Live URL of a polished streaming chat app with 2+ tools.',
            resources: [
              {
                label: 'react-markdown',
                url: 'https://github.com/remarkjs/react-markdown',
                kind: 'repo',
              },
              {
                label: 'Shiki (syntax highlighting)',
                url: 'https://shiki.matsu.io/',
                kind: 'tool',
              },
            ],
          },
        ],
      },
      {
        id: 'p2-m2',
        title: '2.2 Tool Use / Function Calling Deep Dive',
        goal: 'Internalize the tool-calling loop so you can build agents in phase 4 without a framework lifting you.',
        tasks: [
          {
            id: 'p2-m2-loop',
            title: 'The tool-calling loop — by hand',
            type: 'practice',
            estimatedHours: 4,
            description:
              'Without the AI SDK helper: implement the loop yourself. Call the model → check for `tool_use` blocks → execute each → append `tool_result` → call again. Stop on `end_turn`. Do this once with Claude and once with OpenAI.',
            deliverable:
              'A `agent_loop.py` (or `.ts`) under 200 lines that implements the loop and runs a 2-tool example.',
            resources: [
              {
                label: 'Anthropic — tool use',
                url: 'https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview',
                kind: 'docs',
              },
              {
                label: 'OpenAI — function calling',
                url: 'https://platform.openai.com/docs/guides/function-calling',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m2-real-apis',
            title: 'Tools that hit real APIs',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Build 3 tools that call real services: web search (Tavily/Brave), GitHub (list-repo-issues), and weather. Handle auth, rate limits, and the 'no result' case cleanly.",
            deliverable: 'A `tools/` directory with 3 well-typed, well-erroring tools.',
            resources: [
              {
                label: 'Tavily Search API',
                url: 'https://docs.tavily.com/',
                kind: 'docs',
              },
              {
                label: 'Brave Search API',
                url: 'https://api.search.brave.com/app/documentation/web-search/get-started',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m2-parallel',
            title: 'Parallel tool use',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Construct a prompt where the right move is to call multiple tools in parallel (e.g. 'what's the weather in Paris, Tokyo, and NYC?'). Verify your loop executes them concurrently. Measure latency vs serial.",
            deliverable:
              'A benchmark in your notebook: serial-tool latency vs parallel-tool latency on 5 prompts.',
            resources: [
              {
                label: 'Anthropic — parallel tool use',
                url: 'https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m2-multi-step',
            title: 'Multi-step tool use scenarios',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Design a task that needs 3+ tool calls in sequence (e.g. 'find the most-starred Python repo on GitHub created this week, fetch its README, summarize it'). Run it. Inspect the trace; identify where the model wandered.",
            deliverable:
              'A working multi-step trace + 3 sentences on what surprised you.',
            resources: [
              {
                label: 'Anthropic cookbook — tool use examples',
                url: 'https://github.com/anthropics/anthropic-cookbook/tree/main/tool_use',
                kind: 'repo',
              },
            ],
          },
        ],
      },
      {
        id: 'p2-m3',
        title: '2.3 Patterns & UX for AI Apps',
        goal: 'The repeatable patterns and UX habits that separate a real product from a demo.',
        tasks: [
          {
            id: 'p2-m3-patterns-essay',
            title: 'Read: Anthropic — Building effective agents',
            type: 'theory',
            estimatedHours: 2,
            description:
              "Read the 'Building effective agents' essay. Note the difference between workflows (predictable LLM-orchestration patterns) and agents (LLM-driven control flow). This vocabulary will frame every project you build from here on.",
            resources: [
              {
                label: 'Anthropic — Building effective agents',
                url: 'https://www.anthropic.com/research/building-effective-agents',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p2-m3-chaining',
            title: 'Prompt chaining pattern',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Build a 3-step chain: (1) extract structure from text, (2) transform it, (3) format as Markdown. Run it as a sequence of LLM calls with strong typing between steps.",
            deliverable: 'A typed pipeline + a small UI that visualizes each step.',
            resources: [
              {
                label: 'Anthropic — Building effective agents',
                url: 'https://www.anthropic.com/research/building-effective-agents',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p2-m3-routing',
            title: 'Routing pattern — classify → dispatch',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Build a router: a small fast model classifies the user's intent, then dispatches to one of N specialized prompts/tools. Add a fallback path. Use the prompt-tester to evaluate routing accuracy.",
            deliverable: 'A router with ≥4 intents and an accuracy number on a test set.',
            resources: [
              {
                label: 'AI SDK — routing example',
                url: 'https://ai-sdk.dev/docs/foundations/agents',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m3-parallelization',
            title: 'Parallelization pattern',
            type: 'practice',
            estimatedHours: 3,
            description:
              'Take a task that decomposes (e.g. summarize each of 5 sections of a doc) and run the sub-LLM calls concurrently with `Promise.all` / `asyncio.gather`. Measure speedup vs serial.',
            deliverable: 'Benchmark notebook: serial vs parallel for 5/10/20 chunks.',
            resources: [
              {
                label: 'Anthropic — Building effective agents (parallelization)',
                url: 'https://www.anthropic.com/research/building-effective-agents',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p2-m3-ux-states',
            title: 'UX states — loading, error, stop, regenerate',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Polish the chat app from 2.1: add a real Stop button (abort the stream), a Regenerate-last-turn button, error toasts with retry, and skeleton loaders. Test on a slow network throttled to 'Slow 3G'.",
            deliverable: 'Chat app gracefully handles stop/regenerate/error/slow-net.',
            resources: [
              {
                label: 'AI SDK — useChat (stop, reload)',
                url: 'https://ai-sdk.dev/docs/ai-sdk-ui/chatbot',
                kind: 'docs',
              },
            ],
          },
        ],
      },
      {
        id: 'p2-m4',
        title: '2.4 Multimodal',
        goal: "Use vision inputs as confidently as text — this is half of what 'AI-native UX' even means in 2026.",
        tasks: [
          {
            id: 'p2-m4-vision-basics',
            title: 'Vision input — image describer',
            type: 'practice',
            estimatedHours: 3,
            description:
              'Build a small page: upload an image → model describes it. Use Claude with image content blocks or GPT with image_url. Render the model output streamed.',
            deliverable: 'A working image-describer feature in your chat app.',
            resources: [
              {
                label: 'Anthropic — vision',
                url: 'https://docs.claude.com/en/docs/build-with-claude/vision',
                kind: 'docs',
              },
              {
                label: 'OpenAI — vision',
                url: 'https://platform.openai.com/docs/guides/vision',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m4-image-extraction',
            title: 'Structured extraction from images',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Pick 5 receipts or business cards. Use a Zod schema to extract structured data (vendor, total, line items, date OR name, email, phone, company). Score yourself on accuracy.",
            deliverable: 'A notebook with 5 images, the extracted JSON, and an accuracy note.',
            resources: [
              {
                label: 'AI SDK — multi-modal messages',
                url: 'https://ai-sdk.dev/docs/foundations/prompts#multi-modal-messages',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m4-pdf-extraction',
            title: 'Structured extraction from PDFs',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Take a PDF (invoice or short paper). Use Claude's PDF support (native) or render pages to images for GPT. Extract a structured representation. Notice where it fails on tables.",
            deliverable: 'A `pdf_extract.ts` that returns typed JSON for a real PDF.',
            resources: [
              {
                label: 'Anthropic — PDF support',
                url: 'https://docs.claude.com/en/docs/build-with-claude/pdf-support',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m4-project-doc-extractor',
            title: 'Project — Document-data extractor',
            type: 'practice',
            estimatedHours: 6,
            description:
              "Build a small web app: upload an image or PDF → extract structured data → show editable form → 'Save as JSON' button. Deploy it. This is portfolio-tier.",
            deliverable:
              'Deployed live demo of an upload→extract→edit→export tool.',
            resources: [
              {
                label: 'AI SDK — generateObject',
                url: 'https://ai-sdk.dev/docs/ai-sdk-core/generating-structured-data',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p2-m4-voice-realtime',
            title: 'Voice — realtime speech in/out demo',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Voice agents are now a first-class API surface. Build a small demo that does one of: (a) push-to-talk: record a clip, transcribe with Whisper, get an LLM reply, speak it back with TTS; or (b) the harder version: open a realtime WebSocket/WebRTC session to OpenAI's Realtime API and have a continuous spoken back-and-forth in the browser. Note latency budget (time-to-first-audio matters more than total tokens here).",
            deliverable:
              'A small voice-loop demo you can have a 60-second conversation with. Browser app or CLI both fine.',
            resources: [
              {
                label: 'OpenAI — Realtime API (voice agents)',
                url: 'https://developers.openai.com/api/docs/guides/realtime',
                kind: 'docs',
              },
              {
                label: 'OpenAI — Audio & speech (Whisper, TTS)',
                url: 'https://developers.openai.com/api/docs/guides/audio',
                kind: 'docs',
              },
              {
                label: 'OpenAI Agents SDK — voice agents',
                url: 'https://openai.github.io/openai-agents-js/',
                kind: 'docs',
              },
            ],
          },
        ],
      },
    ],
  },
  // ===================================================================
  // PHASE 3 — RAG (~70h)
  // ===================================================================
  {
    id: 'p3',
    order: 3,
    title: 'Phase 3 — RAG: Retrieval-Augmented Generation',
    summary:
      "RAG is the most-asked-about pattern in junior AI roles. End this phase with a real 'chat with your documents' app and a way to measure when it works. ~70h.",
    modules: [
      {
        id: 'p3-m1',
        title: '3.1 Embeddings & Vector Search',
        goal: 'Understand and operate the retrieval primitives, with a local vector DB you control.',
        tasks: [
          {
            id: 'p3-m1-theory',
            title: 'Embeddings + similarity metrics — theory',
            type: 'theory',
            estimatedHours: 2,
            description:
              "Read about dense embeddings, cosine vs dot vs L2 distance, and approximate nearest neighbor (ANN) algorithms (HNSW, IVF). Know why we don't brute-force search at scale.",
            resources: [
              {
                label: 'OpenAI — embeddings guide',
                url: 'https://platform.openai.com/docs/guides/embeddings',
                kind: 'docs',
              },
              {
                label: 'Pinecone — ANN explained',
                url: 'https://www.pinecone.io/learn/series/faiss/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p3-m1-pick-db',
            title: 'Pick + install a local vector DB',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Choose one of: Chroma (simplest), Qdrant (more featured, Docker), or Postgres+pgvector (great if you know SQL). Install it locally and create your first collection.",
            deliverable: 'A running local vector DB and a smoke-test `add → query`.',
            resources: [
              {
                label: 'Chroma docs',
                url: 'https://docs.trychroma.com/',
                kind: 'docs',
              },
              {
                label: 'Qdrant docs',
                url: 'https://qdrant.tech/documentation/',
                kind: 'docs',
              },
              {
                label: 'pgvector',
                url: 'https://github.com/pgvector/pgvector',
                kind: 'repo',
              },
            ],
          },
          {
            id: 'p3-m1-embed-store',
            title: 'Embed a small corpus + store it',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Pick ~200 short documents (your notes, Wikipedia paragraphs, FAQs). Embed each, store {text, vector, metadata} in your DB. Verify with a few queries by hand.",
            deliverable: 'A populated collection with ~200 vectors and a query example.',
            resources: [
              {
                label: 'OpenAI — embeddings API',
                url: 'https://platform.openai.com/docs/api-reference/embeddings',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p3-m1-semantic-search-cli',
            title: 'Semantic search CLI',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Build `search <query>` — embed the query, run top-k cosine search, return ranked hits with snippets. Compare top-k vs MMR (maximal marginal relevance) if your DB supports it.",
            deliverable:
              'A `search` CLI that returns ranked results from your corpus.',
            resources: [
              {
                label: 'MMR explained',
                url: 'https://www.pinecone.io/learn/series/rag/mmr/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p3-m1-similarity-tradeoffs',
            title: 'Compare similarity metrics empirically',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Take 20 queries with known good answers in your corpus. Measure recall@5 under cosine, dot, and L2. Also try `text-embedding-3-small` vs `-large`. Report numbers.",
            deliverable:
              'A table of recall@5 across (metric × model) and a recommendation.',
            resources: [
              {
                label: 'OpenAI — embedding models comparison',
                url: 'https://platform.openai.com/docs/guides/embeddings',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p3-m1-applied-llms-rag',
            title: 'Re-read: applied-llms.org (RAG section)',
            type: 'theory',
            estimatedHours: 2,
            description:
              "Re-read the RAG section of the essay with phase-3 eyes — the practical advice now makes sense. Update your notes.",
            resources: [
              {
                label: 'applied-llms.org',
                url: 'https://applied-llms.org/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p3-m1-applied-llms-tactical',
            title: 'Read: deeplearning.ai — RAG short course',
            type: 'theory',
            estimatedHours: 2,
            description:
              'Skim a DeepLearning.AI short course on RAG (e.g. "Building Applications with Vector Databases" or "Preprocessing Unstructured Data for LLM Apps"). Note what the instructor highlights as common failure modes.',
            resources: [
              {
                label: 'DeepLearning.AI — short courses',
                url: 'https://www.deeplearning.ai/short-courses/',
                kind: 'course',
              },
            ],
          },
        ],
      },
      {
        id: 'p3-m2',
        title: '3.2 Building a RAG Pipeline',
        goal: 'Ship a real "chat with your documents" app, end to end.',
        tasks: [
          {
            id: 'p3-m2-architecture',
            title: 'RAG architecture — draw it',
            type: 'theory',
            estimatedHours: 2,
            description:
              'On a whiteboard or in a doc, sketch the full pipeline: load → parse → chunk → embed → store → query → retrieve → assemble prompt → generate → render with citations. Mark which boxes you already have working.',
            resources: [
              {
                label: 'Pinecone — RAG handbook',
                url: 'https://www.pinecone.io/learn/series/rag/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p3-m2-loaders',
            title: 'Document loaders — PDF, markdown, web',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Build loaders that convert: a PDF, a folder of .md files, and a list of URLs → a normalized list of `{text, source, metadata}` chunks. Use `pypdf`/`pdfplumber`, `markdown-it`, and `trafilatura` or `readability`.",
            deliverable: 'A `loaders.py` (or `.ts`) with 3 loaders + unit tests.',
            resources: [
              {
                label: 'pdfplumber',
                url: 'https://github.com/jsvine/pdfplumber',
                kind: 'repo',
              },
              {
                label: 'trafilatura — web scraping',
                url: 'https://trafilatura.readthedocs.io/',
                kind: 'docs',
              },
              {
                label: 'Unstructured.io',
                url: 'https://docs.unstructured.io/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p3-m2-chunking',
            title: 'Chunking experiments',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Try 3 chunking strategies: fixed-size (e.g. 500 tokens), fixed-size with overlap (e.g. 500/50), and semantic/structural (split on headings). On the same eval set, measure retrieval recall@5 for each.",
            deliverable: 'A table of recall@5 across 3 chunking strategies + a chosen default.',
            resources: [
              {
                label: 'LangChain — text splitters concepts',
                url: 'https://python.langchain.com/docs/concepts/text_splitters/',
                kind: 'docs',
              },
              {
                label: 'Chunking strategies — Pinecone',
                url: 'https://www.pinecone.io/learn/chunking-strategies/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p3-m2-retrieval-assembly',
            title: 'Retrieval + prompt assembly',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Build the `answer(question)` function: embed query → top-k retrieve → assemble a prompt that includes the chunks (with source tags) → call the model → return answer. Cap total context tokens.",
            deliverable:
              'A working `rag.answer("...")` function that returns a grounded answer.',
            resources: [
              {
                label: 'Anthropic — long-context retrieval prompting',
                url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/long-context-tips',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p3-m2-citations',
            title: 'Source citations in the answer',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Make the model cite chunks by id (e.g. `[doc:42]`). Post-process to render the citation as a clickable link to the source span.",
            deliverable: 'Answers always include 1+ inline citations linking to sources.',
            resources: [
              {
                label: 'Anthropic — citations',
                url: 'https://docs.claude.com/en/docs/build-with-claude/citations',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p3-m2-ui',
            title: 'React UI for the RAG app',
            type: 'practice',
            estimatedHours: 6,
            description:
              "Build a 'chat with your documents' UI: upload area, ingest progress, streaming Q&A, citations rendered as side-panel snippets. Reuse your chat app shell from 2.1.",
            deliverable: 'A polished single-page RAG app.',
            resources: [
              {
                label: 'AI SDK — useChat',
                url: 'https://ai-sdk.dev/docs/ai-sdk-ui/chatbot',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p3-m2-project',
            title: 'Project — Chat with your documents (deploy)',
            type: 'practice',
            estimatedHours: 7,
            description:
              "Polish + deploy. Add: empty-corpus state, error handling on ingest, a `clear all` button, a small README. This is portfolio piece #2.",
            deliverable: 'Live URL of a working RAG app with at least one demo corpus.',
            resources: [
              {
                label: 'Vercel — deployment',
                url: 'https://vercel.com/docs',
                kind: 'docs',
              },
            ],
          },
        ],
      },
      {
        id: 'p3-m3',
        title: '3.3 Advanced RAG & Evaluation',
        goal: 'Move RAG from "kind of works" to "demonstrably better than yesterday" with metrics and iteration.',
        tasks: [
          {
            id: 'p3-m3-reranking',
            title: 'Reranking',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Add a rerank step: retrieve top-20 with embeddings, then rerank with a cross-encoder (Cohere Rerank API, or a local `cross-encoder` model). Pick top-5 to feed the model. Measure the impact on your eval set.",
            deliverable: 'Recall@5 with and without rerank — show the lift (or not).',
            resources: [
              {
                label: 'Cohere — Rerank API',
                url: 'https://docs.cohere.com/docs/rerank',
                kind: 'docs',
              },
              {
                label: 'sentence-transformers — cross-encoders',
                url: 'https://www.sbert.net/examples/applications/cross-encoder/README.html',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p3-m3-hybrid-search',
            title: 'Hybrid search (BM25 + vector)',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Add a keyword (BM25) retriever alongside your vector retriever. Combine with reciprocal rank fusion (RRF). Test on queries with exact-string needs (acronyms, names).",
            deliverable:
              'Side-by-side recall@5: vector-only, BM25-only, hybrid-RRF.',
            resources: [
              {
                label: 'rank_bm25 — Python library',
                url: 'https://pypi.org/project/rank-bm25/',
                kind: 'tool',
              },
              {
                label: 'Reciprocal Rank Fusion',
                url: 'https://learn.microsoft.com/en-us/azure/search/hybrid-search-ranking',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p3-m3-query-rewriting',
            title: 'Query rewriting + HyDE',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Implement two rewriting strategies: (1) a small LLM call that rephrases user queries into search-style queries; (2) HyDE — generate a hypothetical answer, embed *that* for retrieval. Measure both.",
            deliverable: 'Recall@5 for raw / rewritten / HyDE on the same eval set.',
            resources: [
              {
                label: 'HyDE paper (arXiv)',
                url: 'https://arxiv.org/abs/2212.10496',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p3-m3-eval-metrics-theory',
            title: 'RAG eval metrics — theory',
            type: 'theory',
            estimatedHours: 2,
            description:
              'Read about RAG eval metrics: faithfulness, answer relevance, context precision, context recall. Understand which require ground truth and which use LLM-as-judge.',
            resources: [
              {
                label: 'Ragas — metrics',
                url: 'https://docs.ragas.io/en/stable/concepts/metrics/index.html',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p3-m3-eval-set',
            title: 'Build a 30-item eval set',
            type: 'practice',
            estimatedHours: 4,
            description:
              'Hand-craft (or LLM-bootstrap then hand-verify) 30 question/expected-answer/expected-source triples grounded in your corpus. Diversify: easy lookup, multi-hop, "no answer in corpus", paraphrased.',
            deliverable: 'A `evalset.jsonl` with 30 high-quality items.',
            resources: [
              {
                label: 'Ragas — synthetic test set generation',
                url: 'https://docs.ragas.io/en/stable/howtos/testset_generation.html',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p3-m3-ragas',
            title: 'Measure with Ragas',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Wire your RAG pipeline up to Ragas. Run the metrics. **Keep the eval set to 10–30 items while iterating** — every Ragas run pays per-item LLM-judge cost, and a 200-item set rerun 20 times will burn your whole roadmap budget. Scale up only for the final baseline.",
            deliverable: 'A `ragas_report.md` with baseline scores per metric.',
            resources: [
              {
                label: 'Ragas — getting started',
                url: 'https://docs.ragas.io/en/stable/getstarted/index.html',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p3-m3-iterate',
            title: 'Iterate to improve scores',
            type: 'practice',
            estimatedHours: 3,
            description:
              'Pick the worst-scoring metric. Form a hypothesis. Try one change (e.g. smaller chunks, reranker, different embedder). Re-measure. Repeat for 3 iterations. Keep a log.',
            deliverable: 'An `improvements.md` with 3 hypotheses → changes → score deltas.',
            resources: [
              {
                label: 'Ragas — analyze & improve',
                url: 'https://docs.ragas.io/en/stable/howtos/applications/index.html',
                kind: 'docs',
              },
            ],
          },
        ],
      },
    ],
  },
  // ===================================================================
  // PHASE 4 — AGENTS & ORCHESTRATION (~70h)
  // ===================================================================
  {
    id: 'p4',
    order: 4,
    title: 'Phase 4 — Agents & Orchestration',
    summary:
      "Beyond chat: build agents that take multi-step actions in the world, with and without a framework. ~70h.",
    modules: [
      {
        id: 'p4-m1',
        title: '4.1 Agent Fundamentals',
        goal: 'Build an agent from scratch so you understand exactly what frameworks do for you.',
        tasks: [
          {
            id: 'p4-m1-react-theory',
            title: 'ReAct, planning, reflection — theory',
            type: 'theory',
            estimatedHours: 3,
            description:
              'Read the ReAct paper (or a good summary) and the Anthropic "Building effective agents" essay (yes, again — different lens now). Understand: think → act → observe loop; planning; reflection.',
            resources: [
              {
                label: 'ReAct paper',
                url: 'https://arxiv.org/abs/2210.03629',
                kind: 'article',
              },
              {
                label: 'Anthropic — Building effective agents',
                url: 'https://www.anthropic.com/research/building-effective-agents',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p4-m1-minimal-agent',
            title: 'Build a minimal agent loop from scratch',
            type: 'practice',
            estimatedHours: 5,
            description:
              "Extend your phase-2 tool-loop into a real agent: it gets a goal, plans, calls tools, observes, decides next action, stops when done. Add a max-step safety. No frameworks.",
            deliverable: 'An `agent.py` under 300 lines that solves a multi-step task.',
            resources: [
              {
                label: 'Anthropic cookbook — agents',
                url: 'https://github.com/anthropics/anthropic-cookbook/tree/main/misc',
                kind: 'repo',
              },
            ],
          },
          {
            id: 'p4-m1-tools-suite',
            title: 'A meaningful tool suite for the agent',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Give your agent: web search, web-page fetch+extract, file read/write in a sandbox dir, and a calculator. Make sure errors round-trip cleanly to the model.",
            deliverable: 'Agent + 4 tools, each with typed schemas and good error messages.',
            resources: [
              {
                label: 'Tavily Search API',
                url: 'https://docs.tavily.com/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p4-m1-task-run',
            title: 'Run a real multi-step task',
            type: 'practice',
            estimatedHours: 4,
            description:
              'Pick a task that genuinely needs 5+ steps (e.g. "find 3 recent papers on X, download abstracts, write a comparison report to `out/report.md`"). Run, debug, log traces.',
            deliverable:
              'A trace file showing the steps the agent took + the final artifact.',
            resources: [
              {
                label: 'OpenAI Agents SDK — concepts',
                url: 'https://openai.github.io/openai-agents-python/',
                kind: 'docs',
              },
              {
                label: 'Anthropic — Building effective agents',
                url: 'https://www.anthropic.com/research/building-effective-agents',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p4-m1-failure-modes',
            title: 'Catalog agent failure modes',
            type: 'theory',
            estimatedHours: 4,
            description:
              "Re-run the task 5 times. Catalog what goes wrong (loops, wrong tool, hallucinated args, premature stop). You'll need this vocabulary in interviews.",
            resources: [
              {
                label: 'applied-llms.org (re-read: agents section)',
                url: 'https://applied-llms.org/',
                kind: 'article',
              },
            ],
          },
        ],
      },
      {
        id: 'p4-m2',
        title: '4.2 Agent Frameworks',
        goal: 'Rebuild your scratch agent with a real framework so you can read framework code in interviews without panic.',
        tasks: [
          {
            id: 'p4-m2-langgraph-tutorial',
            title: 'LangGraph quickstart',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Walk through the LangGraph quickstart. Build the example. Understand: state, nodes, edges, conditional routing.",
            deliverable: 'Quickstart example running locally.',
            resources: [
              {
                label: 'LangGraph — quickstart',
                url: 'https://langchain-ai.github.io/langgraph/tutorials/introduction/',
                kind: 'docs',
              },
              {
                label: 'LangGraph — concepts',
                url: 'https://langchain-ai.github.io/langgraph/concepts/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p4-m2-rebuild',
            title: 'Rebuild your agent in LangGraph',
            type: 'practice',
            estimatedHours: 6,
            description:
              "Port your scratch agent to LangGraph. Compare line counts, debuggability, observability. Note what you got for free (checkpoints, streaming, time-travel) vs what you lost (transparency).",
            deliverable: 'A LangGraph version of your agent + a 5-bullet tradeoffs writeup.',
            resources: [
              {
                label: 'LangGraph — how-tos',
                url: 'https://langchain-ai.github.io/langgraph/how-tos/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p4-m2-when-framework',
            title: 'When to use a framework vs roll your own',
            type: 'theory',
            estimatedHours: 2,
            description:
              "Read 1–2 essays on the framework-vs-no-framework debate. Form your own opinion in 200 words.",
            resources: [
              {
                label: 'Anthropic — Building effective agents (§ frameworks)',
                url: 'https://www.anthropic.com/research/building-effective-agents',
                kind: 'article',
              },
              {
                label: 'Latent Space — agent frameworks discussion',
                url: 'https://www.latent.space/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p4-m2-multi-agent',
            title: 'Multi-agent patterns',
            type: 'practice',
            estimatedHours: 4,
            description:
              'Implement a supervisor pattern: an orchestrator agent dispatches to specialist sub-agents (researcher, writer, critic). Run on a non-trivial task.',
            deliverable: 'A working supervisor-style multi-agent workflow.',
            resources: [
              {
                label: 'LangGraph — multi-agent',
                url: 'https://langchain-ai.github.io/langgraph/concepts/multi_agent/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p4-m2-survey-other',
            title: 'Survey: other frameworks',
            type: 'theory',
            estimatedHours: 4,
            description:
              "Skim CrewAI, AutoGen, OpenAI Agents SDK. For each: what's the core abstraction? When would you reach for it over LangGraph?",
            resources: [
              {
                label: 'OpenAI Agents SDK',
                url: 'https://openai.github.io/openai-agents-python/',
                kind: 'docs',
              },
              {
                label: 'CrewAI',
                url: 'https://docs.crewai.com/',
                kind: 'docs',
              },
              {
                label: 'AutoGen (now Microsoft Agent Framework)',
                url: 'https://microsoft.github.io/autogen/stable/',
                kind: 'docs',
              },
            ],
          },
        ],
      },
      {
        id: 'p4-m3',
        title: '4.3 MCP — Model Context Protocol',
        goal: 'Understand MCP and ship a server. It is becoming the lingua franca for tool integrations across clients.',
        tasks: [
          {
            id: 'p4-m3-what-is-mcp',
            title: 'What is MCP and why',
            type: 'theory',
            estimatedHours: 2,
            description:
              'Read the MCP intro and the architecture overview. Be able to explain in 2 minutes what MCP solves (tool-portability across clients) and what it does not (it is not a framework).',
            resources: [
              {
                label: 'MCP — introduction',
                url: 'https://modelcontextprotocol.io/introduction',
                kind: 'docs',
              },
              {
                label: 'MCP — architecture',
                url: 'https://modelcontextprotocol.io/docs/concepts/architecture',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p4-m3-connect-server',
            title: 'Connect an existing MCP server to a client',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Pick a stock MCP server (filesystem, github, fetch). Connect it to a client (Claude Desktop, Claude Code, or Cursor). Confirm tools show up and work.",
            deliverable: 'A screen recording / screenshots of an MCP tool firing.',
            resources: [
              {
                label: 'MCP — example servers',
                url: 'https://github.com/modelcontextprotocol/servers',
                kind: 'repo',
              },
              {
                label: 'Claude Desktop — using MCP',
                url: 'https://modelcontextprotocol.io/quickstart/user',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p4-m3-build-server',
            title: 'Build a simple MCP server',
            type: 'practice',
            estimatedHours: 5,
            description:
              "Build an MCP server that exposes 2–3 tools (e.g. read/write a local note store; fetch a saved bookmark; whatever you'd actually use). Connect from Claude Desktop or Claude Code.",
            deliverable: 'Your MCP server running and callable from a real client.',
            resources: [
              {
                label: 'MCP — build a server (TS quickstart)',
                url: 'https://modelcontextprotocol.io/quickstart/server',
                kind: 'docs',
              },
              {
                label: 'MCP — TypeScript SDK',
                url: 'https://github.com/modelcontextprotocol/typescript-sdk',
                kind: 'repo',
              },
            ],
          },
          {
            id: 'p4-m3-debugging',
            title: 'MCP — debugging + inspector',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Use the MCP Inspector to debug your server. Try logging, structured errors, and one failure case. Note how this maps to the developer experience you'll want when building tools for agents.",
            deliverable: 'Inspector screenshots showing a tool call and its result.',
            resources: [
              {
                label: 'MCP Inspector',
                url: 'https://github.com/modelcontextprotocol/inspector',
                kind: 'repo',
              },
            ],
          },
        ],
      },
      {
        id: 'p4-m4',
        title: '4.4 Workflow Automation',
        goal: 'Tie agents to your own everyday workflows; compare code-first vs no-code orchestration honestly.',
        tasks: [
          {
            id: 'p4-m4-n8n-setup',
            title: 'n8n — install and first AI workflow',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Self-host n8n (Docker is fastest). Build a 'when email arrives → summarize → post to Slack' (or similar) workflow using an LLM node.",
            deliverable: 'A working n8n workflow that uses an LLM step.',
            resources: [
              {
                label: 'n8n — self-host docs',
                url: 'https://docs.n8n.io/hosting/',
                kind: 'docs',
              },
              {
                label: 'n8n — AI nodes',
                url: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p4-m4-n8n-vs-code',
            title: 'Compare n8n vs code-first',
            type: 'theory',
            estimatedHours: 2,
            description:
              'Write a 1-page note on when no-code orchestration (n8n, Zapier) wins and when you need code. Your front-end + n8n background is an asset — frame it.',
            resources: [
              {
                label: 'n8n — vs Zapier vs code',
                url: 'https://docs.n8n.io/learning-paths/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p4-m4-research-agent',
            title: 'Project — Research-assistant agent',
            type: 'practice',
            estimatedHours: 8,
            description:
              "Build a research agent (in code, using LangGraph or your scratch loop): given a topic, it searches the web, picks N sources, reads them, synthesizes a Markdown report with citations, and saves it. Add a small UI (chat-style or a one-shot form).",
            deliverable:
              'A deployed mini-app that takes a topic and produces a Markdown report.',
            resources: [
              {
                label: 'LangGraph — multi-agent research example',
                url: 'https://github.com/langchain-ai/langgraph/tree/main/examples',
                kind: 'repo',
              },
            ],
          },
          {
            id: 'p4-m4-n8n-mcp',
            title: 'Tie it together — agent + n8n + MCP',
            type: 'practice',
            estimatedHours: 5,
            description:
              'Make your research agent triggerable from n8n (webhook) and expose one capability as an MCP tool. This is the kind of integration breadth that lands trainee/junior roles.',
            deliverable:
              'A diagram + working end-to-end demo: n8n → agent → MCP tool.',
            resources: [
              {
                label: 'n8n — webhook node',
                url: 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/',
                kind: 'docs',
              },
            ],
          },
        ],
      },
    ],
  },
  // ===================================================================
  // PHASE 5 — PRODUCTION AI ENGINEERING (~65h)
  // ===================================================================
  {
    id: 'p5',
    order: 5,
    title: 'Phase 5 — Production AI Engineering',
    summary:
      'Evals, observability, optimization (incl. local models), safety (incl. agentic attack surface), and a taste of fine-tuning + deploy. This is the work no demo shows but every senior interviewer looks for. ~70h.',
    modules: [
      {
        id: 'p5-m1',
        title: '5.1 Evaluation & Testing',
        goal: 'Treat prompts and pipelines like software: written, versioned, tested, regressed.',
        tasks: [
          {
            id: 'p5-m1-why-evals',
            title: 'Why evals matter — read up',
            type: 'theory',
            estimatedHours: 2,
            description:
              "Read the eval essays from Hamel Husain, Eugene Yan, and the applied-llms.org § eval. Note: 'vibes' do not scale.",
            resources: [
              {
                label: 'Hamel Husain — Your AI product needs evals',
                url: 'https://hamel.dev/blog/posts/evals/',
                kind: 'article',
              },
              {
                label: 'Eugene Yan — Evaluating LLMs is a minefield',
                url: 'https://eugeneyan.com/writing/llm-evaluators/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p5-m1-types',
            title: 'Eval types — taxonomy',
            type: 'theory',
            estimatedHours: 2,
            description:
              "Make a one-pager: unit-test-style asserts, reference-based (exact match, BLEU/ROUGE — and their limits), LLM-as-judge, pairwise preference, human eval. When to use each.",
            resources: [
              {
                label: 'OpenAI — Evals overview',
                url: 'https://platform.openai.com/docs/guides/evals',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p5-m1-judge',
            title: 'LLM-as-judge — pitfalls and patterns',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Build a judge prompt for an existing project. Watch the pitfalls (verbosity bias, position bias, self-preference). Calibrate it against ~20 human-labeled examples. **Keep eval sets to 10–30 items while iterating** — every judge call costs money per item, so a calibration loop on 200 items can cost real dollars per pass.",
            deliverable:
              'A judge prompt + a calibration table (agreement % with human).',
            resources: [
              {
                label: 'Eugene Yan — LLM evaluators',
                url: 'https://eugeneyan.com/writing/llm-evaluators/',
                kind: 'article',
              },
              {
                label: 'Hamel Husain — your AI product needs evals',
                url: 'https://hamel.dev/blog/posts/evals/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p5-m1-harness',
            title: 'Build an eval harness for a project',
            type: 'practice',
            estimatedHours: 6,
            description:
              "Pick one of your projects (RAG app, research agent). Build an eval harness: dataset of inputs+expected, run, score per metric, output an HTML or markdown report. Make it idempotent and cheap to re-run.",
            deliverable: 'A `evals/` directory you can run with `make eval` (or similar).',
            resources: [
              {
                label: 'Promptfoo',
                url: 'https://www.promptfoo.dev/docs/intro/',
                kind: 'tool',
              },
              {
                label: 'OpenAI evals',
                url: 'https://github.com/openai/evals',
                kind: 'repo',
              },
            ],
          },
          {
            id: 'p5-m1-regression',
            title: 'Prompt regression tests',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Add prompt regression tests: when you change a prompt, your harness reruns and reports score deltas. Commit the baseline. Pretend a teammate would review this — write a `BASELINE.md`.",
            deliverable: 'A baseline file in repo + a CI workflow (or local script) that catches regressions.',
            resources: [
              {
                label: 'Promptfoo — assertions',
                url: 'https://www.promptfoo.dev/docs/configuration/expected-outputs/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p5-m1-applied-final',
            title: 'Final re-read: applied-llms.org',
            type: 'theory',
            estimatedHours: 3,
            description:
              "Final pass of the essay with the full roadmap context. Update your notes and capture 5 lessons you want to bring to every project.",
            resources: [
              {
                label: 'applied-llms.org',
                url: 'https://applied-llms.org/',
                kind: 'article',
              },
            ],
          },
        ],
      },
      {
        id: 'p5-m2',
        title: '5.2 Observability & Monitoring',
        goal: 'Once an app is shipped, you need to see what is happening — traces, costs, latencies.',
        tasks: [
          {
            id: 'p5-m2-pick-tool',
            title: 'Pick a tracing tool',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Pick one of Langfuse (self-hostable + free tier), LangSmith, or Helicone. Sign up and get the SDK installed in a project.",
            deliverable: 'Your dev project sends traces to the chosen tool.',
            resources: [
              {
                label: 'Langfuse — docs',
                url: 'https://langfuse.com/docs',
                kind: 'docs',
              },
              {
                label: 'LangSmith — docs',
                url: 'https://docs.smith.langchain.com/',
                kind: 'docs',
              },
              {
                label: 'Helicone — docs',
                url: 'https://docs.helicone.ai/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p5-m2-instrument',
            title: 'Instrument a multi-step pipeline',
            type: 'practice',
            estimatedHours: 4,
            description:
              "Wire tracing into a project with chained calls / agents. Verify you can see: full trace, latency per step, token + cost per step, errors.",
            deliverable: 'A screenshot of a useful, well-named trace.',
            resources: [
              {
                label: 'Langfuse — tracing',
                url: 'https://langfuse.com/docs/tracing',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p5-m2-dashboards',
            title: 'Cost / latency / token dashboards',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Set up dashboards (or use the built-in ones) that show: daily cost, p50/p95 latency, tokens per request, error rate. Note what looks like an anomaly.",
            deliverable: "A short writeup on what you'd alert on and at what threshold.",
            resources: [
              {
                label: 'Langfuse — analytics',
                url: 'https://langfuse.com/docs/analytics/overview',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p5-m2-debug-with-traces',
            title: 'Use traces to debug a real failure',
            type: 'practice',
            estimatedHours: 3,
            description:
              'Intentionally introduce a bug (bad tool spec, off-by-one chunking). Use your traces to diagnose. Document the workflow you used.',
            deliverable: 'A `debugging-with-traces.md` lessons file.',
            resources: [
              {
                label: 'Langfuse — debugging',
                url: 'https://langfuse.com/docs/tracing-features/sessions',
                kind: 'docs',
              },
            ],
          },
        ],
      },
      {
        id: 'p5-m3',
        title: '5.3 Optimization',
        goal: 'Cheaper, faster, and just as good — the basics every AI app engineer should know how to apply.',
        tasks: [
          {
            id: 'p5-m3-prompt-caching',
            title: 'Prompt caching — implement + measure',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Apply Anthropic prompt caching (or OpenAI cached_input) to a long-system-prompt project. Measure: latency, cost, cache hit rate.",
            deliverable: 'Before/after numbers in a markdown file.',
            resources: [
              {
                label: 'Anthropic — prompt caching',
                url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-caching',
                kind: 'docs',
              },
              {
                label: 'OpenAI — prompt caching',
                url: 'https://platform.openai.com/docs/guides/prompt-caching',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p5-m3-model-selection',
            title: 'Model selection — Haiku vs Sonnet vs Opus (or 4o-mini vs 4o)',
            type: 'practice',
            estimatedHours: 4,
            description:
              'Take one of your eval sets. Run it across 3 model tiers. Make a price/quality/latency table. Decide a default and a fallback per task type.',
            deliverable: 'A decision matrix you can defend in an interview.',
            resources: [
              {
                label: 'Anthropic — models comparison',
                url: 'https://docs.claude.com/en/docs/about-claude/models',
                kind: 'docs',
              },
              {
                label: 'OpenAI — models',
                url: 'https://platform.openai.com/docs/models',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p5-m3-context-mgmt',
            title: 'Context-window management',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Add a context manager to a chat app: token-count incoming messages, summarize old turns when nearing the cap, drop or rerank retrieved chunks under budget. Verify behavior under a synthetic 'long convo' test.",
            deliverable: 'A `context.ts` (or `.py`) module + a long-convo test that no longer overflows.',
            resources: [
              {
                label: 'Anthropic — long context tips',
                url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/long-context-tips',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p5-m3-ollama-local',
            title: 'Run a local LLM with Ollama',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Install Ollama. Pull a small model (e.g. `llama3.1:8b-q4_K_M` or `qwen2.5:7b`). Drive it from Python via its OpenAI-compatible endpoint. Run one of your earlier scripts against it (entity extractor or simple chat) and compare quality + latency to hosted Haiku/4o-mini.\n\nWrite down when local models actually make sense: privacy-sensitive data that can't leave the machine, offline use, cost-free iteration on prompts, or burning through evals during development. And where they don't: anything needing the frontier capability gap, anything where the laptop becomes the bottleneck.",
            deliverable:
              'A short comparison note: same task, hosted vs local, with numbers + a 3-bullet "when local" recommendation.',
            resources: [
              {
                label: 'Ollama — docs',
                url: 'https://docs.ollama.com/',
                kind: 'docs',
              },
              {
                label: 'Ollama — OpenAI-compatible API',
                url: 'https://docs.ollama.com/openai',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p5-m3-streaming-latency',
            title: 'Latency: time-to-first-token vs total',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Measure TTFT and total latency on the same prompt across providers and across cached/uncached. Understand which UX matters more in your app (chat: TTFT; batch: total).",
            deliverable: 'A small benchmark notebook with TTFT + total per provider.',
            resources: [
              {
                label: 'OpenAI — latency optimization',
                url: 'https://platform.openai.com/docs/guides/latency-optimization',
                kind: 'docs',
              },
            ],
          },
        ],
      },
      {
        id: 'p5-m4',
        title: '5.4 Safety & Guardrails',
        goal: "Don't ship apps that get jailbroken on day one. Internalize the basics; don't theatre them.",
        tasks: [
          {
            id: 'p5-m4-threats',
            title: 'Threat landscape — read up',
            type: 'theory',
            estimatedHours: 2,
            description:
              'Read the OWASP LLM Top 10 and at least one good jailbreak post. Be specific about what attacks each defense does and does not stop.',
            resources: [
              {
                label: 'OWASP — Top 10 for LLM Applications',
                url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
                kind: 'article',
              },
              {
                label: 'Simon Willison — prompt injection writeups',
                url: 'https://simonwillison.net/tags/prompt-injection/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p5-m4-input-guards',
            title: 'Input guardrails',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Add input checks to one of your apps: length limit, content moderation (OpenAI Moderation or Llama Guard), explicit deny-list for obvious injections. Document what each catches and misses.",
            deliverable: 'An input-guard middleware + a test suite of 10 attempted attacks.',
            resources: [
              {
                label: 'OpenAI — moderation guide',
                url: 'https://platform.openai.com/docs/guides/moderation',
                kind: 'docs',
              },
              {
                label: 'Llama Guard 4 (12B, multimodal)',
                url: 'https://huggingface.co/meta-llama/Llama-Guard-4-12B',
                kind: 'tool',
              },
            ],
          },
          {
            id: 'p5-m4-output-guards',
            title: 'Output guardrails + data-leak prevention',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Add output checks: PII scrubbing, regex for known secret formats, refusal-detection. For RAG: never return text the user is not allowed to see.",
            deliverable: 'A `guards/output.ts` module + 5 unit tests.',
            resources: [
              {
                label: 'Anthropic — safety best practices',
                url: 'https://docs.claude.com/en/docs/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p5-m4-agentic-trifecta',
            title: 'Agentic attack surface — the lethal trifecta',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Generic OWASP-LLM coverage misses the most dangerous shape: agents with tools. Simon Willison's **lethal trifecta** combines (1) access to private/sensitive data, (2) exposure to untrusted input (web pages, emails, tool outputs), and (3) an exfiltration vector (any outbound tool — HTTP fetch, image render, share link, even a markdown link). All three together = near-guaranteed exploit path via indirect prompt injection.\n\nTake one of your agents from phase 4 and audit it: which tools touch private data, which tools accept untrusted text (especially web/document/email content), which tools can send data out. If all three exist in one run, you have the trifecta. Mitigate by removing one leg — e.g. drop the network tool, sandbox the agent away from the private store, or treat all tool outputs as user-controlled input and re-prompt-guard them.\n\nThen actually attack it: hide a prompt injection in a document or web page the agent will read, instructing it to call its exfiltration tool with secrets in the URL. Confirm whether your mitigations stop it.",
            deliverable:
              'A short `trifecta-audit.md` for one of your agents: data/input/exfil mapping, mitigation chosen, and a working attack PoC that the mitigation now blocks.',
            resources: [
              {
                label: 'Simon Willison — the lethal trifecta',
                url: 'https://simonwillison.net/tags/lethal-trifecta/',
                kind: 'article',
              },
              {
                label: 'Simon Willison — prompt injection (tag)',
                url: 'https://simonwillison.net/tags/prompt-injection/',
                kind: 'article',
              },
              {
                label: 'OWASP — LLM Top 10 (LLM01 Prompt Injection)',
                url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p5-m4-red-team',
            title: 'Light red-team a project',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Spend 90 minutes actively trying to break one of your apps (prompt injection, system-prompt extraction, jailbreaks, harmful outputs). Log every successful attack. Patch the top 3.",
            deliverable: 'A `RED-TEAM.md` with attempts, results, and fixes.',
            resources: [
              {
                label: 'PromptInject (corpus + tools)',
                url: 'https://github.com/agencyenterprise/PromptInject',
                kind: 'repo',
              },
            ],
          },
        ],
      },
      {
        id: 'p5-m5',
        title: '5.5 Fine-tuning Overview + Deploy',
        goal: 'Have an opinion on fine-tuning, run one once, and ship one app to the public internet.',
        tasks: [
          {
            id: 'p5-m5-when-finetune',
            title: 'Fine-tuning vs RAG vs prompting — when which',
            type: 'theory',
            estimatedHours: 2,
            description:
              'Read about when fine-tuning actually helps vs prompting vs RAG. Build a one-page decision tree.',
            resources: [
              {
                label: 'OpenAI — fine-tuning guide',
                url: 'https://platform.openai.com/docs/guides/fine-tuning',
                kind: 'docs',
              },
              {
                label: 'Hugging Face — fine-tuning course',
                url: 'https://huggingface.co/learn/nlp-course/chapter3/1',
                kind: 'course',
              },
            ],
          },
          {
            id: 'p5-m5-toy-finetune',
            title: 'Run a small fine-tune on a toy dataset',
            type: 'practice',
            estimatedHours: 4,
            description:
              "**Primary path (~4h, OpenAI fine-tuning API):** prepare a small JSONL dataset (50–200 examples) for a narrow style-transfer or classification task — e.g. 'rewrite product descriptions in our brand voice' or 'classify support tickets into 5 buckets'. Upload, train, evaluate before vs after on a held-out set, compare cost-per-call to a base-model + few-shot prompt baseline.\n\n**Optional deeper extension (don't budget here, +8–10h if you want it):** rerun with a Hugging Face LoRA on a small open model (e.g. Llama 3.1 8B) via PEFT. You'll spend most of that extra time on dataset prep + GPU plumbing; the lesson is *that*, not the model.",
            deliverable:
              'A short writeup with the dataset description, before/after metrics, cost-per-call comparison, and your conclusion on when fine-tuning beats prompting.',
            resources: [
              {
                label: 'OpenAI — fine-tuning API (primary path)',
                url: 'https://platform.openai.com/docs/guides/fine-tuning',
                kind: 'docs',
              },
              {
                label: 'HF — PEFT/LoRA (optional extension)',
                url: 'https://huggingface.co/docs/peft/index',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p5-m5-docker',
            title: 'Containerize an app with Docker',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Write a Dockerfile for one of your apps (RAG or chat). Multi-stage build. Run locally with `docker run`. Use a `.dockerignore`.",
            deliverable: 'A working Docker image + `docker run -p` works.',
            resources: [
              {
                label: 'Docker — getting started',
                url: 'https://docs.docker.com/get-started/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p5-m5-deploy',
            title: 'Deploy to a serverless/edge host',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Deploy your container or app to Fly.io, Railway, Vercel, or Cloudflare Workers. Set env secrets. Verify it survives a restart and shows logs.",
            deliverable: 'A live URL for one of your projects.',
            resources: [
              {
                label: 'Fly.io — speedrun',
                url: 'https://fly.io/docs/speedrun/',
                kind: 'docs',
              },
              {
                label: 'Railway — docs',
                url: 'https://docs.railway.app/',
                kind: 'docs',
              },
            ],
          },
        ],
      },
    ],
  },
  // ===================================================================
  // PHASE 6 — PORTFOLIO & JOB READINESS (~40h)
  // ===================================================================
  {
    id: 'p6',
    order: 6,
    title: 'Phase 6 — Portfolio & Job Readiness',
    summary:
      'One ambitious capstone, three sharply-presented portfolio pieces, an honest resume rewrite, and applying. ~75h.',
    modules: [
      {
        id: 'p6-m1',
        title: '6.1 Capstone',
        goal: 'One portfolio-defining project that demonstrates you can build, evaluate, and ship a real AI product. Budget ~55h — integration is where the real work lives.',
        tasks: [
          {
            id: 'p6-m1-scope',
            title: 'Scope + plan the capstone',
            type: 'theory',
            estimatedHours: 3,
            description:
              "Write a 1-page spec: problem, user, what success looks like, scope (must-have / nice-to-have / not-this-time). Must include: RAG, an agent, good UX, evals, observability. Pick a real audience (e.g. yourself, or 1 friend's workflow). Expect integration to take longer than the sum of the parts — gluing RAG + agent + UX + evals + deploy always surfaces friction the individual modules hid, and that is normal, not a sign you misplanned.",
            resources: [
              {
                label: 'Shape Up — basic concepts',
                url: 'https://basecamp.com/shapeup/1.1-chapter-02',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p6-m1-build-rag',
            title: 'Capstone — RAG layer',
            type: 'practice',
            estimatedHours: 12,
            description:
              'Build the retrieval pipeline for your capstone: loaders, chunking, embedding, store. Wire to a UI shell. Expect real-data friction (encoding, OCR, long docs) to eat much of this budget.',
            deliverable: 'Retrieval works on real data and a manual sanity check.',
            resources: [
              {
                label: 'Pinecone — Learn (RAG series)',
                url: 'https://www.pinecone.io/learn/series/rag/',
                kind: 'article',
              },
              {
                label: 'applied-llms.org — RAG lessons',
                url: 'https://applied-llms.org/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p6-m1-build-agent',
            title: 'Capstone — agentic feature',
            type: 'practice',
            estimatedHours: 12,
            description:
              'Add a multi-step agentic feature on top — e.g. "research this and produce a structured brief", "monitor X and notify me". Use the patterns from phase 4.',
            deliverable: 'A working multi-step feature you actually use.',
            resources: [
              {
                label: 'Anthropic — Building effective agents',
                url: 'https://www.anthropic.com/research/building-effective-agents',
                kind: 'article',
              },
              {
                label: 'LangGraph — multi-agent patterns',
                url: 'https://docs.langchain.com/oss/python/langgraph/multi-agent',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p6-m1-build-ux',
            title: 'Capstone — UX polish',
            type: 'practice',
            estimatedHours: 12,
            description:
              "This is your front-end edge: streaming, optimistic UI, beautiful empty states, dark mode, mobile-friendly, keyboard shortcuts. Nothing fancy — just every detail right. Plan time for the regenerate / stop / error-recovery states that AI UIs need on top of normal product polish.",
            deliverable: 'A UI you would screenshot for a portfolio.',
            resources: [
              {
                label: 'shadcn/ui',
                url: 'https://ui.shadcn.com/',
                kind: 'tool',
              },
              {
                label: 'Vercel AI SDK UI — chatbot',
                url: 'https://ai-sdk.dev/docs/ai-sdk-ui/chatbot',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p6-m1-evals-obs',
            title: 'Capstone — evals + observability',
            type: 'practice',
            estimatedHours: 8,
            description:
              'Bring the project up to phase-5 standards: a real eval set, regression tests, tracing wired in. Add a "metrics" page or include screenshots in the README.',
            deliverable: 'Eval numbers + trace screenshots in the README.',
            resources: [
              {
                label: 'Langfuse — docs',
                url: 'https://langfuse.com/docs',
                kind: 'docs',
              },
              {
                label: 'Ragas — getting started',
                url: 'https://docs.ragas.io/en/stable/getstarted/index.html',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p6-m1-deploy',
            title: 'Capstone — deploy + write up',
            type: 'practice',
            estimatedHours: 8,
            description:
              'Deploy publicly. Write a 600-word writeup: problem, decisions, tradeoffs, what you would do next. Link to the live demo and the code. First deploys always surface env / secrets / cold-start issues — budget for them.',
            deliverable: 'Live URL + a writeup on your blog / Notion / GitHub.',
            resources: [
              {
                label: 'Fly.io',
                url: 'https://fly.io/docs/',
                kind: 'docs',
              },
              {
                label: 'Vercel — deploying',
                url: 'https://vercel.com/docs',
                kind: 'docs',
              },
            ],
          },
        ],
      },
      {
        id: 'p6-m2',
        title: '6.2 Portfolio Polish',
        goal: 'Make the work scannable and credible in 30 seconds.',
        tasks: [
          {
            id: 'p6-m2-pick-three',
            title: 'Pick your top 3 projects',
            type: 'theory',
            estimatedHours: 1,
            description:
              "Choose 3 from across the roadmap: ideally one chat/multimodal, one RAG, one agent — the capstone counts. Be honest about what works and what does not.",
            resources: [
              {
                label: 'Hamel Husain — show your work',
                url: 'https://hamel.dev/blog/posts/field-guide/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p6-m2-readmes',
            title: 'Strong READMEs for each',
            type: 'practice',
            estimatedHours: 3,
            description:
              'Each repo: 1-sentence hero, GIF/screenshot, what-it-does, how-to-run, architecture diagram, eval numbers, tradeoffs. Cut anything else.',
            deliverable: '3 polished READMEs.',
            resources: [
              {
                label: 'Awesome READMEs',
                url: 'https://github.com/matiassingers/awesome-readme',
                kind: 'repo',
              },
            ],
          },
          {
            id: 'p6-m2-writeups',
            title: 'Short writeups for each',
            type: 'practice',
            estimatedHours: 3,
            description:
              'For each project, write a 300–600 word blog post / Notion note: problem, key decision, one thing you learned. Post somewhere linkable.',
            deliverable: '3 writeups linked from your portfolio.',
            resources: [
              {
                label: 'Hashnode / dev.to / Notion (pick one)',
                url: 'https://hashnode.com/',
                kind: 'tool',
              },
            ],
          },
          {
            id: 'p6-m2-github',
            title: 'GitHub profile cleanup',
            type: 'practice',
            estimatedHours: 1,
            description:
              'Profile README with: who you are, top 3 pinned repos, a contact link. Archive or hide noise. Make sure every pinned repo has a one-line description and homepage URL.',
            deliverable: 'Your GitHub profile in shareable shape.',
            resources: [
              {
                label: 'GitHub — profile README',
                url: 'https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme',
                kind: 'docs',
              },
            ],
          },
        ],
      },
      {
        id: 'p6-m3',
        title: '6.3 Resume & Positioning',
        goal: 'Reframe the front-end story honestly into an AI-engineer story.',
        tasks: [
          {
            id: 'p6-m3-resume',
            title: 'Rewrite resume — front-end → AI engineer',
            type: 'practice',
            estimatedHours: 3,
            description:
              "Rewrite the resume to lead with AI projects + Python and TS+AI SDK work. Keep front-end as supporting strength (a real edge for UX-heavy AI apps). Quantify outcomes.",
            deliverable: 'A 1-page CV reviewed by at least one engineer friend.',
            resources: [
              {
                label: 'levels.fyi — resume tips',
                url: 'https://www.levels.fyi/blog/swe-resume-tips.html',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p6-m3-linkedin',
            title: 'LinkedIn rewrite',
            type: 'practice',
            estimatedHours: 2,
            description:
              "Update headline, about, featured, and most recent role to reflect the AI engineering pivot. Add the capstone link. Use search-friendly keywords (RAG, agents, LLM, Anthropic, OpenAI, TypeScript, Python).",
            deliverable: 'A revised LinkedIn matching the resume.',
            resources: [
              {
                label: 'LinkedIn — profile best practices',
                url: 'https://www.linkedin.com/help/linkedin/answer/a566195/',
                kind: 'docs',
              },
            ],
          },
          {
            id: 'p6-m3-narrative',
            title: '90-second pivot narrative',
            type: 'theory',
            estimatedHours: 1,
            description:
              'Write and rehearse a 90-second answer to "tell me about yourself and why AI". Anchor it in real projects. Practice out loud 5 times.',
            resources: [
              {
                label: 'Exponent — peer mock interviews (formerly Pramp)',
                url: 'https://www.tryexponent.com/practice',
                kind: 'tool',
              },
            ],
          },
        ],
      },
      {
        id: 'p6-m4',
        title: '6.4 Interview Prep + Applications',
        goal: 'Be able to discuss what you built, why, and what you would do differently — and start applying.',
        tasks: [
          {
            id: 'p6-m4-topics',
            title: 'Common AI-engineer interview topics',
            type: 'theory',
            estimatedHours: 2,
            description:
              'Make a checklist: prompting, tool use, RAG architecture, evals, agent patterns, safety, cost/latency, deployment. For each, jot 3–5 bullet talking points referencing your projects.',
            resources: [
              {
                label: 'applied-llms.org',
                url: 'https://applied-llms.org/',
                kind: 'article',
              },
              {
                label: 'Eugene Yan — system design for ML/AI',
                url: 'https://eugeneyan.com/start-here/',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p6-m4-system-design',
            title: 'AI system design — practice 1 case',
            type: 'practice',
            estimatedHours: 2,
            description:
              'Pick a classic prompt ("Design a customer-support copilot for a SaaS company") and write a 1-page design: components, data, evals, failure modes, scaling, cost. Out loud explain it in 8 minutes.',
            deliverable: 'A `design-doc-1.md` you can walk through in an interview.',
            resources: [
              {
                label: 'ByteByteGo — system design YouTube',
                url: 'https://www.youtube.com/@ByteByteGo',
                kind: 'video',
              },
            ],
          },
          {
            id: 'p6-m4-explain-projects',
            title: 'Project storytelling drills',
            type: 'practice',
            estimatedHours: 1,
            description:
              'For each of your top 3 projects, rehearse: 30-second pitch, 3-minute walkthrough, 1 decision you would do differently. Out loud, recorded if possible.',
            resources: [
              {
                label: 'STAR method',
                url: 'https://www.themuse.com/advice/star-interview-method',
                kind: 'article',
              },
            ],
          },
          {
            id: 'p6-m4-apply',
            title: 'Start applying',
            type: 'practice',
            estimatedHours: 1,
            description:
              "Apply to 10 trainee/junior AI roles. Customize the first sentence of each cover letter to the company. Track in a spreadsheet. Don't wait until 'ready' — the last 20% of readiness happens in interviews.",
            deliverable: '10 applications submitted with tailored intros.',
            resources: [
              {
                label: 'AI Engineer jobs (Latent Space)',
                url: 'https://jobs.latent.space/',
                kind: 'tool',
              },
              {
                label: 'Wellfound (AngelList Talent)',
                url: 'https://wellfound.com/jobs',
                kind: 'tool',
              },
            ],
          },
        ],
      },
    ],
  },
];
