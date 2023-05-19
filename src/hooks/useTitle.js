import {useEffect} from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | ToyVerse Shope Store`;
  }, [title]);
};
export default useTitle;
