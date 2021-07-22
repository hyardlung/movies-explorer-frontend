import {DESKTOP_RESOLUTION, TABLET_RESOLUTION, MOBILE_RESOLUTION} from './constants';

const screenSizeDefinition = () => {
  return document.documentElement.clientWidth;
};

const numberCardsFromScreenSize = () => {
  const viewportWidth = screenSizeDefinition();
  if (viewportWidth >= DESKTOP_RESOLUTION
      || (viewportWidth > TABLET_RESOLUTION && viewportWidth <= DESKTOP_RESOLUTION)) return 4;
  if (viewportWidth >= MOBILE_RESOLUTION && viewportWidth <= TABLET_RESOLUTION) return 2;
};

export {
  screenSizeDefinition,
  numberCardsFromScreenSize
};
