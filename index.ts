import { requestGeneric, checkGeneric, handleGeneric, requestMultipleGeneric, checkMultipleGeneric, handleMultipleGeneric, PermissionOptions } from './permissions/helper';
import { openAppSettings } from './utils/platform';
import { PermissionType } from './permissions/index';

// Export all individual request/check/handle functions, including PermissionType
export * from './permissions/index';
export { openAppSettings };

/**
 * Unified request permission function.
 */
export const requestPermission = (type: PermissionType): Promise<boolean> => requestGeneric(type);

/**
 * Unified check permission function.
 */
export const checkPermission = (type: PermissionType): Promise<boolean> => checkGeneric(type);

/**
 * Unified handle permission function (Check -> Request -> Open Settings Alert).
 */
export const handlePermission = (
  type: PermissionType,
  options?: PermissionOptions,
): Promise<boolean> => handleGeneric(type, options);

/**
 * Unified request multiple permissions function.
 */
export const requestMultiplePermissions = (
  types: PermissionType[]
): Promise<Record<string, boolean>> => requestMultipleGeneric(types);

/**
 * Unified check multiple permissions function.
 */
export const checkMultiplePermissions = (
  types: PermissionType[]
): Promise<Record<string, boolean>> => checkMultipleGeneric(types);

/**
 * Unified handle multiple permissions function (Check/Request -> Open Settings Alert if any Blocked).
 */
export const handleMultiplePermissions = (
  types: PermissionType[],
  options?: PermissionOptions,
): Promise<Record<string, boolean>> => handleMultipleGeneric(types, options);

// Hooks for React
export * from './hooks/usePermission';
