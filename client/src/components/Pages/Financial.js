import React from "react";

function Financial() {
  return (
    <div style={div_styling}>
      <button type="button" style={styling} className="btn btn-info">
        View Report
      </button>
      <button type="button" style={styling} className="btn btn-info">
        Send Report
      </button>
    </div>
  );
}


const styling = {
  marginBottom: "10%",
  marginTop: "7%",
};

const div_styling = {
  display: "flex",
  flexDirection: "column",
};

export default Financial;
