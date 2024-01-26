import Link from "next/link";

const page = () => {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <div className="">
        <h2 className="text-center text-2xl font-bold italic">
          Welcome , You are Our premium member .
        </h2>
        <div className="text-center mt-5">
        {/* added live link change localhost 3000 */}
          <Link href="http://localhost:3000/video">
            {" "}
            <button className="btn bg-gradient-to-r from-red-600 to-zinc-500">
              Go to Vide Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
