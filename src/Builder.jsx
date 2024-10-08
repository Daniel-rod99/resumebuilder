import { motion, AnimatePresence } from "framer-motion";
import { Divider } from "@nextui-org/divider";
import Fotter from "./components/Fotter";
import ResumePreview from "./components/ResumePreview";
import PersonalDetails from "./components/PersonalDetails";

export default function Builder() {
  return (
    <>
      <AnimatePresence>
        <motion.div className="flex min-h-screen gap-5 p-3 pb-12 min-w-screen">
          <motion.div
            // initial={{ x: 300 }}
            // animate={{ x: 0 }}
            // exit={{ x: -300 }}
            // transition={{ duration: 0.5 }}
            className="w-full md:w-[50%] flex flex-col justify-center"
          >
            <PersonalDetails />
          </motion.div>
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Divider orientation="vertical" />
          </motion.div>
          <motion.div
            initial={{ x: 700 }}
            animate={{ x: 0 }}
            exit={{ x: -700 }}
            transition={{ duration: 0.7 }}
            className="hidden w-[50%] min-h-full md:block"
          >
            <ResumePreview />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <Fotter />
    </>
  );
}
