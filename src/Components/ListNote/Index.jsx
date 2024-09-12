import { Fragment } from "react";

const ListNote = () => {
  return (
    <Fragment>
      <div className="bg-white/5 w-full p-5">
        <h2 className="text-white font-bold leading-tight">My Goals the Next Year</h2>
        <p className="text-gray-400 line-clamp-1">
          <span className="inline-block mr-2 mt-2">31/12/2022</span>
          Its hard to believe that June is already over! Looking back on the
          month, there were a few highlights that stand out to me.{" "}
        </p>
      </div>
    </Fragment>
  );
};

export default ListNote;
