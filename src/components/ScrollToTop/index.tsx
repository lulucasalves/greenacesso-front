import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

import { Button } from "./ScrollToTop.style";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <IoIosArrowUp size={20} />
    </Button>
  );
}
