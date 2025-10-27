# React Native Figma Scale

A simple scaling utility for **pixel-perfect React Native designs** based on your Figma frame dimensions.

## 🚀 Installation

```bash
npm install @moeenshah/react-native-figma-scale
# or
yarn add @moeenshah/react-native-figma-scale
⚙️ Setup
Configure once in your app (usually in App.js):

js
Copy code
import { configureScaling } from '@moeenshah/react-native-figma-scale';

configureScaling({ baseWidth: 428, baseHeight: 926 }); // Figma dimensions
🧩 Usage
Use anywhere:

js
Copy code
import { scale, verticalScale, moderateScale } from '@moeenshah/react-native-figma-scale';

const styles = StyleSheet.create({
  button: {
    width: scale(200),
    height: verticalScale(60),
    borderRadius: moderateScale(12),
  },
});
🧠 API
Function	Description	Example
scale(size)	Scales horizontally based on screen width	scale(200)
verticalScale(size)	Scales vertically based on screen height	verticalScale(60)
moderateScale(size, factor)	Adds controlled scaling	moderateScale(16, 0.5)
moderateVerticalScale(size, factor)	Controlled vertical scaling	moderateVerticalScale(24, 0.5)
configureScaling({ baseWidth, baseHeight })	Configure your Figma base frame	-

📜 License
MIT © Moeen Shah

yaml
Copy code

---

## 🧪 STEP 6 — Test Locally Before Publishing

Before publishing, **test it locally** in your React Native project:

```bash
# Inside your package folder
npm link

# Go to your React Native project
cd ../your-react-native-project
npm link @moeenshah/react-native-figma-scale