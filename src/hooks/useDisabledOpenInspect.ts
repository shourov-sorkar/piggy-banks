import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useDisabledOpenInspect = () => {
  const [rightClickCount, setRightClickCount] = useState(0);
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      const nextCount = rightClickCount + 1;
      setRightClickCount(nextCount);
      if (rightClickCount == 1) {
        toast("Why you are trying to inspect?", {
          icon: "😠",
        });
      } else if (rightClickCount == 2) {
        toast("Again?? If you want to inspect again then you are Hasina", {
          icon: "😡",
        });
      } else if (rightClickCount > 2) {
        toast("You are Hasina", {
          icon: "🤬",
        });
      }
    };

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
        const nextCount = rightClickCount + 1;
        setRightClickCount(nextCount);
        if (rightClickCount == 1) {
          toast("Why you are try to inspect?", {
            icon: "😠",
          });
        } else if (rightClickCount == 2) {
          toast("Again?? If you want to inspect again then you are Hasina", {
            icon: "😡",
          });
        } else if (rightClickCount > 2) {
          toast("You are Hasina", {
            icon: "🤬",
          });
        }
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [rightClickCount]);

  return rightClickCount;
};

export default useDisabledOpenInspect;
