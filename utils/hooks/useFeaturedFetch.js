const useFeaturedFetch = async (category) => {
  const response = await fetch(
    `https://vibewabe-server.vercel.app/video?category=${category}&recommended=true`
  );
  const data = await response?.json();
  // console.log(data);
  return { data };
};

export default useFeaturedFetch;
