import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./styles.css";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@mui/icons-material/Add";
import * as yup from "yup";
import { useFormik } from "formik";
import { API_URL } from "../Global";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const teachersValidationSchema = yup.object({
  name: yup.string().required("required"),
  pic: yup.string().required("required"),
  age: yup.number().required("required"),
  subject: yup.string().required("required"),
  experience: yup.number().required("required"),
});
const studentsValidationSchema = yup.object({
  name: yup.string().required("required"),
  pic: yup.string().required("required"),
  rollnum: yup.number().required("required"),
  class: yup.string().required("required"),
});

export const Tform = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        type: "teacher",
        pic: "",
        age: "",
        subject: "",
        experience: "",
      },
      validationSchema: teachersValidationSchema,
      onSubmit: (newTeacher) => {
        console.log("The form values are:", newTeacher);
        fetch(`${API_URL}`, {
          method: "POST",
          body: JSON.stringify(newTeacher),
          headers: {
            "Content-type": "application/json",
          },
        });
      },
    });
  return (
    <div>
      <div className="AddButtonDiv">
        <Fab onClick={handleClickOpen} color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add New Teacher
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent dividers>
            <div className="TextField">
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name ? errors.name : null}
              />
              <TextField
                id="standard-basic"
                label="Type"
                variant="standard"
                disabled
                name="type"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                id="standard-basic"
                label="Profile pic"
                variant="standard"
                name="pic"
                value={values.pic}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.pic && errors.pic}
                helperText={touched.pic && errors.pic ? errors.pic : null}
              />
              <TextField
                id="standard-basic"
                label="Age"
                variant="standard"
                name="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.age && errors.age}
                helperText={touched.age && errors.age ? errors.age : null}
              />
              <TextField
                id="standard-basic"
                label="Subject"
                variant="standard"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.subject && errors.subject}
                helperText={
                  touched.subject && errors.subject ? errors.subject : null
                }
              />
              <TextField
                id="standard-basic"
                label="Experience"
                variant="standard"
                name="experience"
                value={values.experience}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.experience && errors.experience}
                helperText={
                  touched.experience && errors.experience
                    ? errors.experience
                    : null
                }
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} type="submit">
              Add
            </Button>
          </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
};
export const Sform = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        type: "student",
        pic: "",
        rollnum: "",
        class: "",
      },
      validationSchema: studentsValidationSchema,
      onSubmit: (newStudent) => {
        console.log("The form values are:", newStudent);
        fetch(`${API_URL}`, {
          method: "POST",
          body: JSON.stringify(newStudent),
          headers: {
            "Content-type": "application/json",
          },
        });
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="AddButtonDiv">
        <Fab onClick={handleClickOpen} color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add New Student
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className="TextField">
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
              helperText={touched.name && errors.name ? errors.name : null}
            />
            <TextField
              id="standard-basic"
              label="Type"
              variant="standard"
              disabled
              name="type"
              value={values.type}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              id="standard-basic"
              label="Profile pic"
              variant="standard"
              name="pic"
              value={values.pic}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.pic && errors.pic}
              helperText={touched.pic && errors.pic ? errors.pic : null}
            />
            <TextField
              id="standard-basic"
              label="Roll Num"
              variant="standard"
              name="rollnum"
              value={values.rollnum}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.rollnum && errors.rollnum}
              helperText={
                touched.rollnum && errors.rollnum ? errors.rollnum : null
              }
            />
            <TextField
              id="standard-basic"
              label="Class"
              variant="standard"
              name="class"
              value={values.class}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.class && errors.class}
              helperText={touched.class && errors.class ? errors.class : null}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Add
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </form>
  );
};
