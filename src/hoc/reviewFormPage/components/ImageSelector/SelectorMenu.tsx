import { useState, useRef, useContext } from 'react';
import { Menu, MenuItem } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import SearchIcon from '@mui/icons-material/Search';
import { EnterURL } from './EnterURL';
import { SearchByTitle } from './SearchByTitle';
import { ReviewContext } from '../ReviewFormLayout';

type Props = {
  open: boolean;
  anchorEl: HTMLElement | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectorMenu: React.FC<Props> = ({ open, anchorEl, setOpen }) => {
  const [review] = useContext(ReviewContext);
  const [openURL, setOpenURL] = useState(false);
  const enterURLRef = useRef(null);
  const onURLClose = () => {
    setOpenURL(false);
    setOpen(false);
  }

  const [openSearch, setOpenSearch] = useState(false);
  const searchRef = useRef(null);
  const onSearchOpen = () => {
    setOpenSearch(true);
    setOpen(false);
  }

  return (
    <>
      <Menu
        className='menu-icon-spacing'
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
        <MenuItem
          disableRipple
          ref={searchRef}
          onClick={onSearchOpen}
        >
          <SearchIcon />
          Search by title
        </MenuItem>
      </Menu>

      <EnterURL
        open={openURL}
        anchorEl={enterURLRef.current}
        onClose={onURLClose}
      />

      <SearchByTitle
        title={review.title.trim()}
        open={openSearch}
        onClose={() => setOpenSearch(false)}
      />
    </>
  )
}

export { SelectorMenu };