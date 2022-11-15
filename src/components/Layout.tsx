import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Header } from "./Header";

const Layout = () => {
  return (
    <div style={{paddingTop: '4rem'}}>
      <Header />

      <Box sx={{ maxWidth: 650, mx: 'auto', py: 2 }}>
        <Outlet />
      </Box>
    </div>
  )
}

export { Layout };