import EducationItem from "./EducationItem";
import { motion, Reorder } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

export default function Education() {
  const [education, setEducation] = useState([]);
  const addEducation = () => {
    setEducation((prev) => [...prev, prev.length + 1]);
  };

  const handleDelete = (value) => {
    setEducation((prev) => prev.filter((exp) => exp !== value));
  };

  return (
    <>
      <Reorder.Group axis="y" onReorder={setEducation} values={education}>
        {education.map((value) => (
          <EducationItem key={value} value={value} onDelete={handleDelete} />
        ))}
      </Reorder.Group>
      <motion.h2
        onClick={addEducation}
        className="flex items-center gap-3 mt-3 text-blue-500 cursor-pointer text-small"
      >
        <FaPlus />{" "}
        {education.length === 0 ? "Add education" : "Add one more education"}
      </motion.h2>
    </>
  );
}
