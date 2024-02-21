import Link from "next/link";


const SeeAllMusic = () => {
    return (
        <div>
            <div className="py-3 group relative flex justify-start items-center">
                <h2 className="text-2xl font-semibold group-hover:text-red-500">
                Bangla Music
                </h2>
                <div>
                <Link
                    href={``}
                    className="hidden group-hover:inline-block px-2 py-1 text-white rounded-md transition-transform transform group-hover:translate-x-2 hover:underline"
                >
                    See All
                </Link>
                </div>
            </div>
        </div>
    );
};

export default SeeAllMusic;