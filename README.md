# 📱 rn-permission-kit

**rn-permission-kit** is a powerful, type-safe React Native permission helper that simplifies permission management on both iOS and Android.

It abstracts away the complexity of `react-native-permissions` into a unified, developer-friendly API with built-in support for custom UI and automatic "Open Settings" alerts.

---

## 🤔 Why rn-permission-kit?

If you've ever used `react-native-permissions` directly, you know it takes a lot of boilerplate to handle a complete "Check → Request → Show Alert" flow correctly on both platforms.

### ❌ Using `react-native-permissions` directly (35+ Lines)

```typescript
import { check, request, RESULTS, PERMISSIONS } from "react-native-permissions";
import { Platform, Alert, Linking } from "react-native";

const handleCamera = async () => {
  const p =
    Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;

  const status = await check(p);

  if (status === RESULTS.GRANTED) return true;

  if (status === RESULTS.DENIED) {
    const result = await request(p);
    if (result === RESULTS.GRANTED) return true;
    if (result === RESULTS.BLOCKED) {
      Alert.alert("Camera", "Permission blocked. Open settings?", [
        { text: "Cancel" },
        { text: "Settings", onPress: () => Linking.openSettings() },
      ]);
    }
  }

  if (status === RESULTS.BLOCKED) {
    Alert.alert("Camera", "Permission blocked. Open settings?", [
      { text: "Cancel" },
      { text: "Settings", onPress: () => Linking.openSettings() },
    ]);
  }

  return false;
};
```

### ✅ Using `rn-permission-kit` (3 Lines)

```typescript
import { handleCameraPermission } from "rn-permission-kit";

// Handles Platform detection, Check, Request, and Blocked Alert automatically!
await handleCameraPermission();
```

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

### ⚙️ Native Setup

Since this library depends on `react-native-permissions`, you must configure your native projects for the specific permissions you want to use.

<details>
  <summary><b>🍏 iOS Setup</b> (Click to Expand)</summary>

1. **Update your `Podfile`**:
   Add the specific permission handlers you need. This reduces your app size by only including the code for permissions you actually use.

   ```ruby
   target 'YourTargetName' do
     # ...
     permissions_path = '../node_modules/react-native-permissions/ios'

     # Add only the ones you need:
     pod 'Permission-Camera', :path => "#{permissions_path}/Camera"
     pod 'Permission-Microphone', :path => "#{permissions_path}/Microphone"
     pod 'Permission-LocationWhenInUse', :path => "#{permissions_path}/LocationWhenInUse"
     pod 'Permission-LocationAlways', :path => "#{permissions_path}/LocationAlways"
     pod 'Permission-PhotoLibrary', :path => "#{permissions_path}/PhotoLibrary"
     pod 'Permission-Notifications', :path => "#{permissions_path}/Notifications"
     pod 'Permission-Contacts', :path => "#{permissions_path}/Contacts"
     pod 'Permission-Bluetooth', :path => "#{permissions_path}/Bluetooth"
     pod 'Permission-Calendars', :path => "#{permissions_path}/Calendars"
     pod 'Permission-Reminders', :path => "#{permissions_path}/Reminders"
     pod 'Permission-Motion', :path => "#{permissions_path}/Motion"
     pod 'Permission-MediaLibrary', :path => "#{permissions_path}/MediaLibrary"
     pod 'Permission-SpeechRecognition', :path => "#{permissions_path}/SpeechRecognition"
     pod 'Permission-AppTrackingTransparency', :path => "#{permissions_path}/AppTrackingTransparency"
     pod 'Permission-FaceID', :path => "#{permissions_path}/FaceID"
     pod 'Permission-Siri', :path => "#{permissions_path}/Siri"
   end
   ```

