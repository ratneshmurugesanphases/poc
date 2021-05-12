import {
  // useEffect,
  useRef,
  // useState
} from "react";

const useRefHook = () => {
  const sideSlateRef = useRef(null);
  //   const [state, setState] = useState("ratnesh-hook");

  const updateState = (value) => {
    console.log("useRefHook", sideSlateRef);
    // setState(() => {
    sideSlateRef.current = value;
    // });
  };

  console.log("useRefHook", sideSlateRef);

  return [updateState, sideSlateRef];
};

export default useRefHook;
