import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks/app";
import { newUserDialog } from "store/slices/reviewsSlice";

const NewUserDialog = () => {
  const dispatch = useAppDispatch();
  const isNewUser = useAppSelector(state => state.reviews.isNewUser);

  return (
    <Dialog
      open={isNewUser}
      maxWidth='xs'
    >
      <DialogTitle>Welcome!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Seems like you are a new user here.<br />
          If you just want to test my app, I propose you to add some dummy reviews. 
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => dispatch(newUserDialog(true))}
          variant='contained'
          color='success'
        >
          Add
        </Button>
        <Button
          onClick={() => dispatch(newUserDialog(false))}
          variant='text'
        >
          No, thanks
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export { NewUserDialog };