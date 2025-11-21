import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const initializeAboutUsAnimations = () => {
  // kalau user set reduce motion, skip animasi
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  // pastiin DOM udah ready banget (SPA kadang butuh 1 frame)
  requestAnimationFrame(() => {
    // =========================
    // GLOBAL DEFAULTS
    // =========================
    gsap.defaults({
      ease: "power3.out",
      duration: 0.9,
      overwrite: "auto",
    });

    // =========================
    // HERO
    // =========================
    const heroTL = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTL
      .from(".about-header-overlay", {
        autoAlpha: 0,
        duration: 1.2,
      })
      .from(
        ".about-header h1",
        {
          y: 60,
          autoAlpha: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.6"
      )
      // subtitle
      .from(
        ".about-header p",
        {
          y: 30,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.12,
        },
        "-=0.5"
      )
      // tombol
      .from(
        ".about-header .ui-button",
        {
          y: 20,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.12,
        },
        "-=0.5"
      );

    // =========================
    // MISI (mission cards)
    // =========================
    ScrollTrigger.batch(".values-section .mission-card", {
      start: "top 80%",
      once: true,
      onEnter: (batch) =>
        gsap.from(batch, {
          y: 36,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        }),
    });

    // =========================
    // SEJARAH (judul & paragraf)
    // =========================
    const historySection = document.querySelector(".history-section");
    if (historySection) {
      gsap.from(".history-content h2", {
        scrollTrigger: {
          trigger: historySection,
          start: "top 78%",
          once: true,
        },
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: "back.out(1.6)",
      });

      gsap.from(".history-content p", {
        scrollTrigger: {
          trigger: historySection,
          start: "top 75%",
          once: true,
        },
        y: 20,
        autoAlpha: 0,
        duration: 0.9,
        delay: 0.1,
      });

      // stats cards batch
      ScrollTrigger.batch(".history-section .history-stat-card", {
        start: "top 78%",
        once: true,
        onEnter: (batch) =>
          gsap.from(batch, {
            y: 28,
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          }),
      });
    }

    // =========================
    // TEAM / APOTEKER
    // =========================
    const teamSection = document.querySelector(".team-section");
    if (teamSection) {
      gsap.from(".team-section h2, .team-section p", {
        scrollTrigger: {
          trigger: teamSection,
          start: "top 80%",
          once: true,
        },
        y: 24,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.5)",
        clearProps: "transform,opacity,visibility",
      });
    }

    const pharmacistCard = document.querySelector(".pharmacist-card");
    if (pharmacistCard) {
      gsap.from(pharmacistCard, {
        scrollTrigger: {
          trigger: pharmacistCard,
          start: "top 85%",
          once: true,
        },
        y: 36,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "transform,opacity,visibility",
      });
    }

    // =========================
    // LOCATION
    // =========================
    const locationSection = document.querySelector(".location-section");
    if (locationSection) {
      const mapEl =
        document.querySelector(".map-container") ||
        document.querySelector(".location-section .overflow-hidden") ||
        document.querySelector(".location-section img");

      const locationTL = gsap.timeline({
        scrollTrigger: {
          trigger: locationSection,
          start: "top 78%",
          once: true,
        },
      });

      locationTL
        .from(".location-section h2", {
          y: 20,
          autoAlpha: 0,
          duration: 0.8,
          ease: "back.out(1.6)",
        })
        .from(
          ".location-section .contact-info-card",
          {
            x: -28,
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          },
          "-=0.35"
        );

      if (mapEl) {
        locationTL.from(
          mapEl,
          {
            scale: 0.96,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          },
          "-=0.5"
        );
      }

      // hover halus (kecil aja biar ga tabrakan sama CSS)
      const contactItems = document.querySelectorAll(".location-section .contact-info-card");
      contactItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            scale: 1.015,
            y: -3,
            duration: 0.22,
            ease: "power2.out",
          });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            scale: 1,
            y: 0,
            duration: 0.22,
            ease: "power2.out",
          });
        });
      });
    }

    // refresh biar posisi trigger tepat
    ScrollTrigger.refresh();
  });
};
