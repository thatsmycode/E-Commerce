import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Gallery />
        <Footer />
      </div>
    </>
  )
}

export default App;
