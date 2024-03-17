import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { CameraAlt } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/style/StyledComponents";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const Togglelogin = () => setIsLogin((prev) => !prev);
  return (
    <Container component={"main"} maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                type="password"
                variant="outlined"
              ></TextField>
              <Button
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign={"center"} mt={2}>
                Or
              </Typography>
              <Button fullWidth variant="text" onClick={Togglelogin}>
                Sign Up instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Register Now</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                />

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  <>
                    <CameraAlt />
                    <VisuallyHiddenInput type="file" />
                  </>
                </IconButton>
              </Stack>

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
              ></TextField>
              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                type="password"
                variant="outlined"
              ></TextField>
              <Button
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Register
              </Button>
              <Typography textAlign={"center"} mt={2}>
                Or
              </Typography>
              <Button fullWidth variant="text" onClick={Togglelogin}>
                Sign In instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
