import { ButtonContainer } from './styles';
import { IButtonProps } from './types';

const Button = ({ isDisabled, title, onClick }: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} disabled={isDisabled}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
