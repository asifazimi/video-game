import platforms from "../data/platforms";
// import useData from "./useData";

// interface PlatformParent {
//   id: number;
//   name: string;
//   slug: string;
// }

// /platforms/lists/parents
const usePlatforms = () => {
  // return useData<PlatformParent>("/platforms/lists/parents");
  return { data: platforms, errors: null }; // we want to make the platforms to render statically
};

export default usePlatforms;
