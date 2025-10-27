# React Native Figma Scale

A simple scaling utility for **pixel-perfect React Native designs** based on your Figma frame dimensions.

---

## 🚀 Installation

```bash
npm install @moeenshah/react-native-figma-scale
# or
yarn add @moeenshah/react-native-figma-scale
```


## ⚙️ Setup

Configure it once in your app (usually in App.js):
```tsx
import { configureScaling } from '@moeenshah/react-native-figma-scale';

configureScaling({ baseWidth: 428, baseHeight: 926 }); // your Figma dimensions
```

## 🧩 Usage

Use it anywhere in your project:
```tsx
import { scale, verticalScale, moderateScale } from '@moeenshah/react-native-figma-scale';

const styles = StyleSheet.create({
  button: {
    width: scale(200),
    height: verticalScale(60),
    borderRadius: moderateScale(12),
  },
});
```
## 🧠 API
Function	Description	Example
scale(size)	Scales horizontally based on screen width	scale(200)
verticalScale(size)	Scales vertically based on screen height	verticalScale(60)
moderateScale(size, factor)	Adds controlled scaling	moderateScale(16, 0.5)
moderateVerticalScale(size, factor)	Controlled vertical scaling	moderateVerticalScale(24, 0.5)
configureScaling({ baseWidth, baseHeight })	Set your Figma base frame dimensions	-

## 📜 License

MIT © Moeen Shah
