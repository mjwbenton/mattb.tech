import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100 text-transparent font-mono">
      {/* Border box */}
      <div className="flex justify-center items-center w-5/6 h-5/6 border-with-gradient">
        {/* Centered content */}
        <div className="clipped-background-gradient">
          <header className="w-full font-light text-7xl p-8 text-center">
            <span>mattb</span>
            <span className="text-gray-100 text-opacity-50">enton</span>
          </header>
          <main className="p-8 text-black text-lg text-opacity-20">
            <div className="w-6/12 h-96 float-left p-8 flex justify-center items-center">
              <Image
                src="/headshot.jpg"
                width={300}
                height={300}
                layout="fixed"
                className="rounded-full col-span-1"
              />
            </div>
            <div className="w-6/12 h-96 float-right p-8 table">
              <div className="table-cell align-middle text-lg">
                <span className="font-semibold">Developer.</span> Recently
                finished 10 years at Amazon and IMDb. Looking for a new gig
                later in 2021.
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
