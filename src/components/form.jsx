import { Box, Button, Grid, InputBase } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import imageSignIn from "../assets/jenna.png";
import { styled } from "@mui/material/styles";
import { Lock, Person } from "@mui/icons-material";
import InputComponent from "./input";

function FormComponent() {
  const StyledInput = styled("div")(({ theme }) => ({
    display: "flex",
    position: "relative",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    border: "1px",
    borderStyle: "solid",
    borderColor: "#dbdbdb",
    width: "auto",
    ".MuiInputBase-root": {
      width: "100%",
    },
  }));

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Grid
      component="form"
      item
      xs={5}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={formik.handleSubmit}
    >
      <Box
        component="img"
        src={imageSignIn}
        sx={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          border: "1px solid #cecece",
          padding: "10px",
          margin: "10px",
        }}
      />

      {/* </Badge> */}

      <Box sx={{ marginBottom: "20px" }}>
        {formik.touched.email && formik.errors.email ? (
          <StyledInput
            sx={{
              width: { xs: "18vw", md: "22vw", lg: "24vw" },
              margin: "auto",
              marginBottom: "20px",
              border: "1px solid red",
            }}
          >
            <Person style={{ color: "#dbdbdb", margin: "10px" }} />
            <InputComponent
              placeholder="Jenna@gmail.com"
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
          </StyledInput>
        ) : (
          <StyledInput
            sx={{
              width: { xs: "18vw", md: "22vw", lg: "24vw" },
              margin: "auto",
              marginBottom: "20px",
            }}
          >
            <Person style={{ color: "#dbdbdb", margin: "10px" }} />

            <InputComponent
              placeholder="Jenna@gmail.com"
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
          </StyledInput>
        )}

        <StyledInput
          sx={{
            width: { xs: "18vw", md: "22vw", lg: "24vw" },
            margin: "auto",
          }}
        >
          <Lock style={{ color: "#dbdbdb", margin: "10px" }} />

          <InputComponent
            id="password"
            name="password"
            type="password"
            placeholder="●●●●●●●"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </StyledInput>
      </Box>

      <Button
        sx={{
          width: { xs: "18vw", md: "22vw", lg: "24vw" },
          backgroundColor: "#3d70b2",
          borderRadius: "60px",
          color: "white",
          margin: "0px",
          height: "45px",
          fontWeight: "bold",
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "#648DC1",
          },
        }}
        type="submit"
      >
        Login
      </Button>
    </Grid>
  );
}

export default FormComponent;
