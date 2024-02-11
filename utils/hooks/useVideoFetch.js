const useVideoFetch = async (category, tags) => {
  const response = await fetch(
    `https://vibewabe-server.vercel.app/video?category=${category}&tags=${tags}`
  );
  const data = await response?.json();
  // console.log(data);
  return { data };
};

export default useVideoFetch;
