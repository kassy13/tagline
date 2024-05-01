// import React from "react";
import { CgCopyright } from "react-icons/cg";

const DashFooter = () => {
  return (
    <section className="bg-black text-green-300 fixed bottom-0 w-full">
      <p className="flex items-center justify-center gap-2 h-20">
        Copy Right Reserve <CgCopyright />
      </p>
    </section>
  );
};

export default DashFooter;
