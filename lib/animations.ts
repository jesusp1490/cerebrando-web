// lib/animations.ts
import type { Variants, MotionProps, Transition } from "framer-motion";

/** Cubic-bezier suave (equiv. easeOut/easeInOut moderno) */
export const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT: Transition["ease"] = [0.4, 0, 0.2, 1] as const;

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const staggerContainer: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

export const fadeInStagger: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

export const scaleOnHover: MotionProps = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.2, ease: EASE_IN_OUT },
};

export const slideInFromLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export const slideInFromRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/** Fondo pulsante sutil para el Hero (compatible con reduced motion en tu hook) */
export const neuralPulse: MotionProps = {
  animate: {
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.05, 1],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: EASE_IN_OUT, // tupla tipada; evita el error "number[] not assignable to Easing"
  },
};
