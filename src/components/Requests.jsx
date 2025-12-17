import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";

const Requests = () => {
  const requests = useSelector((store) => store.request);
  const dispatch = useDispatch();
  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/recieved", {
        withCredentials: true,
      });
      dispatch(addRequest(res.data.data));
    } catch (err) {}
  };

  useEffect(() => {
    fetchRequest();
  }, []);
  if (!requests) return;
  if (requests.length === 0)
    return <h1 className="font-bold text-2xl">No Connections found</h1>;
  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-4xl">Connection Request</h1>
      {requests.map((request) => {
        const {
          _id,
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
          skills,
        } = request.fromUserId;
        return (
          <div
            key={_id}
            className=" flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto"
          >
            <div>
              <img
                alt="photo"
                src={photoUrl}
                className="w-30 h-20 rounded-full"
              ></img>
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              <p>{about}</p>
              {age && gender && <p>{age + " " + gender}</p>}
              {skills && <p>{skills}</p>}
            </div>
            <div>
              <button className="btn btn-primary mx-2">Reject</button>
              <button className="btn btn-secondary mx-2">Accept</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
