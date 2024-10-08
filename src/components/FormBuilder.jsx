import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function FormBuilder() {
  const navigate = useNavigate();
  const handleNavigateApp = () => {
    navigate(-1);
  };

  return (
    <>
      <motion.div>
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold">Personal Details</h1>
          </CardHeader>
          <CardBody className="gap-3 ">
            <div className="flex justify-center py-7 text-9xl">
              <PiUserCirclePlusLight className="transition cursor-pointer hover:scale-110" />
            </div>
            <div className="flex flex-col gap-3 lg:flex-row">
              <Input type="text" label="First Name" isRequired />
              <Input type="text" label="Last Name" isRequired />
            </div>
            <div className="flex flex-col gap-3 lg:flex-row">
              <Input type="email" label="Email" isRequired />
              <Input type="phone" label="Phone" />
            </div>
            <Input type="text" label="Address" />
          </CardBody>
          <CardFooter>
            <h1 className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
              Add More Details <IoIosArrowDropdownCircle />
            </h1>
          </CardFooter>
          <CardBody>
            <motion.div className="gap-3">
              <div className="flex flex-col gap-3 lg:flex-row">
                <Input type="text" label="City" />
                <Input type="text" label="Postal Code" />
              </div>
              <div className="flex flex-col gap-3 lg:flex-row">
                <Input type="text" label="Nationality" />
                <Input type="text" label="Date Of Birth" />
              </div>
            </motion.div>
          </CardBody>
        </Card>
      </motion.div>
      <motion.div className="flex mt-6 justify-evenly">
        <Button className="bgButtons" onClick={handleNavigateApp}>
          <FaArrowLeft /> Prev
        </Button>
        <Button className="bgButtons">
          Next <FaArrowRight />
        </Button>
      </motion.div>
    </>
  );
}
