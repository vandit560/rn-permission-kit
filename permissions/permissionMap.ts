import { PERMISSIONS, Permission } from 'react-native-permissions';
import { isIOS } from '../utils/platform';

export type PermissionType = 
  | 'camera'
  | 'microphone'
  | 'contacts'
  | 'location'
  | 'locationAlways'
  | 'storage'
  | 'photos'
  | 'notifications'
  | 'bluetooth'
  | 'calendar'
  | 'reminders'
  | 'motion'
  | 'mediaLibrary'
  | 'speechRecognition'
  | 'tracking'
  | 'faceId'
  | 'siri';

export const PERMISSION_TYPES: Record<PermissionType, PermissionType> = {
  camera: 'camera',
  microphone: 'microphone',
  contacts: 'contacts',
  location: 'location',
  locationAlways: 'locationAlways',
  storage: 'storage',
  photos: 'photos',
  notifications: 'notifications',
  bluetooth: 'bluetooth',
  calendar: 'calendar',
  reminders: 'reminders',
  motion: 'motion',
  mediaLibrary: 'mediaLibrary',
  speechRecognition: 'speechRecognition',
  tracking: 'tracking',
  faceId: 'faceId',
  siri: 'siri',
} as const;


/**
 * Permission Map to normalize iOS and Android permission constants.
 */
export const PERMISSION_MAP: Record<PermissionType, Permission | null> = {
  camera: isIOS ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
  microphone: isIOS ? PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO,
  contacts: isIOS ? PERMISSIONS.IOS.CONTACTS : PERMISSIONS.ANDROID.READ_CONTACTS,
  location: isIOS ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  locationAlways: isIOS ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
  storage: isIOS ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  photos: isIOS ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
  notifications: isIOS ? null : PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
  bluetooth: isIOS ? PERMISSIONS.IOS.BLUETOOTH : PERMISSIONS.ANDROID.BLUETOOTH_CONNECT,
  calendar: isIOS ? PERMISSIONS.IOS.CALENDARS : PERMISSIONS.ANDROID.READ_CALENDAR,
  reminders: isIOS ? PERMISSIONS.IOS.REMINDERS : null,
  motion: isIOS ? PERMISSIONS.IOS.MOTION : PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION,
  mediaLibrary: isIOS ? PERMISSIONS.IOS.MEDIA_LIBRARY : PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
  speechRecognition: isIOS ? PERMISSIONS.IOS.SPEECH_RECOGNITION : PERMISSIONS.ANDROID.RECORD_AUDIO,
  tracking: isIOS ? PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY : null,
  faceId: isIOS ? PERMISSIONS.IOS.FACE_ID : null,
  siri: isIOS ? PERMISSIONS.IOS.SIRI : null,
};

