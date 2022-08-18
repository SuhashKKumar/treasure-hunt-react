import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import Buttons from "./Buttons";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const HomePage = ({ setPathName }) => {
  const [name, setName] = useState("");
  const [adventure, setAdventure] = useState(false);
  const navigate = useNavigate();
  const toastStyle={
    position: "top-right",
        theme: "dark",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
  }

  const StartHandler = () => {
    setAdventure(!adventure);
  };
  const changeHandler = (e) => {
    setName(e.target.value);
  };
  const SearchHandler = () => {
    setPathName(name.toLowerCase().replaceAll(' ', '_'));
    
    if (name === "") {
      toast.warn('Fill the input field and search', toastStyle);
    } else {
      name === ""
        ? alert("please enter")
        : name === "here"
        ? navigate("/here")
        : navigate(name);
    }
    setName("");
  };
  return (
    <div className="homepage_parent">
        
      <div className="homepage">
          <div className="homepage">
            <ToastContainer style={{fontSize:'2rem'}} />
            <h3>{adventure ? "" : "Welcome to"} </h3>
            <h1 className="homepage_title">
              {adventure ? "The treasure is here" : "Treasure Hunt"}
            </h1>

            <h4 style={{marginBottom:'1rem'}} >
              {adventure
                ? " Search with your team members FirstName to find the treasure"
                : `Click on "Join Adventure" to start hunting`}
            </h4>
            {adventure ? (
              <input
                placeholder="Search & Enter"
                onChange={changeHandler}
                value={name}
                type="text"
              />
            ) : (
              ""
            )}
          </div>

          {adventure ? (
            <Buttons
              className={"contained"}
              name={"Begin hunt"}
              CookiesHandler={SearchHandler}
            />
          ) : (
            <Buttons
              CookiesHandler={StartHandler}
              className={"contained"}
              name={"Join adventure"}
            />
          )}
      </div>
        
      <Footer />
    </div>
  );
};

export default HomePage;
