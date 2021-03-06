const screenSizes = {
  sm: '360px',
  md: '768px',
  lg: '960px',
};

export const metrics = {
  padding: {
    md: '10px',
    lg: '16px',
    xl: '24px',
  },
  margin: {
    sm: '5px',
    md: '10px',
    lg: '16px',
    xl: '24px',
  },
  screenSizes,
  media: {
    sm: `(min-width: ${screenSizes.sm})`,
    md: `(min-width: ${screenSizes.md})`,
    lg: `(min-width: ${screenSizes.lg})`,
  },
  borderRadius: {
    sm: '5px',
    md: '10px',
    lg: '20px',
  },
  avatar: {
    md: '60px',
    lg: '170px',
  },
};
