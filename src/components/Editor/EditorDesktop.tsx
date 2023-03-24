import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { CommandsRegistry } from "monaco-editor/esm/vs/platform/commands/common/commands";
import React, { useEffect, useRef } from "react";

import { registerDocumentFormattingEditProviders } from "./format";

function setupKeybindings(editor) {
  const formatCommandId = "editor.action.formatDocument";
  const { handler, when } = CommandsRegistry.getCommand(formatCommandId);
  editor._standaloneKeybindingService.addDynamicKeybinding(
    formatCommandId,
    monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS,
    handler,
    when
  );
}
registerDocumentFormattingEditProviders();

const languageToMode = {
  html: "html",
  css: "css",
  less: "less",
  scss: "scss",
  javascript: "javascript",
  babel: "javascript",
  typescript: "typescript",
};

export interface IEditorProps {
  language: keyof typeof languageToMode;
  defaultValue?: string;
  value?: string;
  onChange: (value: string) => void;
}

const Editor = ({ language, defaultValue, value, onChange }: IEditorProps) => {
  const divEl = useRef(null);
  const editor = useRef(null);

  useEffect(() => {
    if (divEl.current) {
      editor.current = monaco.editor.create(divEl.current, {
        minimap: { enabled: false },
        theme: "vs-dark",
      });
      editor.current.onDidChangeModelContent(() => {
        onChange(editor.current.getValue());
      });
    }

    setupKeybindings(editor.current);

    return () => {
      editor.current.dispose();
    };
  }, []);

  useEffect(() => {
    const model = editor.current.getModel();
    monaco.editor.setModelLanguage(model, languageToMode[language]);
  }, [language]);

  useEffect(() => {
    if (defaultValue) {
      editor.current.setValue(defaultValue);
    }
  }, []);

  useEffect(() => {
    if (value) {
      editor.current.setValue(value);
    }
  }, [value]);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      window.setTimeout(() => editor.current.layout(), 0);
    });
    observer.observe(divEl.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return <div className="relative min-h-[600px] flex-auto" ref={divEl}></div>;
};

export default Editor;
