"use client";

import { useEffect, useState } from "react";
import styles from "./designcourses.module.css"; // Custom CSS Module

export default function DesignCourses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  // Fetch the courses data from API
  useEffect(() => {
    fetch("/api/designcourses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Filter courses dynamically
  const filteredCourses = courses.filter((course) => {
    return (
      course.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? course.level === filter : true)
    );
  });

  return (
    <div className={styles.container}>
      <h1>Design Courses</h1>

      {/* Search and Filter Controls */}
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      {/* Display Filtered Courses */}
      <div className={styles.courses}>
        {filteredCourses.map((course) => (
          <div key={course.id} className={styles.card}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Level:</strong> {course.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
