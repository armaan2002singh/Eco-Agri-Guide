import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faGithub, faGoogle,faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

function footer() {
  return (
    <div style={{backgroundColor: '#23bd82',marginTop:100}}>
      <footer class="text-center bg-body-tertiary">
  
  <div class="container pt-4">
    <section class="mb-4">
      <a
        data-mdb-ripple-init
        class="btn btn-floating btn-lg text-body m-1 btn-white"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><FontAwesomeIcon icon={faFacebook} style={{color:'white'}}></FontAwesomeIcon></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><FontAwesomeIcon icon={faTwitter} style={{color:'white'}}></FontAwesomeIcon></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><FontAwesomeIcon icon={faGoogle} style={{color:'white'}}></FontAwesomeIcon></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><FontAwesomeIcon icon={faInstagram} style={{color:'white'}}></FontAwesomeIcon></a>

      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><FontAwesomeIcon icon={faLinkedin} style={{color:'white'}}></FontAwesomeIcon></a>
      <a
        data-mdb-ripple-init
        class="btn btn-link btn-floating btn-lg text-body m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark" >
          <FontAwesomeIcon icon={faGithub} style={{color:'white'}}></FontAwesomeIcon>
        </a>
    </section>
  </div>

  {/* <div class="text-center p-3 text-white" >
    © 2020 Copyright &nbsp; : &nbsp;
    <a class="text-body" href="https://mdbootstrap.com/"></a>
  </div> */}
    <div class="text-center p-3 text-white" >
    © 2024 Copyright &nbsp; : &nbsp;
    <a class="text-body text-white" href="#">EcoAgriGuide</a>
  </div>

</footer>
        
    </div>
  )
}

export default footer
