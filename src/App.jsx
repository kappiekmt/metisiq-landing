import './index.css'
import { ThemeProvider } from './context/ThemeContext'
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
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
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
    </ThemeProvider>
  )
}
