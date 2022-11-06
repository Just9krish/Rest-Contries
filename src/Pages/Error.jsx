import { Link } from "react-router-dom";
import errorImg from "../Images/errorimg.jpg";

export default function Error({ error }) {
  return (
    <div className="text-center mt-12 px-6 max-w-[640px] md:max-w-[820px] lg:max-w-[1040px] mx-auto">
      <div>
        <img className="w-full max-h-[45vh]" src={errorImg} alt="Error image" />
      </div>
      <h1 className="mt-6 font-bold text-base md:text-xl lg:text-3xl text-very-dark-blue-t transition-all ease-in dark:text-white">
        {error}
      </h1>
      <Link
        to="/"
        className="mt-8 text-very-dark-blue-t bg-white inline-flex justify-center items-center py-2 px-7 shadow-md rounded-md border-gray-900 transition-all ease-in dark:bg-dark-blue dark:text-white"
      >
        Back To Home
      </Link>
    </div>
  );
}
