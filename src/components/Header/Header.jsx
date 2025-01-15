import { NetflixLogo } from "../../assets"
import { IoLanguage } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
const Header = () => {
  return (
    <div className="relative flex justify-between items-center  py-6 z-50 w-[80%] m-auto">
      <div className="w-36">
        <img src={NetflixLogo} alt="netflix logo" className="w-full h-full" />
      </div>
      <div className="flex gap-2">
        <div className="relative">
          <div className="absolute top-2.5 left-4 text-lg text-red-50"><IoLanguage /></div>
          <select name="language" className="rounded-md  px-10 py-1">
            <option> English</option>
            <option> Hindi</option>
          </select>
          <div className="absolute top-1.5 right-4 text-lg text-red-50"><FaSortDown /></div>
        </div>
        <div className="SingIn">
          <button className="bg-[#e50815] p-1 px-4 rounded-md font-bold text-white">Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default Header
