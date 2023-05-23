import dynamic from "next/dynamic";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Inputted module for editor
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

function Texteditor() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <Editor
        toolbarClassName="flex top-0 z-50 !justify-center !rounded-full !m-12 !mt-0" //this is css for toolbar in editor
        editorClassName="mt-6 p-10 bg-white shadow-lg max-w-5xl mx-auto mb-12 border " // This is the Css for Editor sheet
      />
    </div>
  );
}
export default Texteditor;
