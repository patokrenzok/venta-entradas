import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { BaseIconButton } from '@/components/common/IconButtons/BaseIconButton';

export const ActivateButton = ({ onClick, tooltipText, ...rest }) => {
  return (
    <BaseIconButton
      icon={CheckCircleIcon}
      onClick={onClick}
      tooltipText={tooltipText}
      {...rest}
    />
  );
};
