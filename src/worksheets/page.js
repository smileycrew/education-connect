import { useEffect, useState } from "react";
import { deleteWorksheet, getWorksheets } from "../endpoints/worksheets";
import { Link, useNavigate } from "react-router-dom";
import { WorksheetsAside } from "./aside";
import { SectionDivider } from "../components/section-divider"
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { deleteLike, getUserLikesExpandWorksheet } from "../endpoints/likes"
import { AiOutlineFileAdd } from "react-icons/ai";

export const Worksheets = ({ userId }) => {
  // hooks
  const navigate = useNavigate();
  // state
  const [worksheets, setWorksheets] = useState([]);
  const [worksheetToDisplay, setWorksheetsToDisplay] = useState([])
  const [userLikesExpandWorksheet, setUserLikesExpandWorksheet] = useState([])
  // handle function to fetch all worksheets
  const handleGetWorksheets = () => getWorksheets().then((data) => {
    setWorksheets(data)
    setWorksheetsToDisplay(data)
  });
  // handle get user likes (expanded)
  const handleGetUserLikesExpandWorksheet = () => { getUserLikesExpandWorksheet(userId).then(setUserLikesExpandWorksheet) }
  // handle function to delete worksheet
  const handleDeleteWorksheet = (worksheetId) => deleteWorksheet(worksheetId).then(() => handleGetWorksheets());
  // handle function to delete the like relationship
  const handleDeleteLike = (worksheetId) => {
    const likeId = userLikesExpandWorksheet.find((like) => like.userId === userId && like.worksheetId === worksheetId).id
    deleteLike(likeId).then(() => {
      handleGetWorksheets()
    })
  }
  // use effect
  useEffect(() => {
    handleGetWorksheets();
    handleGetUserLikesExpandWorksheet()
  }, [userId]);

  return (
    <div className="flex bg-gray-100">
      <WorksheetsAside userLikesExpandWorksheet={userLikesExpandWorksheet} worksheets={worksheets} setWorksheetsToDisplay={setWorksheetsToDisplay} />
      <section className="flex flex-col ">
        <div className="flex items-center">
          <div>
            <SectionDivider title={"Worksheets"} />
          </div>
          <div className="self-center">
            <p className="text-3xl">
              <Link to={"new"}>
                +
              </Link>
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-5">
          {worksheetToDisplay.map((worksheet, index) => (
            <li className="bg-white border flex flex-col hover:scale-105 hover:shadow-lg rounded shadow-md transition" key={index}>
              <div className="border-b">
                <img alt="" className="h-60 p-1" onClick={() => navigate(`${worksheet.id}`)} src={worksheet.imageUrl} />
              </div>
              <div className="flex flex-col">
                <div className="p-1 self-center">
                  <p>{worksheet.title}</p>
                </div>
                <div className="flex justify-around p-1">
                  {worksheet.userId === userId &&
                    <>
                      <div>
                        <button className="bg-blue-500 hover:bg-blue-400 rounded text-white w-14">Edit</button>
                      </div>
                      <div>
                        <button className="bg-red-500 hover:bg-red-400 rounded text-white w-14" onClick={() => handleDeleteWorksheet(worksheet.id)}>
                          Delete
                        </button>
                      </div>
                    </>
                  }
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};