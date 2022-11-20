import styled from "@emotion/styled";
import { InputBase } from "@mui/material";

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
    //   padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from StyledInputIcon
    //   paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    //   paddingRight: `calc(1em + ${theme.spacing(4)})`,
    //   transition: theme.transitions.create("width"),
      width: "80%",
    },
  }));