import { FC, HTMLAttributes, memo } from "react";
import upcommingIcon from "../images/upcommingIcon.png";

interface Props extends HTMLAttributes<HTMLDivElement> {
  eventType: string;
}

const GoToPageButton: FC<Props> = ({ eventType, ...rest }) => {
  const themeClasses =
    "flex justify-between items-center text-center bg-gradient-to-r from-pink-600 via-pink-700 to-purple-900 text-white rounded-xl py-4 px-6 w-4/5 sm:w-4/5 md:w-2/5 h-32 m-4";
  if (eventType === "Present Contests") {
    return (
      <div className={themeClasses}>
        <span className="relative flex h-8 w-8">
          <span className="animate-ping absolute h-8 w-8 rounded-full bg-yellow-100"></span>
          <span className="rounded-full h-8 w-8 bg-yellow-200"></span>
        </span>

        <h3 className="text-2xl">{eventType}</h3>
      </div>
    );
  } else {
    return (
      <div className={themeClasses}>
        <img src={upcommingIcon} className="w-12 h-12" />
        <h3 className="text-2xl">{eventType}</h3>
      </div>
    );
  }
};

GoToPageButton.defaultProps = {};

export default memo(GoToPageButton);
