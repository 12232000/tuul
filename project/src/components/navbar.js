import { LuMoonStar, LuSun } from "react-icons/lu";
export const NavBar = ({ handleClick, dark }) => {
  return (
    <div className="bg-gray-900 dark:bg-gray-50 dark:text-gray-900 text-white h-[68px] px-28 py-4 flex justify-between">
      <div className="h-full w-32 bg-[url(https://coffeeshop.blob.core.windows.net/caffebene/images/common/logo.png)] bg-cover bg-center"></div>
      <div className="flex gap-6 items-center">
        <ul className="flex gap-6 text-lg">
          <li>About</li>
          <li>Work</li>
          <li>Testimonails</li>
          <li>Contact</li>
        </ul>
        <div className="text-gray-300 ">|</div>
        <div className="flex items-center gap-4 text-2xl">
          <div onClick={handleClick}>
            {dark === true ? <LuMoonStar /> : <LuSun />}
          </div>
          <button className="bg-white dark:bg-gray-900 dark:text-gray-50  text-slate-900 px-4 py-2 rounded-xl text-lg">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
