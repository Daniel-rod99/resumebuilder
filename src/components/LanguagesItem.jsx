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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { FaTrashAlt } from "react-icons/fa";

const levelLanguages = [
  { key: "Native speaker", label: "Native speaker" },
  { key: "Highly proficient", label: "Highly proficient" },
  { key: "Very good command", label: "Very good command" },
  { key: "Good working knowlwdge", label: "Good working knowlwdge" },
  { key: "Working knowlwdge", label: "Working knowlwdge" },
  { key: "C2", label: "C2" },
  { key: "C1", label: "C1" },
  { key: "B2", label: "B2" },
  { key: "B1", label: "B1" },
  { key: "A2", label: "A2" },
  { key: "A1", label: "A1" },
];

export default function LanguagesItem({ value, onDelete }) {
  const dragControls = useDragControls();

  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const toggleShowMoreDetails = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  const [languageTitle, setLanguageTitle] = useState("");
  const handleLanguagesTitleChange = (e) => {
    setLanguageTitle(e.target.value);
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
                {languageTitle || "Not Specified"}
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
                  <div className="flex flex-col items-center gap-3 lg:flex-row">
                    <Input
                      type="text"
                      label="Language"
                      value={languageTitle}
                      onChange={handleLanguagesTitleChange}
                    />
                    <Select label="Level" className="max-w-xs">
                      {levelLanguages.map((language) => (
                        <SelectItem key={language.key}>
                          {language.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </CardBody>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </Reorder.Item>
    </>
  );
}
