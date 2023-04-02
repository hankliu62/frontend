/* eslint-disable jsx-a11y/media-has-caption */
import classNames from "classnames";
import {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import VideoJs from "video.js";

type TPlayer = any;

export interface IVideoPlayerProps {
  className?: string;
  source: string;
}

export interface IVideoPlayerImperativeHandles {
  getVideoPlayer: () => TPlayer;
  play: () => void;
  pause: () => void;
}

const VideoPlayer: ForwardRefRenderFunction<
  IVideoPlayerImperativeHandles,
  IVideoPlayerProps
> = ({ className, source }: IVideoPlayerProps, ref) => {
  const videoPlayer = useRef<TPlayer>();

  const getVideoPlayer = function (): TPlayer {
    if (!videoPlayer.current) {
      videoPlayer.current = VideoJs("videoPlayer", {
        autoplay: false, // 设置自动播放
        muted: true, // 设置了它为true，才可实现自动播放,同时视频也被静音 （Chrome66及以上版本，禁止音视频的自动播放）
        preload: "auto", // 预加载
        controls: true, // 显示播放的控件
      });
    }

    return videoPlayer.current;
  };

  /**
   * 导出方法
   */
  useImperativeHandle(
    ref,
    () => ({
      getVideoPlayer: getVideoPlayer,
      play: () => {
        const player = getVideoPlayer();
        player.play();
      },
      pause: () => {
        const player = getVideoPlayer();
        player.pause();
      },
    }),
    []
  );

  useEffect(() => {
    videoPlayer.current = getVideoPlayer();

    return () => {
      videoPlayer.current.dispose();
      videoPlayer.current = undefined;
    };
  }, []);

  useEffect(() => {
    const video = {
      withCredentials: false,
      type: "application/x-mpegurl",
      src: source,
    };
    videoPlayer.current && videoPlayer.current.reset(); // in IE11 (mode IE10) direct usage of src() when <src> is already set, generated errors,

    if (videoPlayer.current && source) {
      videoPlayer.current.src(video);
    }
  }, [source]);

  return (
    <div className={classNames("relative", { [className]: className })}>
      <video
        id="videoPlayer"
        className="video-js vjs-default-skin h-full w-full object-fill"
        controls
      />
    </div>
  );
};

export default forwardRef(VideoPlayer);
