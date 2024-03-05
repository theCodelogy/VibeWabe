const useVideoFetch = async (category, tags, isFeatured = false) => {
  const url = isFeatured
    ? `https://vibewabe-server.vercel.app/video?category=${category}&recommended=true`
    : `https://vibewabe-server.vercel.app/video?category=${category}&tags=${tags}`;

  const response = await fetch(url);
  const data = await response?.json();
  return { data };
};

export default useVideoFetch;
