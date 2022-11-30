import { useState, useRef } from "react";
import { IconButton, Menu } from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks/app";
import { SwitcherItem } from "./SwitcherItem";
import { changeLanguage } from "store/slices/reviewsSlice";
import { FLAGS } from "assets/flags";
import { useTranslate } from "hooks/useTranslate";

type Props = {
  display: object;
  onSelect?: Function;
}

const LanguageSwitcher: React.FC<Props> = ({ display, onSelect }) => {
  const dispatch = useAppDispatch();
  const { languages } = useTranslate();
  const currentLanguge = useAppSelector(state => state.reviews.lang);

  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleSelect = (code: string) => {
    dispatch(changeLanguage(code));
    setOpen(false);
    
    if (onSelect) onSelect();
  } 

  return (
    <>
      <IconButton
        onClick={() => setOpen(!open)}
        ref={buttonRef}
        sx={{ display, width: 'max-content' }}
      >
        <img src={FLAGS[currentLanguge]} style={{ width: '2rem', height: '2rem' }} />
      </IconButton>
      <Menu
        open={open}
        anchorEl={buttonRef.current}
        onClose={() => setOpen(false)}
        sx={{ display }}
      >
        {languages.map(({ code, name }) => 
          <SwitcherItem
            key={code}
            disabled={currentLanguge === code}
            flag={FLAGS[code]}
            onClick={() => handleSelect(code)}
          >
            {name}
          </SwitcherItem>
        )}
      </Menu>
    </>
  )
}

export { LanguageSwitcher };