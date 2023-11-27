import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Context } from "../Context/Context";
import Box from "@mui/material/Box";
import "../LoginForm/Login.css";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const Navigate = useNavigate();
  const { userName, setUserName, userPassword, setUserPassword } =
    useContext(Context);

  function handleLogin(event) {
    const validUsername = "Nagaraj";
    const validPassword = "Nagu@1234";
    if (userName === validUsername && userPassword === validPassword) {
      Navigate("/tableForm");
      event.preventDefault();
    } else if (userName === "" && userPassword === "") {
      alert("Please fill the form");
    } else {
      alert("userName or password incorrect");
    }
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={12} md={6} lg={6} xl={6}>
            <p
              style={{
                color: "gray",
                position: "relative",
                top: 20,
                left: 120,
                fontWeight: "bold",
              }}
            >
              {" "}
              Build your form with
            </p>
            <p
              style={{
                position: " relative",
                top: 20,
                left: 115,
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              VM FORM BUILDER
            </p>
            <p
              style={{
                position: " relative",
                top: 20,
                left: 115,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              Build powerful and secure forms - without code to regenerate in
              your code
            </p>
          
            <img
              src="https://media.licdn.com/dms/image/D4D12AQH8ebpiWYvuVg/article-cover_image-shrink_600_2000/0/1667283007210?e=1706140800&v=beta&t=gsN5Dp9MgvSytUwSD1Q4VGR8ZueQYhxBfqK3O71fYdI"
              alt="img"
              id="image"
              style={{ position: "relative", top: "10px", width: "80%" }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className="login-box ">
              <form
                action="#"
                method="get"
                onSubmit={(e) => handleLogin(e)}
                className="form"
              >
                <h3 style={{ position: "relative", top: 30, right: 60 }}>
                  {" "}
                  Welcome back to
                </h3>
                <h2
                  style={{
                    position: "relative",
                    right: 100,
                    fontSize: 25,
                    fontFamily: "sans-serif",
                  }}
                >
                  {" "}
                  Login!{" "}
                </h2>
                <TextField
                  id="outlined-basic"
                  label="User Name"
                  variant="outlined"
                  onChange={(e) => setUserName(e.target.value)}
                  style={{ margin: "10px", width: "100%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="User Password"
                  variant="outlined"
                  type="password"
                  onChange={(e) => setUserPassword(e.target.value)}
                  style={{ margin: "10px", width: "100%" }}
                />
                <a href="#" className="link">
                  forget password ?
                </a>
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  className="btn"
                  sx={{ padding: 1 }}
                >
                  LOGIN
                </Button>
                <span className="account">Dont have an account</span>
                <a href="#" className="link2">
                  Register
                </a>
              </form>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LoginForm;
