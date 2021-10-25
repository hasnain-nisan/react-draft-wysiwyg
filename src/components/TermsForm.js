import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TermsForm = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  return (
    <section>
      <div style={{ display:'flex', justifyContent:'center' }}>
        <Editor editorState={editorState} />
      </div>
    </section>
  );
};
export default TermsForm;
