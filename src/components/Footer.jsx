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
    <footer className="w-full py-3 bg-gradient-to-r to-gray-400 from-slate-600">
      <div className="w-full flex justify-start items-center">
        <p className="text-indigo-50 mx-5 font-bold text-lg">
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
