import React from "react";
import Data from "@/mocks/data.json";

function Graphic() {
  return (
    <>
      <div className="graphic">
        {Data.map((data, index) => (
          <div className="graph-box" key={index}>
            <div className="amount">${data.amount}</div>
            <div
              className="box"
              style={{
                height: `${data.amount * 2}px`,
                backgroundColor: `${data.amount > 50 && "hsl(186, 34%, 60%)"}`,
              }}
            ></div>
            <p>{data.day}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Graphic;
