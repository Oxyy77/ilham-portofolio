import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Project() {
  return (
    <section
      className="flex flex-col justify-center items-center pt-24 py-8 min-h-screen text-white bg-[#0d0d0d]"
      id="project"
    >
      <div className="flex justify-center items-center flex-col">
        <div>
          <div
            style={{ backgroundColor: "#a3850d" }}
            className="w-10 h-[2px]"
          ></div>
          <p className="text-md font-medium text-gray-400">
            What I&apos;ve created.
          </p>
          <p className="text-4xl font-bold">
            My{" "}
            <span style={{ color: "#a3850d" }} className="text-4xl">
              Project
            </span>
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 py-16 px-4">
          <Tabs
            defaultValue="web"
            className="w-full mb-5 flex flex-col justify-center items-center"
          >
            <TabsList className="mb-5 bg-[#1a1a1a] px-1 py-6">
              <TabsTrigger value="web">Website</TabsTrigger>
              <TabsTrigger value="app">Mobile App</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            <TabsContent value="web">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Kotak 1 */}
                <div className="flex flex-col items-start">
                  <div className="relative w-full h-48 overflow-hidden rounded-lg group shadow-md">
                    <img
                      src="/src/assets/img/project/project5.png"
                      alt="Project 1"
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                      src="/src/assets/img/project/project5-hover.png"
                      alt="Project 1 Hover"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                  {/* Tulisan bawah */}
                  <div className="mt-2 text-start">
                    <h3 className="text-lg font-semibold text-white">Bakti 2023 Website</h3>
                    <p className="text-sm text-gray-300">Kelompok · FrontEnd</p>
                  </div>
                </div>

                {/* Kotak 2 */}
                 <div className="flex flex-col items-start">
                <div className="relative w-full h-48 overflow-hidden rounded-lg group shadow-md">
                  <img
                    src="/src/assets/img/project/project3.png"
                    alt="Project 2"
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src="/src/assets/img/project/project3-hover.png"
                    alt="Project 2 Hover"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="mt-2 text-start">
                    <h3 className="text-lg font-semibold text-white">UPZ Unand Website</h3>
                    <p className="text-sm text-gray-300">Individu · Fullstack</p>
                  </div>
                </div>

                {/* Kotak 3 */}
                <div className="flex flex-col items-start">
                <div className="relative w-full h-48 overflow-hidden rounded-lg group shadow-md">
                  <img
                    src="/src/assets/img/project/project6.png"
                    alt="Project 3"
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src="/src/assets/img/project/project6-hover.png"
                    alt="Project 3 Hover"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="mt-2 text-start">
                    <h3 className="text-lg font-semibold text-white">Faterna Unand Website</h3>
                    <p className="text-sm text-gray-300">Kelompok · FrontEnd</p>
                  </div>
                </div>

                {/* Kotak 4 */}
                 <div className="flex flex-col items-start">
                <div className="relative w-full h-48 overflow-hidden rounded-lg group shadow-md">
                  <img
                    src="/src/assets/img/project/project4.png"
                    alt="Project 4"
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src="/src/assets/img/project/project4-hover.png"
                    alt="Project 4 Hover"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="mt-2 text-start">
                    <h3 className="text-lg font-semibold text-white">BKSTM Unand WEbsite</h3>
                    <p className="text-sm text-gray-300">Individu · FullStack</p>
                  </div>
              </div>
              
              </div>
              <div className="flex mt-5 justify-center items-center w-full">
                <button
                  type="button"
                  className="flex gap-3 py-2.5 px-5 me-2 mb-2 text-sm font-semibold text-gray-900 cursor-pointer focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#a3850d] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <FontAwesomeIcon />
                  See More
                </button>
              </div>
            </TabsContent>

            <TabsContent value="app">
              {" "}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
                {/* Kotak 1 */}
                 <div className="flex flex-col items-start">
                  <div className="relative w-full h-48 overflow-hidden rounded-lg group shadow-md">
                    <img
                      src="/src/assets/img/project/project1.png"
                      alt="Project 1"
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                      src="/src/assets/img/project/project1-hover.png"
                      alt="Project 1 Hover"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                  {/* Tulisan bawah */}
                  <div className="mt-2 text-start">
                    <h3 className="text-lg font-semibold text-white">Hofe App</h3>
                    <p className="text-sm text-gray-300">Kelompok · FrontEnd(Mobile)</p>
                  </div>
                </div>

                {/* Kotak 2 */}
                {/* Kotak 2 */}
                <div className="flex flex-col items-start">
                <div className="relative w-full h-48 overflow-hidden rounded-lg group shadow-md">
                  <img
                    src="/src/assets/img/project/project2.png"
                    alt="Project 2"
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src="/src/assets/img/project/project2-hover.png"
                    alt="Project 2 Hover"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="mt-2 text-start">
                    <h3 className="text-lg font-semibold text-white">Garuda App</h3>
                    <p className="text-sm text-gray-300">Kelompok · FrontEnd(Mobile)</p>
                  </div>
                </div>

                {/* Kotak 3 */}
                <div className="flex flex-col items-start">
                <div className="relative w-full h-48 overflow-hidden rounded-lg group shadow-md">
                  <img
                    src="/src/assets/img/project/project7.png"
                    alt="Project 3"
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    src="/src/assets/img/project/project7-hover.png"
                    alt="Project 3 Hover"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="mt-2 text-start">
                    <h3 className="text-lg font-semibold text-white">Aksi Hijau App</h3>
                    <p className="text-sm text-gray-300">Kelompok · FrontEnd(Mobile)</p>
                  </div>
                </div>
              </div>
              <div className="flex mt-5 justify-center items-center w-full">
                <button
                  type="button"
                  className="flex gap-3 py-2.5 px-5 me-2 mb-2 text-sm font-semibold text-gray-900 cursor-pointer focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#a3850d] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <FontAwesomeIcon />
                  See More
                </button>
              </div>
            </TabsContent>
            <TabsContent value="other">
              {" "}
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-24">
                {/* Kotak 1 */}
                <div className="flex flex-col items-start">
                  <div className="relative w-full h-48 overflow-hidden rounded-lg group shadow-md">
                    <img
                      src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&h=300&fit=crop"
                      alt="Project 1"
                      className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
                      alt="Project 1 Hover"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                  {/* Tulisan bawah */}
                  <div className="mt-2 text-start">
                    <h3 className="text-lg font-semibold text-white">Viral</h3>
                    <p className="text-sm text-gray-300">Template · $129</p>
                  </div>
                </div>

                
              </div>
              <div className="flex mt-5 justify-center items-center w-full">
                <button
                  type="button"
                  className="flex gap-3 py-2.5 px-5 me-2 mb-2 text-sm font-semibold text-gray-900 cursor-pointer focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#a3850d] focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  <FontAwesomeIcon />
                  See More
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Project;
