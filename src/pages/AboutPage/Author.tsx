import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import githubIcon from 'assets/img/github.svg';
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

const Author = () => {
  const { __ } = useTranslate();
  
  return (
    <Typography
      variant="h5"
      fontWeight={500}
      mt={4}
    >
      {__("about.author")}
      <a
        href="https://github.com/KirillGoryakin"
        target='_blank'
        style={{
          marginLeft: '0.5rem',
          display: 'inline-flex',
          alignItems: 'center'
        }}
      >
        <StyledSpanLink>Kirill Goryakin</StyledSpanLink>
        <img
          src={githubIcon}
          width='32px'
          height='32px'
          style={{
            marginLeft: '0.5rem'
          }}
        />
      </a>
    </Typography>
  )
}

export { Author };