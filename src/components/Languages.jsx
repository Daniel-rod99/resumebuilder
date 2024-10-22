import LanguagesItem from "./LanguagesItem";
import { motion, Reorder } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

export default function Languages() {
  const [language, setLanguage] = useState([]);
  const addLanguage = () => {
    setLanguage((prev) => [...prev, prev.length + 1]);
  };

  const handleDelete = (value) => {
    setLanguage((prev) => prev.filter((exp) => exp !== value));
  };

  return (
    <>
      <Reorder.Group axis="y" onReorder={setLanguage} values={language}>
        {language.map((value) => (
          <LanguagesItem key={value} value={value} onDelete={handleDelete} />
        ))}
      </Reorder.Group>
      <motion.h2
        onClick={addLanguage}
        className="flex items-center gap-3 mt-3 text-blue-500 cursor-pointer text-small"
      >
        <FaPlus />{" "}
        {language.length === 0 ? "Add language" : "Add one more language"}
      </motion.h2>
    </>
  );
}
