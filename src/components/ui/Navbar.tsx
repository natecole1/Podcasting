import Link from "next/link";
import PodcastLogo from "./PodcastLogo";


const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between h-[60px]">
        <div>
          <PodcastLogo />
        </div>
        <div className="flex gap-4 m-3"> 
          <Link href="/sign-up">
            <div className="w-[88px] flex-center px-3 py-[10px] bg-gold-1 hover:bg-white-1 rounded-3xl text-black-1 invisible md:visible duration-500 active:scale-90 active:cursor-not-allowed">
              Sign Up
            </div>
          </Link>

          <Link href="/sign-in">
            <div className="w-20 flex-center px-3 py-2 border-gold-1 hover:bg-black-1 hover:border-black-1 duration-300 active:scale-90 border-2 rounded-3xl text-white-1 bg-opacity-0 invisible md:visible active:cursor-not-allowed">
              Log In
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
