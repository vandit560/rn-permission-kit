import {
  request,
  check,
  requestMultiple,
  checkMultiple,
  RESULTS,
  PermissionStatus,
  Permission,
} from "react-native-permissions";
import { PERMISSION_MAP, PermissionType } from "./permissionMap";
import { Alert } from "react-native";
import { openAppSettings } from "../utils/platform";

/**
 * Common request function for any permission type.
 * @param permissionType - The key from PERMISSION_MAP.
 */
export const requestGeneric = async (
  permissionType: PermissionType,
): Promise<boolean> => {
  const permission = PERMISSION_MAP[permissionType];
  if (!permission) {
    console.warn(
      `Permission type "${permissionType}" is not supported on this platform.`,
    );
    return false;
  }
  const result: PermissionStatus = await request(permission);
  return result === RESULTS.GRANTED || result === RESULTS.LIMITED;
};

/**
 * Common check function for any permission type.
 * @param permissionType - The key from PERMISSION_MAP (e.g., 'camera', 'microphone').
 */
export const checkGeneric = async (
  permissionType: PermissionType,
): Promise<boolean> => {
  const permission = PERMISSION_MAP[permissionType];
  if (!permission) {
    console.warn(
      `Permission type "${permissionType}" is not supported on this platform.`,
    );
    return false;
  }
  const result: PermissionStatus = await check(permission);
  return result === RESULTS.GRANTED || result === RESULTS.LIMITED;
};

/**
 * Requests multiple permissions at once.
 * @param permissionTypes - An array of PermissionType keys.
 * @returns A mapping of each permission type to its granted status.
 */
export const requestMultipleGeneric = async (
  permissionTypes: PermissionType[],
): Promise<Record<string, boolean>> => {
  const typesToPermissions: Record<string, Permission> = {};
  const permissionsToRequest: Permission[] = [];

  permissionTypes.forEach((type) => {
    const perm = PERMISSION_MAP[type];
    if (perm) {
      typesToPermissions[type] = perm;
      permissionsToRequest.push(perm);
    }
  });

  const results = await requestMultiple(permissionsToRequest);

  const formattedResults: Record<string, boolean> = {};
  permissionTypes.forEach((type) => {
    const perm = typesToPermissions[type];
    if (perm) {
      formattedResults[type] =
        results[perm] === RESULTS.GRANTED || results[perm] === RESULTS.LIMITED;
    } else {
      formattedResults[type] = false;
    }
  });

  return formattedResults;
};

/**
 * Checks multiple permissions at once.
 * @param permissionTypes - An array of PermissionType keys.
 * @returns A mapping of each permission type to its granted status.
 */
export const checkMultipleGeneric = async (
  permissionTypes: PermissionType[],
): Promise<Record<string, boolean>> => {
  const typesToPermissions: Record<string, Permission> = {};
  const permissionsToCheck: Permission[] = [];

  permissionTypes.forEach((type) => {
    const perm = PERMISSION_MAP[type];
    if (perm) {
      typesToPermissions[type] = perm;
      permissionsToCheck.push(perm);
    }
  });

  const results = await checkMultiple(permissionsToCheck);

  const formattedResults: Record<string, boolean> = {};
  permissionTypes.forEach((type) => {
    const perm = typesToPermissions[type];
    if (perm) {
      formattedResults[type] =
        results[perm] === RESULTS.GRANTED || results[perm] === RESULTS.LIMITED;
    } else {
      formattedResults[type] = false;
    }
  });

  return formattedResults;
};

/**
 * Handles the complete permission flow: Check -> Request -> (If Blocked) Open Settings Alert.
 * @param permissionType - The key from PERMISSION_MAP.
 * @param title - Optional alert title if blocked.
 * @param message - Optional alert message if blocked.
 * @param onBlocked - Optional custom handler when permission is blocked.
 */
export const handleGeneric = async (
  permissionType: PermissionType,
  title: string = "Permission Required",
  message: string = "This permission is required to use this feature. Please enable it in settings.",
  onBlocked?: () => void,
): Promise<boolean> => {
  console.log("handleGeneric");
  const permission = PERMISSION_MAP[permissionType];
  if (!permission) return false;

  const status: PermissionStatus = await check(permission);
  console.log("Status: ", status);

  if (status === RESULTS.GRANTED || status === RESULTS.LIMITED) {
    return true;
  }
  console.log("Status111: ", status);

  if (status === RESULTS.DENIED) {
    const requestResult: PermissionStatus = await request(permission);
    console.log("requestResult :", requestResult);
    if (requestResult === RESULTS.BLOCKED) {
      if (onBlocked) {
        onBlocked();
      } else {
        Alert.alert(
          title,
          message,
          [
            { text: "Cancel", style: "cancel" },
            { text: "Settings", onPress: openAppSettings },
          ],
          { cancelable: true },
        );
      }
      return false;
    }
    return (
      requestResult === RESULTS.GRANTED || requestResult === RESULTS.LIMITED
    );
  }
  console.log("status :", status);

  if (status === RESULTS.BLOCKED) {
    if (onBlocked) {
      onBlocked();
    } else {
      Alert.alert(
        title,
        message,
        [
          { text: "Cancel", style: "cancel" },
          { text: "Settings", onPress: openAppSettings },
        ],
        { cancelable: true },
      );
    }
    return false;
  }

  return false;
};

/**
 * Handles multiple permissions flow: Check/Request -> (If any Blocked) Open Settings Alert.
 * @param permissionTypes - An array of PermissionType keys.
 * @param title - Alert title if blocked.
 * @param message - Alert message if blocked.
 * @param onBlocked - Optional custom handler when any permission is blocked.
 * @returns A mapping of each permission type to its granted status.
 */
export const handleMultipleGeneric = async (
  permissionTypes: PermissionType[],
  title: string = "Permissions Required",
  message: string = "Some permissions are required for this app to function correctly. Please enable them in settings.",
  onBlocked?: () => void,
): Promise<Record<string, boolean>> => {
  const typesToPermissions: Record<string, Permission> = {};
  const permissionsToRequest: Permission[] = [];

  permissionTypes.forEach((type) => {
    const perm = PERMISSION_MAP[type];
    if (perm) {
      typesToPermissions[type] = perm;
      permissionsToRequest.push(perm);
    }
  });

  const results = await requestMultiple(permissionsToRequest);

  const formattedResults: Record<string, boolean> = {};
  let isAnyBlocked = false;

  permissionTypes.forEach((type) => {
    const perm = typesToPermissions[type];
    if (perm) {
      const status = results[perm];
      formattedResults[type] =
        status === RESULTS.GRANTED || status === RESULTS.LIMITED;
      if (status === RESULTS.BLOCKED) {
        isAnyBlocked = true;
      }
    } else {
      formattedResults[type] = false;
    }
  });

  if (isAnyBlocked) {
    if (onBlocked) {
      onBlocked();
    } else {
      Alert.alert(
        title,
        message,
        [
          { text: "Cancel", style: "cancel" },
          { text: "Settings", onPress: openAppSettings },
        ],
        { cancelable: true },
      );
    }
  }

  return formattedResults;
};
