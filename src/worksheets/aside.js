import { useEffect, useState } from "react";
import { getGrades } from "../endpoints/grades"
import { getSubjects } from "../endpoints/subjects"

export const WorksheetsAside = ({ worksheets, setWorksheetsToDisplay }) => {
  // state
  const [grades, setGrades] = useState([]);
  const [subjects, setSubjects] = useState([])
  // handle function to filter worksheets by grade
  const handleFilterByGrades = (gradeId) => {
    const filteredWorksheets = worksheets.filter((worksheet) => worksheet.gradeId === gradeId)
    setWorksheetsToDisplay(filteredWorksheets)
  }
  // handle function to filter worksheets by subject
  const handleFilterBySubjects = (subjectId) => {
    const filteredWorksheets = worksheets.filter((worksheet) => worksheet.subjectId === subjectId)
    setWorksheetsToDisplay(filteredWorksheets)
  }
  // handle function to get grades and subjects from database
  const handleGetGrades = () => getGrades().then(setGrades);
  const handleGetSubjects = () => getSubjects().then(setSubjects)
  // use effect on mount
  useEffect(() => {
    handleGetGrades();
    handleGetSubjects()
  }, [])
  // return component
  return (
    <aside className="flex flex-col sm:mx-5 overflow-hidden pt-5">
      <div>
        <p>Filters</p>
      </div>
      <nav>
        <p className="text-lg">By Favorites</p>
        <div className="border-b border-gray-900/10 p-4">
          <button className="hover:text-blue-800 hover:underline rounded text-gray-500">Favorites</button>
        </div>
        <p className="text-lg">By Grade</p>
        <ul className="flex flex-col gap-2 border-b border-gray-900/10 p-4">
          {grades.map((grade, index) => (
            <li key={index}>
              <button className="hover:text-blue-800 hover:underline rounded text-gray-500" onClick={() => handleFilterByGrades(grade.id)} value={grade.id}>
                {grade.name}
              </button>
            </li>
          ))}
        </ul>
        <p className="text-lg">By Subject</p>
        <ul className="flex flex-col gap-2 pt-2 p-4">
          {subjects.map((subject, index) => (
            <li key={index}>
              <button className="hover: hover:text-blue-800 hover:underline rounded text-gray-500" onClick={() => handleFilterBySubjects(subject.id)} value={subject.id}>
                {subject.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
