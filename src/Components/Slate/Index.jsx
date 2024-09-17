import { useCallback, useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import CustomEditor from "./Toolbar";
import { LuBold, LuItalic, LuUnderline } from "react-icons/lu";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph" }],
  },
];

const RichText = () => {
  const [editor] = useState(() => withReact(createEditor()));

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <div className="flex space-x-4 border-b border-b-gray-600 pb-2">
        <select
          className="form-select text-slate-100 pr-8 py-0 pl-0 bg-transparent border-transparent hover:cursor-pointer"
          onChange={(event) => {
            event.preventDefault();
            CustomEditor.toggleCodeBlock(editor, event.target.value);
          }}
        >
          <option value="h1" className="text-slate-800">
            Heading 1
          </option>
          <option value="18px" className="text-slate-800">
            Paragraph
          </option>
        </select>

        <select
          className="form-select text-slate-100 pr-8 py-0 pl-0 bg-transparent border-transparent hover:cursor-pointer"
          onChange={(event) => {
            console.log(event.target.value);
            event.preventDefault();
            CustomEditor.toggleSize(editor, event.target.value);
          }}
        >
          <option value="16px" className="text-slate-800">
            16
          </option>
          <option value="18px" className="text-slate-800">
            18
          </option>
          <option value="20px" className="text-slate-800">
            20
          </option>
          <option value="22px" className="text-slate-800">
            22
          </option>
          <option value="24px" className="text-slate-800">
            24
          </option>
          <option value="26px" className="text-slate-800">
            26
          </option>
        </select>
        <button
          onClick={(event) => {
            event.preventDefault();
            CustomEditor.toggleBoldMark(editor);
          }}
        >
          <LuBold className="w-5 h-5" />
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            CustomEditor.toggleItalicMark(editor);
          }}
        >
          <LuItalic className="w-5 h-5" />
        </button>
        <button
          onClick={(event) => {
            event.preventDefault();
            CustomEditor.toggleUnderlineMark(editor);
          }}
        >
          <LuUnderline className="w-5 h-5" />
        </button>
      </div>
      <Editable
        editor={editor}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        style={{ overflowY: "auto", maxHeight: "100%" }}
      />
    </Slate>
  );
};

const Leaf = ({ attributes, children, leaf }) => {
  const { bold, italic, underline, size } = leaf;

  const style = {
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
    fontSize: size || "16px",
  };

  return (
    <span {...attributes} style={style}>
      {children}
    </span>
  );
};

const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

export default RichText;
