/* eslint-disable jsx-a11y/label-has-associated-control */
import { Select } from "antd";
import { useState } from "react";

import { CodeEditor } from "@/components/CodeEditor";
import { Languages } from "@/constants/editor";

const LanguagesOptions = Languages.map((item) => ({
  label: item,
  value: item,
}));

export default function MonacoEditor() {
  const [value, setValue] = useState<string>();
  const [language, setLanguage] = useState<(typeof Languages)[number]>("html");

  return (
    <div className="bg-white p-6">
      <div className="flex flex-col space-y-6">
        <div>
          <label className="text-base font-normal">语言: </label>
          <div className="mt-2">
            <Select
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
          <label className="text-base font-normal">案例展示: </label>
          <div className="mt-2">
            <CodeEditor
              defaultValue=""
              language={language}
              onChange={(val) => {
                setValue(val);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
