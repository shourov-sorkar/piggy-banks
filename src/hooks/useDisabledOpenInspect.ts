import { useEffect } from "react";

const useDisabledOpenInspect = () => {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      const ctrlShiftKey = (key) => e.ctrlKey && e.shiftKey && e.key === key;

      if (
        e.key === "F12" ||
        ctrlShiftKey("I") ||
        ctrlShiftKey("J") ||
        ctrlShiftKey("C") ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useDisabledOpenInspect;
