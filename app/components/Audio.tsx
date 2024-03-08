import { useAudio } from "../../lib/hooks/useAudio";
import {
  PiPlayBold,
  PiPauseBold,
  PiSkipBackBold,
  PiSkipForwardBold,
  PiSpeakerXBold,
  PiSpeakerHighBold,
  PiSpeakerLowBold,
  PiSpeakerNoneBold,
} from 'react-icons/pi'

export default function Audio() {

  const {
    elapsedTime,
    isPlaying,
    volume,
    handlePlayPause,
    handleNextSong,
    handlePrevSong,
    handleVolumeChange,
    toggleMute,
    currentSong,
  } = useAudio();

  return (
    <div className="relative max-w-screen-md mx-auto w-full flex flex-col justify-center items-center px-24">
      <div className="relative max-w-screen-md mx-auto w-full pr-8 pb-8">

      <div className="max-w-screen-sm w-full flex justify-between items-end">
        <button onClick={handlePlayPause}>
          {isPlaying ? <PiPauseBold size={32} /> : <PiPlayBold size={32} />}
        </button>
        <button onClick={handlePrevSong}><PiSkipBackBold size={32} /></button>
        <button onClick={handleNextSong}><PiSkipForwardBold size={32} /></button>
        <button onClick={toggleMute}>
        {
          volume === 0
            ? <PiSpeakerXBold size={32} />
            : volume < .25
              ? <PiSpeakerNoneBold size={32} />
              : volume < .75
                ? <PiSpeakerLowBold size={32} />
                : <PiSpeakerHighBold size={32} />
        }
        </button>
      </div>

      <div className="max-w-screen-md absolute -right-20 transform -translate-y-1/2">
        <label htmlFor="volume"></label>
        <input
          type="range"
          id="volume"
          name="volume"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>

      <div className="max-w-screen-sm w-full mt-2 md:mt-6">
        <div className="h-10 pt-4">{
          isPlaying
            ? `Now Playing: ${currentSong.title}  |  ${elapsedTime} of ${currentSong.duration}`
            : elapsedTime !== '00:00'
              ? `Now Playing: ${currentSong.title} (Paused)  |  ${elapsedTime} of ${currentSong.duration}`
                : ''}
        </div>
      </div>
      </div>
    </div>
  );
}
