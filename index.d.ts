declare module '@moeenshah/react-native-figma-scale' {
  export function scale(size: number): number;
  export function verticalScale(size: number): number;
  export function moderateScale(size: number, factor?: number): number;
  export function moderateVerticalScale(size: number, factor?: number): number;
  export function configureScaling(width: number, height: number): void;
}
