import { useQuery } from 'react-query';
import UsersApi from '@/api/UsersApi';

export const useGetRoles = () => {
  const { data } = useQuery({
    queryKey: ['roles'],
    queryFn: UsersApi.getRoles,
    refetchOnWindowFocus: false,
  });

  return data;
};
