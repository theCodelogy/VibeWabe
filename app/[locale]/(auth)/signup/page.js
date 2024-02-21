import Image from "next/image";
import register from '@/assets/register.png'
import SignUpForm from "@/components/ui/auth/SignUpForm";


const Register = () => {
    return (
        <div>
            <div className=" min-h-screen flex justify-center items-center ">
                <div className="flex-col w-full  px-6 lg:w-2/3">
                    <div className="grid md:grid-cols-2 items-center">
                    <div className="hidden md:block ">
                            <Image className="" src={register} alt="register image" />
                        </div>
                        <div className="  max-w-[420px] bg-white  ">
                            <SignUpForm/>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Register;
