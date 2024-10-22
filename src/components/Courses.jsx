import CoursesItem from "./CoursesItem";
import { motion, Reorder } from "framer-motion";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const addCourses = () => {
    setCourses((prev) => [...prev, prev.length + 1]);
  };

  const handleDelete = (value) => {
    setCourses((prev) => prev.filter((exp) => exp !== value));
  };

  return (
    <>
      <Reorder.Group axis="y" onReorder={setCourses} values={courses}>
        {courses.map((value) => (
          <CoursesItem key={value} value={value} onDelete={handleDelete} />
        ))}
      </Reorder.Group>
      <motion.h2
        onClick={addCourses}
        className="flex items-center gap-3 mt-3 text-blue-500 cursor-pointer text-small"
      >
        <FaPlus /> {courses.length === 0 ? "Add Course" : "Add one more course"}
      </motion.h2>
    </>
  );
}
