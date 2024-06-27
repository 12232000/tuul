import { Js } from "../assets/icon-js";
import { Ts } from "../assets/icon-ts";
import { React } from "../assets/icon-react";
import { Button } from "../assets/button";
import { NextJs } from "../assets/icon-next";
import { NodeJs } from "../assets/icon-node";
import { ExpressJs } from "../assets/icon-express";
import { NestJs } from "../assets/icon-nest";
import { SocketIo } from "../assets/icon-socketio";
import { PostgreSql } from "../assets/icon-postgresql";
import { MongoDb } from "../assets/icon-mongo";
import { Sass } from "../assets/icon-sass";
import { Figma } from "../assets/icon-figma";
import { Cypress } from "../assets/icon-Cypress";
import { StoryBook } from "../assets/icon-storybook";
import { Git } from "../assets/icon-git";
import { TailwindCss } from "../assets/icon-tailwind";
export const MainComponent3 = () => {
  return (
    <div className="flex flex-col items-center gap-12 px-4 dark:bg-gray-50 dark:text-black">
      <div className="text-center  dark:bg-gray-50  dark:text-black">
        <Button children="Skills" />
        <p className="mt-4 text-white  dark:text-black">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex justify-between w-[1200px] dark:bg-gray-50 dark:text-black">
        <Js children="Javascript" />
        <Ts children="TS" />
        <React children="React" />
        <NextJs children="Nextjs" />
        <NodeJs children="NodeJs" />
        <ExpressJs children="ExpressJs" />
        <NestJs children="Nest.js" />
        <SocketIo children="Socket.Io" />
      </div>
      <div className="flex justify-between w-[1200px]  dark:bg-gray-50 ">
        <PostgreSql children="Postgre.SQL" />
        <MongoDb children="MongoDB" />
        <Sass children="Sass/Scss" />
        <TailwindCss children="TailwindCss" />
        <Figma children="Figma" />
        <Cypress children="Cypress" />
        <StoryBook children="StoryBook" />
        <Git children="Git" />
      </div>
    </div>
  );
};
