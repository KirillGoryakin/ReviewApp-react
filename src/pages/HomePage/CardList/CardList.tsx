import { Stack } from "@mui/material";
import { useFilter } from "hooks/useFilter";
import { Card } from "./Card";

const CardList = () => {
  const reviews = useFilter();

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