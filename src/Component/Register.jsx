import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import { RadioGroup } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  
  const[info,setInfo] = useState({
    fullName:'',
    lastName:'',
    email:'',
    password:'',
    company:'',

})
const userData =(e)=>{
  const {name,value} = e.target;
  setInfo((prevalue)=>({
    ...prevalue,
    [name] : value,
  }));
};
const addlogin = JSON.parse(localStorage.getItem('login')) || [];
const checkDetails=()=>{
  const { fullName, email, password, number,company } = info;
    if (fullName !== '' && email !== '' && password !== '' && number !== '' && company !== '') {
      addlogin.push({
        fullName,
        email,
        password,
      });
      localStorage.setItem('login', JSON.stringify(addlogin));
      navigate('/login');
    } else {
      alert('fill full details');
    }
}
  return (
    <>
      <form >
        
        <div>
          <h1>
            WELCOME to popX <br /> Create Account
          </h1>
        </div>
        <div className='details_box'>
        <div className="textArea">
          <TextField required id="outlined-required" label=" Full Name"  style={{ width:'95vw'
          }}  onChange={userData} name="fullName"/>
        </div>
        <div>
          <TextField required id="outlined-required" label="Last Name"  style={{width:'95vw'
          }} onChange={userData} name="lastName"/>
        </div>
        <div>
          <TextField required id="outlined-required" label="Email address" style={{width:'95vw'
          }} onChange={userData} name="email" />
        </div>
        <div>
          <TextField required id="outlined-required" label="Password" style={{width:'95vw'
          }} type="password"  onChange={userData} name="password"/>
        </div>
        <div>
          <TextField required id="outlined-required" label="Company name" style={{width:'95vw'
          }}  onChange={userData} name="company"/>
        </div>
      <div>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Are you an Agency?
          </FormLabel>
          <RadioGroup>
            <FormControlLabel value="female" control={<Radio />} label="Yes" />
            <FormControlLabel value="male" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>
      </div>
  <div className='Register_btn'>
  <Button
        variant="contained"
        style={{ backgroundColor: "#b726b7", color: "white" }}
        onClick={()=>checkDetails()}
      >
        Create Account 
      </Button>  
  </div>
      </form>

    </>
  );
};
export default Register;
