const deviceSizes = {
  mobile: '420px',
  tablet: '720px',
  laptop: '1280px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.miblie})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

const theme = {
  device,
};

export default theme;
