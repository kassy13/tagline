import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { section } from "./Section";
import { RiStarFill } from "react-icons/ri";
import { animateScroll } from "react-scroll";

const HomePopular = () => {
  const { id } = useParams();

  const location = useLocation();

  // To make sure that when i click on anylink it moves to the top of the page
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 500,
    });
  }, [location.pathname]);

  // Find the section object with the matching ID
  const selectedSection = section.find((sect) => sect.id === parseInt(id));

  // Filter sections to exclude the selected one
  const otherSections = section.filter((sect) => sect.id !== parseInt(id));

  return (
    <section className="flex flex-col mt-8 md:flex-row">
      <div className="px-8 md:px-14 h-fit">
        <p className="text-center mb-4">
          <span className="bg-green-300 text-green-800 p-1 rounded-2xl px-8">
            Popular Tourist Sites
          </span>
        </p>
        <h1 className="text-center font-bold text-xl">
          Visit & enjoy adventure life with full of dreams
        </h1>
        <div className="w-full flex py-4 flex-col relative md:flex-row md:gap-10 md:py-6">
          {selectedSection && (
            <div key={selectedSection.id} className="relative group">
              <p className="absolute right-0">{selectedSection.feature}</p>
              <div className="relative w-full">
                <img
                  src={selectedSection.img}
                  alt="image"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="before:block before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:z-10"></div>
              </div>
              <div className="bg-white relative shadow-md py-4 px-4 rounded-3xl bottom-[1.5rem] z-10 md:bottom-[2rem]  mb-6  ">
                <span className="flex pb-2 text-orange-400 hover:text-orange-600 ">
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                  <RiStarFill />
                </span>
                <h2 className="font-bold text-green-300 hover:text-green-700">
                  {selectedSection.title}
                </h2>
                <p className="flex gap-1 items-center py-2 ">
                  {selectedSection.text}
                </p>
                <p className="flex items-center gap-1 pb-6">
                  {selectedSection.price}
                </p>
                <hr />
                <div className="flex justify-between py-3">
                  <p className="flex items-center gap-1">
                    {selectedSection.footer.day}
                  </p>
                  <p className="flex items-center gap-1">
                    {selectedSection.footer.people}
                  </p>
                  <p className="flex items-center gap-1">
                    {selectedSection.footer.explore}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Render other sections */}
      <div className="px-8 w-full md:mr-10 md:px-0">
        <h2 className="text-center font-bold text-xl mt-8 mb-4">
          Other Popular Tourist Sites
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {otherSections.map((sect) => (
            <div key={sect.id} className="bg-white shadow-md rounded-xl p-4">
              <div className="relative w-full">
                <img
                  src={sect.img}
                  alt="image"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="before:block before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:z-10 "></div>
              </div>
              <Link
                to={`/popular/${sect.id}`}
                className="font-bold text-green-300 hover:text-green-700"
              >
                {sect.title}
              </Link>
              <p className="flex gap-1 items-center py-2 ">{sect.text}</p>
              <p className="flex items-center gap-1 pb-6">{sect.price}</p>
              <hr />
              <div className="flex justify-between py-3">
                <p className="flex items-center gap-1">{sect.footer.day}</p>
                <p className="flex items-center gap-1">{sect.footer.people}</p>
                <p className="flex items-center gap-1">{sect.footer.explore}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePopular;
