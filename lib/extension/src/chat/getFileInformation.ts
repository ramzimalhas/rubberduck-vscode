import * as vscode from "vscode";
import { getActiveEditor } from "../vscode/getActiveEditor";
import { getInput } from "./getInput";

export type FileInformationData = {
  language: string;
  filename: string;
  activeEditor: vscode.TextEditor;
};

export const getFileInformation: getInput<FileInformationData> = async () => {
  const activeEditor = getActiveEditor();

  if (activeEditor == undefined) {
    return {
      result: "unavailable",
      type: "info",
      message: "No active editor",
    };
  }

  const document = activeEditor.document;
  const language = document.languageId;
  const filename = document.fileName.split("/").pop();

  if (filename == undefined) {
    return {
      result: "unavailable",
      type: "info",
      message: "No filename found.",
    };
  }

  return {
    result: "success",
    data: {
      activeEditor,
      language,
      filename,
    },
  };
};