2. **Update `Info.plist`**:
   Add the corresponding usage description strings (see the [Reference Table](#-permission-reference-configuration--helpers) for keys).

3. **Install Pods**:
`bash
     cd ios && pod install
     `
</details>

<details>
  <summary><b>🤖 Android Setup</b> (Click to Expand)</summary>

1.  **Update `AndroidManifest.xml`**:
    Add the necessary `<uses-permission>` tags in your `android/app/src/main/AndroidManifest.xml` (see the [Reference Table](#-permission-reference-configuration--helpers) for exact strings).

         ```xml
         <manifest xmlns:android="http://schemas.android.com/apk/res/android">
             <uses-permission android:name="android.permission.CAMERA" />
             <!-- Add others as needed -->
         </manifest>
         ```

    </details>

---

Please refer to the [Permission Reference](#-permission-reference-configuration--helpers) table below for the specific keys and permissions you need to add to your native projects.

---

## 🧩 Usage

### ⚙️ Using Constants (Recommended)

Avoid typos by using the exported `PERMISSION_TYPES` constant.

```typescript
import { requestPermission, PERMISSION_TYPES } from "rn-permission-kit";

const granted = await requestPermission(PERMISSION_TYPES.CAMERA);
```

### ⚛️ React Hook (For Custom UI / Dialogs)

Use the `usePermission` hook if you want to show your own React component when a permission is blocked.

```tsx
import { usePermission, PERMISSION_TYPES } from "rn-permission-kit";

const MyComponent = () => {
  const { checkAndRequest, isBlocked } = usePermission(PERMISSION_TYPES.CAMERA);

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
import { handlePermission, PERMISSION_TYPES } from "rn-permission-kit";

const granted = await handlePermission(PERMISSION_TYPES.LOCATION, {
  title: "Location Access",
  message: "We need your location for mapping features.",
});
```

### 📦 Multiple Permissions

Request multiple permissions at once efficiently.

```typescript
import { handleMultiplePermissions, PERMISSION_TYPES } from "rn-permission-kit";

const results = await handleMultiplePermissions([
  PERMISSION_TYPES.CAMERA,
  PERMISSION_TYPES.MICROPHONE,
]);

if (results.CAMERA && results.MICROPHONE) {
  // Good to go!
}
```

## 📘 API Reference

### 🏗️ Core Methods

Every method is `async` and returns a `Promise`.

##### 🚀 **requestPermission**

> **Signature**: `requestPermission(type: PermissionType)`
>
> - **Returns**: `Promise<boolean>`
> - **Description**: Attempts to request a specific permission from the user. Returns `true` if granted.

##### 🔍 **checkPermission**

> **Signature**: `checkPermission(type: PermissionType)`
>
> - **Returns**: `Promise<boolean>`
> - **Description**: Checks the current status of a permission. Returns `true` if already granted.

##### ⚡ **handlePermission (Best for UI)**

> **Signature**: `handlePermission(type: PermissionType, options?: PermissionOptions)`
>
> - **Returns**: `Promise<boolean>`
> - **Description**: The ultimate helper. **Check → Request → Show Alert** (if blocked). Customize the alert or override with `onBlocked` via the options object.

##### 📦 **requestMultiplePermissions**

> **Signature**: `requestMultiplePermissions(types: PermissionType[])`
>
> - **Returns**: `Promise<Record<string, boolean>>`
> - **Description**: Bulk request several permissions at once. Returns an object mapping type to a grant boolean.

##### 🔭 **checkMultiplePermissions**

> **Signature**: `checkMultiplePermissions(types: PermissionType[])`
>
> - **Returns**: `Promise<Record<string, boolean>>`
> - **Description**: Efficiently check multiple statuses at once.

##### 🛠️ **handleMultiplePermissions**

> **Signature**: `handleMultiplePermissions(types: PermissionType[], options?: PermissionOptions)`
>
> - **Returns**: `Promise<Record<string, boolean>>`
> - **Description**: Handles a list of permissions with one cohesive logic. If any are blocked, it shows a single alert or triggers `onBlocked`.

##### ⚙️ **openAppSettings**

> **Signature**: `openAppSettings()`
>
> - **Returns**: `Promise<void>`
> - **Description**: Programmatically open the system settings screen for your app.

---

### ⚛️ React Hooks

##### 🎣 **usePermission**

> **Signature**: `usePermission(type, { title?, message? })`
>
> - **Returns**: `{ isBlocked, checkAndRequest, resetBlocked }`
> - **Description**: A powerful hook for UI components. It tracks blocked state automatically and handles the entire permission lifecycle.

---

### ⚡ Permission Reference

Permissions are organized by category. Each section includes the **Constant**, its **Native Setup**, and all **Convenience Helpers**.

#### 🗺️ Location Services

##### 📍 **LOCATION**

> **Constant**: `PERMISSION_TYPES.LOCATION`
>
> - 🍎 **iOS Key**: `NSLocationWhenInUseUsageDescription`
> - 🤖 **Android Permission**: `android.permission.ACCESS_FINE_LOCATION`
> - 🛠️ **Methods**: `requestLocation()`, `checkLocationPermission()`, `handleLocationPermission()`

##### 🏠 **LOCATION_ALWAYS**

> **Constant**: `PERMISSION_TYPES.LOCATION_ALWAYS`
>
> - 🍎 **iOS Key**: `NSLocationAlwaysAndWhenInUseUsageDescription`
> - 🤖 **Android Permission**: `android.permission.ACCESS_BACKGROUND_LOCATION`
> - 🛠️ **Methods**: `requestLocationAlways()`, `checkLocationAlwaysPermission()`, `handleLocationAlwaysPermission()`

---

#### 📸 Media & Hardware

##### 📷 **CAMERA**

> **Constant**: `PERMISSION_TYPES.CAMERA`
>
> - 🍎 **iOS Key**: `NSCameraUsageDescription`
> - 🤖 **Android Permission**: `android.permission.CAMERA`
> - 🛠️ **Methods**: `requestCamera()`, `checkCameraPermission()`, `handleCameraPermission()`

##### 🎤 **MICROPHONE**

> **Constant**: `PERMISSION_TYPES.MICROPHONE`
>
> - 🍎 **iOS Key**: `NSMicrophoneUsageDescription`
> - 🤖 **Android Permission**: `android.permission.RECORD_AUDIO`
> - 🛠️ **Methods**: `requestMicrophone()`, `checkMicrophonePermission()`, `handleMicrophonePermission()`

##### 🏃 **MOTION**

> **Constant**: `PERMISSION_TYPES.MOTION`
>
> - 🍎 **iOS Key**: `NSMotionUsageDescription`
> - 🤖 **Android Permission**: `android.permission.ACTIVITY_RECOGNITION`
> - 🛠️ **Methods**: `requestMotion()`, `checkMotionPermission()`, `handleMotionPermission()`

##### 🎶 **MEDIA_LIBRARY**

> **Constant**: `PERMISSION_TYPES.MEDIA_LIBRARY`
>
> - 🍎 **iOS Key**: `NSAppleMusicUsageDescription`
> - 🤖 **Android Permission**: `android.permission.READ_MEDIA_VIDEO`
> - 🛠️ **Methods**: `requestMediaLibrary()`, `checkMediaLibraryPermission()`, `handleMediaLibraryPermission()`

---

#### 👤 Personal & Privacy

##### 👤 **CONTACTS**

> **Constant**: `PERMISSION_TYPES.CONTACTS`
>
> - 🍎 **iOS Key**: `NSContactsUsageDescription`
> - 🤖 **Android Permission**: `android.permission.READ_CONTACTS`
> - 🛠️ **Methods**: `requestContacts()`, `checkContactsPermission()`, `handleContactsPermission()`

##### 💾 **STORAGE**

> **Constant**: `PERMISSION_TYPES.STORAGE`
>
> - 🍎 **iOS Key**: `NSPhotoLibraryUsageDescription`
> - 🤖 **Android Permission**: `android.permission.READ_EXTERNAL_STORAGE`
> - 🛠️ **Methods**: `requestStorage()`, `checkStoragePermission()`, `handleStoragePermission()`

##### 📅 **CALENDAR**

> **Constant**: `PERMISSION_TYPES.CALENDAR`
>
> - 🍎 **iOS Key**: `NSCalendarsUsageDescription`
> - 🤖 **Android Permission**: `android.permission.READ_CALENDAR`
> - 🛠️ **Methods**: `requestCalendar()`, `checkCalendarPermission()`, `handleCalendarPermission()`

##### 📝 **REMINDERS** (iOS Only)

> **Constant**: `PERMISSION_TYPES.REMINDERS`
>
> - 🍎 **iOS Key**: `NSRemindersUsageDescription`
> - 🛠️ **Methods**: `requestReminders()`, `checkRemindersPermission()`, `handleRemindersPermission()`

---

#### 📱 System Services

##### 🔔 **NOTIFICATIONS** (Android Only)

> **Constant**: `PERMISSION_TYPES.NOTIFICATIONS`
>
> - 🤖 **Android Permission**: `android.permission.POST_NOTIFICATIONS`
> - 🛠️ **Methods**: `requestNotifications()`, `checkNotificationsPermission()`, `handleNotificationsPermission()`

##### 🦷 **BLUETOOTH**

> **Constant**: `PERMISSION_TYPES.BLUETOOTH`
>
> - 🍎 **iOS Key**: `NSBluetoothAlwaysUsageDescription`
> - 🤖 **Android Permission**: `android.permission.BLUETOOTH_CONNECT`
> - 🛠️ **Methods**: `requestBluetooth()`, `checkBluetoothPermission()`, `handleBluetoothPermission()`

##### 🗣️ **SPEECH_RECOGNITION**

> **Constant**: `PERMISSION_TYPES.SPEECH_RECOGNITION`
>
> - 🍎 **iOS Key**: `NSSpeechRecognitionUsageDescription`
> - 🤖 **Android Permission**: `android.permission.RECORD_AUDIO`
> - 🛠️ **Methods**: `requestSpeechRecognition()`, `checkSpeechRecognitionPermission()`, `handleSpeechRecognitionPermission()`

##### 🕵️ **TRACKING** (iOS Only)

> **Constant**: `PERMISSION_TYPES.TRACKING`
>
> - 🍎 **iOS Key**: `NSUserTrackingUsageDescription`
> - 🛠️ **Methods**: `requestTracking()`, `checkTrackingPermission()`, `handleTrackingPermission()`

##### 🆔 **FACE_ID** (iOS Only)

> **Constant**: `PERMISSION_TYPES.FACE_ID`
>
> - 🍎 **iOS Key**: `NSFaceIDUsageDescription`
> - 🛠️ **Methods**: `requestFaceId()`, `checkFaceIdPermission()`, `handleFaceIdPermission()`

##### 🎙️ **SIRI** (iOS Only)

> **Constant**: `PERMISSION_TYPES.SIRI`
>
> - 🍎 **iOS Key**: `NSSiriUsageDescription`
> - 🛠️ **Methods**: `requestSiri()`, `checkSiriPermission()`, `handleSiriPermission()`

---

## 🛠️ Advanced: Custom Blocked Handler

If you prefer callbacks over hooks, every `handle...` method accepts an `onBlocked` callback within the options object. This is perfect for custom dialogs or logging.

```typescript
import { handleCameraPermission } from "rn-permission-kit";

await handleCameraPermission({
  title: "Custom Title",
  message: "Custom Message",
  onBlocked: () => {
    console.log("Custom logic for blocked permission!");
  },
});
```

---

## 🛡️ License

MIT
