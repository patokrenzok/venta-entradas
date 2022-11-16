import { useAuth } from '@/hooks/useAuth';
import { RoleEnum } from '@/enums/RoleEnum';

export const useIsSuperAdmin = () => {
  const { auth } = useAuth();

  return auth?.role?.id === RoleEnum.SUPERADMIN;
};
