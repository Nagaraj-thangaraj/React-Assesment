import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Context } from "../Context/Context";
import Box from "@mui/material/Box";
import "../LoginForm/Login.css";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate=useNavigate();
  const { userName, setUserName, userPassword, setUserPassword } =
    useContext(Context);

  function handleLogin(event) {
    const validUsername = "Nagarajthanagaraj";
    const validPassword = "1234";
    if (userName === validUsername && userPassword === validPassword) {
      event.preventDefault();
    navigate("tableForm");
    } 
    else if(userName==="" && userPassword ==="" ){
      alert("Please fill the form")
    }
    else {
      alert("userName or password incorrect");
    }
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p
              style={{
                color: "gray",
                position: "fixed",
                top: 60,
                left: 120,
                fontWeight: "bold",
              }}
            >
              {" "}
              Build your form with
            </p>
            <p
              style={{
                position: "fixed",
                top: 70,
                left: 115,
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              VM FORM BUILDER
            </p>
            <p
              style={{
                position: "fixed",
                top: 140,
                left: 115,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              Build powerful and secure forms - without code to regenerate in
              your code
            </p>
            <p
              style={{
                position: "fixed",
                top: 160,
                left: 115,
                color: "gray",
                fontWeight: "bold",
              }}
            >
              application or website{" "}
            </p>
            <img
              src="https://media.licdn.com/dms/image/D4D12AQH8ebpiWYvuVg/article-cover_image-shrink_600_2000/0/1667283007210?e=1706140800&v=beta&t=gsN5Dp9MgvSytUwSD1Q4VGR8ZueQYhxBfqK3O71fYdI"
              alt="img"
              id="image"
            />
          </Grid>
          <Grid item xs={6}>
            <div className="login-box ">
              <div className="box">
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
                    onChange={(e) => setUserPassword(e.target.value)}
                    style={{ margin: "10px", width: "100%" }}
                  />
                  <TextField
                    id="outlined-basic"
                    label="User Password"
                    variant="outlined"
                    onChange={(e) => setUserName(e.target.value)}
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
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LoginForm;
