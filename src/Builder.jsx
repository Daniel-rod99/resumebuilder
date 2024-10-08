import { motion } from "framer-motion";
import { Divider } from "@nextui-org/divider";
import Fotter from "./components/Fotter";
import ResumePreview from "./components/ResumePreview";
import FormBuilder from "./components/FormBuilder";

export default function Builder() {
  return (
    <>
      <motion.div className="flex min-h-screen gap-5 p-3 pb-12 min-w-screen">
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className=" w-[100%] md:w-[50%] min-h-full flex flex-col justify-center"
        >
          <FormBuilder />
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <Divider orientation="vertical" />
        </motion.div>
        <motion.div
          initial={{ x: 700 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden w-[50%] min-h-full md:block"
        >
          <ResumePreview />
        </motion.div>
      </motion.div>
      <Fotter />
    </>
  );
}
