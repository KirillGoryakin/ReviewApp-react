import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const ListItem = styled.li`
  font-size: 1.3rem;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  line-height: 2.5rem;
`;

type ListProps = {
  title: string;
  children: React.ReactNode;
};

const List: React.FC<ListProps> = ({title, children}) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Typography
        variant="h4"
        fontWeight={500}
      >
        {title}
      </Typography>
      <ul style={{
        listStyle: 'disc',
        paddingLeft: '20px',
        marginTop: '1rem'
      }}>
        {children}
      </ul>
    </div>
  )
}

export { List, ListItem };