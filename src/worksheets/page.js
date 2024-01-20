import { useEffect, useState } from "react";
import { deleteWorksheet, getWorksheets } from "../endpoints/worksheets";
import { Link, useNavigate } from "react-router-dom";
import { getGrades } from "../endpoints/grades";
import { WorksheetsAside } from "./aside";
import { SectionDivider } from "../components/section-divider"

export const Worksheets = () => {

  const navigate = useNavigate();

  const [worksheets, setWorksheets] = useState([]);
  const [grades, setGrades] = useState([]);

  const handleGetWorksheets = () => getWorksheets().then(setWorksheets);

  const handleDeleteWorksheet = (worksheetId) =>
    deleteWorksheet(worksheetId).then(() => handleGetWorksheets());
  const handleGetGrades = () => getGrades().then(setGrades);

  useEffect(() => {
    handleGetWorksheets();
    handleGetGrades();
  }, []);

  return (
    <div className="flex">
      <WorksheetsAside grades={grades} />
      <section className="flex flex-col ">
        <SectionDivider title={"Worksheets"} />
        <ul className="flex flex-wrap gap-5">
          {worksheets.map((worksheet, index) => (
            <li className="flex flex-col bg-white border border-black" key={index}>
              <div>
                <img alt="" className="h-60" onClick={() => navigate(`${worksheet.id}`)} src={worksheet.imageUrl} />
              </div>
              {/* edit / delete containers */}
              <div className="flex flex-col">
                <div className="p-1 self-center">
                  <p>{worksheet.title}</p>
                </div>
                <div className="flex justify-around p-1">
                  <div>
                    <button className="bg-blue-500 hover:bg-blue-400 rounded text-white w-14">edit</button>
                  </div>
                  <div>
                    <button className="bg-red-500 hover:bg-red-400 rounded text-white w-14" onClick={() => handleDeleteWorksheet(worksheet.id)}>delete</button>
                  </div>
                </div>
              </div>
              {/* edit / delete containers */}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
{/* <img
                alt=""
                className=""
                onClick={() => navigate(`${worksheet.id}`)}
                src={worksheet.imageUrl}
              />
              <p className="">{worksheet.title}</p>
              <div className="">
                <button
                  className=""
                  onClick={() => {
                    navigate(`edit/${worksheet.id}`);
                  }}
                >
                  Edit
                </button>
                <button
                  className=""
                  onClick={() => {
                    handleDeleteWorksheet(worksheet);
                  }}
                >
                  Delete
                </button>
              </div> */}