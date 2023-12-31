import Image from "next/image";
import { type NextPage } from "next";
import OrangeButton from "../components/buttons/OrangeButton";
import DarkBackground from "../components/BackgroundColor/DarkBackground";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <DarkBackground>
      <div className="flex h-full items-center justify-center text-center">
        <div className="w-full">
          <p className="text-4xl font-bold">PetdyBite</p>
          <p className="mb-4 text-lg">A Smart Solution for Pet Owners</p>
          <motion.div
            initial={{ transform: "translateY(-50px)" }}
            transition={{ diuration: 5, ease: "easeOut" }}
            whileInView={{ transform: "translateY(0px)" }}
          >
            <div className="relative left-1/2 mb-3 flex h-64 w-64 -translate-x-1/2 items-center justify-center rounded-xl ">
              <Image
                className="relative object-contain"
                src={"/companyLogo.svg"}
                alt={"PetdyBite Company Logo"}
                fill
              ></Image>
            </div>
          </motion.div>

          <p className="mb-3 text-xl">Sign in Now!</p>

          <OrangeButton
            text="Sign In with Google"
            className={"text-xl"}
            onClick={() => {
              signIn("google", { callbackUrl: "/accountSetup/1" });
            }}
          />
        </div>
      </div>
    </DarkBackground>
  );
};

export default Home;
