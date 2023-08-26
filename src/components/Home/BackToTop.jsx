import { useState, useEffect } from "react";
import { BsArrowUpShort } from "react-icons/bs";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-purple-600 text-white hover:bg-purple-800 ${
        isVisible ? "visible" : "invisible"
      } transition-all duration-600 ease-in-out`}
    >
      <BsArrowUpShort size={20} />
    </button>
  );
};

export default BackToTop;
