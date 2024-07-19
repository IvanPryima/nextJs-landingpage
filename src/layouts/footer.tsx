export default function Footer() {
  return (
    <div className="bg-[#010910]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 justify-items-center ">
        <div className="max-w-[575px] mt-[100px] ">
          <p className="font-semibold text-[46px] leading-[74px] text-[#EDEDED]">
            Subscribe for Exclusive offers
          </p>

          <div className="relative my-20">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-[#BBBBBB] bg-transparent text-[24px] font-normal"
              placeholder="Search"
              required
            />

            <button
              type="submit"
              className="text-[24px] text-white absolute end-2.5 bottom-2.5 bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <img src="assets/landing/arrow-left.png" alt="enter"></img>
            </button>
          </div>
        </div>

        <div className="sm:w-[520px] w-[350px] mt-[100px]">
          <div className="grid grid-cols-2">
            <div>
              <p className="font-semibold text-[26px] leading-[30px] text-[#EDEDED]">
                Services
              </p>
              <p className="font-normal text-[20px] mt-10 leading-[80px] text-[#C2C2C2]">
                About
              </p>
              <p className="font-normal text-[20px] leading-[80px] text-[#C2C2C2]">
                What We offer
              </p>
              <p className="font-normal text-[20px] leading-[80px] text-[#C2C2C2]">
                MVP
              </p>
              <p className="font-normal text-[20px] leading-[80px] text-[#C2C2C2]">
                Golang Development
              </p>
            </div>
            <div>
              <p className="font-semibold text-[26px] leading-[30px] text-[#EDEDED]">
                About
              </p>
              <p className="font-normal text-[20px] mt-10 leading-[80px] text-[#C2C2C2]">
                Careers
              </p>
              <p className="font-normal text-[20px] leading-[80px] text-[#C2C2C2]">
                Privacy Policy
              </p>
              <p className="font-normal text-[20px] leading-[80px] text-[#C2C2C2]">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[72px]">
        <img
          src="assets/Logo-white.png"
          alt="logo"
          className="w-[171px] h-[174px]"
        />
      </div>

      <div className="mt-[62px] md:mx-[245px] mx-[120px]">
        <div className="h-[1px] bg-white opacity-20" />
        <div className="flex justify-between">
          <div>
            <p className="text-[#D7D7D7] font-normal text-[18px] leading-[30px] my-5">
              © 2024 Logo. All right reserved
            </p>
          </div>
          <div className="md:flex justify-between gap-3 my-3">
            <div className="icon w-11 h-11 rounded-full border-[1px] border-[#2D2D2D] grid place-content-center">
              <img
                src="assets/landing/facebook.png"
                alt="Facebook"
                className="w-[21px] h-[21px] self-center"
              />
            </div>
            <div className="icon w-11 h-11 rounded-full border-[1px] border-[#2D2D2D] grid place-content-center">
              <img src="assets/landing/twitter.png" alt="Facebook" />
            </div>
            <div className="icon w-11 h-11 rounded-full border-[1px] border-[#2D2D2D] grid place-content-center">
              <img src="assets/landing/instagram.png" alt="Facebook" />
            </div>
            <div className="icon w-11 h-11 rounded-full border-[1px] border-[#2D2D2D] grid place-content-center">
              <img src="assets/landing/youtube.png" alt="Facebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
