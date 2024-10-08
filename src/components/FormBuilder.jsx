import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

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
            <h1 className="text-2xl font-bold">Personal Information</h1>
          </CardHeader>
          <CardBody className="gap-3 ">
            <div className="flex flex-col gap-3 lg:flex-row">
              <Input type="text" label="Name" isRequired />
              <Input type="text" label="Last Name" isRequired />
            </div>
            <div className="flex flex-col gap-3 lg:flex-row">
              <Input type="email" label="Email" isRequired />
              <Input type="phone" label="Phone" />
            </div>
            <Input type="text" label="Address" />
          </CardBody>
          <CardFooter>
            <h1>hola</h1>
          </CardFooter>
        </Card>
      </motion.div>
      <motion.div className="flex justify-between mt-6">
        <Button className="bgButtons" onClick={handleNavigateApp}>
          <FaArrowLeft />
        </Button>
        <Button className="bgButtons">
          <FaArrowRight />
        </Button>
      </motion.div>
    </>
  );
}
