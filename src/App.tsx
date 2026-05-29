import { useEffect } from 'react';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { Methodology } from './components/Methodology';
import { FacultyTeam } from './components/FacultyTeam';
import { Syllabus } from './components/Syllabus';
import { Faculty } from './components/Faculty';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll handling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (!targetId) return;
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    document.body.style.overflow = 'auto';
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 noise z-[100]" />
      <Cursor />
      <Navbar />
      
      <main>
        <Hero />
        <Courses />
        <Syllabus />
        <Methodology />
        <FacultyTeam />
        <Faculty />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
}

export default App;
