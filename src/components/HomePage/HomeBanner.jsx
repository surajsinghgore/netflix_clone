import { BannerImage } from "../../assets"
import Header from "../Header/Header"
import { MdKeyboardArrowRight } from "react-icons/md";
function HomeBanner() {
  return (
    <div className="relative h-screen w-full">
      {/* Header */}
      <Header />
      <div className="absolute inset-0 ">
        <img
          src={BannerImage}
          alt="Banner Image"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm"></div>
      </div>


      <div className="relative flex flex-col justify-center items-center h-full px-8 text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 ">
          Unlimited movies, TV <br />shows and more
        </h1>
        <p className="max-w-lg text-lg md:text-xl mb-6 font-bold">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="max-w-xl text-md mb-6 font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex items-center w-[50vw] gap-2 ">
          <input type="text" name="email" className="border  py-3 flex-1 rounded-md border-red-50 bg-transparent px-4" placeholder="Email Address" />
          <button className="bg-red-600 hover:bg-red-700 rounded-lg font-bold px-8 py-3 flex items-center">
            Get Started<MdKeyboardArrowRight className="text-lg font-extrabold" />
          </button>

        </div>
      </div>
    </div>
  )
}

export default HomeBanner
