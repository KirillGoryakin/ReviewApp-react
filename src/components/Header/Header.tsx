import {
  AppBar,
  Container,
  Toolbar
} from "@mui/material";
import { PageItems } from "./PageItems";
import { Logo } from "./Logo";
import { AddButton } from "./AddButton";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

const Header = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>

          <Logo />

          <PageItems display={{ xs: 'none', md: 'flex' }} />

          <AddButton />

          <LanguageSwitcher display={{ xs: 'none', md: 'inline-flex' }} />

          <MobileMenu />

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export { Header };