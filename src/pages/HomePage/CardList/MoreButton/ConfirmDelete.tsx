import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@mui/material";
import { useTranslate } from "hooks/useTranslate";

type Props = {
  open: boolean;
  onClose: () => void;
  confirm: () => void;
};

const ConfirmDelete: React.FC<Props> = ({ open, onClose, confirm }) => {
  const { __ } = useTranslate();
  
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='xs'
    >
      <DialogTitle>{__("homePage.confirmDelete.title")}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{whiteSpace: 'pre-wrap'}}>
          {__("homePage.confirmDelete.text")}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={confirm}
          variant='outlined'
          color='error'
          autoFocus
        >
          {__("homePage.confirmDelete.buttonDelete")}
        </Button>
        <Button
          onClick={onClose}
          variant='outlined'
        >
          {__("homePage.confirmDelete.buttonCancel")}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export { ConfirmDelete };