import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initializeContactAnimations = (refs = {}) => {
  const { heroOverlay, heroTitle, heroSubtitle, formCard } = refs;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  requestAnimationFrame(() => {
    gsap.defaults({
      ease: 'power3.out',
      duration: 0.9,
      overwrite: 'auto',
    });

    // Determine hero root element; prefer the closest `.hero-bg-image` ancestor
    const heroRoot = (heroOverlay && heroOverlay.closest)
      ? heroOverlay.closest('.hero-bg-image')
      : document.querySelector('.hero-bg-image');

    if (heroRoot) {
      // ensure inline children visible before animation
      gsap.set([heroRoot.querySelector('h1'), heroRoot.querySelector('p'), heroRoot.querySelector('.ui-button')].filter(Boolean), {
        autoAlpha: 1,
        y: 0,
        clearProps: 'opacity,visibility,transform',
      });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(heroRoot, { autoAlpha: 0, y: 40, duration: 0.9 });

      if (heroTitle) {
        tl.from(
          heroTitle,
          { y: 20, autoAlpha: 0, duration: 0.8 },
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
    }

    if (formCard) {
      gsap.from(formCard, {
        scrollTrigger: {
          trigger: formCard,
          start: 'top 85%',
          once: true,
        },
        y: 60,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
      });

      const fields = gsap.utils.toArray(formCard.querySelectorAll('.contact-form__field'));
      if (fields.length) {
        gsap.from(fields, {
          scrollTrigger: {
            trigger: formCard,
            start: 'top 80%',
            once: true,
          },
          y: 30,
          autoAlpha: 0,
          duration: 0.6,
          stagger: { each: 0.1, from: 'start' },
          ease: 'power2.out',
        });
      }
    }

    ScrollTrigger.refresh();
  });
};
