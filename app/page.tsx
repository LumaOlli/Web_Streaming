'use client';

import { useContext, useState } from "react";
import { HomeContext } from "./context/HomeContext";
import { FaPause, FaPlay, FaBackward, FaForward } from "react-icons/fa";
import videos, { Video } from './data/video';
import { convertTimeToString } from "./utils/Utils";

// Cabeçalho do Site
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 text-center">
      <h1 className="text-3xl font-bold">StreamWave🌊✨</h1>
      <p className="text-sm mt-2">Bem-vindo!</p>
      <p className="text-sm">Seu destino para filmes e vídeos.</p>
    </header>
  );
};

const categorizedVideos = {
  Romance: videos.filter(video => video.category === "Romance"),
  Ação: videos.filter(video => video.category === "Ação"),
  Suspense: videos.filter(video => video.category === "Suspense"),
  Drama: videos.filter(video => video.category === "Drama"),
};

export default function Home() {
  const [showFilter, setShowFilter] = useState(true);
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const {
    videoURL,
    playing,
    totalTime,
    currentTime,
    videoRef,
    canvasRef,
    playPause,
    configCurrentTime,
    configVideo,
    configFilter,
    configVolume,
    volume,
  } = useContext(HomeContext);

  const handleVideoClick = (index: number) => {
    configVideo(index);
    setCurrentVideo(videos[index]);
    if (!playing) {
      playPause();
    }
  };

  const handleNextVideo = () => {
    const nextIndex = (videos.findIndex(video => video.videoURL === videoURL) + 1) % videos.length;
    configVideo(nextIndex);
    setCurrentVideo(videos[nextIndex]);
  };

  const handlePreviousVideo = () => {
    const currentIndex = videos.findIndex(video => video.videoURL === videoURL);
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    configVideo(prevIndex);
    setCurrentVideo(videos[prevIndex]);
  };

  return (
    <main className="mx-auto w-[70%] mt-2 flex flex-col">
      <Header /> {/* Adicionando o cabeçalho */}

      <div className="w-full mb-4">
        <video className="w-full" ref={videoRef} src={videoURL} hidden={showFilter}></video>
        <canvas className="w-full h-[380px]" ref={canvasRef} hidden={!showFilter}></canvas>

        <div className="bg-black mt-2 flex items-center justify-between p-2">
          <div className="flex items-center">
            <button className="text-white" onClick={handlePreviousVideo}>
              <FaBackward />
            </button>
            <button className="text-white mx-2" onClick={playPause}>
              {playing ? <FaPause /> : <FaPlay />}
            </button>
            <button className="text-white" onClick={handleNextVideo}>
              <FaForward />
            </button>
          </div>

          <input 
            type="range"
            min={0}
            max={totalTime}
            value={currentTime}
            onChange={(e) => configCurrentTime(Number(e.target.value))}
            className="mx-2"
          />

          <input 
            type="range" 
            min={0} 
            max={1} 
            step={0.01} 
            value={volume} 
            onChange={(e) => configVolume(Number(e.target.value))}
            className="mx-2"
          />

          <span className="text-white">
            {convertTimeToString(currentTime)} / {convertTimeToString(totalTime)}
          </span>

          <select value={0} onChange={(e) => configFilter(Number(e.target.value))} hidden={!showFilter}>
            <option value={0}>Sem filtro</option>
            <option value={1}>Verde</option>
            <option value={2}>Azul</option>
            <option value={3}>Vermelho</option>
            <option value={4}>Preto e branco</option>
          </select>
          <input type="checkbox" name="Filtro" className="mx-2" onChange={() => setShowFilter(!showFilter)} />
        </div>
      </div>

      {/* Informações do Vídeo Atual */}
      {currentVideo && (
        <div className="w-full mt-4 p-4 bg-gray-200 rounded-lg">
          <h3 className="text-xl font-bold">{currentVideo.name}</h3>
          <p className="text-gray-700">{currentVideo.description}</p>
        </div>
      )}

      {/* Seção de vídeos categorizados */}
      <div className="w-full">
        {
          Object.entries(categorizedVideos).map(([category, videosInCategory]) => (
            <div key={category} className="mb-8">
              <h2 className="text-black text-lg font-bold mb-2">{category}</h2>
              <div className="grid grid-cols-3 gap-4">
                {videosInCategory.map((video: Video) => {
                  const absoluteIndex = videos.findIndex(v => v.videoURL === video.videoURL);
                  const isCurrentVideo = videoURL === video.videoURL; // Verifica se o vídeo está em reprodução
                  const progress = isCurrentVideo ? (currentTime / totalTime) * 100 : 0;

                  return (
                    <button 
                      key={video.videoURL} 
                      className="w-full relative" 
                      onClick={() => handleVideoClick(absoluteIndex)}
                    >
                      <span className="absolute top-0 left-0 w-full text-center text-white bg-black bg-opacity-70 p-1">
                        {video.name}
                      </span>
                      <img 
                        className="w-full h-auto border-2 border-gray-300 rounded-lg object-contain" 
                        src={video.imageURL} 
                        alt={`Thumbnail of ${video.name}`} 
                      />
                      
                      {isCurrentVideo && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300">
                          <div 
                            className="h-full bg-tomato" 
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))
        }
      </div>
    </main>
  );
}
