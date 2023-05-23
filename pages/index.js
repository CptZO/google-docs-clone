import Head from "next/head";
import Button from "@material-tailwind/react/components/Button";
import Texteditor from "../components/Texteditor";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Docs</title>
      </Head>
      <header className="flex justify-between items-center pb-1">
        {/*  Google Docs Logo  */}
        <span className="material-icons md-48 blue p-3 ">description</span>
        <div className="flex-grow px-2">
          <h2>
            {/* Docs Name saved */}
            <input
              className="rounded pt-2 black text-xl"
              type="text"
              placeholder="Untitled document"
            ></input>
          </h2>
          {/* Dropdown Options Header*/}
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-700 ">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
            <p className="option">Extension</p>
            <p className="option">Help</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="material-icons md-24 hv hidden md:!inline-flex text-gray-700 m-2 p-3 ">
            history
          </span>
          <span className="material-icons md-24 hv hidden md:!inline-flex text-gray-700 m-2 p-3 ">
            comment
          </span>
          <span className="material-icons md- 24 hv hidden md:!inline-flex text-gray-700 m-2 p-3 ">
            video_call
          </span>
          <Button className="bt md:!inline-flex m-3 flex items-center gap-2 rounded-full lightblue">
            <span strokeWidth={2} className="material-icons md-dark h-5 w-5">
              lock
            </span>
            <p className="text-black capitalize text-base font-normal">Share</p>
          </Button>
          <span className="material-icons md-36 hv text-gray-700 m-3 ml-0 p-3">
            account_circle
          </span>
        </div>
      </header>

      {/* Sidebar icons Html and inline css */}
      {/* Links can be added via link tag , didnt add link tag beacuse of icons graphics provided */}
      <div className="justify between">
        <div className="absolute right-0 dic pl-2">
          <span className="flex material-icons md-24 hv text-blue-500 m-3 ml-0 p-3">
            calendar_month
          </span>
          <span className="flex material-icons md-24 hv text-yellow-700 m-3 ml-0 p-3">
            batch_prediction
          </span>
          <span className="flex material-icons md-24 hv text-blue-500 m-3 ml-0 p-3">
            task_alt
          </span>
          <span className="flex material-icons md-24 hv text-blue-800 m-3 ml-0 p-3">
            person
          </span>
          <span className="flex material-icons md-24 hv text-red-700 m-3 ml-0 p-3">
            location_on
          </span>
          <span className="flex material-icons md-24 text-gray-200 m-3 ml-0 p-3">
            maximize
          </span>
          <span className="flex material-icons md-24 text-black hv m-3 ml-0 p-3">
            add
          </span>
        </div>
      </div>
      <Texteditor />
    </div>
  );
}
