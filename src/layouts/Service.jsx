
function Service() {
  return (
    <section className=" pt-24 py-8 min-h-screen text-white" id="service">
      <div className="flex justify-center items-center flex-col">
        <div>
          <div
            style={{ backgroundColor: "#a3850d" }}
            className="w-10 h-[2px]"
          ></div>
          <p className="text-md font-medium text-gray-400">What I offer.</p>
          <p className="text-4xl font-bold">
            My{" "}
            <span style={{ color: "#a3850d" }} className="text-4xl">
              Services
            </span>
          </p>
        </div>
      </div>

      {/* Glow circles */}

      {/* Card Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 py-16 px-4">
        {/* Card 1 */}
        <div className="relative group w-72 h-80">
          <div className="absolute -inset-1 bg-yellow-500 blur-[80px] opacity-10 rounded-2xl group-hover:opacity-20 transition duration-300"></div>
          <div className="relative z-10 p-6 rounded-2xl text-center backdrop-blur-lg border border-white/10 bg-white/5 shadow-xl flex flex-col justify-between h-full group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
            <div className="flex-1 flex flex-col justify-evenly">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover: transition duration-300">
                Website Development
              </h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-100 transition duration-300">
                Build modern, responsive websites for  business or personal
                needs using technologies like React, Laravel, and more.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group w-72 h-80">
          <div className="absolute -inset-1 bg-yellow-500 blur-[80px] opacity-10 rounded-2xl group-hover:opacity-20 transition duration-300"></div>
          <div className="relative z-10 p-6 rounded-2xl text-center backdrop-blur-lg border border-white/10 bg-white/5 shadow-xl flex flex-col justify-between h-full group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
            <div className="flex-1 flex flex-col justify-evenly">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover: transition duration-300">
                Mobile Development
              </h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-100 transition duration-300">
                Create Android apps using Kotlin, or flutter.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group w-72 h-80">
          <div className="absolute -inset-1 bg-yellow-500 blur-[80px] opacity-10 rounded-2xl group-hover:opacity-20 transition duration-300"></div>
          <div className="relative z-10 p-6 rounded-2xl text-center backdrop-blur-lg border border-white/10 bg-white/5 shadow-xl flex flex-col justify-between h-full group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
            <div className="flex-1 flex flex-col justify-evenly">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover: transition duration-300">
                Custom Development
              </h3>
              <p className="text-gray-300 text-sm group-hover:text-gray-100 transition duration-300">
                Need a custom solution? We offer solutions for frontend,
                backend, or full-stack based on your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center font-medium">
  <p className="mb-5" >Interested in building a project? Let me handle it—contact me below.</p>
    <button
              type="button"
              className="flex gap-3 py-2.5 px-5 me-2 mb-2 text-sm font-semibold text-gray-900 cursor-pointer focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#a3850d] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >

              Contact Me
            </button>
</div>

    </section>
  );
}

export default Service;
