import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function WhatsApp() {
  return (
    <Link
      to=""
      target="_blank"
      className="fixed w-[60px] h-[60px] bg-green-500 bottom-[85px] right-[10px] z-40 text-white text-[30px] rounded-full text-center shadow-sm"
    >
      <FontAwesomeIcon className="mt-[16px]" icon={faWhatsapp} />
    </Link>
  );
}
