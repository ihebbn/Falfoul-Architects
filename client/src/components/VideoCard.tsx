import type { SiteVideo } from "@/data/site-data";
import { cloudinaryVideo, cloudinaryVideoPoster, cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/language-context";
import { Maximize, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent } from "react";

type VideoCardProps = {
  video: SiteVideo;
  className?: string;
};

export function VideoCard({ video, className }: VideoCardProps) {
  const { language } = useLanguage();
  const title =
    language === "en" && video.titleEn ? video.titleEn : video.title;

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const poster = video.poster ?? cloudinaryVideoPoster(video.url);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const onTimeUpdate = () => {
      if (!el.duration) return;
      setProgress((el.currentTime / el.duration) * 100);
    };
    const onPlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
    };
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setHasStarted(false);
    };

    el.addEventListener("timeupdate", onTimeUpdate);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnded);

    return () => {
      el.removeEventListener("timeupdate", onTimeUpdate);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) void el.play();
    else el.pause();
  };

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  };

  const seek = (event: ChangeEvent<HTMLInputElement>) => {
    const el = videoRef.current;
    if (!el || !el.duration) return;
    const next = (Number(event.target.value) / 100) * el.duration;
    el.currentTime = next;
    setProgress(Number(event.target.value));
  };

  const toggleFullscreen = () => {
    const el = videoRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }
    void el.requestFullscreen();
  };

  return (
    <article
      className={cn(
        "group overflow-hidden border border-[#DCDCDC] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_14px_28px_rgba(0,0,0,0.1)]",
        className
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-[#1a1a1a]">
        {/* Explicit still — browsers often blank out the native poster after metadata loads */}
        {!hasStarted && (
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 z-[1] h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        )}

        <video
          ref={videoRef}
          src={cloudinaryVideo(video.url, 1280)}
          poster={poster}
          playsInline
          preload="none"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          onClick={togglePlay}
        >
          {title}
        </video>

        {!isPlaying && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Play"
            className="absolute inset-0 z-[5] flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-foreground shadow-lg transition-transform duration-300 group-hover:scale-105">
              <Play className="ml-0.5 h-6 w-6 fill-current" />
            </span>
          </button>
        )}

        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-3 pb-2.5 pt-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
          <input
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={progress}
            onChange={seek}
            aria-label={language === "en" ? "Seek" : "Progression"}
            className="mb-2 h-1 w-full cursor-pointer appearance-none rounded-full bg-white/30 accent-primary [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
          />
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="rounded p-1.5 text-white transition-colors hover:bg-white/15"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 fill-current" />
              ) : (
                <Play className="h-4 w-4 fill-current" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
              className="rounded p-1.5 text-white transition-colors hover:bg-white/15"
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Fullscreen"
              className="ml-auto rounded p-1.5 text-white transition-colors hover:bg-white/15"
            >
              <Maximize className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      {title ? (
        <div className="px-4 py-3">
          <h3 className="font-display text-lg leading-tight text-foreground">
            {title}
          </h3>
        </div>
      ) : null}
    </article>
  );
}
