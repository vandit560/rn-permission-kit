import { useState, useCallback } from 'react';
import { handleGeneric } from '../permissions/helper';
import { PermissionType } from '../permissions/permissionMap';

export interface UsePermissionOptions {
  title?: string;
  message?: string;
}

/**
 * Hook to manage individual permission state and blocked visibility.
 * @param type - The PermissionType to manage.
 * @param options - Optional title and message for default alerts.
 */
export const usePermission = (type: PermissionType, options?: UsePermissionOptions) => {
  const [isBlocked, setBlocked] = useState(false);

  const checkAndRequest = useCallback(async () => {
    const onBlocked = () => {
      setBlocked(true);
    };

    const granted = await handleGeneric(type, {
      title: options?.title,
      message: options?.message,
      onBlocked,
    });

    if (granted) {
      setBlocked(false);
    }

    return granted;
  }, [type, options]);

  return {
    /** Whether the permission is currently blocked (requires custom UI) */
    isBlocked,
    /** Trigger checking and requesting the permission */
    checkAndRequest,
    /** Manually reset the blocked state */
    resetBlocked: () => setBlocked(false),
  };
};
