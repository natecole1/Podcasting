import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full h-screen">
      <div className="absolute size-full">
        <Image
          src="/assets/podcastPicOne.svg"
          alt="background image"
          fill
          className="size-full object-cover"
        />
      </div>
      {children}
    </main>
  );
}
