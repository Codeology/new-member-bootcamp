import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]"></div>
        <div className="absolute inset-0 bg-grid"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/0 via-dark-950/80 to-dark-950"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-indigo-600 flex items-center justify-center font-bold text-white">C</div>
            <span className="font-bold text-xl tracking-tight">Codeology</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="#curriculum" className="hover:text-white transition">Curriculum</Link>
            <div className="h-4 w-px bg-white/10"></div>
            <a href="/starter.html" className="hover:text-brand-400 transition" target="_blank">Student Starter</a>
            <a href="/solution.html" className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition border border-white/5" target="_blank">View Solution</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Hero Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              FALL 2026 COHORT
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Build the <br />
              <span className="text-gradient">Shoutout Wall.</span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Your first shipping experience. Learn full-stack development by building a real-time message board from scratch with <span className="text-slate-200">HTML</span>, <span className="text-slate-200">Tailwind</span>, and <span className="text-slate-200">Supabase</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/starter.html" className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-semibold transition shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2">
                <span>Start Coding</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a href="/solution.html" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl font-semibold transition border border-white/5 flex items-center justify-center gap-2">
                View Demo
              </a>
            </div>
          </div>

          {/* Hero Visual (Code Preview) */}
          <div className="relative animate-float hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-indigo-600 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-dark-900 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Browser Bar */}
              <div className="h-10 bg-dark-800 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                <div className="ml-4 flex-1 h-6 bg-dark-900 rounded flex items-center px-3 text-[10px] text-slate-500 font-mono">
                  localhost:3000
                </div>
              </div>
              {/* Code Content */}
              <div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-300">
                <pre><code>
                  <span className="text-purple-400">async</span> <span className="text-blue-400">function</span> <span className="text-yellow-300">postMessage</span>() &#123;{'\n'}
                  {'  '}<span className="text-slate-500">// 1. Get user input</span>{'\n'}
                  {'  '}<span className="text-blue-400">const</span> name = document.<span className="text-blue-300">getElementById</span>(<span className="text-green-300">&apos;name&apos;</span>).value;{'\n'}
                  {'  '}{'\n'}
                  {'  '}<span className="text-slate-500">// 2. Send to database</span>{'\n'}
                  {'  '}<span className="text-blue-400">const</span> &#123; error &#125; = <span className="text-purple-400">await</span> supabase{'\n'}
                  {'    '}.<span className="text-blue-300">from</span>(<span className="text-green-300">&apos;messages&apos;</span>){'\n'}
                  {'    '}.<span className="text-blue-300">insert</span>([&#123; name, message &#125;]);{'\n'}
                  {'\n'}
                  {'  '}<span className="text-slate-500">// 3. Celebration! 🎉</span>{'\n'}
                  {'  '}<span className="text-purple-400">if</span> (!error) <span className="text-yellow-300">refreshMessages</span>();{'\n'}
                  &#125;
                </code></pre>
              </div>
              {/* Overlay Badge */}
              <div className="absolute bottom-6 right-6 px-4 py-2 bg-brand-500/10 border border-brand-500/20 rounded-lg backdrop-blur-md">
                <span className="text-xs font-bold text-brand-400">JS CORE LOGIC</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Curriculum Timeline */}
      <section id="curriculum" className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The Curriculum</h2>
            <p className="text-slate-400">From zero to deployed application in one session.</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500 via-purple-500 to-transparent opacity-20"></div>

            {/* Phase 1 */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 relative group">
              <div className="lg:w-1/2 lg:text-right">
                <div className="inline-block p-4 rounded-2xl glass-card hover:border-brand-500/30 transition duration-300">
                  <span className="text-xs font-bold text-brand-400 tracking-wider">PHASE 01</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">The Foundation</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Mastering the structure of the web. You&apos;ll build the visual layer using
                    <span className="text-orange-400 font-mono"> HTML5</span> for layout and
                    <span className="text-cyan-400 font-mono"> Tailwind CSS</span> for styling.
                  </p>
                </div>
              </div>
              <div className="absolute left-8 lg:left-1/2 -ml-[5px] w-2.5 h-2.5 rounded-full bg-brand-500 shadow-[0_0_15px_rgba(14,165,233,0.5)] z-20 mt-6 start-dot"></div>
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>

            {/* Phase 2 */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-16 mb-16 relative group">
              <div className="lg:w-1/2 text-left">
                <div className="inline-block p-4 rounded-2xl glass-card hover:border-purple-500/30 transition duration-300">
                  <span className="text-xs font-bold text-purple-400 tracking-wider">PHASE 02</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">Interactive Logic</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Bringing the app to life. We use <span className="text-yellow-400 font-mono">JavaScript</span> to handle user events,
                    grab input data, and manipulate the DOM dynamically.
                  </p>
                </div>
              </div>
              <div className="absolute left-8 lg:left-1/2 -ml-[5px] w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-20 mt-6 center-dot"></div>
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>

            {/* Phase 3 */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 relative group">
              <div className="lg:w-1/2 lg:text-right">
                <div className="inline-block p-4 rounded-2xl glass-card hover:border-green-500/30 transition duration-300">
                  <span className="text-xs font-bold text-green-400 tracking-wider">PHASE 03</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">Data Persistence</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Connecting to the cloud. You&apos;ll stick up a <span className="text-green-400 font-mono">Supabase</span> backend to store messages
                    permanently in a PostgreSQL database.
                  </p>
                </div>
              </div>
              <div className="absolute left-8 lg:left-1/2 -ml-[5px] w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] z-20 mt-6 end-dot"></div>
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-brand-400 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">C</div>
            <span className="font-bold text-slate-300">Codeology</span>
          </div>
          <p className="text-slate-600 text-sm">© 2026 Codeology. Built for builders.</p>
        </div>
      </footer>
    </>
  );
}
