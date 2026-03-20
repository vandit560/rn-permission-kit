# 📱 rn-permission-kit

**rn-permission-kit** is a powerful, type-safe React Native permission helper that simplifies permission management on both iOS and Android. 

It abstracts away the complexity of `react-native-permissions` into a unified, developer-friendly API with built-in support for custom UI and automatic "Open Settings" alerts.

---

## 🚀 Features

- **✅ Super Simple API**: Unified functions for check, request, and automatic handling.
- **📱 Platform Agnostic**: Transparently handles differences between iOS and Android constants.
- **🔒 Type Safe**: Built with TypeScript, exported with `PermissionType` union and `PERMISSION_TYPES` constants.
- **🛠️ Smart Defaults**: Built-in "Open Settings" alerts for blocked permissions.
- **🎨 Custom UI Support**: Use your own React components for blocked states via hooks or callbacks.
- **📦 Multi-Permission Handling**: Request multiple permissions in a single optimized call.

---

## 📦 Installation

```bash
npm install rn-permission-kit
```


### iOS Setup
Add the necessary usage descriptions in your `Info.plist`:

```xml
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) needs camera access</string>
<!-- Add others as needed -->
```

### Android Setup
Add the necessary permissions in your `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.CAMERA" />
<!-- Add others as needed -->
```

---

## 🧩 Usage

### ⚙️ Using Constants (Recommended)
Avoid typos by using the exported `PERMISSION_TYPES` constant.

```typescript
import { requestPermission, PERMISSION_TYPES } from 'rn-permission-kit';

const granted = await requestPermission(PERMISSION_TYPES.camera);
```

### ⚛️ React Hook (For Custom UI / Dialogs)
Use the `usePermission` hook if you want to show your own React component when a permission is blocked.

```tsx
import { usePermission, PERMISSION_TYPES } from 'rn-permission-kit';

const MyComponent = () => {
  const { checkAndRequest, isBlocked } = usePermission(PERMISSION_TYPES.camera);

  return (
    <View>
      <Button title="Open Camera" onPress={checkAndRequest} />
      
      {/* Show your custom design if blocked */}
      {isBlocked && <MyCustomBlockedDialog />}
    </View>
  );
};
```

### 🛠️ Unified "Handle" Flow
The `handlePermission` function checks status, requests if needed, and shows an automatic alert if blocked.

```typescript
import { handlePermission, PERMISSION_TYPES } from 'rn-permission-kit';

const granted = await handlePermission(
  PERMISSION_TYPES.location,
  "Location Access",
  "We need your location for mapping features."
);
```

### 📦 Multiple Permissions
Request multiple permissions at once efficiently.

```typescript
import { handleMultiplePermissions, PERMISSION_TYPES } from 'rn-permission-kit';

const results = await handleMultiplePermissions([
  PERMISSION_TYPES.camera,
  PERMISSION_TYPES.microphone
]);

if (results.camera && results.microphone) {
  // Good to go!
}
```

---

## 🧱 Supported Permissions

- **Camera** (`camera`)
- **Location** (`location`, `locationAlways`)
- **Microphone** (`microphone`)
- **Contacts** (`contacts`)
- **Storage/Gallery** (`storage`, `photos`)
- **Notifications** (`notifications`)
- **Bluetooth** (`bluetooth`)
- **Calendar** (`calendar`)
- **Reminders** (`reminders`)
- **Motion** (`motion`)
- **Media Library** (`mediaLibrary`)
- **Speech Recognition** (`speechRecognition`)
- **App Tracking Transparency** (`tracking`)
- **FaceID** (`faceId`)
- **Siri** (`siri`)

---

## 🛠️ Advanced: Custom Blocked Handler
If you prefer callbacks over hooks:

```typescript
await handlePermission(
  PERMISSION_TYPES.camera,
  undefined, 
  undefined,
  () => {
    console.log("Custom logic for blocked permission!");
  }
);
```

---

## 🛡️ License

MIT
