export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: .5, delay: 1 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: .5},
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.3, delay: 4 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
