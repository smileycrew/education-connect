import { useEffect, useState } from "react";
import { deleteWorksheet, getWorksheets } from "../endpoints/worksheets";
import { useNavigate } from "react-router-dom";
import { WorksheetsAside } from "./aside";
import { SectionDivider } from "../components/section-divider"

export const Worksheets = ({ userId }) => {

  const navigate = useNavigate();
  // state
  const [worksheets, setWorksheets] = useState([]);
  const [worksheetToDisplay, setWorksheetsToDisplay] = useState([])
  // handle function to fetch all worksheets
  const handleGetWorksheets = () => getWorksheets().then((data) => {
    setWorksheets(data)
    setWorksheetsToDisplay(data)
  });

  const handleDeleteWorksheet = (worksheetId) =>
    deleteWorksheet(worksheetId).then(() => handleGetWorksheets());
  // use effect
  useEffect(() => {
    handleGetWorksheets();
  }, []);

  return (
    <div className="flex">
      <WorksheetsAside worksheets={worksheets} setWorksheetsToDisplay={setWorksheetsToDisplay} />
      <section className="flex flex-col ">
        <SectionDivider title={"Worksheets"} />
        <ul className="flex flex-wrap gap-5">
          {worksheetToDisplay.map((worksheet, index) => (
            <li className="flex flex-col bg-white border" key={index}>
              <div className="border">
                <img alt="" className="h-60" onClick={() => navigate(`${worksheet.id}`)} src={worksheet.imageUrl} />
              </div>
              {/* edit / delete containers */}
              <div className="border flex flex-col">
                <div className="p-1 self-center">
                  <p>{worksheet.title}</p>
                </div>
                <div className="flex justify-around p-1">
                  {worksheet.userId === userId ?
                    <>
                      <div>
                        <button className="bg-blue-500 hover:bg-blue-400 rounded text-white w-14">edit</button>
                      </div>
                      <div>
                        <button className="bg-red-500 hover:bg-red-400 rounded text-white w-14" onClick={() => handleDeleteWorksheet(worksheet.id)}>
                          delete
                        </button>
                      </div>
                    </>
                    :
                    <div>
                      <button>👍</button>
                    </div>}
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