import { useState, useRef } from "react";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import USFlag from 'assets/img/en_us.svg';
import RUFlag from 'assets/img/ru_ru.svg';

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);

  const buttonRef = useRef(null);

  return (
    <>
      <IconButton
        onClick={() => setOpen(!open)}
        ref={buttonRef}
      >
        <img src={USFlag} style={{ width: '2rem', height: '2rem' }} />
      </IconButton>
      <Menu
        
        open={open}
        anchorEl={buttonRef.current}
        onClose={() => setOpen(false)}
      >
        <MenuItem disableRipple disabled>
          <img src={USFlag} style={{ width: '2rem', height: '2rem', marginRight: '1rem' }} />
          <Typography fontSize='large'>English</Typography> 
        </MenuItem>
        <MenuItem disableRipple>
          <img src={RUFlag} style={{ width: '2rem', height: '2rem', marginRight: '1rem' }} />
          <Typography fontSize='large'>Русский</Typography> 
        </MenuItem>
      </Menu>
    </>
  )
}

export { LanguageSwitcher };