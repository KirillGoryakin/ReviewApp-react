import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useTranslate } from "hooks/useTranslate";

const greyPrimeary = "#6a707c";
const greySecondary = "#acb1b9";

const StyledSpanLink = styled.span`
  color: ${greyPrimeary};
  border-bottom: 2px dotted ${greyPrimeary};
  transition: 0.15s color ease-in-out, 0.15s border-bottom ease-in-out;

  &:hover {
    color: ${greySecondary};
    border-color: ${greySecondary};
  }
`;

const Repository = () => {
  const { __ } = useTranslate();
  
  return (
    <Typography
      variant="h5"
      fontWeight={500}
      mt={4}
    >
      <a
        href="https://github.com/KirillGoryakin/ReviewApp-react"
        target='_blank'
        style={{
          display: 'inline-flex',
          alignItems: 'center'
        }}
      >
        <StyledSpanLink>{__("about.repository")}</StyledSpanLink>
      </a>
    </Typography>
  )
}

export { Repository };