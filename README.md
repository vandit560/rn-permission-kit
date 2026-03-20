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


### ⚙️ Mandatory Configuration

Please refer to the [Permission Reference](#-permission-reference-configuration--helpers) table below for the specific keys and permissions you need to add to your native projects.

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

## 📘 API Reference

### 🏗️ Core Methods

| Method | Parameters | Return Type | Description |
| :--- | :--- | :--- | :--- |
| `requestPermission` | `type: PermissionType` | `Promise<boolean>` | Requests a single permission. |
| `checkPermission` | `type: PermissionType` | `Promise<boolean>` | Checks if a permission is already granted. |
| `handlePermission` | `type, title?, message?, onBlocked?` | `Promise<boolean>` | **Check → Request → Alert** if blocked. |
| `requestMultiplePermissions` | `types: PermissionType[]` | `Promise<Record<string, boolean>>` | Requests multiple permissions. |
| `checkMultiplePermissions` | `types: PermissionType[]` | `Promise<Record<string, boolean>>` | Checks multiple permissions. |
| `handleMultiplePermissions` | `types, title?, message?, onBlocked?` | `Promise<Record<string, boolean>>` | Handles multiple permissions with one alert. |
| `openAppSettings` | - | `Promise<void>` | Opens the system app settings. |

### ⚛️ React Hooks

| Hook | Parameters | Returns | description |
| :--- | :--- | :--- | :--- |
| `usePermission` | `type, { title?, message? }` | `{ isBlocked, checkAndRequest, resetBlocked }` | Manage permission state in UI. |

### ⚡ Permission Reference (Configuration & Helpers)

For every supported permission, you can use the generic methods with the `Constant` or use the individual `Convenience Helpers`.

| Permission | Constant | iOS `Info.plist` | Android `AndroidManifest` | Convenience Helpers |
| :--- | :--- | :--- | :--- | :--- |
| **Camera** | `camera` | `NSCameraUsageDescription` | `android.permission.CAMERA` | `requestCamera()`<br>`checkCameraPermission()`<br>`handleCameraPermission()` |
| **Location** | `location` | `NSLocationWhenInUseUsageDescription` | `android.permission.ACCESS_FINE_LOCATION` | `requestLocation()`<br>`checkLocationPermission()`<br>`handleLocationPermission()` |
| **Location Always** | `locationAlways` | `NSLocationAlwaysAndWhenInUseUsageDescription` | `android.permission.ACCESS_BACKGROUND_LOCATION` | `requestLocationAlways()`<br>`checkLocationAlwaysPermission()`<br>`handleLocationAlwaysPermission()` |
| **Microphone** | `microphone` | `NSMicrophoneUsageDescription` | `android.permission.RECORD_AUDIO` | `requestMicrophone()`<br>`checkMicrophonePermission()`<br>`handleMicrophonePermission()` |
| **Contacts** | `contacts` | `NSContactsUsageDescription` | `android.permission.READ_CONTACTS` | `requestContacts()`<br>`checkContactsPermission()`<br>`handleContactsPermission()` |
| **Storage / Photos** | `storage`, `photos` | `NSPhotoLibraryUsageDescription` | `android.permission.READ_EXTERNAL_STORAGE` or `READ_MEDIA_IMAGES` | `requestStorage()` / `requestPhotos()`<br>`checkStoragePermission()` / `checkPhotosPermission()`<br>`handleStoragePermission()` / `handlePhotosPermission()` |
| **Notifications** | `notifications` | - | `android.permission.POST_NOTIFICATIONS` | `requestNotifications()`<br>`checkNotificationsPermission()`<br>`handleNotificationsPermission()` |
| **Bluetooth** | `bluetooth` | `NSBluetoothAlwaysUsageDescription` | `android.permission.BLUETOOTH_CONNECT` | `requestBluetooth()`<br>`checkBluetoothPermission()`<br>`handleBluetoothPermission()` |
| **Calendar** | `calendar` | `NSCalendarsUsageDescription` | `android.permission.READ_CALENDAR` | `requestCalendar()`<br>`checkCalendarPermission()`<br>`handleCalendarPermission()` |
| **Reminders** | `reminders` | `NSRemindersUsageDescription` | - | `requestReminders()`<br>`checkRemindersPermission()`<br>`handleRemindersPermission()` |
| **Motion** | `motion` | `NSMotionUsageDescription` | `android.permission.ACTIVITY_RECOGNITION` | `requestMotion()`<br>`checkMotionPermission()`<br>`handleMotionPermission()` |
| **Media Library** | `mediaLibrary` | `NSAppleMusicUsageDescription` | `android.permission.READ_MEDIA_VIDEO` / `AUDIO` | `requestMediaLibrary()`<br>`checkMediaLibraryPermission()`<br>`handleMediaLibraryPermission()` |
| **Speech** | `speechRecognition` | `NSSpeechRecognitionUsageDescription` | `android.permission.RECORD_AUDIO` | `requestSpeechRecognition()`<br>`checkSpeechRecognitionPermission()`<br>`handleSpeechRecognitionPermission()` |
| **Tracking** | `tracking` | `NSUserTrackingUsageDescription` | - | `requestTracking()`<br>`checkTrackingPermission()`<br>`handleTrackingPermission()` |
| **FaceID** | `faceId` | `NSFaceIDUsageDescription` | - | `requestFaceId()`<br>`checkFaceIdPermission()`<br>`handleFaceIdPermission()` |
| **Siri** | `siri` | `NSSiriUsageDescription` | - | `requestSiri()`<br>`checkSiriPermission()`<br>`handleSiriPermission()` |

---

---

## 🛠️ Advanced: Custom Blocked Handler

If you prefer callbacks over hooks, every `handle...` method accepts an `onBlocked` callback as the final argument.

```typescript
import { handleCameraPermission } from 'rn-permission-kit';

await handleCameraPermission(
  "Custom Title", 
  "Custom Message",
  () => {
    console.log("Custom logic for blocked permission!");
  }
);
```

---

## 🛡️ License

MIT
