import { useEffect, useState, useCallback } from "react";

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeout: ReturnType<typeof setTimeout> | null;
  return (...args: any[]) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const useDeviceResize = () => {
  type SizeType = {
    height: number;
    width: number;
  };

  const [size, setSize] = useState<SizeType>({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const changeDisplayHeightAndWidth = useCallback(() => {
    debounce(() => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 0)();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", changeDisplayHeightAndWidth);

    return () => {
      window.removeEventListener("resize", changeDisplayHeightAndWidth);
    };
  }, [changeDisplayHeightAndWidth]);

  return size;
};

export default useDeviceResize;
