import { useState, useRef } from 'react';
import { Menu, MenuItem } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import SearchIcon from '@mui/icons-material/Search';
import { EnterURL } from './EnterURL';

type Props = {
  open: boolean;
  anchorEl: HTMLElement | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectorMenu: React.FC<Props> = ({ open, anchorEl, setOpen }) => {

  const [openURL, setOpenURL] = useState(false);
  const enterURLRef = useRef(null);
  const onURLClose = () => {
    setOpenURL(false);
    setOpen(false);
  }

  return (
    <>
      <Menu
        className='imageSelectMenu'
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
      >
        <MenuItem
          disableRipple
          ref={enterURLRef}
          onClick={() => setOpenURL(true)}
        >
          <LinkIcon />
          Enter URL
        </MenuItem>
        <MenuItem disableRipple>
          <SearchIcon />
          Search by title
        </MenuItem>
      </Menu>

      <EnterURL
        open={openURL}
        anchorEl={enterURLRef.current}
        onClose={onURLClose}
      />
    </>
  )
}

export { SelectorMenu };