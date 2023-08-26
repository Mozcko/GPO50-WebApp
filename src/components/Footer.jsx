import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="w-full items-start py-3 fixed bottom-0 z-20 bg-gradient-to-r from-gray-400 to-slate-600">
      <div className="w-full flex justify-start items-center max-w-7xl mx-5">
        <p className="text-slate-800 mx-5 font-bold text-lg">
          síguenos en nuestras redes sociales:{" "}
        </p>
        <Link
          to=""
          className="text-slate-800 hover:text-indigo-50 transition ease-in-out delay-50 duration-300"
        >
          <FontAwesomeIcon
            className=" text-lg mx-5"
            icon={faSquareFacebook}
            beatFade
          />
        </Link>
        <Link
          to=""
          className="text-slate-800 hover:text-indigo-50 transition ease-in-out delay-50 duration-300"
        >
          <FontAwesomeIcon
            className=" text-lg mx-5"
            icon={faInstagram}
            beatFade
          />
        </Link>
        <Link
          to=""
          className="text-slate-800 hover:text-indigo-50 transition ease-in-out delay-50 duration-300"
        >
          <FontAwesomeIcon className=" text-lg mx-5" icon={faTiktok} beatFade />
        </Link>
      </div>
    </footer>
  );
}
