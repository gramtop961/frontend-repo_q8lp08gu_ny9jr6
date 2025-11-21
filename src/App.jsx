import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background gradients */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(251,191,36,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_90%_10%,rgba(255,255,255,0.05),transparent_60%)]" />
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  )
}

export default App
