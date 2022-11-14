import { useQuery } from 'react-query';
import UsersApi from '@/api/UsersApi';

export const useGetUser = id => {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      if (id) {
        return await UsersApi.getOne(id);
      }
    },
  });

  return data;
};
