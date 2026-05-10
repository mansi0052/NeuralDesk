import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl bg-black/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 font-bold">
              N
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-wide">
                NeuralDesk
              </h1>
              <p className="text-xs text-gray-400">
                AI Workspace Platform
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition">
              Features
            </a>

            <a href="#analytics" className="text-sm text-gray-300 hover:text-white transition">
              Analytics
            </a>

            <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/5 transition">
              Login
            </button>

            <Link
              to="/dashboard"
              className="rounded-xl bg-violet-600 px-5 py-2 text-sm font-medium transition hover:bg-violet-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-24 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                ✨ AI Powered Research Workspace
              </div>

              <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                The Future of
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {' '}AI Productivity
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
                NeuralDesk combines AI chat, analytics, research workflows,
                and collaboration into one futuristic workspace.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/dashboard"
                  className="rounded-2xl bg-violet-600 px-7 py-4 text-sm font-semibold transition hover:scale-105 hover:bg-violet-500"
                >
                  Start Building
                </Link>

                <button className="rounded-2xl border border-white/10 px-7 py-4 text-sm transition hover:bg-white/5">
                  Live Demo
                </button>
              </div>

              <div className="mt-12 flex items-center gap-10 text-sm text-gray-400">
                <div>
                  <p className="text-3xl font-bold text-white">50K+</p>
                  Users
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">99.9%</p>
                  Uptime
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">4.9★</p>
                  Rating
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
                {/* Window Top */}
                <div className="mb-6 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                {/* Dashboard Mockup */}
                <div className="space-y-5">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-2xl bg-[#111827] p-4">
                      <p className="text-sm text-gray-400">AI Queries</p>
                      <h3 className="mt-2 text-2xl font-bold">48K</h3>
                    </div>

                    <div className="rounded-2xl bg-[#111827] p-4">
                      <p className="text-sm text-gray-400">Active Users</p>
                      <h3 className="mt-2 text-2xl font-bold">12K</h3>
                    </div>

                    <div className="rounded-2xl bg-[#111827] p-4">
                      <p className="text-sm text-gray-400">Growth</p>
                      <h3 className="mt-2 text-2xl font-bold text-emerald-400">
                        +34%
                      </h3>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#111827] p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="font-semibold">AI Assistant</h3>
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400">
                        Online
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl bg-[#1e293b] p-4 text-sm text-gray-300">
                        Generate weekly analytics report.
                      </div>

                      <div className="rounded-2xl bg-violet-600 p-4 text-sm">
                        Report generated successfully with AI insights.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-10 hidden rounded-2xl border border-white/10 bg-[#111827] p-5 shadow-2xl lg:block">
                <p className="text-sm text-gray-400">AI Efficiency</p>
                <h3 className="mt-2 text-4xl font-bold text-emerald-400">
                  +84%
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
              Features
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Everything you need
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Built for modern AI workflows, collaboration, and research.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'AI Chat Assistant',
                desc: 'Interact with advanced AI for research and productivity.',
              },
              {
                title: 'Analytics Dashboard',
                desc: 'Track AI usage, growth metrics, and performance.',
              },
              {
                title: 'Real-Time Collaboration',
                desc: 'Collaborate with your team instantly and efficiently.',
              },
              {
                title: 'Smart Automation',
                desc: 'Automate repetitive workflows using AI agents.',
              },
              {
                title: 'Research Workspace',
                desc: 'Centralized knowledge base for research projects.',
              },
              {
                title: 'Enterprise Security',
                desc: 'Advanced encryption and enterprise-grade protection.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-violet-500/30 hover:bg-white/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 text-2xl">
                  ✦
                </div>

                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-400">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Flexible pricing for teams
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: '$19',
                features: ['Basic AI tools', '3 team members', 'Analytics'],
              },
              {
                name: 'Pro',
                price: '$49',
                features: ['Advanced AI', 'Unlimited chats', 'Priority support'],
              },
              {
                name: 'Enterprise',
                price: '$99',
                features: ['Custom AI models', 'Security suite', 'Dedicated manager'],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-10"
              >
                <h3 className="text-2xl font-semibold">{plan.name}</h3>

                <p className="mt-6 text-5xl font-bold">{plan.price}</p>

                <ul className="mt-8 space-y-4 text-left text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>

                <button className="mt-10 w-full rounded-2xl bg-violet-600 px-6 py-4 font-medium transition hover:bg-violet-500">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-[40px] border border-white/10 bg-gradient-to-r from-violet-600/20 to-cyan-500/10 p-16 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-bold md:text-6xl">
            Ready to build with AI?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Start your next-generation AI workflow with NeuralDesk today.
          </p>

          <Link
            to="/dashboard"
            className="mt-10 inline-block rounded-2xl bg-violet-600 px-8 py-4 text-lg font-semibold transition hover:scale-105 hover:bg-violet-500"
          >
            Launch App
          </Link>
        </div>
      </section>
    </div>
  );
}
