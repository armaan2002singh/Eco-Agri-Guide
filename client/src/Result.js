import React from 'react'
import { useParams } from "react-router-dom";
import Prediction from './pages/prediction';
import style from './Result.css'
function Result()
{
//   let { id } = useParams();
//   let displayId = id.replace(/_/g, ' ');
 
  return (
  <div>
{/*     
    <div id="firstdiv" class="container" style={style}>
  <div id="seconddiv">
    <div id="thirddiv" class="card-hover">
      <div class="card-hover__content">
        <h3 id="resultdis" class="card-hover__title">
          Recommended Crop : <span>{displayId}</span>
        </h3>
        <p id="description" class="card-hover__text">
          This is the suitable crop to be cultivated here according to our analysed environmental components, such as temperature, humidity, rainfall etc...
        </p>
        <a href="#" class="card-hover__link">
          <span >Back </span>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
      <div class="card-hover__extra">
        <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
      </div>
      <img
        src="../static/agricard.jpg"
        alt=""
      />
    </div>
  </div>
</div> */}
  </div>
  )
}

export default Result
