import Link from "next/link";
import React from "react";

const Logo = (props: { url?: string; size?: string; fontSize?: string }) => {
  const { url = "/", size = "40px", fontSize = "2xl" } = props;
  return (
    <Link
      href={url}
      className={`size-[${size}] rounded-lg  flex items-center border-2 dark:border-gray-200 justify-center  bg-gradient-to-br from-blue-500 to-primary to-90% `}
    >
      <span className={`font-bold text-gray-50 text-[${fontSize}]`}>S</span>
    </Link>
  );
};

export default Logo;
