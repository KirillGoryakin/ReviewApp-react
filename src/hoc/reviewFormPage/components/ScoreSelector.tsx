import { Box, Typography, ClickAwayListener, useColorScheme } from "@mui/material";
import { useContext, useState, useEffect } from 'react';
import { ReviewContext } from "./ReviewFormLayout";

const ScoreSelector = () => {
  const [review, setReview] = useContext(ReviewContext);
  const [score, setScore] = useState(10);
  const [edit, setEdit] = useState(false);

  const color =
    (score >= 7) ? 'success.light'
    : (score <= 3) ? 'error.dark'
    : 'warning.light';

  useEffect(() => {
    setReview({...review, score});
  }, [score]);

  return (
    <ClickAwayListener onClickAway={() => setEdit(false)}>
      <Box
        width='max-content'
        bgcolor={color}
        borderRadius={2}
        mx='auto'
        px={1}
        py={0.5}
        sx={{ cursor: 'pointer' }}
        onClick={() => setEdit(true)}
      >
        <Typography
          variant='h3'
          component='p'
          fontWeight={500}
          color='#fff'
          sx={{ userSelect: 'none' }}
        >
          {
            (!edit)
            ? score
            : <input
                autoFocus
                onFocus={(e) => e.target.select()}
                type='number'
                onChange={(e) => setScore(Number(e.target.value))}
                value={score}
                style={{
                  width: '4rem',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  background: 'inherit',
                  color: 'inherit',
                  border: '2px solid #fff',
                  borderRadius: 10,
                }}
              />
          }
          /10
        </Typography>
      </Box>
    </ClickAwayListener>
  )
}

export { ScoreSelector };