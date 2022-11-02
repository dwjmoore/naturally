import { useState, useEffect } from "react";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";


export default function RichTextEditor (props) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    };

    useEffect(() => {
        props.handleRichTextEditorChange(
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
        );
    }, [editorState, props]);

    return (
        <section>
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={onEditorStateChange}
            />
        </section>
    );
};