import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { BaseIconButton } from '@/components/common/IconButtons/BaseIconButton';

export const DeactivateButton = ({ onClick, tooltipText, ...rest }) => {
  return (
    <BaseIconButton
      icon={RemoveCircleIcon}
      onClick={onClick}
      tooltipText={tooltipText}
      {...rest}
    />
  );
};
