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
     ```bash
     cd ios && pod install
     ```
</details>

<details>
  <summary><b>🤖 Android Setup</b> (Click to Expand)</summary>

  1. **Update `AndroidManifest.xml`**:
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
import { requestPermission, PERMISSION_TYPES } from 'rn-permission-kit';

const granted = await requestPermission(PERMISSION_TYPES.CAMERA);
```

### ⚛️ React Hook (For Custom UI / Dialogs)
Use the `usePermission` hook if you want to show your own React component when a permission is blocked.

```tsx
import { usePermission, PERMISSION_TYPES } from 'rn-permission-kit';

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
import { handlePermission, PERMISSION_TYPES } from 'rn-permission-kit';

const granted = await handlePermission(
  PERMISSION_TYPES.LOCATION,
  "Location Access",
  "We need your location for mapping features."
);
```

### 📦 Multiple Permissions
Request multiple permissions at once efficiently.

```typescript
import { handleMultiplePermissions, PERMISSION_TYPES } from 'rn-permission-kit';

const results = await handleMultiplePermissions([
  PERMISSION_TYPES.CAMERA,
  PERMISSION_TYPES.MICROPHONE
]);

if (results.CAMERA && results.MICROPHONE) {
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

### ⚡ Permission Reference (Accordions)

Click a permission name below to see its native configuration and convenience helpers.

---

<details><summary>📸 <b>CAMERA</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSCameraUsageDescription`
  - 🤖 **Android**: `android.permission.CAMERA`
- **Ways to use**:
  - 🚀 `requestCamera()` • 🔍 `checkCameraPermission()` • 🛠️ `handleCameraPermission()`
</details>

<details><summary>📍 <b>LOCATION</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSLocationWhenInUseUsageDescription`
  - 🤖 **Android**: `android.permission.ACCESS_FINE_LOCATION`
- **Ways to use**:
  - 🚀 `requestLocation()` • 🔍 `checkLocationPermission()` • 🛠️ `handleLocationPermission()`
</details>

<details><summary>🏠 <b>LOCATION_ALWAYS</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSLocationAlwaysAndWhenInUseUsageDescription`
  - 🤖 **Android**: `android.permission.ACCESS_BACKGROUND_LOCATION`
- **Ways to use**:
  - 🚀 `requestLocationAlways()` • 🔍 `checkLocationAlwaysPermission()` • 🛠️ `handleLocationAlwaysPermission()`
</details>

<details><summary>🎤 <b>MICROPHONE</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSMicrophoneUsageDescription`
  - 🤖 **Android**: `android.permission.RECORD_AUDIO`
- **Ways to use**:
  - 🚀 `requestMicrophone()` • 🔍 `checkMicrophonePermission()` • 🛠️ `handleMicrophonePermission()`
</details>

<details><summary>👤 <b>CONTACTS</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSContactsUsageDescription`
  - 🤖 **Android**: `android.permission.READ_CONTACTS`
- **Ways to use**:
  - 🚀 `requestContacts()` • 🔍 `checkContactsPermission()` • 🛠️ `handleContactsPermission()`
</details>

<details><summary>💾 <b>STORAGE</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSPhotoLibraryUsageDescription`
  - 🤖 **Android**: `android.permission.READ_EXTERNAL_STORAGE`
- **Ways to use**:
  - 🚀 `requestStorage()` • 🔍 `checkStoragePermission()` • 🛠️ `handleStoragePermission()`
</details>

<details><summary>🔔 <b>NOTIFICATIONS</b></summary>
<br/>

- **Native Config**:
  - 🤖 **Android**: `android.permission.POST_NOTIFICATIONS`
- **Ways to use**:
  - 🚀 `requestNotifications()` • 🔍 `checkNotificationsPermission()` • 🛠️ `handleNotificationsPermission()`
</details>

<details><summary>🦷 <b>BLUETOOTH</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSBluetoothAlwaysUsageDescription`
  - 🤖 **Android**: `android.permission.BLUETOOTH_CONNECT`
- **Ways to use**:
  - 🚀 `requestBluetooth()` • 🔍 `checkBluetoothPermission()` • 🛠️ `handleBluetoothPermission()`
</details>

<details><summary>📅 <b>CALENDAR</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSCalendarsUsageDescription`
  - 🤖 **Android**: `android.permission.READ_CALENDAR`
- **Ways to use**:
  - 🚀 `requestCalendar()` • 🔍 `checkCalendarPermission()` • 🛠️ `handleCalendarPermission()`
</details>

<details><summary>📝 <b>REMINDERS</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSRemindersUsageDescription`
- **Ways to use**:
  - 🚀 `requestReminders()` • 🔍 `checkRemindersPermission()` • 🛠️ `handleRemindersPermission()`
</details>

<details><summary>🏃 <b>MOTION</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSMotionUsageDescription`
  - 🤖 **Android**: `android.permission.ACTIVITY_RECOGNITION`
- **Ways to use**:
  - 🚀 `requestMotion()` • 🔍 `checkMotionPermission()` • 🛠️ `handleMotionPermission()`
</details>

<details><summary>🎶 <b>MEDIA_LIBRARY</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSAppleMusicUsageDescription`
  - 🤖 **Android**: `android.permission.READ_MEDIA_VIDEO`
- **Ways to use**:
  - 🚀 `requestMediaLibrary()` • 🔍 `checkMediaLibraryPermission()` • 🛠️ `handleMediaLibraryPermission()`
</details>

<details><summary>🗣️ <b>SPEECH_RECOGNITION</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSSpeechRecognitionUsageDescription`
  - 🤖 **Android**: `android.permission.RECORD_AUDIO`
- **Ways to use**:
  - 🚀 `requestSpeechRecognition()` • 🔍 `checkSpeechRecognitionPermission()` • 🛠️ `handleSpeechRecognitionPermission()`
</details>

<details><summary>🕵️ <b>TRACKING</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSUserTrackingUsageDescription`
- **Ways to use**:
  - 🚀 `requestTracking()` • 🔍 `checkTrackingPermission()` • 🛠️ `handleTrackingPermission()`
</details>

<details><summary>🆔 <b>FACE_ID</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSFaceIDUsageDescription`
- **Ways to use**:
  - 🚀 `requestFaceId()` • 🔍 `checkFaceIdPermission()` • 🛠️ `handleFaceIdPermission()`
</details>

<details><summary>🎙️ <b>SIRI</b></summary>
<br/>

- **Native Config**:
  - 🍎 **iOS**: `NSSiriUsageDescription`
- **Ways to use**:
  - 🚀 `requestSiri()` • 🔍 `checkSiriPermission()` • 🛠️ `handleSiriPermission()`
</details>

---

---

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
