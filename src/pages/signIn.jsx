import { Button, Grid} from "@mui/material";
import { InputBase } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { StyledSignIn } from "../styled/Grid";
import { StyledTypographySignIn } from "../styled/Typography";
import Badge from "@mui/material/Badge";

import { Form } from 'formik';
import FormComponent from "../components/form";

const SignIn = () => {
  

  return (
    <>
      <Grid container item spacing={1} xs={12}>
        <StyledSignIn item xs={6}>
          <StyledTypographySignIn>
            Join an Exciting Social Experience.
          </StyledTypographySignIn>
        </StyledSignIn>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#92BCEF",
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              position: "absolute",
              right: "50%",
              border: "10px solid white",
            }}
          />
        </Grid>
        
          {/* <Badge badgeContent={4} color="primary"> */}
        
          <FormComponent/>
        </Grid>
     
    </>
  );
};

export default SignIn;
