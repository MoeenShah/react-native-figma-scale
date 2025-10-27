// index.js
import { Dimensions } from 'react-native';

let guidelineBaseWidth = 428;
let guidelineBaseHeight = 926;

export const configureScaling = ({ baseWidth, baseHeight } = {}) => {
  if (baseWidth) guidelineBaseWidth = baseWidth;
  if (baseHeight) guidelineBaseHeight = baseHeight;
};

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = args.join(',');
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

const getDimensions = () => {
  const { width, height } = Dimensions.get('window');
  const [shortDimension, longDimension] =
    width < height ? [width, height] : [height, width];
  return { shortDimension, longDimension };
};

export const scale = memoize((size) => {
  const { shortDimension } = getDimensions();
  return (shortDimension / guidelineBaseWidth) * size;
});

export const verticalScale = memoize((size) => {
  const { longDimension } = getDimensions();
  return (longDimension / guidelineBaseHeight) * size;
});

export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;
