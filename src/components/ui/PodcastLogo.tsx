import Link from "next/link";
import Image from "next/image";

const PodcastLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/assets/podcastLogoMicrophone.png"
        alt="podcast logo"
        width={27}
        height={27}
      />
      <h1 className="text-24 sm:text-18 font-bold text-gold-1">PODCASTING</h1>
    </Link>
  );
};

export default PodcastLogo;
