import { default as React, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import InlineImage from "editorjs-inline-image";
import Embed from "@editorjs/embed";
import Paragraph from "editorjs-paragraph-with-alignment";
import Quote from "@editorjs/quote";

const EDITTOR_HOLDER_ID = "editorjs";

const Editor = ({ content, setContent }) => {
  const ejInstance = useRef();

  // This will run only once
  useEffect(() => {
    console.log(content);
    if (!ejInstance.current) {
      initEditor();
    }
    return () => {
      ejInstance.current.destroy();
      ejInstance.current = null;
    };
  }, []);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: content,
      inlineToolbar: true,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: () => {
        editor
          .save()
          .then((outputData) => {
            // console.log("Article data: ", outputData);
            setContent(outputData);
          })
          .catch((error) => {
            console.log("Saving failed: ", error);
          });
      },
      autofocus: true,
      tools: {
        header: Header,
        list: List,
        embed: Embed,
        Quote: Quote,
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        image: {
          class: InlineImage,
          inlineToolbar: true,
          config: {
            embed: {
              display: true,
            },
            unsplash: {
              appName: "Lumos",
              clientId: "wraF9yPTqmdp84IGnBaVyMFhsCEOJHGE4z9E_lSQYrk",
            },
          },
        },
      },
    });
  };

  return (
    <React.Fragment>
      <div
        id={EDITTOR_HOLDER_ID}
        className="border-2 border-white rounded-lg p-2 text-white"
      >
        {" "}
      </div>
    </React.Fragment>
  );
};

export default Editor;
