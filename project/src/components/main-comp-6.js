import { Button } from "../assets/button";
import { IoMdMail } from "react-icons/io";
import { LuCopy } from "react-icons/lu";
import { IoIosCall } from "react-icons/io";
import { LuGithub, LuTwitter, LuFigma } from "react-icons/lu";
export const MainComponent6 = () => {
  return (
    <div className="px-4 text-white flex flex-col gap-12 items-center  dark:bg-gray-50 dark:text-black ">
      <Button children="Get in touch" />
      <p className="text-white gap-1 text-lg  dark:bg-gray-50 dark:text-black ">
        What’s next? Feel free to reach out to me if you're looking for
        <p className="text-white gap-1 text-lg  dark:bg-gray-50 dark:text-black ">
          a developer, have a query, or simply want to connect.
        </p>
      </p>
      <div className=" flex gap-[20px]  dark:bg-gray-50 dark:text-black">
        <p className=" text-3xl flex justify-start gap-[20px]  ">
          <IoMdMail className="text-1xl"></IoMdMail>
          u.tuul1223@gmail.com
        </p>
        <LuCopy className="text-3xl flex justify-end"></LuCopy>
      </div>
      <div className="flex flex-row text-3xl gap-[20px]">
        <IoIosCall>
          <p>+975 88087406</p>
        </IoIosCall>

        <span className=" text-3xl flex justify-end ">+975 88087406</span>
        <LuCopy></LuCopy>
      </div>
      <div className=" text-base gap-10 flex-col">
        <p className="">You may also find me on these platforms!</p>
        <div className="text-xl flex gap-9 mt-4 ml-12">
          <LuGithub />
          <LuTwitter />
          <LuFigma />
        </div>
      </div>
    </div>
  );
};
