import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "hooks/app";
import { useTranslate } from "hooks/useTranslate";
import { newUserDialog } from "store/slices/reviewsSlice";

const NewUserDialog = () => {
  const { __ } = useTranslate();
  const dispatch = useAppDispatch();
  const isNewUser = useAppSelector(state => state.reviews.isNewUser);

  return (
    <Dialog
      open={isNewUser}
      maxWidth='xs'
    >
      <DialogTitle>{__("homePage.newUserDialog.title")}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{whiteSpace: 'pre-wrap'}}>
          {__("homePage.newUserDialog.text")}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => dispatch(newUserDialog(true))}
          variant='contained'
          color='success'
        >
          {__("homePage.newUserDialog.button.add")}
        </Button>
        <Button
          onClick={() => dispatch(newUserDialog(false))}
          variant='text'
        >
          {__("homePage.newUserDialog.button.no")}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export { NewUserDialog };