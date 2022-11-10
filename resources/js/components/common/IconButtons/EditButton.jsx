import EditIcon from '@mui/icons-material/Edit';
import { BaseIconButton } from '@/components/common/IconButtons/BaseIconButton';

export const EditButton = ({ onClick, tooltipText, ...rest }) => {
  return (
    <BaseIconButton
      icon={EditIcon}
      onClick={onClick}
      tooltipText={tooltipText}
      {...rest}
    />
  );
};
