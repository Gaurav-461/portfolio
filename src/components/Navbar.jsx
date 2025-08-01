import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, NavLink } from "react-router";

import { logo } from "../assets/index";
import { navLinks } from "../constants";

const NavBar = () => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = new Date().toLocaleDateString("en-US", options);

  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Refs for GSAP animations
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useGSAP(() => {
    gsap.from("#nav-bar", {
      y: -95,
      duration: 0.7,
      delay: 1,
      ease: "power1.inOut"
    });
  });

  // Enhanced menu animation
  useGSAP(() => {
    if (!menuRef.current) return;

    const tl = gsap.timeline({
      onStart: () => setIsAnimating(true),
      onComplete: () => setIsAnimating(false),
    });

    if (open) {
      // Opening animation
      tl.set(menuRef.current, { display: "block" })
        .fromTo(
          menuRef.current,
          {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotationX: -15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
        )
        .fromTo(
          menuItemsRef.current,
          {
            opacity: 0,
            y: 60,
            scale: 0.8,
            rotationX: -10,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.3",
        );
    } else {
      // Closing animation
      tl.to(menuItemsRef.current, {
        opacity: 0,
        y: -40,
        scale: 0.8,
        rotationX: 10,
        duration: 0.3,
        stagger: 0.04,
        ease: "power2.in",
      })
        .to(menuRef.current, {
          opacity: 0,
          y: -60,
          scale: 0.8,
          rotationX: 15,
          duration: 0.4,
          ease: "back.in(1.7)",
        })
        .set(menuRef.current, { display: "none" });
    }
  }, [open]);

  const handleMenuOpen = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    setOpen(true);
  };

  const handleMenuClose = () => {
    if (isAnimating) return;
    setOpen(false);
  };

  return (
    <>
      <header id="header">
        <nav id="nav-bar">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>

          {/* Navbar links */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-zinc-400"}`
                }

                to={link.href}
                viewTransition
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Date */}
          <div className="date">
            <p>{formattedDate}</p>
          </div>

          {/* Toggle menu icon */}
          {open ? (
            <button
              onClick={handleMenuClose}
              className="toggle-menu-btn"
            >
              <p className="text-white">Close</p>
            </button>
          ) : (
            <button
              onClick={handleMenuOpen}
              className="toggle-menu-btn"
            >
              <p className="text-white">Menu</p>
            </button>
          )}
        </nav>

        {/* ---------------------Responsive Navbar--------------------- */}

        <div className={`${open ? "block" : "hidden"} menu`} ref={menuRef}>
          <ul>
            {navLinks.map((link, index) => (
              <li
                key={link.label}
                ref={(el) => (menuItemsRef.current[index] = el)}
              >
                <NavLink
                  className={({ isActive }) =>
                    `${isActive ? "text-white" : "text-zinc-400"} transition-colors hover:text-white`
                  }
                  to={link.href}
                  onClick={handleMenuClose}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;
