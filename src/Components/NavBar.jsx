import React from "react";
import { navlinks } from "../constants";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="ApPle logo" />

        <ul>
          {navlinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search Svg" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart Svg" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
