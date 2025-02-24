import Form from 'react-bootstrap/Form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import {UserContext} from "../App";
import swal from 'sweetalert';

function Login() {
  const {state,dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email, password: password
      })
    });

    const data = res.json();
    

    if (res.status === 400  || !data) {
      swal("Invalid Credentials","","error");
    } else {
      dispatch({type : "USER" , payload :true});
      swal("WELCOME","Login Succesfull");
      navigate("/");
    }
  }

  return (
    <div>
      <Navbar />

      <body class="d-flex align-items-center py-4 " style={{ backgroundColor: "#f5f3f0" }}>

        <main style={{ marginLeft: "600px", marginRight: "600px" }} class="form-signin w-100  ">
          <form method='POST'>
            <center><FontAwesomeIcon style={{ height: "35px", marginBottom: "20px" }} icon={faUser} /></center>
            <h1 class="h3 mb-3 fw-normal text-center ">Please Sign In</h1>

            <div class="form-floating">
              <input type="email" class="form-control" name='email' id="email" required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <br />
            <div class="form-floating">
              <input type="password" class="form-control" name='password' id="password" required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
              <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>

            <button class="btn btn-primary w-100 py-2 my-4" onClick={loginUser} type="submit">Sign in</button>
            {/* <Link to="/signup">  <button class="btn btn-primary w-100 py-2 " type="submit">Create a Account</button></Link> */}
            <p>Don't have an account? <Link to="/signup">Create an Account</Link></p>

          </form>
        </main>



      </body>
      <Footer />
    </div>
  );
}

export default Login;