import { useState, useRef, useContext } from 'react';
import { Menu, MenuItem } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';
import SearchIcon from '@mui/icons-material/Search';
import { EnterURL } from './EnterURL';
import { SearchByTitle } from './SearchByTitle';
import { ReviewContext } from '../ReviewFormLayout';
import { useTranslate } from 'hooks/useTranslate';

type Props = {
  open: boolean;
  anchorEl: HTMLElement | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectorMenu: React.FC<Props> = ({ open, anchorEl, setOpen }) => {
  const { __ } = useTranslate();
  
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
          {__("imageSelector.menu.enterURL")}
        </MenuItem>
        <MenuItem
          disabled={
            (process.env.REACT_APP_API_KEY
            && process.env.REACT_APP_SEARCH_ENGINE_ID)
              ? false
              : true
          }
          disableRipple
          ref={searchRef}
          onClick={onSearchOpen}
        >
          <SearchIcon />
          {__("imageSelector.menu.searchByTitle")}
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