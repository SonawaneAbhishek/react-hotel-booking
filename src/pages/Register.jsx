import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Register() {
  const regStyle = {
    marginLeft: "300px",
    marginRight: "300px",
  }

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#f5f3f0",padding:"30px" }}>

        <div className="container   " >
          <div className='reg-form' style={regStyle}>
            <form class="row g-3">
              <div class="col-md-6">
                <label for="inputFname" class="form-label">Full name</label>
                <input type="text" required class="form-control" id="inputText" />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email"required class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password"required class="form-control" id="inputPassword4" />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Confirm Password</label>
                <input type="password" required class="form-control" id="inputPassword4" />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text"required class="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">Address 2</label>
                <input type="text"required class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text"required class="form-control" id="inputCity" />
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
                <input type="text"required class="form-control" id="inputZip" />
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input"required type="checkbox" id="gridCheck" />
                  {/* <label class="form-check-label" for="gridCheck">
                  Check me out
                </label> */}
                </div>
              </div>
              <div class="col-12">
                <button type="submit" style={{ width: "100%" }} class="btn btn-primary">Register</button>
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