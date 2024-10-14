import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { DatePicker } from "@nextui-org/date-picker";
import { CalendarDate } from "@internationalized/date";
import Profile from "./Profile";
import Experience from "./Experience";

export default function PersonalDetails() {
  const navigate = useNavigate();
  const handleNavigateApp = () => {
    navigate(-1);
  };

  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const toggleShowMoreDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  return (
    <>
      <motion.div className="flex items-center justify-center">
        <motion.div className="w-full">
          <Card>
            <CardHeader>
              <h1 className="text-2xl font-bold">Personal Details</h1>
            </CardHeader>
            <CardBody className="gap-3">
              <div className="flex justify-center py-7 text-9xl">
                <PiUserCirclePlusLight className="transition cursor-pointer hover:scale-110" />
              </div>
              <div className="flex flex-col gap-3 lg:flex-row">
                <Input type="text" label="First Name" isRequired isClearable />
                <Input type="text" label="Last Name" isRequired isClearable />
              </div>
              <div className="flex flex-col gap-3 lg:flex-row">
                <Input type="email" label="Email" isRequired isClearable />
                <Input type="phone" label="Phone" isClearable />
              </div>
              <Input type="text" label="Job Title" isClearable />
              <Input type="text" label="Address" isClearable />
            </CardBody>
            <CardFooter>
              <motion.h1
                onClick={toggleShowMoreDetails}
                className="flex items-center gap-1 text-blue-500 cursor-pointer"
              >
                Add More Details
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: showMoreDetails ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <IoIosArrowDropdownCircle />
                </motion.span>
              </motion.h1>
            </CardFooter>
            <AnimatePresence>
              {showMoreDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <CardBody className="gap-3">
                    <div className="flex flex-col gap-3 lg:flex-row">
                      <Input type="text" label="City" isClearable />
                      <Input type="number" label="Postal Code" isClearable />
                    </div>
                    <div className="flex flex-col gap-3 lg:flex-row">
                      <Input type="text" label="Nationality" isClearable />
                      <DatePicker
                        label={"Birth date"}
                        placeholderValue={new CalendarDate(1995, 11, 6)}
                        errorMessage="Please enter a valid date."
                        isClearable
                      />
                    </div>
                  </CardBody>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Profile */}
            <CardHeader>
              <h1 className="text-2xl font-bold">Professional Summary</h1>
            </CardHeader>
            <CardBody>
              <Profile />
            </CardBody>

            {/* Experience */}
            <CardHeader>
              <h1 className="text-2xl font-bold ">Employment History</h1>
            </CardHeader>
            <CardBody>
              <Experience />
            </CardBody>
          </Card>
        </motion.div>
      </motion.div>
      <motion.div className="flex mt-6 justify-evenly">
        <Button className="bgButtons" onClick={handleNavigateApp}>
          <FaArrowLeft /> Back
        </Button>
        <Button className="bgButtons">
          Create <FaArrowRight />
        </Button>
      </motion.div>
    </>
  );
}
