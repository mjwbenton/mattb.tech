export default function Home() {
  return (
    <div className="h-screen w-screen p-8 text-transparent font-mono">
      {/* Border box */}
      <div className="flex min-h-full justify-center items-center border-8 border-gradient">
        {/* Centered content */}
        <div className="background-gradient bg-clip-text">
          <header className="w-full font-light text-7xl p-8 text-center">
            <span>mattb</span>
            <span className="text-gray-100 text-opacity-50">enton</span>
          </header>
          <main className="p-8 text-black text-lg text-opacity-20">
            <div className="lg:w-6/12 lg:float-left p-8 flex justify-center items-center">
              <img
                src="/headshot.jpg"
                width={300}
                height={300}
                className="rounded-full col-span-1"
              />
            </div>
            <div className="lg:w-6/12 lg:float-right p-8 text-lg border-gradient border-t-2 my-16">
              <span className="font-semibold">Developer.</span> Recently
              finished 10 years at Amazon and IMDb. Looking for a new gig later
              in 2021.
            </div>
            <div className="lg:w-6/12 lg:float-right p-8 text-lg border-gradient border-t-2">
              <span>More to come.</span>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
