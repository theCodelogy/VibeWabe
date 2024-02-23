import axios from "axios";


const useMusicFetch = async({language}) => {
    const response = await axios.get(
        `https://vibewabe-server.vercel.app/music?language=${language}`
      );
      const data = await response.data;
      // console.log(data);
      return { data };
};

export default useMusicFetch;