import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import image from "C:/Users/Armann/Desktop/major_project/client/src/Assets/ecoargi-guide.png";
import cloud from "../Assets/cloudy.png";
import Wind from "../Assets/wind.png";
import humidity from "../Assets/humidity.png";
import style from "./prediction.css";
import logo from "../Assets/maharashtraAgri.jpeg";
import { useSelector } from "react-redux";

// import style from './prediction.css'

function Prediction() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  let displayId = id.replace(/_/g, " ");
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  //from errors
  const [formErrors, setFormErrors] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });
  const [result, setresult] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false); //code edited here

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Validate input value against specific ranges
    validateInput(name, value);

    // Check overall form validity
    const isValid = Object.values(formErrors).every((error) => error == "");
    setIsFormValid(isValid);
  };

  const validateInput = (name, value) => {
    let error = "";
    switch (name) {
      case "nitrogen":
        if (!(value >= 60 && value <= 99)) {
          error = "Nitrogen value must be between 60 and 99";
        }
        break;
      case "phosphorus":
        if (!(value >= 5 && value <= 145)) {
          error = "Phosphorus value must be between 5 and 145";
        }
        break;
      case "potassium":
        if (!(value >= 15 && value <= 205)) {
          error = "Potassium value must be between 15 and 205";
        }
        break;
      case "temperature":
        if (!(value >= 15 && value <= 37)) {
          error = "Temperature value must be between 15 and 37";
        }
        break;
      case "humidity":
        if (!(value >= 14 && value <= 95)) {
          error = "Humidity value must be between 14 and 95";
        }
        break;
      case "ph":
        if (!(value >= 3 && value <= 10)) {
          error = "pH value must be between 3 and 10";
        }
        break;
      case "rainfall":
        if (!(value >= 30 && value <= 299)) {
          error = "Rainfall value must be between 30 and 299";
        }
        break;
      default:
        break;
    }

    setFormErrors({ ...formErrors, [name]: error });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData
      );
      console.log(response.data);
      setresult(response.data.result);
    } catch (error) {
      console.error("Error:", error);
      setresult("An error occurred while fetching the prediction result");
    }
  };

  //weather forcast logic
  let nameForWeather = id.replace(/_/g, "%20");
  const api_key = "7c8fe2dbbb6418e65a3f7ab2bc06a15a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameForWeather}&units=metric&appid=${api_key}`;

  const weatherDataFetching = async () => {
    setLoading(true);
    const result = await fetch(url);
    const reponse = await result.json();
    setData(reponse);
    setLoading(false);
  };

  useEffect(() => {
    try {
      weatherDataFetching();
    } catch (error) {
      console.log("Something went wrong while fetching the data", error);
    }
  }, []);

  // const weatherApp = async (id) => {
  //   const api_key = "7c8fe2dbbb6418e65a3f7ab2bc06a15a";
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${id}&units=metric&appid=${api_key}`;

  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     const humidity = document.getElementById("humidity-percent");
  //     const wind = document.getElementById("wind-rate");
  //     const temperature = document.getElementById("weather-temp");

  //     humidity.innerHTML = data.main.humidity + "%";
  //     wind.innerHTML = data.wind.speed + " km/h";
  //     temperature.innerHTML = data.main.temp + "°C";
  //   } catch (error) {
  //     console.error("Error fetching weather data:", error);
  //   }
  // };

  return (
    // edit in predict data sending to flask directly
    <div>
      {token ? (
        <div>
          {loading ? (
            <div>
              <p>Loading...</p>
            </div>
          ) : (
            <section id="reg">
              <div
                id="weatherbox"
                className="col-9  container rounded border solid  p-3"
                style={style}
              >
                <div className="col-12 text-center">
                  <h3>Weather Forecast</h3>
                </div>
                <div className="d-flex">
                  <div class="col-3 h-100">
                    <img src="https://th.bing.com/th/id/OIP.dwuAXVyZx5MTZsLoTojyUQHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                  </div>

                  <div className="col-4  p-3">
                    <form>
                      <div class="row d-flex">
                        <div className="col-4 " style={{ marginLeft: "20px" }}>
                          <h4>State :</h4>
                        </div>
                        <div>
                          <div className="container col-12 ">
                            <h4 className="text-info">{displayId}</h4>
                          </div>
                        </div>
                      </div>

                      <div class="row d-flex" style={{ marginTop: "10px" }}>
                        <div className="col-4 " style={{ marginLeft: "20px" }}>
                          <h4>Temp : </h4>
                        </div>
                        <div>
                          <div className="container col-12 ">
                            <h4 id="weather-temp" className="text-info">
                              {data?.main?.temp} °C
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div class="row d-flex" style={{ marginTop: "15px" }}>
                        <div
                          className=" rounded  "
                          style={{ marginLeft: "20px" }}
                        >
                          <h4>Wind speed :</h4>
                        </div>
                        <div>
                          <div className="container col-12 ">
                            <h4 id="wind-rate" className="text-info">
                              {data?.wind?.speed} Km/h
                            </h4>
                          </div>
                        </div>
                      </div>

                      <div class="row d-flex" style={{ marginTop: "20px" }}>
                        <div
                          className=" rounded "
                          style={{ marginLeft: "40px" }}
                        >
                          <h4>Humidity :</h4>
                        </div>
                        <div>
                          <div className="container col-12 ">
                            <h4 id="humidity-percent" className="text-info">
                              {data?.main?.humidity} %
                            </h4>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="col-5 container ">
                    <div className="row d-flex">
                      <div className="col-6 container p-xl-4">
                        <div className="container ">
                          <img
                            style={{
                              width: "70px",
                              height: "70px",
                              marginTop: "23px",
                            }}
                            src="https://th.bing.com/th/id/OIP.pwR35B7uis1p6iVLEbr6TwHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                          />
                        </div>
                        <div className="container ">
                          <img style={{ width: "50px" }} src={Wind} />
                        </div>
                        <div className="container ">
                          <img
                            style={{ width: "50px", marginTop: "18px" }}
                            src={humidity}
                          />
                        </div>
                      </div>
                      <div className="col-6 container">
                        {id === "Uttar_Pradesh" ? (
                          <img
                            style={{ width: "200px" }}
                            src="https://th.bing.com/th/id/OIP.wPfC4-b1BpMECU7V5Wa99AHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                          />
                        ) : (
                          <div>
                            {id === "Madhya_Pradesh" ? (
                              <img
                                style={{ width: "200px" }}
                                src="https://th.bing.com/th/id/OIP.i2ucBV3o6aClrDlpD5LWswAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                              />
                            ) : (
                              <div>
                                {id === "Punjab" ? (
                                  <img
                                    style={{ width: "200px" }}
                                    src="https://th.bing.com/th/id/OIP.JF7ydNJIbV7GDAkHVW21FAHaIk?w=146&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                  />
                                ) : (
                                  <div>
                                    {id === "Rajasthan" ? (
                                      <img
                                        style={{ width: "200px" }}
                                        src="https://th.bing.com/th/id/OIP.GM10H4m0O5zt_uSKMqUrVwHaFj?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                      />
                                    ) : (
                                      <div>
                                        {id === "West_Bengal" ? (
                                          <img
                                            style={{ width: "200px" }}
                                            src="https://th.bing.com/th/id/OIP.J72j26eAzIhuM-DUCVIoqQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                          />
                                        ) : (
                                          <div>
                                            {id === "Maharashtra" ? (
                                              <img
                                                style={{ width: "200px" }}
                                                src={logo}
                                              />
                                            ) : (
                                              <div>
                                                {id === "Haryana" ? (
                                                  <img
                                                    style={{ width: "200px" }}
                                                    src="https://th.bing.com/th/id/OIP.uKQYYzoPxdQzHTxsmBV7tgAAAA?w=156&h=141&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                                  />
                                                ) : (
                                                  <img
                                                    style={{ width: "200px" }}
                                                    src="https://th.bing.com/th/id/OIP.jnIHStXmbFabjClQuMMSrQAAAA?pid=ImgDet&w=179&h=179&c=7&dpr=1.3"
                                                  />
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container py-5 h-50">
                <div class="row d-flex justify-content-center align-items-center h-100">
                  <div class="col">
                    <div id="predbox" class="card card-registration my-4">
                      <div class="row g-4">
                        <div class="col-xl-5 px-2">
                          <img
                            style={{
                              height: "380px",
                              width: "430px",
                              marginTop: "170px",
                            }}
                            src="https://th.bing.com/th/id/OIP.x-Y4eSJT3UQ98P8zeu8n7AHaGM?rs=1&pid=ImgDetMain"
                            alt="Sample photo"
                            class="img-fluid"
                          />
                        </div>
                        <div class="col-xl-7">
                          {/* formtag ....................*/}
                          <div className="row m-2">
                            <div
                              class="container rounded border solid m-3"
                              id="div1"
                            >
                              <div class="text-center">
                                <h2 class="m-4">{displayId}</h2>
                              </div>
                              <form
                                action="/predict"
                                method="POST"
                                onSubmit={handleSubmit}
                              >
                                <div class="row container p-2">
                                  <div class="col-4">
                                    <label for="nitrogen">
                                      Nitrogen{" "}
                                      <i class="text-danger">(60-99)</i>
                                    </label>
                                  </div>
                                  <div class="col-8">
                                    <input
                                      type="number"
                                      id="nitrogen"
                                      name="nitrogen"
                                      class="form-control"
                                      placeholder="Enter Nitrogen Level"
                                      value={formData.nitrogen}
                                      onChange={handleChange}
                                      required
                                    />
                                    <p className="text-danger">
                                      {formErrors.nitrogen}
                                    </p>
                                  </div>
                                </div>

                                <div class="row  container p-2">
                                  <div class="col-4">
                                    <label for="phosphorus">
                                      Phosporus{" "}
                                      <i class="text-danger">(5-145)</i>
                                    </label>
                                  </div>
                                  <div class="col-8">
                                    <input
                                      type="number"
                                      id="phosphorus"
                                      name="phosphorus"
                                      class="form-control"
                                      placeholder="Enter Phosphorus Level"
                                      value={formData.phosphorus}
                                      onChange={handleChange}
                                      required
                                    />
                                    <p className="text-danger">
                                      {formErrors.phosphorus}
                                    </p>
                                  </div>
                                </div>

                                <div class="row container p-2">
                                  <div class="col-4">
                                    <label for="potassium">
                                      Potassium{" "}
                                      <i class="text-danger">(15-205)</i>
                                    </label>
                                  </div>
                                  <div class="col-8">
                                    <input
                                      type="number"
                                      id="potassium"
                                      name="potassium"
                                      class="form-control"
                                      placeholder="Enter Potassium Level"
                                      value={formData.potassium}
                                      onChange={handleChange}
                                      required
                                    />
                                    <p className="text-danger">
                                      {formErrors.potassium}
                                    </p>
                                  </div>
                                </div>

                                <div class="row container p-2">
                                  <div class="col-4">
                                    <label for="temperature">
                                      Temperature{" "}
                                      <i class="text-danger">(15-37)</i>
                                    </label>
                                  </div>
                                  <div class="col-8">
                                    <input
                                      type="number"
                                      id="temperature"
                                      name="temperature"
                                      class="form-control"
                                      placeholder="Enter Temperature in C"
                                      value={formData.temperature}
                                      onChange={handleChange}
                                      required
                                    />
                                    <p className="text-danger">
                                      {formErrors.temperature}
                                    </p>
                                  </div>
                                </div>

                                <div class="row container p-2">
                                  <div class="col-4">
                                    <label for="humidity">
                                      Humidity{" "}
                                      <i class="text-danger">(14-95)</i>
                                    </label>
                                  </div>
                                  <div class="col-8">
                                    <input
                                      type="number"
                                      id="humidity"
                                      name="humidity"
                                      class="form-control"
                                      placeholder="Enter Humidity in %"
                                      value={formData.humidity}
                                      onChange={handleChange}
                                      required
                                    />
                                    <p className="text-danger">
                                      {formErrors.humidity}
                                    </p>
                                  </div>
                                </div>

                                <div class="row container p-2">
                                  <div class="col-4">
                                    <label for="ph">
                                      Ph Level <i class="text-danger">(3-10)</i>
                                    </label>
                                  </div>
                                  <div class="col-8">
                                    <input
                                      type="number"
                                      id="ph"
                                      name="ph"
                                      class="form-control"
                                      placeholder="Enter ph Level"
                                      value={formData.ph}
                                      onChange={handleChange}
                                      required
                                    />
                                    <p className="text-danger">
                                      {formErrors.ph}
                                    </p>
                                  </div>
                                </div>

                                <div class="row container p-2">
                                  <div class="col-4">
                                    <label for="rainfall">
                                      Rainfall{" "}
                                      <i class="text-danger">(30-299)</i>
                                    </label>
                                  </div>
                                  <div class="col-8">
                                    <input
                                      type="number"
                                      id="rainfall"
                                      name="rainfall"
                                      class="form-control"
                                      placeholder="Enter Rainfall in %"
                                      value={formData.rainfall}
                                      onChange={handleChange}
                                      required
                                    />
                                    <p className="text-danger">
                                      {formErrors.rainfall}
                                    </p>
                                  </div>
                                </div>

                                <div class="row m-3">
                                  <div class="col-3 offset-4">
                                    {/* <Link to="../result"> */}
                                    {/* Button trigger modal */}
                                    <button
                                      type="submit"
                                      class="btn btn-success form-control"
                                      data-toggle="modal"
                                      data-target="#exampleModalCenter"
                                      name="check"
                                      value={result}
                                      disabled={!isFormValid}
                                    >
                                      Check
                                    </button>

                                    {/* <button type='submit' class="btn btn-success form-control" name="check" value={result}>{result ? "Result: " + result : "Check"}</button> */}
                                    {/* <button type='submit' class="btn btn-success form-control"  name="check" value={formData.check} >Check</button> */}
                                    {/* </Link> */}
                                  </div>

                                  <div class="col-3">
                                    <Link to="../home">
                                      <button
                                        type="submit"
                                        class="btn-info form-control"
                                        style={{ width: "120px" }}
                                      >
                                        Back to List
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                                {/*  <div>{result !== null && <p>Prediction: {result}</p>}</div> */}
                              </form>

                              {/* {result && <p>Prediction: {result}</p>} */}
                            </div>

                            {/* ****************************************MOFDAL******************************************************************** */}

                            {/* <!-- Modal --> */}
                            <div
                              class="modal fade"
                              id="exampleModalCenter"
                              tabindex="-1"
                              role="dialog"
                              aria-labelledby="exampleModalCenterTitle"
                              aria-hidden="true"
                            >
                              <div
                                class="modal-dialog modal-dialog-centered"
                                role="document"
                              >
                                <div class="modal-content">
                                  <div
                                    class="modal-header"
                                    style={{ backgroundColor: "#23bd82" }}
                                  >
                                    <h5
                                      class="modal-title"
                                      id="exampleModalLongTitle"
                                    >
                                      Predicted Crop
                                    </h5>
                                    <button
                                      type="button"
                                      class="close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div
                                    class="modal-body "
                                    style={{ height: "270px" }}
                                  >
                                    <div>
                                      {result !== null && (
                                        <p style={{ color: "#23bd82" }}>
                                          <h4>
                                            <b>Prediction:</b>{" "}
                                          </h4>
                                          <b>
                                            <p style={{ color: "black" }}>
                                              {result}
                                            </p>
                                          </b>
                                        </p>
                                      )}
                                      <img
                                        src={image}
                                        style={{ opacity: 1 }}
                                        height="145px"
                                        width="230px"
                                      ></img>
                                    </div>
                                  </div>
                                  <div
                                    class="modal-footer"
                                    style={{ backgroundColor: "#23bd82" }}
                                  >
                                    <button
                                      type="button"
                                      class="btn btn-light"
                                      data-dismiss="modal"
                                    >
                                      Back to prediction
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* ************************************************************************************************************ */}

                            {/* formtag ......................*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
            placeItems: "center",
            gap: "50px",
          }}
        >
          <div>
            <p style={{ fontWeight: "bold", marginTop: "30px" }}>
              Please you have to login first.....!
            </p>
            <Link to="/login">
              <button className="btn btn-primary m-4">Go To Login</button>
            </Link>
          </div>

          <img
            src="https://th.bing.com/th/id/OIP.07pB71NZOlhSvp05sPtTKQAAAA?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            width="200px"
          />
        </div>
      )}
    </div>
  );
}

export default Prediction;
