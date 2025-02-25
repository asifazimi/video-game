import useData from "./useData";

interface PlatformParent {
  id: number;
  name: string;
  slug: string;
}

// /platforms/lists/parents
const usePlatforms = () => {
  return useData<PlatformParent>("/platforms/lists/parents");
};

export default usePlatforms;
