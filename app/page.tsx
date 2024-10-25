'use client';

import { useContext, useState } from "react";
import { HomeContext } from "./context/HomeContext";
import { FaPause, FaPlay, FaBackward, FaForward } from "react-icons/fa";
import videos, { Video } from './data/video';
import { convertTimeToString } from "./utils/Utils";

// Exemplo de estrutura de dados para vídeos por categorias
const categorizedVideos = {
  Romance: videos.filter(video => video.category === "Romance"),
  Ação: videos.filter(video => video.category === "Ação"),
  Suspense: videos.filter(video => video.category === "Suspense"),
  Drama: videos.filter(video => video.category === "Drama"),
};

export default function Home() {
  const [showFilter, setShowFilter] = useState(true);
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
    configVolume, // Adicionado para o controle de volume
    volume, // Adicionado para acessar o volume atual
  } = useContext(HomeContext);

  const handleVideoClick = (index: number) => {
    configVideo(index);
    playPause(); // Inicia a reprodução do vídeo ao clicar na imagem
  };

  const handleNextVideo = () => {
    const nextIndex = (videos.findIndex(video => video.videoURL === videoURL) + 1) % videos.length;
    configVideo(nextIndex);
  };

  const handlePreviousVideo = () => {
    const currentIndex = videos.findIndex(video => video.videoURL === videoURL);
    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    configVideo(prevIndex);
  };

  return (
    <main className="mx-auto w-[70%] mt-2 flex flex-col">
      {/* Caixa de reprodução */}
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
            className="appearance-none
                      [&::-webkit-slider-runnable-track]:appearance-none
                      [&::-webkit-slider-thumb]:appearance-none
                      [&::-webkit-slider-runnable-track]:bg-[tomato]
                      [&::-webkit-slider-runnable-track]:h-[10px]
                      [&::-webkit-slider-thumb]:w-[10px]
                      [&::-webkit-slider-thumb]:bg-[green]"
            type="range"
            min={0}
            max={totalTime}
            value={currentTime}
            onChange={(e) => configCurrentTime(Number(e.target.value))}
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

      {/* Seção de vídeos categorizados */}
      <div className="w-full">
        {
          Object.entries(categorizedVideos).map(([category, videos]) => (
            <div key={category} className="mb-8">
              <h2 className="text-black text-lg font-bold mb-2">{category}</h2>
              <div className="grid grid-cols-3 gap-4">
                {videos.map((video: Video, index) => (
                  <button 
                    key={index} 
                    className="w-full" 
                    onClick={() => handleVideoClick(index)} // Chama a função ao clicar
                  >
                    <img 
                      className="w-full h-auto border-2 border-gray-300 rounded-lg object-contain" 
                      src={video.imageURL} 
                      alt={`Thumbnail of ${video.name}`} 
                    />
                  </button>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </main>
  );
}
