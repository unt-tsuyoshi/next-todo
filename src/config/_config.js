export const sizes = {
  sm: 320,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const breakpoints = {
  sm: `@media (min-width: ${sizes.sm}px)`,
  md: `@media (min-width: ${sizes.md}px)`,
  lg: `@media (min-width: ${sizes.lg}px)`,
  xl: `@media (min-width: ${sizes.xl}px)`,
  max: `${sizes.xlg}`,
};
