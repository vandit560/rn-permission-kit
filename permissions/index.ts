import { requestGeneric, checkGeneric, handleGeneric, requestMultipleGeneric, checkMultipleGeneric, handleMultipleGeneric, PermissionOptions } from './helper';
import { PERMISSION_TYPES } from './permissionMap';
export type { PermissionType } from './permissionMap';
export { PERMISSION_TYPES, handleGeneric, requestMultipleGeneric, checkMultipleGeneric, handleMultipleGeneric };
export type { PermissionOptions };



// --- Camera ---
export const requestCamera = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.CAMERA);
export const checkCameraPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.CAMERA);
export const handleCameraPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.CAMERA, options);

// --- Location ---
export const requestLocation = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.LOCATION);
export const checkLocationPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.LOCATION);
export const handleLocationPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.LOCATION, options);

export const requestLocationAlways = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.LOCATION_ALWAYS);
export const checkLocationAlwaysPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.LOCATION_ALWAYS);
export const handleLocationAlwaysPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.LOCATION_ALWAYS, options);

// --- Microphone ---
export const requestMicrophone = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.MICROPHONE);
export const checkMicrophonePermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.MICROPHONE);
export const handleMicrophonePermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.MICROPHONE, options);

// --- Contacts ---
export const requestContacts = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.CONTACTS);
export const checkContactsPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.CONTACTS);
export const handleContactsPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.CONTACTS, options);

// --- Storage / Photos ---
export const requestStorage = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.STORAGE);
export const checkStoragePermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.STORAGE);
export const handleStoragePermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.STORAGE, options);

export const requestPhotos = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.PHOTOS);
export const checkPhotosPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.PHOTOS);
export const handlePhotosPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.PHOTOS, options);

// --- Notifications ---
export const requestNotifications = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.NOTIFICATIONS);
export const checkNotificationsPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.NOTIFICATIONS);
export const handleNotificationsPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.NOTIFICATIONS, options);

// --- Bluetooth ---
export const requestBluetooth = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.BLUETOOTH);
export const checkBluetoothPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.BLUETOOTH);
export const handleBluetoothPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.BLUETOOTH, options);

// --- Calendar ---
export const requestCalendar = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.CALENDAR);
export const checkCalendarPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.CALENDAR);
export const handleCalendarPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.CALENDAR, options);

// --- Reminders ---
export const requestReminders = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.REMINDERS);
export const checkRemindersPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.REMINDERS);
export const handleRemindersPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.REMINDERS, options);

// --- Motion ---
export const requestMotion = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.MOTION);
export const checkMotionPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.MOTION);
export const handleMotionPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.MOTION, options);

// --- Media Library ---
export const requestMediaLibrary = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.MEDIA_LIBRARY);
export const checkMediaLibraryPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.MEDIA_LIBRARY);
export const handleMediaLibraryPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.MEDIA_LIBRARY, options);

// --- Speech Recognition ---
export const requestSpeechRecognition = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.SPEECH_RECOGNITION);
export const checkSpeechRecognitionPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.SPEECH_RECOGNITION);
export const handleSpeechRecognitionPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.SPEECH_RECOGNITION, options);

// --- Tracking (iOS Only) ---
export const requestTracking = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.TRACKING);
export const checkTrackingPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.TRACKING);
export const handleTrackingPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.TRACKING, options);

// --- FaceID (iOS Only) ---
export const requestFaceId = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.FACE_ID);
export const checkFaceIdPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.FACE_ID);
export const handleFaceIdPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.FACE_ID, options);

// --- Siri (iOS Only) ---
export const requestSiri = (): Promise<boolean> => requestGeneric(PERMISSION_TYPES.SIRI);
export const checkSiriPermission = (): Promise<boolean> => checkGeneric(PERMISSION_TYPES.SIRI);
export const handleSiriPermission = (options?: PermissionOptions): Promise<boolean> => handleGeneric(PERMISSION_TYPES.SIRI, options);
