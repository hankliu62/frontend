/* eslint-disable jsx-a11y/label-has-associated-control */
import { HourglassOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { Button, message, Select } from "antd";
import type { editor as MonacoEditor } from "monaco-editor";
import { useCallback, useEffect, useRef, useState } from "react";
import PrettierWorker from "worker-loader!../../../workers/prettier.worker.ts";

import { CodeEditor } from "@/components/CodeEditor";
import { LanguageDemo, Languages } from "@/constants/editor";
import { createWorkerQueue } from "@/utils/workers";

const LanguagesOptions = Languages.map((item) => ({
  label: item,
  value: item,
}));

export default function MonacoEditorPage() {
  const [value, setValue] = useState<string>();
  const [language, setLanguage] = useState<(typeof Languages)[number]>("html");
  const editor = useRef<MonacoEditor.IStandaloneCodeEditor>();

  const prettierWorker = useRef<any>();

  useEffect(() => {
    if (!prettierWorker.current) {
      prettierWorker.current = createWorkerQueue(PrettierWorker);
    }
  }, []);

  /**
   * 格式化代码
   */
  const onFormatCode = useCallback(
    async (val?: string) => {
      if (prettierWorker.current) {
        // 使用WebWorker进行代码格式化处理
        const { canceled, error, pretty } = await prettierWorker.current.emit({
          text: val || value,
          language: language,
        });

        if (error) {
          message.error(error.message);
          return;
        }

        if (canceled) return;

        setValue(pretty);
      }
    },
    [value, language]
  );

  /**
   * 设置案例
   */
  const onSetExample = useCallback(() => {
    setValue(LanguageDemo[language] || "");
  }, [language]);

  return (
    <div className="bg-white p-6">
      <div className="flex flex-col space-y-6">
        <div>
          <label className="text-base font-normal">语言: </label>
          <div className="mt-2">
            <Select
              showSearch
              value={language}
              className="w-64"
              options={LanguagesOptions}
              onChange={(newLanguage) => {
                setLanguage(newLanguage);
              }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between pb-4">
            <label className="text-base font-normal">案例展示: </label>

            <div className="flex items-center space-x-5">
              <Button
                className="!inline-flex items-center"
                icon={<HourglassOutlined />}
                onClick={onSetExample}
                disabled={!LanguageDemo[language]}
              >
                案例
              </Button>

              <Button
                className="!inline-flex items-center"
                icon={<ThunderboltOutlined />}
                onClick={() => {
                  onFormatCode();
                }}
              >
                格式化
              </Button>
            </div>
          </div>

          <div>
            <CodeEditor
              value={value}
              language={language}
              onChange={(val) => {
                setValue(val);
              }}
              onMount={(codeEditor, monaco) => {
                editor.current = codeEditor;
                editor.current.addCommand(
                  monaco.KeyMod.CtrlCmd |
                    monaco.KeyMod.Shift |
                    monaco.KeyCode.KeyF,
                  function () {
                    console.log("cmd+shift+F", codeEditor.getValue());
                    onFormatCode(codeEditor.getValue());
                  }
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
