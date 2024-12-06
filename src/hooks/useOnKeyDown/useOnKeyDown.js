import React from "react";

function useOnKeyDown(key, onKeyDown) {
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.code === key) {
        onKeyDown();
      }
    }
    console.log("mount");

    window.addEventListener("keydown", handleEscape);

    return () => {
      console.log("unmounted");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [key, onKeyDown]);
}

export default useOnKeyDown;
