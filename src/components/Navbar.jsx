import { useState, useEffect, useRef } from "react";
import OverlayMenu from "./OverlayMenu";
import image from "../assets/image.png";
import { FaHamburger } from "react-icons/fa";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [forceVisible, setForceVisible] = useState(false);

    const lastScrollY = useRef(0);

    // ✅ Intersection Observer
    useEffect(() => {
        const section = document.querySelector("#home");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setForceVisible(true);
                    setVisible(true);
                } else {
                    setForceVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    // ✅ Scroll Logic (NO AUTO HIDE)
    useEffect(() => {
        const handleScroll = () => {
            if (forceVisible) {
                setVisible(true);
                return;
            }

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                setVisible(false); // 👇 scroll down
            } else {
                setVisible(true);  // 👇 scroll up
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [forceVisible]);

    return (
        <>
            <nav
                className={`fixed top-2 left-0 w-full flex items-center justify-between px-6 z-50 transition-transform duration-500 ${
                    visible ? "translate-y-0" : "-translate-y-15"
                }`}
            >
                {/* 🔥 Logo Section */}
                <div className="flex items-center gap-2">
                    <img
                        src={image}
                        alt="logo"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-2xl font-semibold text-white leading-none hidden sm:block">
                        ARIJIT MUKHERJEE
                    </span>
                </div>

                {/* 🍔 Hamburger */}
                <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="text-white flex items-center justify-center"
                    >
                        <FaHamburger className="w-7 h-7 hover:scale-110 transition-transform duration-300" />
                    </button>
                </div>

                {/* 📩 CTA */}
                <div className="hidden lg:block">
                    <a
                        href="#contact"
                        className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-5 py-1 rounded-full font-medium shadow-lg hover:opacity-90 duration-300"
                    >
                        Reach out
                    </a>
                </div>
            </nav>

            <OverlayMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}