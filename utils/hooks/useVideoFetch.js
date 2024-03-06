// const useVideoFetch = async (category, tags, isFeatured = false) => {
//   const url = isFeatured
//     ? `https://vibewabe-server.vercel.app/video?category=${category}&recommended=true`
//     : `https://vibewabe-server.vercel.app/video?category=${category}&tags=${tags}`;

//   const response = await fetch(url);
//   const data = await response?.json();
//   return { data };
// };

// export default useVideoFetch;

const useVideoFetch = async (category, tags, isFeatured = false) => {
  let url;

  if (isFeatured && !category) {
    url = `https://vibewabe-server.vercel.app/video?featured=true&limit=15`;
  } else if (isFeatured) {
    url = `https://vibewabe-server.vercel.app/video?category=${category}&recommended=true`;
  } else {
    url = `https://vibewabe-server.vercel.app/video?category=${category}&tags=${tags}`;
  }

  const response = await fetch(url);
  const data = await response?.json();
  return { data };
};

export default useVideoFetch;
