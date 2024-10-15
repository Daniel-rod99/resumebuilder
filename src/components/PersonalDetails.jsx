import { useState } from "react";
import { CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { DatePicker } from "@nextui-org/date-picker";
import { CalendarDate } from "@internationalized/date";

export default function PersonalDetails() {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const toggleShowMoreDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-full">
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

          <h2
            onClick={toggleShowMoreDetails}
            className="flex items-center gap-3 mt-3 text-blue-500 cursor-pointer text-small"
          >
            Add more details
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: showMoreDetails ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <IoIosArrowDown className="text-lg" />
            </motion.span>
          </h2>

          {/* MORE DETAILS */}
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
        </div>
      </div>
    </>
  );
}
