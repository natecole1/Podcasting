import { SignedIn, UserButton } from "@clerk/nextjs";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="flex justify-between md:justify-end items-center mt-5">
      <SignedIn>
        <div className="md:hidden cursor-pointer">
          <MobileMenu />
        </div>
        <div className="w-10 h-10">
          <UserButton />
        </div>
      </SignedIn>
    </header>
  );
};

export default Header;
