import { Stack } from "@mui/material";
import { useAppSelector } from "hooks/app";
import { Card } from "./Card";

const CardList = () => {
  const reviews = useAppSelector(state => state.reviews.reviews);

  return (
    <Stack
      component='ul'
      spacing={2}
    >
      {reviews.map(review => (
        <Card
          key={review.id}
          {...review}
        />
      ))}
    </Stack>
  )
}

export { CardList };