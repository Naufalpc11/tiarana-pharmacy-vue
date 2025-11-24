import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initializeArtikelAnimations = (refs = {}) => {
  const { heroOverlay, heroTitle, heroSubtitle, searchBar } = refs;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  requestAnimationFrame(() => {
    gsap.defaults({ ease: 'power3.out', duration: 0.9, overwrite: 'auto' });

    const heroRoot = (heroOverlay && heroOverlay.closest)
      ? heroOverlay.closest('.hero-bg-image')
      : document.querySelector('.hero-bg-image');

    if (heroRoot) {
      gsap.set([heroRoot.querySelector('h1'), heroRoot.querySelector('p')].filter(Boolean), {
        autoAlpha: 1,
        y: 0,
        clearProps: 'opacity,visibility,transform',
      });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(heroRoot, { autoAlpha: 0, y: 40, duration: 0.9 });

      if (heroTitle) {
        tl.from(
          heroTitle,
          { y: 20, autoAlpha: 0, duration: 0.9, ease: 'power4.out' },
          '-=0.4'
        );
      }

      if (heroSubtitle) {
        tl.from(
          heroSubtitle,
          { y: 20, autoAlpha: 0, duration: 0.8 },
          '-=0.5'
        );
      }

      if (searchBar) {
        tl.from(
          searchBar,
          { y: 20, autoAlpha: 0, duration: 0.6 },
          '-=0.4'
        );
      }
    }

    ScrollTrigger.refresh();
  });
};
