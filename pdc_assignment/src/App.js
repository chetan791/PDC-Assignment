import "./App.css";
import styled from "styled-components";
import ReactIcon from "./assets/react.png";
import apple from "./assets/apple.png";
import github from "./assets/github.png";
import googleplay from "./assets/google-play.png";
import { Authentication } from "./components/Authentication";

function App() {
  return (
    <DIV>
      <h1 id="MainHeader">Test Assignment</h1>
      <p id="intro">
        Hello, My name is Chetan I specialize in MERN Stack as following
        shown,and this is my test submission,
      </p>
      <div id="icons">
        <img
          style={{ border: "3px solid #a7de95" }}
          src={ReactIcon}
          alt="React"
        />
        <img style={{ border: "3px solid #cd98ce" }} src={github} alt="React" />
        <img style={{ border: "3px solid #b85a4b" }} src={apple} alt="React" />
        <img
          style={{ border: "3px solid #57768d" }}
          src={googleplay}
          alt="React"
        />
      </div>
      <Authentication />
    </DIV>
  );
}

export default App;

const DIV = styled.div`
  margin: 0;
  padding: 0;
  height: 100px;
  #MainHeader {
    text-align: center;
    background-color: #d3d3d3;
    padding: 20px;
    font-weight: 400;
    width: 100%;
  }
  #intro {
    text-align: center;
    padding: 20px;
    background-color: #f6eaea;
    border: 3px solid #d9e77d;
    border-radius: 15px;
    margin: 10px 30px;
  }
  #icons {
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
  }
  img {
    height: 100px;
    border: 3px solid black;
    padding: 30px;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  @media (max-width: 600px) {
    #icons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
      grid-template-rows: 1fr 1fr;
      //border: 1px solid black;
      padding-left: 11%;
    }
  }
`;
