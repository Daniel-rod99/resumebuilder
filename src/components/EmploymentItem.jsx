import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { MdDragIndicator } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GoKebabHorizontal } from "react-icons/go";
import {
  motion,
  AnimatePresence,
  Reorder,
  useDragControls,
} from "framer-motion";
import { useState } from "react";
import {
  Input,
  Textarea,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { DateRangePicker } from "@nextui-org/date-picker";
import { FaTrashAlt } from "react-icons/fa";

export default function EmploymentItem({ value, onDelete }) {
  const dragControls = useDragControls();

  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const toggleShowMoreDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  const [jobTitle, setJobTitle] = useState("");
  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  return (
    <>
      <Reorder.Item
        value={value}
        dragControls={dragControls}
        dragListener={true}
        className="flex my-2 select-none"
      >
        <MdDragIndicator
          className="mt-3 text-2xl select-none hover:cursor-grab"
          onPointerDown={(e) => dragControls.start(e)}
        />
        <Card className="w-full">
          <motion.div
            onClick={toggleShowMoreDetails}
            initial={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardHeader className="flex justify-between">
              <motion.h1 className="text-blue-500">
                {jobTitle || "Not Specified"}
              </motion.h1>
              <motion.div className="flex gap-3">
                <Dropdown>
                  <DropdownTrigger>
                    <span>
                      <GoKebabHorizontal />
                    </span>
                  </DropdownTrigger>
                  <DropdownMenu>
                    <DropdownItem
                      key="delete"
                      color="danger"
                      className="text-danger"
                      onClick={() => onDelete(value)}
                    >
                      <span className="flex items-center gap-3">
                        <FaTrashAlt /> Delete
                      </span>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <motion.span animate={{ rotate: showMoreDetails ? 180 : 0 }}>
                  <IoIosArrowDropdownCircle className="text-blue-500" />
                </motion.span>
              </motion.div>
            </CardHeader>
          </motion.div>

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
                    <Input
                      type="text"
                      label="Job Title"
                      value={jobTitle}
                      onChange={handleJobTitleChange}
                    />
                    <Input type="Text" label="Employer" isClearable />
                  </div>
                  <div className="flex flex-col gap-1 lg:gap-3 lg:flex-row">
                    <DateRangePicker
                      granularity="month"
                      dateFormat="MM/yyyy"
                      label="Start & End Date"
                      errorMessage="Please enter a valid date."
                      endContent=""
                    />
                    <Input type="text" label="City" />
                  </div>
                  <Textarea
                    label="Description"
                    placeholder="e.g. Created and implemented lesson plans based on child-led interest and curiosities"
                  />
                </CardBody>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </Reorder.Item>
    </>
  );
}
