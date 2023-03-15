import React from "react";
// import DetailsModal from "./DetailsModal";

const ProjectCard = ({ p }) => {
  // const [details, setDetails] = useState("");

  return (
    <>
      <div className="rounded-lg group w-full relative border-2 hover:border-sky-500 cursor-pointer overflow-hidden">
        <img
          src={p.img}
          alt=""
          className="rounded-lg group-hover:scale-110 transition ease duration-200 w-full"
        />
        <div className="absolute h-full w-full top-0 bg-black/80 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition ease duration-200 p-4">
          <h2 className="text-center text-xl font-semibold text-sky-500">
            {p.name}
          </h2>
          <div className="mt-5 flex gap-2 justify-center">
            <a
              href={p.link}
              target="_blank"
              className="px-2 py-1 border border-sky-500 hover:bg-sky-500 rounded"
              rel="noreferrer"
            >
              Visit
            </a>
            <label
              href="abc"
              htmlFor="detaillsModal"
            //   onClick={() => setDetails(p)}
              className="cursor-pointer px-2 py-1 border border-sky-500 hover:bg-sky-500 rounded"
            >
              Details
            </label>
            <a
              href="abc"
              className="px-2 py-1 border border-sky-500 hover:bg-sky-500 rounded"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      {/* <DetailsModal details={details}></DetailsModal> */}
    </>
  );
};

export default ProjectCard;
