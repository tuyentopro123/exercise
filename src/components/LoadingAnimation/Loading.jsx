import React, { useState } from "react";
import "./Loading.css";
import Helmet from "../utils/Helmet/Helmet";
import AmongUS from "./Topic/AmongUs/AmongUs";

const Loading = () => {
  const [amongUs, setAmongUs] = useState(false);
  return (
    <Helmet title="Loading">
      <div className="loading">
        <div className="loading-container">
          <div id="box1" className="loading-box">
            <button onClick={() => setAmongUs(true)}>AmongUs</button>
            <AmongUS active={amongUs} setActive={setAmongUs} />
          </div>

          <div></div>
        </div>
      </div>
    </Helmet>
  );
};

export default Loading;
