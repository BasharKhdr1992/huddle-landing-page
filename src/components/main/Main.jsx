import React from "react";
import "./Main.css";
import illustration from "../../images/illustration-mockups.svg";
import Button from "../UI/Button";

const Main = () => {
  return (
    <div className="main">
      <div className="m-illustration">
        <img
          src={illustration}
          alt="illustration mockups"
          title="huddle illustration mockups"
        />
      </div>
      <div className="m-description">
        <h1>
          Build The Community
          <br />
          Your Fans Will Love
        </h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button>Register</Button>
      </div>
    </div>
  );
};

export default Main;
