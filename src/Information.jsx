import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import { Divider } from "@nextui-org/divider";
import ProfesionalSummary from "./components/ProfesionalSummary";
import EmploymentHistory from "./components/EmploymentHistory";
import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/Education";

export default function Information() {
  const navigate = useNavigate();
  const handleNavigateApp = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-full">
          <Card>
            {/* Personal Details */}
            <CardHeader>
              <h1 className="text-2xl font-bold">Personal Details</h1>
            </CardHeader>
            <CardBody>
              <PersonalDetails />
            </CardBody>

            {/* PROFESIONAL SUMMARY */}
            <Divider className="w-full m-3" />
            <CardHeader>
              <h1 className="text-2xl font-bold">Professional Summary</h1>
            </CardHeader>
            <CardBody>
              <ProfesionalSummary />
            </CardBody>

            {/* EMPLOYMENT  HISTORY */}
            <Divider className="m-3" />
            <CardHeader className="block">
              <h1 className="text-2xl font-bold ">Employment History</h1>
              <h3 className="text-gray-500 text-small">
                Describe your relevant work experience from the last few years,
                including your positions and achievements.
              </h3>
            </CardHeader>
            <CardBody>
              <EmploymentHistory />
            </CardBody>

            {/* EDUCATION */}
            <Divider className="m-3" />
            <CardHeader className="block">
              <h1 className="text-2xl font-bold ">Education</h1>
              <h3 className="text-gray-500 text-small">
                A varied education on your resume sums up the value that your
                learnings and background will bring to job.
              </h3>
            </CardHeader>
            <CardBody>
              <Education />
            </CardBody>

            {/* END */}
          </Card>
        </div>
      </div>
      <div className="flex mt-6 justify-evenly">
        <Button className="bgButtons" onClick={handleNavigateApp}>
          <FaArrowLeft /> Back
        </Button>
        <Button className="bgButtons">
          Create <FaArrowRight />
        </Button>
      </div>
    </>
  );
}
