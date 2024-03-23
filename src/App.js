import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// data
import sliderData from "./sliderData";

// component
import Sliders from "./Sliders";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Sliders sliderData={sliderData} />
    </div>
  );
}
