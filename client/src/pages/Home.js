import React from 'react';
import slide1 from 'C:/Users/Armann/Desktop/major_project/client/src/Assets/slide1.jpg';
import slide2 from 'C:/Users/Armann/Desktop/major_project/client/src/Assets/slide2.jpeg';
import slide3 from 'C:/Users/Armann/Desktop/major_project/client/src/Assets/slide3.jpg';
import css from 'C:/Users/Armann/Desktop/major_project/client/src/pages/slider.css';
import logo from '../Assets/maharashtraAgri.jpeg'
import { Link, redirect } from 'react-router-dom';
import prediction from './prediction';
import csshome from './Home.css';


function Home() {
 
  return (
    <body className='container'>

      <div class="container" style={css}>
      
      <div className='m-3'>
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img class="d-block w-100" src={slide1} alt="First slide" height="400" width="400"/>    
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slide2} alt="Second slide" height="400" width="400"/>
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src={slide3} alt="Third slide" height="400" width="400"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>



    {/*....................................................... */}
    <div class='row'id='intro'>
      <div class='col-4' id='para'>
        <h3><b>AGRICULTURE IN INDIA</b></h3>
        <p className='text-left' id='parag'>Indian agriculture is a vibrant tapestry woven from centuries of tradition, innovation, and resilience. Spanning diverse landscapes and climates, it sustains the livelihoods of millions while contributing significantly to the nation's economy. From the fertile plains of Punjab to the verdant fields of Kerala, each region adds its unique thread to this intricate fabric of agrarian heritage.</p>
      </div>

      <div class='col-3' id='leftpic'>
        <div><img  src='https://th.bing.com/th/id/OIP.HqC7NcNZ44BddCvPlyaoqgHaEK?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' style={{height:'400px', width:'350px'}}/></div>

      </div>

      <div class='col-3' id='rightpic'>
      <div><img  src='https://th.bing.com/th/id/OIP.7pWSTi0s9Btm-sIM-txGIgHaE8?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' style={{height:'400px', width:'350px'}}/></div>      </div>
    </div>
   
    {/* ***************************************************** */}
<div id="states" style={csshome}>
<div class="text-center">
  <h1 style={{color:'navy'}}>STATES</h1>
</div>

<div class="row container m-5">
<div class="col-3">
    <Link to="/prediction/Uttar_Pradesh">
    <button type="submit" class="rounded" style={csshome}><img src="https://th.bing.com/th/id/OIP.wPfC4-b1BpMECU7V5Wa99AHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={csshome} height="140" width="140"/>
    <h4 class="m-2" style={csshome}>Uttar Pradesh</h4> 
    </button>
    </Link>
    </div>

    <div class="col-3">
  <Link to="/prediction/Madhya_Pradesh">
    <button type="submit" class="rounded" style={csshome}><img src="https://th.bing.com/th/id/OIP.i2ucBV3o6aClrDlpD5LWswAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={csshome} height="140" width="140"/>
    <h4 class="m-2" style={csshome}>Madhya Pradesh</h4> 
    </button>
    </Link>
    </div>

    <div class="col-3">
    <Link to="/prediction/Punjab">
    <button type="submit" class="rounded" style={csshome}><img src="https://th.bing.com/th/id/OIP.JF7ydNJIbV7GDAkHVW21FAHaIk?w=146&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={csshome} height="145" width="140"/>
    <h4 class="m-2" style={csshome}>Punjab</h4> 
    </button>
    </Link>
    </div>

    <div class="col-3">
  <Link to="/prediction/Rajasthan">
    <button type="submit" class="rounded" style={csshome}><img src="https://th.bing.com/th/id/OIP.GM10H4m0O5zt_uSKMqUrVwHaFj?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{alignItems:'center'}} height="140" width="140"/>
    <h4 class="m-2" style={csshome}>Rajasthan</h4> 
    </button>
    </Link>
    </div>  
</div>


<div class="row container m-5">
    <div class="col-3">
    <Link to="/prediction/West_Bengal">
    <button type="submit" class="rounded" style={csshome}><img src="https://th.bing.com/th/id/OIP.J72j26eAzIhuM-DUCVIoqQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={csshome} height="140" width="140"/>
    <h4 class="m-2" style={csshome}>West Bengal</h4> 
    </button></Link>
    </div>
    
    <div class="col-3">
    <Link to="/prediction/Maharashtra">
    <button type="submit" class="rounded" style={csshome}><img src={logo} style={csshome} height="140" width="140"/>
    <h4 class="m-2" style={csshome}>Maharashtra</h4> 
    </button>
    </Link>
    </div>

    <div class="col-3">
    <Link to="/prediction/Haryana">
    <button type="submit" class="rounded" style={csshome}><img src="https://th.bing.com/th/id/OIP.uKQYYzoPxdQzHTxsmBV7tgAAAA?w=156&h=141&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={csshome} height="140" width="140"/>
    <h4 class="m-2" style={csshome}>Haryana</h4> 
    </button></Link>
    </div>

    <div class="col-3">
    <Link to="/prediction/Bihar">
    <button type="submit" class="rounded" style={csshome}><img src="https://th.bing.com/th/id/OIP.jnIHStXmbFabjClQuMMSrQAAAA?pid=ImgDet&w=179&h=179&c=7&dpr=1.3" style={csshome} height="140" width="140"/>
    <h4 class="m-2" style={csshome}>Bihar</h4> 
    </button>
    </Link>
    </div>  
</div>



    </div>
  </div>


{/* ............................................................................................................... */}
    
  
</body>
  )
  }

export default Home
