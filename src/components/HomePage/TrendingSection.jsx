import { FaSortDown } from "react-icons/fa"
import TrendingCarousel from "../Carousel/TrendingCarousel"


const TrendingSection = () => {
    return (
        <div className="bg-black h-[100vh]">
            <div className="w-[80%] m-auto">

                <h1 className="text-white py-10 font-semibold text-3xl">Trending Now</h1>
                <div className="filter">
                    <div className="flex gap-4">
                        <div className="relative">
                            <select name="language" className="rounded-md  px-8 py-1">
                                <option>India</option>
                                <option>Global</option>
                            </select>
                            <div className="absolute top-1.5 right-4 text-md text-red-50"><FaSortDown /></div>
                        </div>
                        <div className="relative">
                            <select name="language" className="rounded-md  px-8 py-1">
                                <option>Movies</option>
                                <option>TV Shows</option>
                            </select>
                            <div className="absolute top-1.5 right-4 text-md text-red-50"><FaSortDown /></div>
                        </div>
                    </div>


                </div>
                <div className="card">
                    <TrendingCarousel />
                </div>
            </div>
        </div>
    )
}

export default TrendingSection
