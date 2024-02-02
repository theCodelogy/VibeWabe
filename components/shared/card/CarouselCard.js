const { default: Image } = require("next/image");

const CarouselCard = ({ href, image, title }) => {
    return (
      <div>
        <div className="relative group overflow-hidden">
          <Image
            className="w-[350px] md:w-[300px] h-[350px] transform transition-transform duration-300 group-hover:scale-110 rounded-xl"
            src={image} // Ensure image is a string
            width={350}
            height={350}
            alt={title}
            priority={true}
          />
        </div>
        <h5 className="text-center mt-1 text-lg font-semibold">
          {title}
        </h5>
      </div>
    );
  };
  export default CarouselCard