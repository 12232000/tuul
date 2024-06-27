// import Profile from "../assets/Profile.png";

"use client";
import { NavBar } from "./navbar";
import { MainComponent1 } from "./main-comp-1";
import { MainComponent2 } from "./main-com-2";
import { MainComponent3 } from "./main-comp-3";
import { MainComponent4 } from "./main-comp-4";
import { Maincomponent5 } from "./main-comp-5";
import { MainComponent6 } from "./main-comp-6";
import { Mainfooter } from "./main-footer";
import { Container } from "../assets/Container";
import { useState } from "react";

const Main = () => {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={`w-[1440px] ${isDark ? "dark" : ""}`}>
      <NavBar dark={isDark} handleClick={handleClick}></NavBar>
      <Container background="bg-slate-900 dark:bg-gray-50">
        <MainComponent1></MainComponent1>
      </Container>
      <Container background="bg-slate-950 dark:bg-gray-50">
        <MainComponent2></MainComponent2>
      </Container>
      <Container background="bg-slate-900 dark:bg-gray-50">
        <MainComponent3></MainComponent3>
      </Container>
      <Container background=" bg-slate-800 dark:bg-gray-50">
        <MainComponent4></MainComponent4>
      </Container>
      <Container background=" bg-slate-900 dark:bg-gray-50">
        <Maincomponent5></Maincomponent5>
      </Container>
      <Container background=" bg-slate-800 dark:bg-gray-50 ">
        <MainComponent6></MainComponent6>
      </Container>
      <Container background=" bg-black h-[68px] dark:bg-gray-50">
        <Mainfooter></Mainfooter>
      </Container>
    </div>

    // <div className=" bg-black ; padding: 20px; margin: 20px; flex justify-end ; justify-content: space-between">
    //   <h1 className="text-white ; padding: 20px; gap: 20px;"> About </h1>
    //   <h2 className="text-white"> Work</h2>
    //   <h3 className="text-white">Testimonails</h3>
    //   <h4 className="text-white">Contact</h4>
    //   <img className="flex justify-end" src={Profile} alt="Profile pic"></img>
    // </div>
  );
};

export default Main;
