import { Switch } from '@/components/common/Inputs/Switch';

export const ListItem = ({ paymentMethod, control }) => {
  return (
    <Switch
      control={control}
      name={paymentMethod.name}
      labelText={paymentMethod.name}
      labelPlacement="start"
      fullWidth={false}
    />
  );
};
