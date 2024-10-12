import logo from "../../assets/NxLogo.png";

export const Navbar = () => {
  return (
    <nav className="mb-14 flex items-center justify-between py-6 border-b border-slate-500">
      <div className="flex flex-shrink-0 items-center max-h-16 max-w-16">
        <img src={logo} alt="logo" />
      </div>
      <div className="m-2 flex items-center justify-center gap-4 text-2xl">
        <ul className="flex flex-row">
          <a href="#home">
            <li className="mx-4 hover:text-purple-600 transition hover:border-purple-600 hover:border-b-2">
              Home
            </li>
          </a>
          <a href="#about">
            <li className="mx-4 hover:text-purple-600 transition hover:border-purple-600 hover:border-b-2 ">
              About
            </li>
          </a>
          <a href="#experience">
            <li className="mx-4  hover:text-purple-600 transition hover:border-purple-600 hover:border-b-2">
              Experience
            </li>
          </a>
          <a href="#project">
            <li className="mx-4 hover:text-purple-600 transition hover:border-purple-600 hover:border-b-2">
              Project
            </li>
          </a>
          <a href="#contact">
            <li className="mx-4 hover:text-purple-600 transition hover:border-purple-600 hover:border-b-2">
              Contact
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};
