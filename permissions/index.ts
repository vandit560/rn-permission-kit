import { requestGeneric, checkGeneric, handleGeneric, requestMultipleGeneric, checkMultipleGeneric, handleMultipleGeneric } from './helper';
import { PERMISSION_TYPES } from './permissionMap';
export type { PermissionType } from './permissionMap';
export { PERMISSION_TYPES, handleGeneric, requestMultipleGeneric, checkMultipleGeneric, handleMultipleGeneric };



// --- Camera ---
export const requestCamera = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.CAMERA);
export const checkCameraPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.CAMERA);
export const handleCameraPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.CAMERA, title, message, onBlocked);

// --- Location ---
export const requestLocation = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.LOCATION);
export const checkLocationPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.LOCATION);
export const handleLocationPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.LOCATION, title, message, onBlocked);

export const requestLocationAlways = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.LOCATION_ALWAYS);
export const checkLocationAlwaysPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.LOCATION_ALWAYS);
export const handleLocationAlwaysPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.LOCATION_ALWAYS, title, message, onBlocked);

// --- Microphone ---
export const requestMicrophone = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.MICROPHONE);
export const checkMicrophonePermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.MICROPHONE);
export const handleMicrophonePermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.MICROPHONE, title, message, onBlocked);

// --- Contacts ---
export const requestContacts = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.CONTACTS);
export const checkContactsPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.CONTACTS);
export const handleContactsPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.CONTACTS, title, message, onBlocked);

// --- Storage / Photos ---
export const requestStorage = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.STORAGE);
export const checkStoragePermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.STORAGE);
export const handleStoragePermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.STORAGE, title, message, onBlocked);

export const requestPhotos = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.PHOTOS);
export const checkPhotosPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.PHOTOS);
export const handlePhotosPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.PHOTOS, title, message, onBlocked);

// --- Notifications ---
export const requestNotifications = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.NOTIFICATIONS);
export const checkNotificationsPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.NOTIFICATIONS);
export const handleNotificationsPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.NOTIFICATIONS, title, message, onBlocked);

// --- Bluetooth ---
export const requestBluetooth = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.BLUETOOTH);
export const checkBluetoothPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.BLUETOOTH);
export const handleBluetoothPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.BLUETOOTH, title, message, onBlocked);

// --- Calendar ---
export const requestCalendar = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.CALENDAR);
export const checkCalendarPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.CALENDAR);
export const handleCalendarPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.CALENDAR, title, message, onBlocked);

// --- Reminders ---
export const requestReminders = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.REMINDERS);
export const checkRemindersPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.REMINDERS);
export const handleRemindersPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.REMINDERS, title, message, onBlocked);

// --- Motion ---
export const requestMotion = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.MOTION);
export const checkMotionPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.MOTION);
export const handleMotionPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.MOTION, title, message, onBlocked);

// --- Media Library ---
export const requestMediaLibrary = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.MEDIA_LIBRARY);
export const checkMediaLibraryPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.MEDIA_LIBRARY);
export const handleMediaLibraryPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.MEDIA_LIBRARY, title, message, onBlocked);

// --- Speech Recognition ---
export const requestSpeechRecognition = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.SPEECH_RECOGNITION);
export const checkSpeechRecognitionPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.SPEECH_RECOGNITION);
export const handleSpeechRecognitionPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.SPEECH_RECOGNITION, title, message, onBlocked);

// --- Tracking (iOS Only) ---
export const requestTracking = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.TRACKING);
export const checkTrackingPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.TRACKING);
export const handleTrackingPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.TRACKING, title, message, onBlocked);

// --- FaceID (iOS Only) ---
export const requestFaceId = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.FACE_ID);
export const checkFaceIdPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.FACE_ID);
export const handleFaceIdPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.FACE_ID, title, message, onBlocked);

// --- Siri (iOS Only) ---
export const requestSiri = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.SIRI);
export const checkSiriPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.SIRI);
export const handleSiriPermission = (title?: string, message?: string, onBlocked?: () => void): Promise<boolean> => handleGeneric(PERMISSION_TYPES.SIRI, title, message, onBlocked);
