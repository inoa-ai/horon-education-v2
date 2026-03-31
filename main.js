import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { injectComponents } from './components.js'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

document.addEventListener("DOMContentLoaded", () => {
  injectComponents();
  
  // Hero Section Initial Animation
  const tlHero = gsap.timeline();
  tlHero.to(".hero-content", {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.2
  });

  // Hero Parallax Effect
  gsap.to(".hero-bg-wrapper", {
    y: "30%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // Fade In Sections
  const fadeSections = document.querySelectorAll(".section-title, .section-desc");
  fadeSections.forEach((el) => {
    gsap.fromTo(el, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // when top of element hits 85% of viewport
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Service Cards staggered entrance
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card, index) => {
    gsap.to(card, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Highlight Text Reveal
  gsap.fromTo(".highlight-text",
    { backgroundPosition: "200% center" },
    {
      backgroundPosition: "0% center",
      backgroundImage: "linear-gradient(to right, #1d1d1f 50%, #d2d2d7 50%)",
      backgroundSize: "200% auto",
      color: "transparent",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".about-text-block",
        start: "top 75%",
      }
    }
  );

  // News List Stagger
  gsap.fromTo(".news-item", 
    { x: -20, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".news-list",
        start: "top 85%",
      }
    }
  );
  
});
