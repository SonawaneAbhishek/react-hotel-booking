import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Register() {

  const regStyle = {
    marginLeft: "300px",
    marginRight: "300px",
  }

  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "", email: "", password: "", cpassword: "", phone: "", address: ""
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const postData = async (e) => {
    e.preventDefault();

    const { fullName, email, password, cpassword, phone, address } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName, email, password, cpassword, phone, address
      })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      swal("invalide regsitration","","error");
      // console.log("invalide regsitration")
    } else {
      swal("Registered Successfuly","","success");
      // console.log("succesfull regsitration")
      navigate('/signin');
    }
  }


  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#f5f3f0", padding: "30px" }}>

        <div className="container   " >
          <center><FontAwesomeIcon style={{ height: "35px", marginBottom: "20px" }} icon={faUser} /></center>
          <h1 class="h3 mb-3 fw-normal text-center ">Registration Form</h1>
          <div className='reg-form' style={regStyle}>

            <form method="POST" class="row g-3">
              <div class="col-md-6">
                <label for="inputFname" class="form-label">Full name</label>
                <input type="text" required class="form-control" name='fullName' id="fullName"
                  value={user.fullName}
                  onChange={handleInputs}
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" required class="form-control" name='email' id="email"
                  value={user.email}
                  onChange={handleInputs}
                />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" required class="form-control" name='password' id="password"
                  value={user.password}
                  onChange={handleInputs}
                />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Confirm Password</label>
                <input type="password" required class="form-control" name='cpassword' id="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                />
              </div>
              <div class="col-md-6">
                <label for="inputFname" class="form-label">Mobile</label>
                <input type="text" required class="form-control" name='phone' id="phone"
                  value={user.phone}
                  onChange={handleInputs}
                />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" required class="form-control" name='city' id="city"
                  value={user.city}
                  onChange={handleInputs}
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" required class="form-control" name='address' id="address"
                  value={user.address}
                  onChange={handleInputs}
                  placeholder="1234 Main St" />
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">

                  <option value="">Select state</option>
                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CH">Chandigarh</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="DN">Dadra and Nagar Haveli</option>
                  <option value="DD">Daman and Diu</option>
                  <option value="DL">Delhi</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu and Kashmir</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="LA">Ladakh</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OR">Odisha</option>
                  <option value="PY">Puducherry</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="WB">West Bengal</option>

                </select>
              </div>
              <div class="col-md-2">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" required class="form-control" id="inputZip" />
              </div>
              {/* <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input"required type="checkbox" id="gridCheck" />
                  <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
                </div>
              </div> */}
              <div class="col-12 my-5">
                <button type="submit" name='register' id='register' style={{ width: "100%" }} value="register" class="btn btn-primary"
                  onClick={postData}
                >Register</button>
              </div>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Register;