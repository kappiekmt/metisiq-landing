import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Metrics from './components/Metrics'
import Features from './components/Features'
import Benefits from './components/Benefits'
import UseCases from './components/UseCases'
import Roadmap from './components/Roadmap'
import Demo from './components/Demo'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#050d1e] text-white">
      <Navbar />
      <Hero />
      <Logos />
      <Problem />
      <Solution />
      <Metrics />
      <Features />
      <Benefits />
      <UseCases />
      <Roadmap />
      <Demo />
      <Footer />
    </div>
  )
}
