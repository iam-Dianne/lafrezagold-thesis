import React from "react";
import Button from "./Button";

const AccomodationsTable = () => {
  return (
    <table className="w-full">
      <thead className="mb-2">
        <tr className="mb-2">
          <th className="w-14">#</th>
          <th className="w-3/5">Name</th>
          <th className="w-1/3">Type</th>
          <th className="w-1/3"></th>
        </tr>
      </thead>
      <tbody>
        <tr className=" py-1">
          <td className="w-14 py-1 px-2 border">1</td>
          <td className="w-3/5 py-1 px-2 border">DAISY (GROUND FLOOR)</td>
          <td className="w-1/3 py-1 px-2 border">Room</td>
          <td className="w-1/3 py-1 px-2">
            <div className="ml-4 flex justify-center gap-2 ">
              <Button
                buttonName={"Edit"}
                buttonColor={"bg-yellow-400"}
                buttonHoverColor={"hover:bg-yellow-300"}
              />
              <Button
                buttonName={"Delete"}
                buttonColor={"bg-red-600"}
                buttonHoverColor={"hover:bg-red-500"}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AccomodationsTable;
