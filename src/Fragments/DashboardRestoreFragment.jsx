import Dashboard from "../Components/Dashboard/Index";
import { HiOutlineArrowPath } from "react-icons/hi2";

const DashboardRestoreFragment = () => {
  return (
    <Dashboard>
      <HiOutlineArrowPath className="h-16 w-16" />
      <p className="text-2xl">Restore “Reflection on the Month of June”</p>
      <p className="max-w-md text-center text-gray-500">
        Choose a note from the list on the left to view its contents, or create
        a new note to add to your collection.
      </p>
    </Dashboard>
  );
};

export default DashboardRestoreFragment;
