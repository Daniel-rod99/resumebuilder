import { motion, AnimatePresence } from "framer-motion";
import { Divider } from "@nextui-org/divider";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Button } from "@nextui-org/react";
import Fotter from "./components/Fotter";
import ResumePreview from "./components/ResumePreview";
import Information from "./Information";
import { useState } from "react";

export default function Builder() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    address: "",
    city: "",
    postalCode: "",
    nationality: "",
    birthDate: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <>
      <AnimatePresence>
        <motion.div className="flex min-h-screen gap-0 p-3 pb-12 md:gap-5 min-w-screen">
          {/* INFORMATION */}
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[50%]"
          >
            <Information
              formData={formData}
              handleInputChange={handleInputChange}
            />
          </motion.div>

          {/* DIVIDER */}
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Divider orientation="vertical" />
          </motion.div>

          {/* RESUME PREVIEW */}
          <div className="md:w-[50%] md:flex justify-center h-screen">
            <motion.div
              initial={{ x: 700 }}
              animate={{ x: 0 }}
              exit={{ x: -700 }}
              transition={{ duration: 0.7 }}
              className="hidden w-[1000px] bg-red-200 md:top-8 md:block"
            >
              <ResumePreview formData={formData} />
            </motion.div>
          </div>

          {/* BUTTON DOWNLOAD AND PREVIEW*/}
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: -700 }}
            transition={{ duration: 0.7 }}
            className="fixed flex items-center gap-4 bottom-24 right-6 md:hidden"
          >
            <Button isIconOnly color="primary" aria-label="Like">
              {" "}
              <IoDocumentTextOutline className="text-xl" />
            </Button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <Fotter />
    </>
  );
}
