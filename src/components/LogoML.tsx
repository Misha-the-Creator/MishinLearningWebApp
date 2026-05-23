import { Link } from "@tanstack/react-router";
import { memo } from "react";

function LogoML() {
  return (
    <header className="ml-5">
      <Link to="/">
        M<span className="font-pixel">/</span>L
      </Link>
    </header>
  );
}

export default memo(LogoML);
