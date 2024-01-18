import Image from "next/image";
import liginimg from '@/assets/Login1.png'
import LoginForm from "@/components/shared/auth/LoginForm";


const Login = () => {
    return (
        <div className="bg-[#101726] ">
            <div className=" min-h-screen flex justify-center items-center ">
                <div className="flex-col w-full  px-6 lg:w-2/3">
                    <div className="grid md:grid-cols-2 items-center shadow-lg ">
                        <div className="  w-full  bg-white  ">
                            <LoginForm/>
                        </div>
                        <div className="hidden md:block ">
                            <Image className="" src={liginimg } alt="register image" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;