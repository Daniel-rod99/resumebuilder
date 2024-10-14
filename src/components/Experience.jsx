import ItemExperience from "./ItemExperience";
import { motion, Reorder } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

export default function Experience() {
  const [experience, setExperience] = useState([]);
  const addExperience = () => {
    setExperience((prev) => [...prev, prev.length + 1]);
  };

  const handleDelete = (value) => {
    setExperience((prev) => prev.filter((exp) => exp !== value));
  };

  return (
    <>
      <Reorder.Group axis="y" onReorder={setExperience} values={experience}>
        {experience.map((value) => (
          <ItemExperience key={value} value={value} onDelete={handleDelete} />
        ))}
      </Reorder.Group>
      <motion.h2
        onClick={addExperience}
        className="flex items-center gap-3 mt-3 text-blue-500 cursor-pointer text-small"
      >
        <FaPlus />{" "}
        {experience.length === 0 ? "Add Employment" : "Add One More Employment"}
      </motion.h2>
    </>
  );
}