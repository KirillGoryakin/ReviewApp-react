import { Box, Typography } from "@mui/material";
import { useTranslate } from "hooks/useTranslate";
import { Author } from "./Author";
import { List, ListItem } from "./List";
import { Repository } from "./Repository";

const AboutPage = () => {
  const { __ } = useTranslate();
  
  return (
    <Box
      px={{ xs: 2, sm: 0 }}
      pb={{ xs: 8, sm: 0 }}
    >
      <Typography
        variant="h3"
        textAlign='center'
        fontWeight={600}
      >
        {__("about.title")}
      </Typography>

      <Author />

      <Repository />

      <Typography
        fontSize={'1.2rem'}
        component='div'
        mt={4}
        dangerouslySetInnerHTML={{ __html: __("about.text") }}
      />

      <List title={__("about.keyFeatures.title")}>
        <ListItem>{__("about.keyFeatures.item1")}</ListItem>
        <ListItem>{__("about.keyFeatures.item2")}</ListItem>
        <ListItem>{__("about.keyFeatures.item3")}</ListItem>
        <ListItem>{__("about.keyFeatures.item4")}</ListItem>
        <ListItem>{__("about.keyFeatures.item5")}</ListItem>
      </List>

      <List title={__("about.technologies.title")}>
        <ListItem>{__("about.technologies.item1")}</ListItem>
        <ListItem>{__("about.technologies.item2")}</ListItem>
        <ListItem>{__("about.technologies.item3")}</ListItem>
        <ListItem>{__("about.technologies.item4")}</ListItem>
        <ListItem>{__("about.technologies.item5")}</ListItem>
      </List>
    </Box>
  )
}

export { AboutPage };