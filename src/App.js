import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const [MoreOptionToggle, setMoreOptionToggle] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    setMoreOptionToggle(false);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [pathname]);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <ScrollToTop />
      <Navbar
        NavLink={NavLink}
        MoreOptionToggle={MoreOptionToggle}
        setMoreOptionToggle={setMoreOptionToggle}
      />
      <Outlet className="overflow-hidden" />
      <Footer
        NavLink={NavLink}
        MoreOptionToggle={MoreOptionToggle}
        setMoreOptionToggle={setMoreOptionToggle}
      />
    </>
  );
}

const NavLink = [
  {
    id: "01",
    name: "Home",
    link: "/",
  },
  {
    id: "02",
    name: "Ex-Cadet Registration",
    link: "/AlumniRegister",
  },
  {
    id: "03",
    name: "About",
    link: "/about",
  },
  {
    id: "04",
    name: "Contact",
    link: "/contact",
  },
  {
    id: "05",
    name: "More",
    link: [
      { Activities: "/Activities" },
      { "Uniform": "/uniform" },
      { "Study": "/study" },
      { Gallery: "/gallery" },
      
    ],
  },
];

export default App;
