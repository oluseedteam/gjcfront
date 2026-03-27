import { Transition, Variants } from "framer-motion";

export const navbarVariant = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      mass: 0.01,
      damping: 2,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.1,
      mass: 0.01,
      damping: 2,
    },
  },
};

export const headerVariant = {
  initial: {
    opacity: 0,
    scaleX: 0.3,
    scaleY: 0.3,
  },
  inView: {
    opacity: 1,
    scaleX: 1.0,
    scaleY: 1,
  },
  transition: {
    duration: 1.5,
    ease: "easeIn",
    type: "spring",
    stiffness: 50,
    mass: 0.8,
  },
};

export const sidebarVariant = {
  hidden: {
    opacity: 0,
    y: "-1000",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      mass: 0.01,
      damping: 2,
    },
  },
  exit: {
    y: "-1000",
    transition: {
      duration: 0.5,
      mass: 0.01,
      damping: 2,
    },
  },
};

export const modalVariant = {
  hidden: {
    opacity: 0,
    y: "-1000",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      mass: 0.01,
      damping: 2,
    },
  },
  exit: {
    y: "-1000",
    transition: {
      duration: 0.5,
      mass: 0.01,
      damping: 2,
    },
  },
};

export const scheduleVariant = {
  hidden: {
    opacity: 0,
    height: 0,
    // scaleX: 0.2,
  },
  visible: {
    opacity: 1,
    height: "auto",
    // scaleX: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      mass: 0.01,
      damping: 2,
    },
  },
  exit: {
    height: 0,
    transition: {
      duration: 0.2,
      mass: 1,
      damping: 4,
    },
  },
};

export const pageVariant: Variants = {
  initial: {
    opacity: 0,
    y: -1000,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const subLayoutVariant = {
  initial: {
    opacity: 0,
    y: 30,
  },
  inView: {
    opacity: 1,
    y: 0,
  },
};

export const transition: Transition = {
  duration: 0.6,
  type: "spring",
  mass: 0.01,
  damping: 1,
};

export const DashboardVariant = {
  initial: { opacity: 0, scale: 0.7 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};
