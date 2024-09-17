import { Editor, Element, Text, Transforms } from "slate";

const CustomEditor = {
  isMarkActive(editor, mark) {
    const marks = Editor.marks(editor);
    return marks ? marks[mark] === true : false;
  },

  toggleMark(editor, mark) {
    const isActive = this.isMarkActive(editor, mark);
    if (isActive) {
      Editor.removeMark(editor, mark);
    } else {
      Editor.addMark(editor, mark, true);
    }
  },

  isBlockActive(editor, type) {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === type,
    });
    return !!match;
  },

  toggleBlock(editor, type) {
    const isActive = this.isBlockActive(editor, type);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : type },
      {
        match: (n) => Element.isElement(n) && Editor.isBlock(editor, n),
      },
    );
  },

  isSizeActive(editor, format, value) {
    const [match] = Editor.nodes(editor, {
      match: (n) => Text.isText(n) && n[format] === value,
    });
    return !!match;
  },

  toggleSize(editor, size) {
    const isActive = this.isSizeActive(editor, "size", size);
    Transforms.setNodes(
      editor,
      { size: isActive ? null : size },
      { match: (n) => Text.isText(n), split: true },
    );
  },

  toggleBoldMark(editor) {
    this.toggleMark(editor, "bold");
  },

  toggleItalicMark(editor) {
    this.toggleMark(editor, "italic");
  },

  toggleUnderlineMark(editor) {
    this.toggleMark(editor, "underline");
  },

  toggleCodeBlock(editor) {
    this.toggleBlock(editor, "code");
  },
};

export default CustomEditor;
