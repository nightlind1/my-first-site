import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Progress from './components/Progress'
import Skills from './components/Skills'
import Roadmap from './components/Roadmap'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  return (
    <main className="page">
      <Header />
      <Hero />
      <Features />
      <Progress />
      <Skills />
      <Roadmap />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default App