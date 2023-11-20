import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    minWidth: "100%",
    marginTop: theme.spacing(2),
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    studentName: "",
    gender: "",
    age: "",
    grade: "",
    class: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({
      studentName: "",
      gender: "",
      age: "",
      grade: "",
      class: "",
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Student Sign Up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="studentName"
            label="Student Name"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              label="Gender"
              required
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Class"
            name="class"
            value={formData.class}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
