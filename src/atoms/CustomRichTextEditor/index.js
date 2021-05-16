import React from "react";
import RichTextEditor from "react-rte";

export default function CustomRichTextEditor() {
  return (
    <RichTextEditor
      // value={this.state.value}
      value={RichTextEditor.createEmptyValue()}
    />
  );
}
