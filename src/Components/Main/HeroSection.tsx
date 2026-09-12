function HeroSection() {
  return (
    <section className="pb-40 pt-10 ">
      <div className="grid md:grid-cols-2">
        <div className="mt-30 ml-5">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold">Build Your Idea</h1>
            <h1 className="text-5xl lg:text-6xl font-bold text-amber bg-linear-to-r to-violet-600 from-orange-500 bg-clip-text text-transparent ">
              Development Stack
            </h1>
          </div>

          <p className="max-w-150 text-lg mt-5 mb-13 ">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex gap-5">
            <button className="px-2 bg-linear-100 to-pink-600 from-amber-500 font-semibold py-2 rounded-xl text-white hover:bg-linear-100 hover:to-pink-700 hover:from-amber-600 cursor-pointer">
              Explore Technologies
            </button>
            <button className="px-5 outline outline-gray-300 font-semibold py-2 rounded-xl border-gray-300 hover:outline-gray-500 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src="./src/assets/banner-stack.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
