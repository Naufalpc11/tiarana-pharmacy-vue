import { gsap } from "gsap"

export const initializeArtikelAnimations = (refs = {}) => {
  const { heroOverlay, heroTitle, heroSubtitle, searchBar } = refs

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
  if (reduceMotion) return

  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 0.8,
      overwrite: "auto",
    },
  })

  if (heroOverlay) {
    tl.from(heroOverlay, {
      autoAlpha: 0,
      duration: 1.0,
    })
  }

  if (heroTitle) {
    tl.from(
      heroTitle,
      {
        y: 60,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power4.out",
      },
      heroOverlay ? "-=0.6" : 0
    )
  }

  if (heroSubtitle) {
    tl.from(
      heroSubtitle,
      {
        y: 30,
        autoAlpha: 0,
        duration: 0.7,
      },
      "-=0.4"
    )
  }

  if (searchBar) {
    tl.from(
      searchBar,
      {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
      },
      "-=0.3"
    )
  }
}
