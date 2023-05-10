import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const userData = (e) => {
    const { name, value } = e.target;
    setInfo((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  };
  const loginProcess = () => {
    const addlogin = JSON.parse(localStorage.getItem("login")) || [];
    const okCheck = addlogin.filter((element) => {
      if (
        element.email.toLowerCase() === info.email &&
        element.password.toLowerCase() === info.password
      ) {
        return element;
      }
    });
    if (okCheck.length) {
      localStorage.setItem(
        "isLoggedIn",
        JSON.stringify({ name: okCheck[0].fullName, email: okCheck[0].email })
      );
      navigate(`/profile`);
    } else {
      alert("fill correct data");
    }
  };

  return (
    <>
      <div>
        <h1>
          Signin to your <br />
          PopX Account
        </h1>
        <p>
          Lorem ipsum dolor sitamet , <br /> consectetur adipisicing asillum.
        </p>
      </div>
      <div >
        <form action="" className="Login_details">
          <div>
            <TextField
              required
              id="outlined-required"
              label="Email address"
              onChange={userData}
              name="email"
              style={{width:'95vw', 
          }}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Password"
              type="password"
              onChange={userData}
              name="password"
              style={{width:'95vw'
          }}
            />
          </div>
        </form>
      </div>
      <div>
        <Button
          variant="contained"
          style={{ backgroundColor: "#b726b7", color: "white" }}
          onClick={() => loginProcess()}
        >
          Create Account{" "}
        </Button>
      </div>
    </>
  );
};
export default Login;
