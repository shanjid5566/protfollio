import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorOutlinePos, setCursorOutlinePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktopPointer, setIsDesktopPointer] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(pointer: fine) and (min-width: 1024px)').matches;
  });

  // Enable custom cursor only when device has a fine pointer and is wide enough
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(pointer: fine) and (min-width: 1024px)');
    const handleChange = (e) => setIsDesktopPointer(e.matches);
    // listen for changes
    if (mq.addEventListener) mq.addEventListener('change', handleChange);
    else mq.addListener(handleChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handleChange);
      else mq.removeListener(handleChange);
    };
  }, []);

  useEffect(() => {
    // Only attach cursor listeners on devices with a fine pointer and large screens
    if (!isDesktopPointer) return;

    const updateCursor = (e) => setCursorPos({ x: e.clientX, y: e.clientY });

    // Circle follows with delay
    const updateOutline = (e) => {
      setTimeout(() => {
        setCursorOutlinePos({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousemove', updateOutline);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousemove', updateOutline);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isDesktopPointer]);

  return (
    <div className="bg-white dark:bg-dark-900 min-h-screen">
      {/* Custom Cursor - render only on desktop-size devices with a fine pointer */}
      {isDesktopPointer && (
        <>
          <div 
            className="custom-cursor"
            style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
          >
            <div className="cursor-dot"></div>
          </div>
          
          <div 
            className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
            style={{ transform: `translate(${cursorOutlinePos.x}px, ${cursorOutlinePos.y}px)` }}
          >
            <div className="cursor-outline"></div>
          </div>
        </>
      )}

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

