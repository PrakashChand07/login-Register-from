import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const HomePage =()=>{
    return(
        <>
        <div className='homeContainer'>
           <div className='heading'>
           <h1>WELCOME to popX</h1>
          <p className='homeText'>
            Lorem ipsum dolor sit amet <br/>consectetur adipisicing elitsda.
          </p>
         </div>
         <div className='HomePage_Btn'>
       <Link to={'register'}>
         <Button variant="contained"style={{backgroundColor:'#b726b7',color :'white'}}>Create Account</Button>
         </Link>
         <Link to={'login'}>
         <Button style={{backgroundColor:'#e77de7d6',color :'black'}} >Already Registered? Login</Button>
         </Link>
         </div>
        </div>
        
        </>
    )
}
export default HomePage;