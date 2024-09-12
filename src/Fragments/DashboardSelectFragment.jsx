import { HiDocumentText } from "react-icons/hi2";
import Dashboard from "../Components/Dashboard/Index";

const DashboardSelectFragment = () => {
  return (
    <Dashboard>
      <HiDocumentText className="h-16 w-16" />
      <p className="text-2xl">Select note to view</p>
      <p className="max-w-md text-center text-gray-500">
        Choose a note from the list on the left to view its contents, or create
        a new note to add to your collection.
      </p>
    </Dashboard>
  );
};

export default DashboardSelectFragment;
