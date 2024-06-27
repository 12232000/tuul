import { IoLocationOutline } from "react-icons/io5";
import { LuGithub, LuTwitter, LuFigma } from "react-icons/lu";
export const MainComponent1 = () => {
  return (
    <div className="px-4 text-white dark:text-black dark:bg-gray-50 flex justify-between">
      <div className="w-[768px] flex flex-col gap-12">
        <div>
          <h1 className="text-6xl  font-bold">Hi,I'm Bene ☕️</h1>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div>
          <p className="flex items-center gap-2">
            <IoLocationOutline />
            Ulaanbaatar, Mongolia
          </p>
          <p className="flex items-center gap-2 ml-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping relative"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full absolute"></div>
            Caffe bene
          </p>
        </div>
        <div className="text-xl flex gap-2">
          <LuGithub />
          <LuTwitter />
          <LuFigma />
        </div>
      </div>
      <div className="w-[320px] h-[360px] bg-white relative">
        <div className="w-[280px] h-[320px] bg-slate-500 border-8 border-slate-900 bottom-0 right-0 absolute"></div>
        <div className="w-[280px] h-[320px] bg-slate-500 border-8 border-slate-900 absolute"></div>
      </div>
    </div>
  );
};
