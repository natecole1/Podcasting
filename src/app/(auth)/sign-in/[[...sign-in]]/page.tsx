import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="h-screen w-full glassmorphism-auth flex-center">
      <SignIn />
    </div>
  );
};

export default page;
