# moeenshah/react-native-figma-scale

[![npm version](https://img.shields.io/npm/v/@moeenshah/react-native-figma-scale.svg)](https://www.npmjs.com/package/@moeenshah/react-native-figma-scale)
[![npm downloads](https://img.shields.io/npm/dm/@moeenshah/react-native-figma-scale.svg)](https://www.npmjs.com/package/@moeenshah/react-native-figma-scale)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A lightweight React Native scaling utility to create **pixel-perfect layouts** across all devices — using your **Figma frame dimensions** as the base reference.

Perfect for React Native designers and developers who want design-accurate, responsive UIs without manual adjustments for every screen size.

---

## ✨ Features

* ✅ **Pixel-perfect** scaling from your Figma base width & height  
* ✅ Supports **horizontal**, **vertical**, and **moderate** scaling  
* ✅ Simple one-time configuration  
* ✅ Works on **iOS & Android**  
* ✅ Zero dependencies — tiny footprint  
* ✅ Designed for **React Native 0.69+**

---

## 📦 Installation

```bash
npm install @moeenshah/react-native-figma-scale
```
or with yarn:
```bash
yarn add @moeenshah/react-native-figma-scale
```

## ⚙️ Setup

Initialize it once in your app (for example, in App.js):

```tsx
import { configureScaling } from '@moeenshah/react-native-figma-scale';

configureScaling({ baseWidth: 428, baseHeight: 926 }); // your Figma frame dimensions
```

## 🚀 Usage
```tsx
import { scale, verticalScale, moderateScale } from '@moeenshah/react-native-figma-scale';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: scale(200),
    height: verticalScale(60),
    borderRadius: moderateScale(12),
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: moderateScale(16),
    color: 'white',
  },
});

export default function App() {
  return (
    <View style={styles.button}>
      <Text style={styles.text}>Pixel Perfect!</Text>
    </View>
  );
}
```


When you design in Figma with a frame size (e.g. 428×926), this ensures elements scale proportionally across any screen.

---

## 🧠 API Reference

| Function                                      | Description                                                        | Example                                                 |
| --------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------- |
| `configureScaling({ baseWidth, baseHeight })` | Configure your Figma base frame dimensions                         | `configureScaling({ baseWidth: 430, baseHeight: 932 })` |
| `scale(size)`                                 | Scales horizontally based on screen width                          | `width: scale(200)`                                     |
| `verticalScale(size)`                         | Scales vertically based on screen height                           | `height: verticalScale(60)`                             |
| `moderateScale(size, factor?)`                | Smooth horizontal scaling with a moderation factor (default `0.5`) | `fontSize: moderateScale(16)`                           |
| `moderateVerticalScale(size, factor?)`        | Smooth vertical scaling                                            | `marginTop: moderateVerticalScale(20)`                  |

---

## 📋 Example Configuration

Figma Frame: 428 × 926
Usage Example:

```js
configureScaling({ baseWidth: 428, baseHeight: 926 });
const styles = {
  title: { fontSize: moderateScale(20) },
  box: { width: scale(300), height: verticalScale(150) },
};
```

✅ Works perfectly across devices:

* iPhone 13 / 14 / 15
* Android mid-range phones
* Tablets (with proportional scaling)

---

## 🔧 Notes

* Uses React Native’s Dimensions.get('window') internally.
* Automatically adapts to orientation changes.
* Ideal for maintaining consistent spacing, sizing, and typography across devices.

---

## 🤝 Contributing

Contributions are welcome! 🎉

1. Fork the repo
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Make your changes
4. Run `npm run build` to compile
5. Submit a PR 🚀

---

📜 License

MIT © 2025 Moeen Shah
