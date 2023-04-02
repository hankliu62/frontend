import {
  CopyOutlined,
  FileAddOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { useCallback, useEffect, useState } from "react";
import SplitPane from "react-split-pane";

import { CodeEditor } from "@/components/CodeEditor";

const { Dragger } = Upload;

// 转化方式
enum EConvertWay {
  H2M = "H2M",
  Turndown = "Turndown",
  HTML2markdown = "HTML2markdown",
  HTMLToMd = "html-to-md",
}

/**
 * 在线二维码生成和解析工具
 *
 * @returns
 */
export default function QRCodePage() {
  const [content, setContent] = useState<string>();

  return (
    <div className="relative flex h-full flex-1 flex-col bg-white">
      <SplitPane className="flex-1" split="vertical" minSize={50} maxSize={75}>
        <div className="overflow-y-auto">
          <div className="flex justify-between border-b border-black/20 px-6 py-4">
            <h2 className="text-lg font-medium leading-[32px]">生产二维码</h2>

            <div className="flex items-center space-x-5">
              <Button
                className="!inline-flex items-center"
                icon={<FileAddOutlined />}
                onClick={() => {}}
              >
                生成
              </Button>
            </div>
          </div>
          <CodeEditor
            value={content}
            language="plaintext"
            onChange={(val) => {
              setContent(val);
            }}
            options={{ theme: "vs-light" }}
          />
        </div>
        <div className="overflow-y-auto">
          <div className="flex justify-between border-b border-black/20 px-6 py-4">
            <h2 className="text-lg font-medium leading-[32px]">解析二维码</h2>

            <div className="flex items-center space-x-5">
              <Button
                className="!inline-flex items-center"
                icon={<FileAddOutlined />}
                onClick={() => {}}
              >
                粘贴图片
              </Button>
            </div>
          </div>
          <Dragger
            className="!my-5 !mx-10 block"
            name="file"
            multiple={true}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={(info) => {
              const { status } = info.file;
              if (status !== "uploading") {
                console.log(info.file, info.fileList);
              }
              if (status === "done") {
                message.success(
                  `${info.file.name} file uploaded successfully.`
                );
              } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
              }
            }}
            onDrop={(e) => {
              console.log("Dropped files", e.dataTransfer.files);
            }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </div>
      </SplitPane>
    </div>
  );
}
