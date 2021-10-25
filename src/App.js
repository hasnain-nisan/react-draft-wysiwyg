import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./App.css";
const App = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    let result = convertToHTML(editorState.getCurrentContent())
    console.log(result)
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  const createMarkup = (html) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };
  return (
    <>
        <div className="App">
          <header className="App-header">Rich Text Editor Example</header>
          <form>
            <div>
              <input type="file" onChange={console.log()} />
                <button onClick={console.log()}>
                  Upload!
                </button>
            </div>
            <div>
              <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
              />
            </div>
            
          </form>
          
          <button >

          </button>
        </div>

        <div
            className="preview" 
            style={{ textAlign: 'justify', padding: '10px' }}
            dangerouslySetInnerHTML={createMarkup(convertedContent)}
            ></div>
    </>
  );
};
export default App;
