import { requestGeneric, checkGeneric, handleGeneric, requestMultipleGeneric, checkMultipleGeneric, handleMultipleGeneric } from './helper';
import { PERMISSION_TYPES } from './permissionMap';
export type { PermissionType } from './permissionMap';
export { PERMISSION_TYPES, handleGeneric, requestMultipleGeneric, checkMultipleGeneric, handleMultipleGeneric };



// --- Camera ---
export const requestCamera = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.camera);
export const checkCameraPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.camera);
export const handleCameraPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.camera, title, message, onBlocked);

// --- Location ---
export const requestLocation = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.location);
export const checkLocationPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.location);
export const handleLocationPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.location, title, message, onBlocked);

export const requestLocationAlways = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.locationAlways);
export const checkLocationAlwaysPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.locationAlways);
export const handleLocationAlwaysPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.locationAlways, title, message, onBlocked);

// --- Microphone ---
export const requestMicrophone = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.microphone);
export const checkMicrophonePermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.microphone);
export const handleMicrophonePermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.microphone, title, message, onBlocked);

// --- Contacts ---
export const requestContacts = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.contacts);
export const checkContactsPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.contacts);
export const handleContactsPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.contacts, title, message, onBlocked);

// --- Storage / Photos ---
export const requestStorage = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.storage);
export const checkStoragePermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.storage);
export const handleStoragePermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.storage, title, message, onBlocked);

export const requestPhotos = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.photos);
export const checkPhotosPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.photos);
export const handlePhotosPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.photos, title, message, onBlocked);

// --- Notifications ---
export const requestNotifications = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.notifications);
export const checkNotificationsPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.notifications);
export const handleNotificationsPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.notifications, title, message, onBlocked);

// --- Bluetooth ---
export const requestBluetooth = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.bluetooth);
export const checkBluetoothPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.bluetooth);
export const handleBluetoothPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.bluetooth, title, message, onBlocked);

// --- Calendar ---
export const requestCalendar = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.calendar);
export const checkCalendarPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.calendar);
export const handleCalendarPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.calendar, title, message, onBlocked);

// --- Reminders ---
export const requestReminders = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.reminders);
export const checkRemindersPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.reminders);
export const handleRemindersPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.reminders, title, message, onBlocked);

// --- Motion ---
export const requestMotion = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.motion);
export const checkMotionPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.motion);
export const handleMotionPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.motion, title, message, onBlocked);

// --- Media Library ---
export const requestMediaLibrary = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.mediaLibrary);
export const checkMediaLibraryPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.mediaLibrary);
export const handleMediaLibraryPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.mediaLibrary, title, message, onBlocked);

// --- Speech Recognition ---
export const requestSpeechRecognition = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.speechRecognition);
export const checkSpeechRecognitionPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.speechRecognition);
export const handleSpeechRecognitionPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.speechRecognition, title, message, onBlocked);

// --- Tracking (iOS Only) ---
export const requestTracking = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.tracking);
export const checkTrackingPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.tracking);
export const handleTrackingPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.tracking, title, message, onBlocked);

// --- FaceID (iOS Only) ---
export const requestFaceId = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.faceId);
export const checkFaceIdPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.faceId);
export const handleFaceIdPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.faceId, title, message, onBlocked);

// --- Siri (iOS Only) ---
export const requestSiri = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.siri);
export const checkSiriPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.siri);
export const handleSiriPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.siri, title, message, onBlocked);




