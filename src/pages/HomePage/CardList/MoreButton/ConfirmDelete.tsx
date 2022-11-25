import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
  confirm: () => void;
};

const ConfirmDelete: React.FC<Props> = ({ open, onClose, confirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='xs'
    >
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Do you really want to delete this review?<br />
          This procces cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={confirm}
          variant='outlined'
          color='error'
          autoFocus
        >
          Delete
        </Button>
        <Button
          onClick={onClose}
          variant='outlined'
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export { ConfirmDelete };