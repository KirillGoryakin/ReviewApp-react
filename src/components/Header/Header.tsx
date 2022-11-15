import {
  AppBar,
  Container,
  Toolbar
} from "@mui/material";
import { PageItems } from "./PageItems";
import { Logo } from "./Logo";
import { AddButton } from "./AddButton";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Header = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>

          <Logo />

          <PageItems />
          
          <AddButton />

          <LanguageSwitcher />

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export { Header };