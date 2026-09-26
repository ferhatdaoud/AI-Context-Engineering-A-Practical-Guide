import "./App.css";

function App() {

  const sections = [
    { id: "intro", label: "Introduction" },
    { id: "omniroute", label: "Setting Up Omniroute" },
    { id: "context-files", label: "Writing Context Files" },
    { id: "integration", label: "Claude Code Integration" },
    { id: "examples", label: "Real-World Examples" },
    { id: "best-practices", label: "Best Practices & Tips" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">
            AI Context Engineering Guide
          </h1>
          <a
            href="https://github.com/ferhatdaoud/AI-Context-Engineering-A-Practical-Guide"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-73px)] sticky top-[73px] overflow-y-auto">
          <nav className="p-6 space-y-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100 hover:text-blue-700"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-8 py-12">
          {/* Introduction */}
          <section id="intro" className="mb-20 scroll-mt-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is AI Context Engineering?
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p className="leading-relaxed">
                I've been coding for a little over a year as a self-taught developer, and like most people getting started,
                I leaned heavily on tools like ChatGPT, Gemini, and Claude Chat to learn and debug. But honestly, it started
                getting super frustrating.
              </p>
              <p className="leading-relaxed">
                I'm the kind of person who always wants to optimize how I learn. The breaking point for me was working on
                complex features. When you're trying to debug a flow that touches five different files, copying and pasting
                all that code into a web chat just isn't practical. The chat gets laggy, the context gets lost, and the AI
                starts to hallucinate. I remember thinking, <em>"There has to be a better way than this copy-paste dance."</em>
              </p>
              <p className="leading-relaxed">
                A few months ago (around June 2026), I started researching alternatives and discovered IDE-integrated AI tools.
                I tried several—Windsurf, Copilot, Continue—before landing on Kilo Code. It was exactly what I needed: an AI
                that was actually <strong>inside</strong> my environment, could see how my files connected, and could explain
                the data flow right there in the editor.
              </p>
              <p className="leading-relaxed">
                But my real "aha" moment happened just two days ago. I got curious about how these AI IDEs actually work under
                the hood, which led me down a rabbit hole where I discovered <strong>Omniroute</strong>.
              </p>
              <p className="leading-relaxed">
                The concept blew my mind: what if you could take the power of multiple AI providers, link them together into a
                single, powerful "combo," and use that to run Kilo Code or Claude CLI directly in your VS Code terminal?
              </p>
              <p className="leading-relaxed">
                I immediately started testing the workflow on my portfolio site. The difference was night and day. Instead of
                spending hours manually coding a new design just to see if I liked it, I was testing and iterating design
                ideas on the spot and pushing directly to GitHub.
              </p>
              <p className="leading-relaxed">
                This documentation site is my living journal. I'm building it right now using the exact workflow I'm writing about.
                The goal isn't to be an "expert" with years of experience—it's to show you what's possible when you stop
                copy-pasting code into chat windows and start setting up your projects so AI actually understands them.
              </p>
            </div>
          </section>

          {/* Setting Up Omniroute */}
          <section id="omniroute" className="mb-20 scroll-mt-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Setting Up Omniroute
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p className="leading-relaxed">
                Omniroute is an open-source AI gateway that acts as a middleman between your IDE tools (like Claude Code or
                Kilo Code) and multiple AI providers. The magic? It routes your requests through providers offering free
                API tiers, giving you access to <strong>1.6 billion daily free tokens</strong>.
              </p>
              <p className="leading-relaxed">
                Here's the complete setup process I followed. Save these steps somewhere—trust me, you'll want to reference
                them if something breaks.
              </p>

              <div className="bg-white border border-gray-200 rounded-lg p-8 my-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">📋 Prerequisites</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Node.js installed</li>
                  <li>Visual Studio Code</li>
                  <li>A terminal (PowerShell for Windows)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Step 1: Install & Launch Omniroute</h3>
              <p className="leading-relaxed">
                Omniroute runs as a local server on your machine, intercepting API calls from Claude/Kilo and routing them
                to free providers.
              </p>
              <div className="bg-gray-900 text-gray-100 rounded-lg overflow-hidden my-4">
                <div className="bg-gray-800 px-6 py-3 border-b border-gray-700">
                  <span className="text-sm font-mono text-gray-400">Terminal</span>
                </div>
                <pre className="p-6 overflow-x-auto">
                  <code className="text-sm font-mono leading-relaxed">{`# Install globally
npm install -g omniroute

# Start the server
omniroute`}</code>
                </pre>
              </div>
              <p className="leading-relaxed">
                Look for the local server URL in the terminal output (usually <code className="bg-gray-100 px-2 py-1 rounded text-sm">http://localhost:20128</code>).
                Open that URL in your browser. When prompted for a password, enter: <code className="bg-gray-100 px-2 py-1 rounded text-sm">CHANGEME</code> (all caps).
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Step 2: Connect Free AI Providers</h3>
              <p className="leading-relaxed">
                In the Omniroute dashboard, go to the <strong>Providers</strong> tab. We'll connect multiple providers to
                maximize our free token pool.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">1. OpenRouter (Free Tier)</h4>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>Search for OpenRouter and click "Add Connection"</li>
                    <li>Go to OpenRouter.ai, create an account, and generate an API key</li>
                    <li>Paste the key into Omniroute</li>
                    <li><strong>Important:</strong> Toggle "Import only free models" before saving</li>
                  </ul>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-green-900 mb-2">2. OpenCode</h4>
                  <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                    <li>Search for OpenCode and click "Add Connection"</li>
                    <li>No authentication needed—it automatically imports free models like DeepSeek</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">3. Kiro AI & Antigravity (Free Claude Models)</h4>
                  <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                    <li>Search for both providers</li>
                    <li>Authenticate via Google OAuth popup</li>
                    <li>This gives you free access to Claude 3.5 Sonnet and Opus</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">4. NVIDIA NIM</h4>
                  <ul className="list-disc list-inside space-y-1 text-orange-800 text-sm">
                    <li>Go to build.nvidia.com, sign in, and generate an API key</li>
                    <li>Paste it into Omniroute to access high-tier models like GLM-5.2</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5 my-6">
                <p className="text-yellow-900 text-sm">
                  💡 <strong>Pro Tip:</strong> Click the "Test Model" (Play button) next to your imported models to ensure
                  they return green success checkmarks.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Step 3: Create a Routing "Combo"</h3>
              <p className="leading-relaxed">
                A combo tells Omniroute which models to use and what to do if one fails or hits a rate limit.
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 my-4">
                <li>Navigate to the <strong>Combos</strong> tab</li>
                <li>Select the "Free Stack ($0)" template</li>
                <li>Give your combo a unique name (e.g., <code className="bg-gray-100 px-2 py-1 rounded text-sm">david-ai</code>). Remember this name!</li>
                <li>Add your preferred models (Claude 3.5 Sonnet, Claude Opus, GLM-5.2, etc.)</li>
                <li>Order them by priority using the up/down arrows</li>
                <li>Change the routing strategy to <strong>Round Robin</strong> (ensures instant fallback)</li>
                <li>Click "Create Combo"</li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Step 4: Generate Your Local API Key</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 my-4">
                <li>Navigate to the <strong>API Keys</strong> section</li>
                <li>Click "Create API Key"</li>
                <li>Name it (e.g., <code className="bg-gray-100 px-2 py-1 rounded text-sm">local-ai-key</code>)</li>
                <li>Click "Create" and copy the generated key—you'll only see it once!</li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Step 5: Install Claude Code CLI</h3>
              <p className="leading-relaxed">
                Leave your Omniroute terminal running and open a <strong>second terminal</strong> in VS Code.
              </p>
              <div className="bg-gray-900 text-gray-100 rounded-lg overflow-hidden my-4">
                <div className="bg-gray-800 px-6 py-3 border-b border-gray-700">
                  <span className="text-sm font-mono text-gray-400">PowerShell (Windows)</span>
                </div>
                <pre className="p-6 overflow-x-auto">
                  <code className="text-sm font-mono leading-relaxed">{`irm https://claude.ai/install.ps1 | iex`}</code>
                </pre>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-6">
                <h4 className="font-semibold text-red-900 mb-2">⚠️ Troubleshooting: "Claude is not recognized" (Windows)</h4>
                <p className="text-red-800 text-sm mb-2">If you get this error:</p>
                <ol className="list-decimal list-inside space-y-1 text-red-800 text-sm">
                  <li>Navigate to <code className="bg-red-100 px-2 py-1 rounded">C:\\Users\\YOUR_USERNAME\\AppData\\Local\\claude\\bin</code></li>
                  <li>Copy this folder path</li>
                  <li>Search Windows for "Edit environment variables for your account"</li>
                  <li>Select the "Path" variable and click "Edit"</li>
                  <li>Click "New", paste the folder path, and hit OK</li>
                  <li>Restart VS Code and your terminal</li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Step 6: The "Wiretap" (Environment Variables)</h3>
              <p className="leading-relaxed">
                This is the most critical step. We're overriding Claude's default settings so it talks to your local Omniroute
                server instead of Anthropic's billing servers.
              </p>
              <div className="bg-gray-900 text-gray-100 rounded-lg overflow-hidden my-4">
                <div className="bg-gray-800 px-6 py-3 border-b border-gray-700">
                  <span className="text-sm font-mono text-gray-400">PowerShell</span>
                </div>
                <pre className="p-6 overflow-x-auto">
                  <code className="text-sm font-mono leading-relaxed">{`# Point Claude to your local Omniroute server
$env:ANTHROPIC_BASE_URL="http://localhost:20128"

# Authenticate using your Omniroute API Key
$env:ANTHROPIC_AUTH_TOKEN="sk-YOUR_OMNIROUTE_API_KEY_HERE"

# Clear the default Anthropic API Key requirement
$env:ANTHROPIC_API_KEY=""

# Set the model to your Combo name (from Step 3)
$env:ANTHROPIC_MODEL="david-ai"`}</code>
                </pre>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Step 7: Verify and Code!</h3>
              <p className="leading-relaxed">
                With everything set up, initialize Claude Code:
              </p>
              <div className="bg-gray-900 text-gray-100 rounded-lg overflow-hidden my-4">
                <pre className="p-6 overflow-x-auto">
                  <code className="text-sm font-mono leading-relaxed">{`claude`}</code>
                </pre>
              </div>
              <p className="leading-relaxed">
                Follow the onboarding prompts and test it with a simple message like "Write a simple React component for a
                dark-mode button."
              </p>
              <p className="leading-relaxed">
                Switch to your browser and check the Omniroute <strong>Combo Control Center</strong>. You should see your
                requests registering with a 100% success rate, routing through your free providers. Your Anthropic bill stays at $0.00.
              </p>
            </div>
          </section>

          {/* Writing Effective Context Files */}
          <section id="context-files" className="mb-20 scroll-mt-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Writing Effective Context Files
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p className="leading-relaxed">
                Once you have Omniroute and Kilo Code running, the next level is teaching the AI <em>how</em> you want it
                to help you. That's where context files come in—specifically, CLAUDE.md and memory files.
              </p>
              <p className="leading-relaxed">
                Before I discovered this workflow, I'd paste code into ChatGPT and just hope it understood what I was trying
                to do. But now? I can tell the AI exactly how to interact with me, and it sticks.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">My Learning-Focused Context File</h3>
              <p className="leading-relaxed">
                Here's a real example from my setup. I created a CLAUDE.md file that instructs the AI to act as a tutor
                instead of just giving me solutions:
              </p>

              <div className="bg-gray-900 text-gray-100 rounded-lg overflow-hidden my-6">
                <div className="bg-gray-800 px-6 py-3 border-b border-gray-700">
                  <span className="text-sm font-mono text-gray-400">CLAUDE.md</span>
                </div>
                <pre className="p-6 overflow-x-auto">
                  <code className="text-sm font-mono leading-relaxed">{`# AI Tutor Instructions

## Your Role
You are a coding tutor, not a solution provider.

## When I ask for help:
1. **Don't give me the answer immediately**
2. Break down the concept into smaller pieces
3. Use analogies to explain complex ideas
4. Ask me guiding questions to help me think through the problem
5. Only provide the solution after I've tried to reason through it

## Why This Matters
The brain learns better through analogies and active problem-solving.
If you just hand me code, I won't retain it. Make me work for it.

## Example Flow
❌ Bad: "Here's the fixed code: [solution]"
✅ Good: "This error happens because X. Think of it like [analogy].
         What do you think might fix it?"`}</code>
                </pre>
              </div>

              <p className="leading-relaxed">
                This simple file completely changed how the AI interacts with me. Now when I'm stuck, it asks me questions
                and guides me instead of spoon-feeding solutions. I actually learn.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Why Context Files Matter</h3>
              <p className="leading-relaxed">
                The biggest advantage of having Omniroute + Kilo Code with proper context files? <strong>No more worrying
                about token limits when reading a large codebase.</strong>
              </p>
              <p className="leading-relaxed">
                I used to open new chats constantly in Google AI Studio because I'd hit the context limit. Now, the AI can
                read my entire project structure and spot issues I'd never catch manually.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Real Example: The Typo That Cost Me Hours</h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  I once spent hours debugging a database query that wasn't working. Turns out I had typed
                  <code className="bg-blue-100 px-2 py-1 rounded mx-1">TIMESTAMPTS</code> instead of
                  <code className="bg-blue-100 px-2 py-1 rounded mx-1">TIMESTAMPTZ</code> in an endpoint.
                  A single typo buried in one file among dozens.
                </p>
                <p className="text-blue-800 text-sm leading-relaxed mt-2">
                  With Kilo Code reading my whole codebase, it spotted that typo instantly. What would've taken me hours
                  of manual searching was solved in seconds.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Key Takeaways</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Context files let you customize how AI helps you (tutor mode, code style, conventions)</li>
                <li>Large context windows mean the AI can see your entire project structure</li>
                <li>It catches typos and inconsistencies you'd never find manually</li>
                <li>You stop wasting time copy-pasting files into external chats</li>
              </ul>
            </div>
          </section>

          {/* Integration */}
          <section id="integration" className="mb-20 scroll-mt-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Integration with Claude Code & Kilo Code
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p className="leading-relaxed">
                Once you've got Omniroute routing your requests and your context files set up, the integration with Kilo Code
                or Claude Code is seamless. The AI reads your CLAUDE.md automatically and follows your instructions.
              </p>
              <p className="leading-relaxed">
                But here's something I learned the hard way: <strong>you need to use "Ask Mode" when you're learning.</strong>
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-6">
                <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Don't Let AI Write Code for You (Yet)</h3>
                <p className="text-yellow-800 text-sm leading-relaxed">
                  When you're still learning, it's tempting to let Kilo Code just generate entire features for you. Don't.
                  Switch to "Ask Mode" so the AI explains concepts instead of handing you code.
                </p>
                <p className="text-yellow-800 text-sm leading-relaxed mt-2">
                  Ask <em>what</em>, <em>where</em>, and <em>why</em> we use certain patterns. That way, it actually sticks
                  in your brain instead of just being code you copy-paste without understanding.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">How I Use It Daily</h3>
              <p className="leading-relaxed">
                My workflow now looks like this:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 my-4">
                <li>Open my project in VS Code</li>
                <li>Start Omniroute in one terminal (<code className="bg-gray-100 px-2 py-1 rounded text-sm">omniroute</code>)</li>
                <li>Start Kilo Code in another terminal with my custom combo model</li>
                <li>The AI reads my entire codebase + my CLAUDE.md tutor instructions</li>
                <li>I ask it to explain flows, debug issues, or suggest improvements</li>
                <li>It guides me through solutions instead of just giving me code</li>
              </ol>

              <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Before vs After</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">❌ Without This Setup</h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      <li>Copy-paste files into web chats</li>
                      <li>Hit token limits constantly</li>
                      <li>Open new chats and lose context</li>
                      <li>AI hallucinates after long conversations</li>
                      <li>Spend hours hunting for typos manually</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">✅ With This Setup</h4>
                    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                      <li>AI sees entire codebase automatically</li>
                      <li>No token limit worries (1.6B daily free tokens)</li>
                      <li>Context persists across sessions</li>
                      <li>Catches typos and bugs instantly</li>
                      <li>Learn faster with tutor-mode guidance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="leading-relaxed">
                The difference is night and day. I'm not just coding faster—I'm learning faster because the AI is teaching me
                instead of doing the work for me.
              </p>
            </div>
          </section>

          {/* Real-World Examples */}
          <section id="examples" className="mb-20 scroll-mt-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Real-World Examples
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p className="leading-relaxed">
                Alright, enough theory. Let me show you what this actually looks like in practice with a real example from
                my portfolio project.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Rapid Design Iteration</h3>
              <p className="leading-relaxed">
                I wanted to test different design themes for my portfolio site. Not just "make this button blue instead of
                red"—I'm talking complete theme overhauls: dark mode, cyberpunk neon, retro 90s vibes, minimalist monochrome.
              </p>
              <p className="leading-relaxed">
                With the old workflow (manual coding or web chat copy-paste), testing even one theme would take hours. You'd
                have to manually update colors, spacing, typography, components... and then if you didn't like it? Start over.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 my-6">
                <h4 className="font-semibold text-purple-900 mb-3">⚡ With This Workflow</h4>
                <p className="text-purple-800 text-sm leading-relaxed mb-3">
                  I opened Kilo Code in my VS Code terminal and said:
                </p>
                <div className="bg-white rounded p-4 text-sm font-mono text-gray-700 mb-3">
                  "Apply a cyberpunk neon theme with electric blue accents and dark backgrounds to my portfolio site"
                </div>
                <p className="text-purple-800 text-sm leading-relaxed mb-2">
                  <strong>Time elapsed:</strong> Literally the time it took me to type that prompt. The AI read my entire
                  component structure, applied the theme consistently across all files, and I pushed it to GitHub to preview.
                </p>
                <p className="text-purple-800 text-sm leading-relaxed">
                  Didn't like it? One more prompt. "Switch to a clean minimalist design with off-white backgrounds and
                  charcoal text." Done in seconds.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">The Time Math</h3>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden my-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manual</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">With AI Workflow</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Apply new theme</td>
                      <td className="px-6 py-4 text-sm text-red-600">3-4 hours</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">30 seconds</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Test 3 different themes</td>
                      <td className="px-6 py-4 text-sm text-red-600">10-12 hours</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">2 minutes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Debug a typo in database query</td>
                      <td className="px-6 py-4 text-sm text-red-600">2-3 hours (if you're lucky)</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-semibold">Instant (AI spots it)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="leading-relaxed">
                This isn't exaggeration. When AI can see your entire codebase and understands your project structure, tasks
                that used to eat entire afternoons now happen while you're still typing.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">💡 What This Actually Means</h4>
                <p className="text-blue-800 text-sm leading-relaxed">
                  You stop being afraid to experiment. Want to try a wild design idea? Go for it—if it sucks, you can revert
                  it in seconds. This workflow removes the cost of experimentation, which means you learn faster and build
                  better projects.
                </p>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section id="best-practices" className="mb-20 scroll-mt-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Best Practices & Tips
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p className="leading-relaxed">
                I've only been using this workflow for a couple of days, but I've already learned some lessons the hard way.
                Here's what I wish I knew from the start.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-white border-l-4 border-red-500 p-6 rounded-r-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    📝 Save Your Setup Steps
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Don't skip this. When you're setting up Omniroute, copy every command, every setting, every API key
                    location into a notepad file. When something breaks (and it will), you'll want to trace back your steps.
                    I didn't do this at first and spent an hour trying to figure out why my environment variables weren't working.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-yellow-500 p-6 rounded-r-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    🎓 Use "Ask Mode" When Learning
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    For Kilo Code specifically: make sure you're in <strong>Ask Mode</strong>, not auto-generate mode.
                    When you're still learning, letting AI write entire features for you is a trap. You'll have code that
                    works, but you won't understand it.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Force yourself to ask <em>"What is this?"</em>, <em>"Where does this go?"</em>, <em>"Why do we use
                    this pattern?"</em> Those questions make concepts stick in your brain way better than copy-pasting AI
                    generated code.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    🧪 Test Your Provider Connections
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    After you connect each AI provider in Omniroute, click the "Test Model" button (the play icon).
                    You want to see green checkmarks before you create your combo. A failing provider in your combo means
                    requests will route to it and fail silently, and you'll wonder why the AI isn't responding.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    🌐 Keep Omniroute Running
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Omniroute needs to be running in a terminal while you use Kilo Code or Claude Code. If you close that
                    terminal, your requests will fail. Keep it running in the background—think of it like running a local
                    dev server.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-purple-500 p-6 rounded-r-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3 text-xl">
                    ⏱️ Be Patient at First
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    The setup process has a lot of steps, and it's easy to miss one. If something doesn't work, go back
                    through the environment variables (Step 6 in the setup guide). That's where most issues happen. Make
                    sure your combo name matches exactly what you set in <code className="bg-gray-100 px-2 py-1 rounded text-sm">$env:ANTHROPIC_MODEL</code>.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Who Should Try This Workflow?</h3>
              <p className="leading-relaxed">
                Honestly? Almost anyone who codes and uses AI tools. But here's my take:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 my-6">
                <h4 className="font-semibold text-blue-900 mb-4 text-lg">✅ This Workflow is Perfect For:</h4>
                <ul className="space-y-2 text-blue-900">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Self-taught developers</strong> who are tired of copy-pasting code into web chats</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Students</strong> who can't afford expensive API subscriptions but need powerful AI help</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Beginners</strong> who want AI to teach them, not just give them answers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Intermediate devs</strong> working on complex projects with lots of files</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Anyone</strong> who wants to experiment with design ideas without spending hours coding</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
                <h4 className="font-semibold text-yellow-900 mb-4 text-lg">⚠️ But First...</h4>
                <p className="text-yellow-800 leading-relaxed">
                  Before diving into this workflow, you should at least be familiar with VS Code's interface and have built
                  a few small projects using AI on the web (ChatGPT, Gemini, Claude). That way, you'll actually <em>appreciate</em>
                  how much time this setup saves you. If you've never used AI for coding before, start there first, feel the
                  pain points, then come back to this.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Final Thoughts</h3>
              <p className="leading-relaxed">
                This workflow changed how I build projects. I'm not waiting hours to see if a design idea works. I'm not
                spending entire afternoons hunting for typos. I'm experimenting freely, learning faster, and actually enjoying
                the process.
              </p>
              <p className="leading-relaxed">
                Is it perfect? No. You still need to understand what the AI is doing. But when you combine Omniroute's free
                token pool, Kilo Code's IDE integration, and smart context files that teach the AI how to help you? That's
                when things click.
              </p>
              <p className="leading-relaxed">
                Give it a shot. The setup takes maybe 30 minutes. The time you save after that? Literally hundreds of hours.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
            <p>
              Built with React, Vite, and Tailwind CSS • {" "}
              <a
                href="https://github.com/ferhatdaoud/AI-Context-Engineering-A-Practical-Guide"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
