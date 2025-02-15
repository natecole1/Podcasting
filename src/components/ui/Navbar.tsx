import Link from "next/link";
import PodcastLogo from "./PodcastLogo";
import { Button } from "./button";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between h-[60px]">
        <PodcastLogo />

        <div className="space-x-3 mr-2">
          <Link href="/sign-up" passHref legacyBehavior>
            <Button className="bg-gold-1 hover:bg-white-1 w-20 rounded-3xl text-black-1 invisible md:visible duration-500 active:scale-90">
              Sign Up
            </Button>
          </Link>

          <Link href="/sign-in" passHref legacyBehavior>
            <Button className="border-gold-1 hover:bg-black-1 hover:border-none duration-300 active:scale-90 border-2 w-20 rounded-3xl text-white-1 bg-opacity-0 invisible md:visible">
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
