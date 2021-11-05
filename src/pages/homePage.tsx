import { FC, memo } from "react";
import cIcon from "../images/cIcon.png";
import codechefIcon from "../images/codechefIcon.png";
import codeforcesIcon from "../images/codeforcesIcon.png";
import cppIcon from "../images/cppIcon.png";
import leetcodeIcon from "../images/leetcodeIcon.png";
import javaIcon from "../images/javaIcon.png";
import pythonIcon from "../images/pythonIcon.png";
import hackerrankIcon from "../images/hackerrankIcon.png";
import GoToPageButton from "../components/GoToPageButton";

interface Props {}

const homePage: FC<Props> = (props) => {
  return (
    <div className="flex flex-col h-full items-center">
      <div className="w-full py-24 px-8 text-center bg-gradient-to-r from-pink-600 via-pink-700 to-purple-900">
        <h1 className="text-7xl font-semibold font-serif text-white filter hover:drop-shadow-custom transition duration-300">
          Go For CP
        </h1>
        <h5 className="mt-32 lg:mt-8 md:mt-8 sm:mt-32 text-xl text-gray-300">
          A reliable source of links to all the competitive programming contests
          happening all over the internet.
        </h5>
      </div>
      <div className="flex justify-between gap-16 lg:gap-0 md:gap-0 sm:gap-0 p-4 w-full flex-wrap lg:w-4/5 md:w-11/12 sm:w-full">
        <img src={cIcon} className="w-10 h-10 transform rotate-45" />
        <img src={codechefIcon} className="w-10 h-10 transform -rotate-45" />
        <img src={codeforcesIcon} className="w-10 h-10 transform rotate-45" />
        <img src={cppIcon} className="w-10 h-10 transform -rotate-45" />
        <img src={leetcodeIcon} className="w-10 h-10 transform rotate-45" />
        <img src={javaIcon} className="w-10 h-10 transform -rotate-45" />
        <img src={hackerrankIcon} className="w-10 h-10 transform rotate-45" />
        <img src={pythonIcon} className="w-10 h-10 transform -rotate-45" />
      </div>
      <div className="flex justify-between items-center flex-col sm:flex-col md:flex-row lg:flex-row w-full sm:w-full md:w-4/5 lg:w-2/3 my-14">
        <GoToPageButton eventType="Present Contests" />
        <GoToPageButton eventType="Upcomming Contests" />
      </div>
    </div>
  );
};

homePage.defaultProps = {};

export default memo(homePage);
