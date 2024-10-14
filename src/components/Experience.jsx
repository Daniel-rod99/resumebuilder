import ItemExperience from "./ItemExperience";
import { motion, Reorder } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

export default function Experience() {
  const [experience, setExperience] = useState([]);
  const addExperience = () => {
    setExperience((prev) => [...prev, prev.length + 1]);
  };

  return (
    <>
      <Reorder.Group
        axis="y"
        onReorder={setExperience}
        values={experience}
        className="mt-4"
      >
        {experience.map((item) => (
          <ItemExperience key={item} value={item} />
        ))}
      </Reorder.Group>
      <motion.h1
        onClick={addExperience}
        className="flex items-center gap-3 mt-3 text-blue-500 cursor-pointer text-small"
      >
        <FaPlus /> Add One More Employment
      </motion.h1>
    </>
  );
}
