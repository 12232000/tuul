import { Button } from "../assets/button";
import { CiShare1 } from "react-icons/ci";
export const Maincomponent5 = () => {
  return (
    <div className=" px-4 text-white flex flex-col gap-12 items-center  dark:bg-gray-50 dark:text-black">
      <Button children="Work" />
      <p className="text-white gap-1 text-lg  dark:bg-gray-50 dark:text-black">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className=" w-[1152px] h-[480px] bg-white flex rounded-lg  overflow-hidden  dark:bg-gray-50 dark:text-black">
        <div className="bg-slate-500 flex-1 py-[48px] px-[48px] dark:bg-gray-50 dark:text-black ">
          <div className="w-full h-full rounded-lg bg-[url(https://www.insperity.com/wp-content/uploads/your-employees-5-tips-for-handling-diverse-work-styles-640x302.png)] bg-cover bg-center"></div>
        </div>
        <div className="bg-slate-700 flex-1 px-[48px] py-[48px]  space-y-6  dark:bg-gray-50 dark:text-black">
          <h1 className="  justify-center ">Fiskil</h1>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className=" flex flex-wrap gap-[8px]">
            <Button children="React" />
            <Button children="Next.js" />
            <Button children="Typescrip" />
            <Button children="Nest.js" />
            <Button children="PostgreSQL" />
            <Button children="TailwindCss" />
            <Button children="Figma" />
            <Button children="Cypress" />
            <Button children="StoryBook" />
            <Button children="Git" />
          </div>
          <CiShare1 className=" text-slate-500"></CiShare1>
        </div>
      </div>

      <div className=" w-[1152px] h-[480px] bg-white flex rounded-lg  overflow-hidden  dark:bg-gray-50 dark:text-black">
        <div className="bg-slate-500 flex-1 py-[48px] px-[48px] dark:bg-gray-50 dark:text-black  ">
          <div className="bg-slate-700 flex-1 px-[48px] py-[48px]  space-y-6  dark:bg-gray-50 dark:text-black">
            <h1 className="  justify-center ">Fiskil</h1>
            <p className="text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>

            <div className=" flex flex-wrap gap-[8px]">
              <Button children="React" />
              <Button children="Next.js" />
              <Button children="Typescrip" />
              <Button children="Nest.js" />
              <Button children="PostgreSQL" />
              <Button children="TailwindCss" />
              <Button children="Figma" />
              <Button children="Cypress" />
              <Button children="StoryBook" />
              <Button children="Git" />
            </div>

            <CiShare1 className=" text-slate-500"></CiShare1>
          </div>
        </div>
      </div>

      <div className=" w-[1152px] h-[480px] bg-white flex rounded-lg  overflow-hidden  dark:bg-gray-50 dark:text-black">
        <div className="bg-slate-500 flex-1 py-[48px] px-[48px] dark:bg-gray-50 dark:text-black ">
          <div className="w-full h-full rounded-lg bg-[url(https://www.insperity.com/wp-content/uploads/your-employees-5-tips-for-handling-diverse-work-styles-640x302.png)] bg-cover bg-center"></div>
        </div>
        <div className="bg-slate-700 flex-1 px-[48px] py-[48px]  space-y-6  dark:bg-gray-50 dark:text-black">
          <h1 className="  justify-center ">Fiskil</h1>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <div className=" flex flex-wrap gap-[8px]">
            <Button children="React" />
            <Button children="Next.js" />
            <Button children="Typescrip" />
            <Button children="Nest.js" />
            <Button children="PostgreSQL" />
            <Button children="TailwindCss" />
            <Button children="Figma" />
            <Button children="Cypress" />
            <Button children="StoryBook" />
            <Button children="Git" />
          </div>
          <CiShare1 className=" text-slate-500"></CiShare1>
        </div>
      </div>
    </div>
  );
};
