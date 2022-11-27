import { MenuItem, Typography } from "@mui/material";

type Props = {
  children: string;
  flag: string;
  disabled: boolean;
  onClick: () => void;
};

const SwitcherItem: React.FC<Props> = (props) => {
  const {
    children,
    flag,
    disabled,
    onClick
  } = props;
  
  return (
    <MenuItem
      disableRipple
      disabled={disabled}
      onClick={onClick}
    >
      <img src={flag} style={{ width: '2rem', height: '2rem', marginRight: '1rem' }} />
      <Typography fontSize='large'>{children}</Typography>
    </MenuItem>
  )
}

export { SwitcherItem };