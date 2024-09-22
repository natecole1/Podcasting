import Header from "@/src/components/ui/Header";
import LeftSideBar from "@/src/components/ui/LeftSideBar";

export default function HomeDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col relative">
      <main className="flex bg-black-3 relative">
        <LeftSideBar />

        <section className="flex flex-1 flex-col  px-4  min-h-screen">
          <Header />
          <div className="flex flex-col w-full px-14 max-w-5xl max-sm:px-4 mx-auto">
            <div>{children}</div>
          </div>
        </section>
      </main>
    </div>
  );
}
