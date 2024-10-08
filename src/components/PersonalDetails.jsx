import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { DateInput } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";

export default function PersonalDetails() {
  const navigate = useNavigate();
  const handleNavigateApp = () => {
    navigate(-1);
  };

  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const toggleShowMoreDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  const [showFirstCard, setShowFirstCard] = useState(true);
  const toggleSeccion = () => {
    setShowFirstCard(!showFirstCard);
  };

  return (
    <>
      <motion.div className="relative flex items-center justify-center h-screen">
        <AnimatePresence>
          {showFirstCard && (
            <motion.div
              key="first-card"
              initial={{ x: -200, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 1 }}
              layout
              className="absolute min-w-full"
            >
              <Card>
                <CardHeader>
                  <h1 className="text-2xl font-bold">Personal Details</h1>
                </CardHeader>
                <CardBody className="gap-3">
                  <div className="flex justify-center py-7 text-9xl">
                    <PiUserCirclePlusLight className="transition cursor-pointer hover:scale-110" />
                  </div>
                  <div className="flex flex-col gap-3 lg:flex-row">
                    <Input
                      type="text"
                      label="First Name"
                      isRequired
                      isClearable
                    />
                    <Input
                      type="text"
                      label="Last Name"
                      isRequired
                      isClearable
                    />
                  </div>
                  <div className="flex flex-col gap-3 lg:flex-row">
                    <Input type="email" label="Email" isRequired isClearable />
                    <Input type="phone" label="Phone" isClearable />
                  </div>
                  <Input type="text" label="Address" isClearable />
                </CardBody>
                <CardFooter>
                  <motion.h1
                    onClick={toggleShowMoreDetails}
                    className="flex items-center gap-1 cursor-pointer hover:text-blue-500"
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
                          <Input
                            type="number"
                            label="Postal Code"
                            isClearable
                          />
                        </div>
                        <div className="flex flex-col gap-3 lg:flex-row">
                          <Input type="text" label="Nationality" isClearable />
                          <DateInput
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
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!showFirstCard && (
            <motion.div
              key="second-card"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: -0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 1 }}
              layout
              className="absolute min-w-full"
            >
              <Card>
                <CardHeader>
                  <h1 className="text-2xl font-bold">Personal Details 2</h1>
                </CardHeader>
                <CardBody className="gap-3 ">
                  <div className="flex justify-center py-7 text-9xl">
                    <PiUserCirclePlusLight className="transition cursor-pointer hover:scale-110" />
                  </div>
                  <div className="flex flex-col gap-3 lg:flex-row">
                    <Input
                      type="text"
                      label="First Name"
                      isRequired
                      isClearable
                    />
                    <Input
                      type="text"
                      label="Last Name"
                      isRequired
                      isClearable
                    />
                  </div>
                  <div className="flex flex-col gap-3 lg:flex-row">
                    <Input type="email" label="Email" isRequired isClearable />
                    <Input type="phone" label="Phone" isClearable />
                  </div>
                  <Input type="text" label="Address" isClearable />
                </CardBody>
                <CardFooter>
                  <motion.h1
                    onClick={toggleShowMoreDetails}
                    className="flex items-center gap-1 cursor-pointer hover:text-blue-500"
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
                          <Input
                            type="number"
                            label="Postal Code"
                            isClearable
                          />
                        </div>
                        <div className="flex flex-col gap-3 lg:flex-row">
                          <Input type="text" label="Nationality" isClearable />
                          <DateInput
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
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div className="flex justify-between">
        <Button className="bgButtons" onClick={handleNavigateApp}>
          <FaArrowLeft /> Prev
        </Button>
        <Button className="bgButtons" onClick={toggleSeccion}>
          Next <FaArrowRight />
        </Button>
      </motion.div>
    </>
  );
}
