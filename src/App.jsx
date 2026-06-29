import { Building2, TrendingUp, Check, Shield, Zap, User } from 'lucide-react'

const heroImage = '/hero-datacenter.jpg'
const logoImage = '/logo-xunos-blanc.png'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">

      {/* ── Header ── */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="XUNOS" className="h-12" />
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#team"     className="text-gray-400 hover:text-cyan-400 transition-colors">Team</a>
            <a href="#contact"  className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, filter: 'brightness(0.35) saturate(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-purple-900/30 to-gray-950/50" />
        <div className="max-w-7xl mx-auto relative w-full">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <img src={logoImage} alt="XUNOS" className="h-24 drop-shadow-lg" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              AI Infrastructure Developer<br />and Strategic Partner
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-md">
              Advising, Sourcing, Building and Operating AI Gigafactories and Cloud Solutions<br />
              tailored to the critical challenges of nations and industries.
            </p>

            {/* Press Release Banner */}
            <div className="mb-8">
              <a
                href="/press-release-applied-digital-2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-amber-400/10 border border-amber-400/60 rounded-lg hover:bg-amber-400/20 transition-all group backdrop-blur-sm shadow-lg"
              >
                <span className="text-amber-400 text-xs font-bold uppercase tracking-widest whitespace-nowrap">Press Release</span>
                <span className="w-px h-4 bg-amber-400/40 flex-shrink-0" />
                <span className="text-amber-100 font-bold text-base group-hover:text-amber-300 transition-colors text-left">
                  June 2nd 2026 — Xunos announces equity investment from Applied Digital
                </span>
                <svg className="w-4 h-4 text-amber-400 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-purple-600 transition-all shadow-xl hover:shadow-2xl"
              >
                Explore Our Services
              </a>
              <a
                href="#team"
                className="px-8 py-4 bg-gray-800/80 text-cyan-400 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-gray-700 transition-all backdrop-blur-sm"
              >
                Meet The Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-400">Two-fold expertise in AI infrastructure and strategic advisory</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Gigafactory card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-700 hover:border-purple-500/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Gigafactory Development &amp; Operations</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We source, design, build, and operate European hyperscale AI campuses for the world's leading technology companies
              </p>
              <div className="space-y-4">
                <ServiceItem icon={<Check className="w-3 h-3 text-gray-950" />} accent="cyan" title="Top-tier Rankings in Sovereign Energy Tenders">
                  Proven track record in winning strategic infrastructure projects
                </ServiceItem>
                <ServiceItem icon={<Check className="w-3 h-3 text-gray-950" />} accent="cyan" title="20+ Sites Identified in Europe">
                  Up to 4GW+ of IT with time to carbon-free power as soon as 2028
                </ServiceItem>
                <ServiceItem icon={<Shield className="w-3 h-3 text-gray-950" />} accent="cyan" title="Operational Excellence &amp; Compliance">
                  Executing strictly according to partner playbooks, ensuring seamless alignment with partner standards while mastering local European regulations for risk-free operations
                </ServiceItem>
                <ServiceItem icon={<Zap className="w-3 h-3 text-gray-950" />} accent="cyan" title="Sustainable Gigawatt Scaling">
                  High environmental performance with efficient energy management
                </ServiceItem>
              </div>
            </div>

            {/* Advisory card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-700 hover:border-cyan-500/50">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Strategic Advisory</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We advise corporate leaders and funds on the industrialization of AI. From unit economics to sovereign deployment strategy
              </p>
              <div className="space-y-4">
                <ServiceItem icon={<Check className="w-3 h-3 text-gray-950" />} accent="purple" title="AI &amp; Cloud Velocity Audit">
                  A 360° assessment of business, technology and operations to accelerate your organization's AI and cloud transformation
                </ServiceItem>
                <ServiceItem icon={<TrendingUp className="w-3 h-3 text-gray-950" />} accent="purple" title="Sovereign Cloud Architecture and Venturing">
                  Strategic guidance on building secure, compliant infrastructure and structuring sovereign business models (JVs, Spin-offs)
                </ServiceItem>
                <ServiceItem icon={<Shield className="w-3 h-3 text-gray-950" />} accent="purple" title="AI Localization and Sovereign Deployment">
                  Structuring the local training and operations of critical global AI models to ensure strict compliance with EU regulations, for example in Autonomous Driving, Healthcare (HDS), Finance &amp; Banking (DORA) or Critical Industries (OIV / LPM)
                </ServiceItem>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="py-20 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-xl text-gray-400">Experienced leaders driving innovation in AI infrastructure</p>
          </div>

          {/* Primary three */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <TeamCard name="Patrick Rouvillois" role="CEO & Co-Founder" size="lg">
              Former MD BCG Digital Ventures, ExCo member Carrefour, Edenred and Global Head of Natixis Tech Sector. Serial venture builder with a global track record in launching and scaling multi-billion euro digital businesses.
            </TeamCard>
            <TeamCard name="Incoming" role="Chief Technology & Information Officer" size="lg">
              25+ years spanning telecom, cloud, AI, national security. Pioneer in digital transformation and cybersecurity, bridging cutting-edge technology with large-scale infrastructure operations. Former Digital & Cloud ClO of Orange, former Ex-CIO of the French Ministry of Defense, former Ex-CIO of the French Prime Minister.
            </TeamCard>
            <TeamCard name="Yves Maitre" role="Chief Business Development Officer & Co-Founder" size="lg">
              37 years in technology. Former CEO of HTC and EVP at Orange. Director and operating partner at venture capital Jolt. BFMTV expert with rich global network.
            </TeamCard>
          </div>

          {/* Senior advisors row */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamCard name="Vivek Badrinath" role="Shareholder & Co-Founder" size="sm" accent="cyan">
                32 years in telecoms, digital and infrastructure. GSMA CEO. Former CEO of Vantage Towers (IPO). Former executive committee member at Vodafone, Accor, and Orange.
              </TeamCard>
              <TeamCard name="Thierry Souche" role="Executive advisor to the CEO & Co-Founder" size="lg">
                Former CTO of OVHcloud and Group CIO of Orange. Tech and product AI pioneer with deep expertise in designing &amp; building hyperscale cloud platforms and critical global infrastructure, having managed 3 DC constructions and operated 43 datacenters.
              </TeamCard>
              <TeamCard name="Ervan Pouliquen" role="Senior Commercial Advisor & Founding Partner" size="sm" accent="cyan">
                Former VP of Strategic Customers EMEA at Oracle. 14 years at Microsoft in HQ in Seattle and in EMEA executive teams. Former CCO at EVS Broadcasting Equipment. Former McKinsey Associate. Harvard MBA.
              </TeamCard>
              <TeamCard name="Christian Sommer" role="Senior Legal Advisor & Founding Partner" size="sm" accent="cyan">
                More than 25 years in TMT. Former director of Vantage Towers. Former senior director of Vodafone. Several times noticed GC100 Germany in Legal500. English, German and Czech bar.
              </TeamCard>
            </div>
          </div>

        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="relative py-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3861457/pexels-photo-3861457.jpeg?auto=compress&cs=tinysrgb&w=1600")',
            filter: 'brightness(0.25) saturate(1.3)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-purple-950/40 to-gray-950/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Accelerate AI for Your Company and Your Clients&nbsp;?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-md">Partner with Xunos</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@xunos.com"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-gray-950 rounded-lg font-semibold hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-xl hover:shadow-2xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-3xl font-bold tracking-tight">
              <span className="text-white">XU</span>
              <span className="text-cyan-400">N</span>
              <span className="text-white">OS</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">© 2024 Xunos. Leader in Next-Generation Digital Infrastructure</p>
              <p className="text-xs text-gray-600 mt-2">Created at the end of 2024 by 4 tech executives</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

// ── Internal helpers ──────────────────────────────────────────────────────────

function ServiceItem({ icon, accent, title, children }) {
  const bg = accent === 'cyan'
    ? 'bg-gradient-to-br from-cyan-500 to-cyan-400'
    : 'bg-gradient-to-br from-purple-500 to-purple-400'
  return (
    <div className="flex items-start gap-3">
      <div className={`w-6 h-6 ${bg} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="text-gray-400 text-sm">{children}</p>
      </div>
    </div>
  )
}

function TeamCard({ name, role, size, accent = 'purple', children }) {
  const avatarBg = accent === 'cyan'
    ? 'bg-gradient-to-br from-cyan-500 to-cyan-700'
    : 'bg-gradient-to-br from-purple-600 to-purple-800'
  const avatarSize  = size === 'lg' ? 'w-20 h-20' : 'w-16 h-16'
  const iconSize    = size === 'lg' ? 'w-10 h-10' : 'w-8 h-8'
  const nameClass   = size === 'lg' ? 'text-xl' : 'text-xl'
  return (
    <div className="text-center">
      <div className={`${avatarSize} ${avatarBg} rounded-full flex items-center justify-center mb-4 mx-auto`}>
        <User className={`${iconSize} text-white`} />
      </div>
      <h3 className={`${nameClass} font-bold text-white mb-2`}>{name}</h3>
      <p className="text-cyan-400 font-semibold mb-3">{role}</p>
      <p className="text-gray-300 text-sm leading-relaxed">{children}</p>
    </div>
  )
}
