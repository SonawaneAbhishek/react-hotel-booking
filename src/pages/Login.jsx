import Form from 'react-bootstrap/Form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <div>
      <Navbar />

      <body class="d-flex align-items-center py-4 " style={{ backgroundColor: "#f5f3f0" }}>

        <main style={{ marginLeft: "600px", marginRight: "600px" }} class="form-signin w-100  ">
          <form>
            <center><FontAwesomeIcon style={{height:"35px",marginBottom:"20px"}} icon={faUser} /></center>
            <h1 class="h3 mb-3 fw-normal text-center ">Please sign in</h1>

            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" required placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <br />
            <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" required placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
              <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            {/* <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p> */}
          </form>
        </main>
        {/* <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script> */}



      </body>
      <Footer />
    </div>
  );
}

export default Login;