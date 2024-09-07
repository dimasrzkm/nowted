import { Fragment } from "react";
import { HiArchiveBox, HiDocumentText, HiFolderMinus, HiFolderOpen, HiMagnifyingGlass, HiMiniFolderPlus, HiMiniPlus, HiOutlinePencil, HiOutlineStar, HiTrash } from "react-icons/hi2";

function App() {
  return (
    <Fragment>
      <main className="flex flex-row h-screen w-screen bg-slate-400 text-slate-100 font-sans">
        {/* test */}
        <div className="w-1/5 bg-[#181818] py-8 px-5 flex flex-col gap-y-5">

          <div className="flex justify-between">
            <div className="flex gap-x-2">
              <h1 className="font-kaushan text-neutral-100 text-xl">Nowted</h1>
              <HiOutlinePencil className="h-4 w-4 text-neutral-100" />
            </div>
            <HiMagnifyingGlass className="text-neutral-100 h-6 w-6" />
          </div>

          <button className="bg-white/5 flex p-3 w-full items-center justify-center font-medium gap-x-2">
            <HiMiniPlus />
            New Note
          </button>

          <div className="font-medium text-sm text-gray-400">
            <h4 className="mb-3">Recents</h4> 
            <div className="flex flex-col space-y-4">
              <a className="flex gap-x-2">
                <HiDocumentText/>
                Reflection on the Month of June
              </a>
               <a className="flex gap-x-2">
                <HiDocumentText/>
                Project Proposal
              </a>
               <a className="flex gap-x-2">
                <HiDocumentText/>
                Travel itinerary
              </a>
            </div>
          </div>

          <div className="text-sm flex flex-col space-y-4 text-gray-400">
            <div className="flex justify-between items-center">
              <h4>Folders</h4>
              <HiMiniFolderPlus className="w-5 h-5"/>
            </div>
            <div className="flex gap-x-4">
              <HiFolderOpen className="h-4 w-4" />
              <p>My New Folder</p>
            </div>
             <div className="flex gap-x-4">
              <HiFolderMinus className="h-4 w-4" />
              <p>Personal</p>
            </div>
             <div className="flex gap-x-4">
              <HiFolderMinus className="h-4 w-4" />
              <p>Work</p>
            </div>
          </div>

          <div className="text-sm text-gray-400 flex flex-col space-y-4">
            <h4>More</h4>
            <div className="flex gap-x-4">
              <HiOutlineStar className="h-4 w-4" />
              <p>Favorites</p>
            </div>
             <div className="flex gap-x-4">
              <HiTrash className="h-4 w-4" />
              <p>Trash</p>
            </div>
            <div className="flex gap-x-4">
              <HiArchiveBox className="h-4 w-4" />
              <p>Archived Notes</p>
            </div>
          </div>

        </div>
        <div className="w-1/4 bg-[#1C1C1C] py-8 px-5 flex flex-col space-y-4">

          <h1 className="text-neutral-100 text-xl font-medium">Person</h1>

          <div className="flex flex-col space-y-4 overflow-auto scrollbar-none">
             
            <div className="bg-white/5 w-full p-5">
              <h2 className="text-white font-bold leading-tight">My goals for the Next Year</h2>
              <p className="text-gray-400 line-clamp-1">
                <span className="inline-block mr-2 mt-2">31/12/2022</span>
                Its hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me.
              </p>
            </div>

            <div className="bg-white/5 w-full p-5">
              <h2 className="text-white font-bold leading-tight">My goals for the Next Year</h2>
              <p className="text-gray-400 line-clamp-1">
                <span className="inline-block mr-2 mt-2">31/12/2022</span>
                Its hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me.
              </p>
            </div> 

            <div className="bg-white/5 w-full p-5">
              <h2 className="text-white font-bold leading-tight">My goals for the Next Year</h2>
              <p className="text-gray-400 line-clamp-1">
                <span className="inline-block mr-2 mt-2">31/12/2022</span>
                Its hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me.
              </p>
            </div>

            <div className="bg-white/5 w-full p-5">
              <h2 className="text-white font-bold leading-tight">My goals for the Next Year</h2>
              <p className="text-gray-400 line-clamp-1">
                <span className="inline-block mr-2 mt-2">31/12/2022</span>
                Its hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me.
              </p>
            </div>

            <div className="bg-white/5 w-full p-5">
              <h2 className="text-white font-bold leading-tight">My goals for the Next Year</h2>
              <p className="text-gray-400 line-clamp-1">
                <span className="inline-block mr-2 mt-2">31/12/2022</span>
                Its hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me.
              </p>
            </div>

            <div className="bg-white/5 w-full p-5">
              <h2 className="text-white font-bold leading-tight">My goals for the Next Year</h2>
              <p className="text-gray-400 line-clamp-1">
                <span className="inline-block mr-2 mt-2">31/12/2022</span>
                Its hard to believe that June is already over! Looking back on the month, there were a few highlights that stand out to me.
              </p>
            </div>

          </div>

        </div>

        {/*Content Section*/}
        <div className="flex-1 bg-[#181818] text-slate-100">

          <div className="flex flex-col justify-center items-center h-screen space-y-2">
            <HiDocumentText className="h-16 w-16"/>
            <p className="text-2xl">Select note to view</p>
            <p className="max-w-md text-center text-gray-500">Choose a note from the list on the left to view its contents, or create a new note to add to your collection.</p>
          </div>

        </div>

      </main>
    </Fragment>
  );
}

export default App;
