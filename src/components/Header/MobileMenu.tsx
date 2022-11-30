import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { PageItems } from "./PageItems";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        size='large'
        sx={{
          display: { xs: 'inline-flex', md: 'none' },
          color: 'white',
          ml: 'auto'
        }}
      >
        <MenuIcon fontSize='large' />
      </IconButton>
      <Drawer
        open={open}
        anchor='right'
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            minWidth: '200px',
            alignItems: 'center'
          }
        }}
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      >
        <PageItems
          display={{ xs: 'block', md: 'none' }}
          onClick={() => setOpen(false)}
        />

        <LanguageSwitcher
          display={{ xs: 'block', md: 'none' }}
          onSelect={() => setOpen(false)}
        />
      </Drawer>
    </>
  )
}

export { MobileMenu };