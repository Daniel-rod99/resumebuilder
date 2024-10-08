import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Fotter from "./components/Fotter";

export default function App() {
  const navigate = useNavigate();
  const handleNavigateBuilder = () => {
    navigate("/builder");
  };
  return (
    <>
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center min-h-screen gap-10 p-10 mb-3"
      >
        <div className="title">
          <motion.h1
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl italic font-bold text-center uppercase"
          >
            <span className="bgText">Free</span> Resume Builder
          </motion.h1>
          <p className="text-center text-gray-600">
            Create Your Professional CV Effortlessly
          </p>
        </div>
        <div className="text-center text-gray-600 Parraf">
          <p>
            Welcome to the resume builder. Here, you can create a resume for
            free, without ads or any cost. You only need to enter your
            information and experience, and within minutes, you&apos;ll have
            your resume ready to download in PDF format.
          </p>
        </div>
        <div className="flex gap-3 lg:gap-10 buttons">
          <Button
            color="default"
            radius="none"
            size="lg"
            auto
            className="text-gray-400 transition hover:text-black hover:scale-110"
          >
            View Template
          </Button>
          <Button
            className="transition bgButtons hover:scale-110"
            size="lg"
            auto
            variant="shadow"
            onClick={handleNavigateBuilder}
          >
            Get Started <FaArrowRight />
          </Button>
        </div>
      </motion.div>
      <Fotter />
    </>
  );
}
