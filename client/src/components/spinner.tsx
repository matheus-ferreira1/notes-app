import React from "react";

const Spinner = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Loader2 size={40} className="animate-spin" />
    </div>
  );
};

export default Spinner;
