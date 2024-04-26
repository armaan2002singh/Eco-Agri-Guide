import React, { useState } from 'react'
import { Link, Routes, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    confirmpassword: '',
    existingUser: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = false;
    let error = {
      password: '',
      confirmpassword: '',
      existingUser: '',
    };

    if (!(password && password.length >= 6 && password.length <= 12)) {
      errors = true;
      error.password = 'Password must be between 6 to 12 characters long';
    }

    if (password !== confirmpassword) {
      errors = true;
      error.confirmpassword = 'Passwords do not match';
    }

    if (errors) {
      console.log('Validation errors:', error);
      setFormErrors(error); // Update form state with error messages
    } else {
      try {
        const response = await axios.post('http://localhost:8081/register', {
          firstname,
          lastname,
          address,
          email,
          password,
          confirmpassword,
        });

        console.log(response);
        // Redirect or show a success message here
        navigate('/login'); // Assuming you have a route for the success page
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setFormErrors({ ...formErrors, existingUser: 'User with this email already exists' });
        } else {
          console.error(error);
          setFormErrors({ ...formErrors, existingUser: 'Internal server error' });
        }
      }
    }
  };

  return (
    <div>
    <section id="reg">
    <div class="container py-5 h-50">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card card-registration my-4">
            <div class="row g-4">
              <div class="col-xl-6 w-100 h-100">
                <img src="https://thumbs.dreamstime.com/b/india-map-showing-geographical-locations-india-such-as-rivers-mountain-ranges-mountain-peaks-india-geographical-map-138099158.jpg"
                  alt="Sample photo" class="img-fluid"
                   />   
              </div>
              <div class="col-xl-6">
                {/* formtag ....................*/}
              <div className='row m-2'>
              <div class="card text-center mx-auto">

{/*Starting of from ........................................................... onSubmit................................................. */}
                <form onSubmit={handleSubmit}>
                  <div class="card-header text-white" style={{color:'white',backgroundColor:'#23bd82'}}>New User</div>
                  <div class="card-body">
                    <div class="form-group row">
                      <label className="col-sm-4">First Name</label>
                      <div className='col-sm-8'>
                        <input 
                         type='text'
                         value={firstname}
                         placeholder='First Name'
                         class="form-control"
                         onChange={(e)=> setFirstname(e.target.value)}
                         required/>
                      </div>
                    </div>


                    <div class="form-group row">
                      <label className="col-sm-4">Last Name</label>
                      <div className='col-sm-8'>
                        <input 
                         type='text'
                         value={lastname}
                         placeholder='Last Name'
                         class="form-control"
                         onChange={(e)=> setLastname(e.target.value)}
                         required/>
                      </div>
                    </div>


                    <div class="form-group row">
                      <label className="col-sm-4">Address</label>
                      <div className='col-sm-8'>
                        <input 
                         type='text'
                         value={address}
                         placeholder='Enter Address'
                         class="form-control"
                         onChange={(e)=> setAddress(e.target.value)}
                         required/>
                      </div>
                    </div>


                    <div class="form-group row">
                      <label className="col-sm-4">Email</label>
                      <div className='col-sm-8'>
                        <input 
                         type='text'
                         value={email}
                         placeholder='Enter Email'
                         class="form-control"
                          onChange={(e)=> setEmail(e.target.value)}
                          required/>
                         <p className="text-danger">{formErrors.existingUser}</p>

                      </div>
                    </div>


                    <div class="form-group row">
                      <label className="col-sm-4">Password</label>
                      <div className='col-sm-8'>
                        <input 
                         type='password'
                         value={password}
                         placeholder='Enter Password'
                         class="form-control"
                          onChange={(e)=> setPassword(e.target.value)}                    />
                          <p className='text-danger'>{formErrors.password}</p>
                      </div>
                    </div>


                     <div class="form-group row">
                      <label className="col-sm-4">Confirm Password</label>
                      <div className='col-sm-8'>
                        <input 
                         type='password'           
                         value={confirmpassword}          placeholder='Enter Confirm Password'
                         class="form-control"
                         onChange={(e)=> setConfirmpassword(e.target.value)} 
                         />
                        <p className='text-danger'>{formErrors.confirmpassword}</p>
                      </div>
                    </div>
                  </div>

                  <div class="card-footer text-muted">
                    <button type='submit' class="btn btn-info">Register</button>
                  </div>
                </form>
                <Link to={"/login"}><button class="btn btn-success " style={{width:"84px"}}>Login</button></Link>
              </div>
              {/* formtag ......................*/}
              </div>
              </div>
              
             </div>
          </div>
        </div>
      </div> 
    </div> 
    </section>
    </div>
  );
}

export default Register

