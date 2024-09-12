import { Fragment, useState, useEffect } from "react";
import {
  HiArchiveBox,
  HiArchiveBoxXMark,
  HiDocumentText,
  HiFolderMinus,
  HiFolderOpen,
  HiMagnifyingGlass,
  HiMiniFolderPlus,
  HiMiniPlus,
  HiOutlinePencil,
  HiOutlineStar,
  HiTrash,
} from "react-icons/hi2";
import DashboardSelectFragment from "./Fragments/DashboardSelectFragment";
import ListNote from "./Components/ListNote/Index";
import Menu from "./Components/Menu/Index";

function App() {
  const [newFolder, setNewFolder] = useState(false);
  const [category, setCategory] = useState([]);

  const handleTest = (e) => {
    if (e.key === "Escape" || e.key === "Enter") {
      let data;

      setNewFolder(false);

      if (category.length <= 0) {
        data = [
          {
            id: 1,
            tag: e.target.value,
          },
        ];
      } else {
        data = [
          ...category,
          {
            id: category[category.length - 1].id + 1,
            tag: e.target.value,
          },
        ];
      }
      localStorage.setItem("category", JSON.stringify(data));
      setCategory(data);
    }
  };

  useEffect(() => {
    let dataCategory = JSON.parse(localStorage.getItem("category")) || [];
    setCategory(dataCategory);
  }, []);

  return (
    <Fragment>
      <main className="flex flex-row h-screen w-screen bg-slate-400 text-slate-100 font-sans">
        {/* Menu Section */}
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

          <Menu>
            <Menu.Header title="Recents" />
            <Menu.Body>
              <Menu.Item>
                <HiDocumentText />
                Reflection on the Month of June
              </Menu.Item>
              <Menu.Item>
                <HiDocumentText />
                Project Proposal
              </Menu.Item>
              <Menu.Item>
                <HiDocumentText />
                Travel itinerary
              </Menu.Item>
            </Menu.Body>
          </Menu>

          <Menu>
            <Menu.HeaderIcon>
              <h4>Folders</h4>
              <HiMiniFolderPlus
                className="w-5 h-5 cursor-pointer"
                onClick={() => setNewFolder(true)}
              />
            </Menu.HeaderIcon>
            <Menu.Body>
              {newFolder && (
                <Menu.Item>
                  <HiFolderOpen className="h-4 w-4" />
                  {newFolder ? (
                    <input
                      type="text"
                      name="newfolder"
                      className="max-w-40 h-6 bg-transparent text-slate-100 focus:border-slate-100 focus:placeholder-slate-100"
                      placeholder="My New Folder"
                      autoFocus={true}
                      onKeyDown={handleTest}
                    />
                  ) : (
                    <p>My New Folder</p>
                  )}
                </Menu.Item>
              )}

              {category.length <= 0 ? (
                <div className="flex flex-col justify-center items-center">
                  <HiArchiveBoxXMark className="w-7 h-7 text-slate-100/40" />
                  <p>Folder Kosong</p>
                </div>
              ) : (
                category.reverse().map((data) => (
                  <Menu.Item key={data.id}>
                    <HiFolderMinus className="h-4 w-4" />
                    <p>{data.tag}</p>
                  </Menu.Item>
                ))
              )}
            </Menu.Body>
          </Menu>

          <Menu>
            <Menu.Header title="More" />
            <Menu.Item>
              <HiOutlineStar className="h-4 w-4" />
              <p>Favorites</p>
            </Menu.Item>
            <Menu.Item>
              <HiTrash className="h-4 w-4" />
              <p>Trash</p>
            </Menu.Item>
            <Menu.Item>
              <HiArchiveBox className="h-4 w-4" />
              <p>Archived Notes</p>
            </Menu.Item>
          </Menu>
        </div>

        {/* Notes Section */}
        <div className="w-1/4 bg-[#1C1C1C] py-8 px-5 flex flex-col space-y-4">
          <h1 className="text-neutral-100 text-xl font-medium">Person</h1>

          <div className="flex flex-col space-y-4 overflow-auto scrollbar-none">
            <ListNote />
          </div>
        </div>

        {/*Content Section*/}
        <div className="flex-1 bg-[#181818] text-slate-100">
          <DashboardSelectFragment />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
