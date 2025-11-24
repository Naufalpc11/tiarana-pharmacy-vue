import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initializeHomeAnimations = (refs) => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  gsap.defaults({ ease: 'power3.out', duration: 0.9, overwrite: 'auto' });

  const {
    heroContent,
    heroTitle,
    heroSubtitle1,
    heroSubtitle2,
    featuresGrid,
    aboutSection,
    aboutText,
    aboutImage,
    aboutFeatures,
    servicesSection,
    servicesTitle,
  } = refs;

  // Hero section animation mirrors About Us hero sequence
  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Prefer animating the full header (.hero-bg-image) so the background fades with the hero
  const heroRoot = (heroContent && heroContent.closest)
    ? heroContent.closest('.hero-bg-image')
    : heroContent || document.querySelector('.hero-bg-image');

  if (heroRoot) {
    heroTimeline.from(heroRoot, { autoAlpha: 0, y: 40, duration: 0.9 });

    if (heroTitle) {
      heroTimeline.from(
        heroTitle,
        { y: 20, autoAlpha: 0, duration: 0.9, ease: 'power4.out' },
        '-=0.5'
      );
    }

    const subtitles = [heroSubtitle1, heroSubtitle2].filter(Boolean);
    if (subtitles.length) {
      heroTimeline.from(subtitles, { y: 20, autoAlpha: 0, duration: 0.8, stagger: 0.15 }, '-=0.6');
    }
  }

  // Features grid animation
  if (featuresGrid && featuresGrid.children.length) {
    const featureItems = Array.from(featuresGrid.children);

    gsap.set(featureItems, {
      autoAlpha: 0,
      y: 50
    });

    gsap.to(featureItems, {
      scrollTrigger: {
        trigger: featuresGrid,
        start: 'top 85%',
        once: true
      },
      y: 0,
      autoAlpha: 1,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out'
    });
  }

  // About section animations
  if (aboutSection) {
    if (aboutText) {
      gsap.set(aboutText, {
        autoAlpha: 0,
        x: -50
      });

      gsap.to(aboutText, {
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top 85%',
          once: true
        },
        x: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
    }

    if (aboutImage) {
      gsap.set(aboutImage, {
        autoAlpha: 0,
        x: 50
      });

      gsap.to(aboutImage, {
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top 85%',
          once: true
        },
        x: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
    }
  }

  // About features animation
  if (aboutFeatures && aboutFeatures.children.length) {
    const featureItems = Array.from(aboutFeatures.children);

    gsap.set(featureItems, {
      autoAlpha: 0,
      y: 30
    });

    gsap.to(featureItems, {
      scrollTrigger: {
        trigger: aboutFeatures,
        start: 'top 85%',
        once: true
      },
      y: 0,
      autoAlpha: 1,
      duration: 0.5,
      stagger: {
        each: 0.1,
        from: 'start'
      },
      ease: 'power2.out'
    });
  }

  // Services section animations
  if (servicesSection && servicesTitle) {
    gsap.set(servicesTitle, {
      y: 30,
      opacity: 0
    });

    gsap.to(servicesTitle, {
      scrollTrigger: {
        trigger: servicesSection,
        start: 'top 85%',
        once: true
      },
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'power2.out'
    });
  }

  // Animate each service card
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    const direction = index % 2 === 0 ? -1 : 1;

    // Set initial state
    gsap.set(card, {
      x: 100 * direction,
      opacity: 0,
      scale: 0.8
    });

    // Create scroll trigger animation
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        once: true
      },
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power2.out'
    });
  });
};
