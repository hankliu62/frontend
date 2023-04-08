/* eslint-disable jsx-a11y/label-has-associated-control */
import { PlaySquareOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import { useCallback, useRef, useState } from "react";

import VideoPlayer, {
  IVideoPlayerImperativeHandles,
} from "@/components/VideoPlayer";

const TextArea = Input.TextArea;

export default function VideoPlayerPage() {
  const [source, setSource] = useState<string>();

  const videoPlayer = useRef<IVideoPlayerImperativeHandles>();

  /**
   * 播放
   */
  const onPlay = useCallback(() => {
    if (!source) {
      message.error("请输入视频数据源");
      return;
    }

    videoPlayer.current.play();
  }, [source]);

  return (
    <div className="bg-white p-6">
      <div className="flex flex-col space-y-6">
        <div>
          <label className="text-base font-normal">视频数据源: </label>
          <div className="mt-2">
            <TextArea
              className="w-full"
              autoSize={{ minRows: 3, maxRows: 20 }}
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="请输入视频数据源，支持m3u8、flv、rtmp、RTS等格式的视频"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between pb-4">
            <label className="text-base font-normal">案例展示: </label>

            <div className="flex items-center space-x-5">
              <Button
                className="!inline-flex items-center"
                icon={<PlaySquareOutlined />}
                onClick={onPlay}
              >
                立即播放
              </Button>
            </div>
          </div>

          <div>
            <VideoPlayer
              className="h-[800px]"
              ref={videoPlayer}
              source={source}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
