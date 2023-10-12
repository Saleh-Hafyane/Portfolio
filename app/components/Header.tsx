import { BsFillMoonStarsFill } from "react-icons/bs";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
function Header({darkMode,setDarkMode}:any) {
    
  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-end">
        <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
      </nav>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-blue-500 font-medium">
          Saleh HAFYANE
        </h2>
        <h3 className="text-2xl py-8">Software Developer</h3>
        
      </div>
      <div className="text-4xl flex justify-center gap-5 py-4 text-gray-600">
        <a href="https://www.linkedin.com/in/saleh-hafyane-75b311291/"><AiFillLinkedin /></a>
        <a href="https://github.com/Saleh-Hafyane"><AiFillGithub /></a>
        <a
          className="text-base bg-gradient-to-r from-blue-950 to-blue-500 text-white px-6 py-2 rounded-md"
          href="https://drive.google.com/file/d/1OJSlWsGIiawlzXcqROgcJlrbOvEzgRW-/view?usp=sharing"
        >
          CV
        </a>
      </div>
    </section>
  );
}

export default Header;
