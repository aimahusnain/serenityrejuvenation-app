# 📱 Expo NativeWind Template

> **Production-Ready Expo Starter Kit** with 20+ pre-built UI components, TypeScript, NativeWind, and platform-specific behaviors for iOS/Android.

[![Expo SDK 56](https://img.shields.io/badge/Expo-56-000.svg?style=flat&logo=expo)](https://expo.dev)
[![React Native 0.85](https://img.shields.io/badge/React%20Native-0.85-61DAFB.svg?style=flat&logo=react)](https://reactnative.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue.svg?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![NativeWind v4](https://img.shields.io/badge/NativeWind-v4-38B2AC.svg?style=flat)](https://www.nativewind.dev)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**20+ Components • TypeScript • NativeWind • Expo Router • Dark Mode**

## 🎯 Why This Template?

Stop building UI components from scratch. This template includes everything you need to ship production-ready mobile apps faster:

- **20+ Pre-built Components** — Buttons, Cards, Dialogs, Bottom Sheets, and more
- **Platform-Specific UI** — Automatic iOS/Android adaptations  
- **Dark Mode Ready** — System-aware theme switching
- **Unified Permissions** — Single API for camera, location, notifications, etc.
- **TypeScript First** — Full type safety and IntelliSense
- **Production Ready** — Scalable architecture and best practices

## 📦 What's Included

### UI Components
- **Layout**: SafeAreaView, ScrollView, KeyboardAvoidingView
- **Typography**: Text variants (h1-h6, p, lead, muted, code)
- **Buttons**: Primary, secondary, destructive, outline, ghost, link
- **Forms**: Input, Label, Switch, Checkbox
- **Feedback**: Dialog, Sheet (Bottom Sheet), Drawer
- **Display**: Card, Badge
- **Navigation**: Hamburger Menu, Tab Navigation
- **Utilities**: Permission Requester, Theme Provider

### Demo Screens
- **UI Showcase** (`/app/(tabs)/index.tsx`) — Interactive component gallery
- **Menu Demo** (`/app/(tabs)/menu-demo.tsx`) — Hamburger menu examples
- **Permissions Demo** (`/app/(tabs)/permissions-demo.tsx`) — Permission management UI

## 🚀 Quick Start

```bash
# Clone and install
git clone https://github.com/chvvkrishnakumar/expo-nativewind-template.git my-app
cd my-app
npm install

# Start development
npx expo start

# Run on device
# Press 'i' for iOS, 'a' for Android, or scan QR with Expo Go
```

### Prerequisites
- Node.js 18+ and npm/yarn
- iOS Simulator (Mac) or Android Studio
- Expo Go app on physical device (optional)

## 📁 Project Structure

```
├── app/                    # Expo Router screens
│   ├── (tabs)/            # Tab navigation
│   │   ├── index.tsx      # Component showcase
│   │   ├── menu-demo.tsx  # Menu examples
│   │   └── permissions-demo.tsx # Permission examples
│   └── _layout.tsx        # Root layout
├── components/            
│   ├── ui/                # UI component library (20+ components)
│   └── error-boundary/    # Error handling
├── hooks/                 # Custom React hooks
├── constants/             # App constants & colors
└── assets/                # Images, fonts, etc.
```

## ⚠️ Development Build Required

Some features require a development build instead of Expo Go:

- **Push Notifications** — Requires development build (SDK 56+)
- **Camera** — May have limited functionality in Expo Go
- **Other native modules** — Work better in dev builds

Create a development build:
```bash
npx eas build --profile development --platform ios
npx eas build --profile development --platform android
```

## 💡 Usage

### Basic Component Example

```tsx
import { Button, Text, Card, SafeAreaView } from '@/components/ui';

export default function MyScreen() {
  return (
    <SafeAreaView className="flex-1 p-4">
      <Card>
        <Text variant="h2">Welcome!</Text>
        <Button onPress={() => console.log('Pressed')}>
          <Text>Get Started</Text>
        </Button>
      </Card>
    </SafeAreaView>
  );
}
```

### Platform-Specific Behavior

Components automatically adapt to iOS/Android:

```tsx
// Button uses TouchableOpacity on iOS, Pressable with ripple on Android
<Button onPress={handlePress}>
  <Text>Platform Adaptive Button</Text>
</Button>

// Dialog animations differ by platform  
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    {/* iOS: slide animation, Android: fade animation */}
  </DialogContent>
</Dialog>
```

### Permission Handling

```tsx
import { PermissionRequester } from '@/components/ui';

<PermissionRequester permission="location">
  {({ status, requestPermission }) => (
    <Button onPress={requestPermission}>
      <Text>{status === 'granted' ? 'Access Granted' : 'Request Access'}</Text>
    </Button>
  )}
</PermissionRequester>
```

### NativeWind Styling

```tsx
// Using className for styling
<View className="flex-1 bg-background p-4">
  <Text className="text-lg font-bold text-primary">Hello World</Text>
  <Button className="mt-4" variant="secondary">
    <Text>Click me</Text>
  </Button>
</View>

// Dark mode is automatic
<Text className="text-foreground">Adapts to dark/light mode</Text>
```

## 🔧 Customization

### Theme Colors

Edit `global.css` to customize your theme:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
  }
  
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
  }
}
```

### Adding New Components

1. Create component in `/components/ui/`
2. Export from `/components/ui/index.ts`
3. Follow existing patterns for platform-specific behavior

### Platform-Specific Files

```
components/ui/
├── button.tsx          # Shared logic
├── button.ios.tsx      # iOS specific (optional)
└── button.android.tsx  # Android specific (optional)
```

## 🏗️ Building for Production

```bash
# Development builds
npx eas build --platform ios --profile development
npx eas build --platform android --profile development

# Production builds
npx eas build --platform ios --profile production
npx eas build --platform android --profile production
```

## 📚 Tech Stack

**Core**
- [Expo SDK 56](https://expo.dev) — React Native framework
- [React Native 0.85](https://reactnative.dev) — Mobile framework
- [TypeScript 6.0](https://www.typescriptlang.org) — Type safety
- [Expo Router](https://expo.github.io/router) — File-based routing
- [NativeWind v4](https://www.nativewind.dev) — Tailwind for React Native

**UI & Animations**
- [@gorhom/bottom-sheet](https://gorhom.dev/react-native-bottom-sheet/) — Bottom sheets
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/) — Gestures
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) — Animations
- [lucide-react-native](https://lucide.dev) — Icon library
- [class-variance-authority](https://cva.style) — Component variants

**Permissions**
- expo-camera, expo-location, expo-media-library
- expo-notifications, expo-contacts


## 🤔 FAQ

<details>
<summary><b>Can I use this template for commercial projects?</b></summary>

Yes! MIT licensed — free for commercial use, modification, and distribution.
</details>

<details>
<summary><b>How do I add custom colors?</b></summary>

Edit `global.css` and add colors to `:root` and `.dark` selectors. NativeWind automatically generates utility classes.
</details>

<details>
<summary><b>Do components work on tablets/iPad?</b></summary>

Yes, components are responsive. Adjust layouts for larger screens using responsive utilities.
</details>

<details>
<summary><b>Can I use React Native CLI instead of Expo?</b></summary>

Most components will work, but you'll need to replace Expo-specific packages with React Native equivalents.
</details>

## 🤝 Contributing

Contributions welcome! For major changes, please open an issue first.

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev) — Amazing framework
- [NativeWind](https://nativewind.dev) — Tailwind for React Native
- [Gorhom](https://gorhom.dev) — Bottom sheet library
- [Software Mansion](https://swmansion.com) — Gesture handler & Reanimated
- All contributors

---

**Built with ❤️ for the React Native community**

If this helps you build faster, please ⭐ the repository!
