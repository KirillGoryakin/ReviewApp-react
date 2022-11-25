import { useContext, useEffect, useState } from 'react';
import { Menu, TextField } from '@mui/material';
import { ReviewContext } from '../ReviewFormLayout';

type Props = {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
};

const EnterURL: React.FC<Props> = ({ open, anchorEl, onClose }) => {
  const [review, setReview] = useContext(ReviewContext);
  const [URL, setURL] = useState('');
  
  useEffect(() => {
    setReview({ ...review, imageUrl: URL});
  }, [URL])

  return (
    <Menu
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <TextField
        size='small'
        label='URL'
        autoFocus
        onFocus={(e) => e.target.select()}
        value={URL}
        onChange={(e) => setURL(e.target.value)}
        sx={{ mx: 1 }}
      />
    </Menu>
  )
}

export { EnterURL };