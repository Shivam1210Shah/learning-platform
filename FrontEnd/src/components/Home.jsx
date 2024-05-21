import React from "react";
import Course from "./Course";

const Home = () => {
  return (
    <div className="herodiv  py-2">
      <div className="herodiv flex text-[#8B77E8] my-16 px-32">
        <div className="left flex flex-col items-start justify-center w-[35%]">
          <h3 className="text-5xl font-semibold">
            Unlock Your Potential with Cutting-Edge Learning{" "}
          </h3>
          <p className="text-sm leading-4 my-2">
            From professional development to personal enrichment, find courses
            that inspire and empower you to reach new heights.
          </p>
          <button className="bg-[#8B77E8] text-white px-2 py-1 rounded">
            Join Now
          </button>
        </div>
        <div className="right w-[65%] ">
          <img
            src="https://img.freepik.com/premium-vector/young-caucasian-man-with-laptop-sitting-big-book-stack-online-education-concept-remote-studying-concept-flat-style-vector-illustration_285336-2679.jpg?w=996"
            alt=""
          />
        </div>
      </div>

      <Course />
    </div>
  );
};

export default Home;
