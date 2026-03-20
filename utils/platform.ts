import { Platform, Alert, Linking } from 'react-native';

/**
 * Checks if the current platform is iOS.
 */
export const isIOS: boolean = Platform.OS === 'ios';

/**
 * Checks if the current platform is Android.
 */
export const isAndroid: boolean = Platform.OS === 'android';

/**
 * Opens the application settings.
 */
export const openAppSettings = async (): Promise<void> => {
  try {
    await Linking.openSettings();
  } catch (error) {
    Alert.alert('Error', 'Unable to open app settings');
  }
};

