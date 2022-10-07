import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function HeaderMenu() {
  return (
    <div>
      <nav>
        <Link to="/HomePage">HomePage</Link>
        <Link to="/Reel">Reel</Link>
      </nav>
    </div>
  );
}
