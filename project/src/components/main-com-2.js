import { Button } from "../assets/button";
export const MainComponent2 = () => {
  return (
    <div className="px-4 text-white dark:text-black dark:bg-gray-50  flex flex-col gap-12 items-center   ">
      <Button children="About me" />
      <div className="w-full flex gap-12  dark:bg-gray-50 justify-between">
        <div className="flex-1">
          <div className="w-[440px] h-[520px] bg-white relative">
            <div className="w-[400px] h-[480px] bg-slate-500 border-8 border-slate-900 bottom-0 absolute"></div>
            <div className="w-[400px] h-[480px] bg-slate-500 border-8 border-slate-900  right-0 absolute"></div>
          </div>
        </div>
        <div className="flex-1 dark:bg-gray-50">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl">Curious about me🥹? Here you have it:</h1>
            <p className="">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.🪼
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <ul className="list-disc grid grid-cols-2 pl-4">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
              <li> Avid learner</li>
              <li> Aspiring indie hacker</li>
            </ul>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
