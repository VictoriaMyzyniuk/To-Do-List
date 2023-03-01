import { ButtonEl } from 'components/Button/Button.styled';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <ButtonEl type={type} {...otherProps}>
      {children}
    </ButtonEl>
  );
};
