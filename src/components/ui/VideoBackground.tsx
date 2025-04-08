import React from 'react'



const VideoBackground = () => {
  
  return (
    <div className="absolute inset-0 w-full h-full -z-10 object-contain bg-[#000]">
      <video
        src="https://yrlcpcahftis3jcl.public.blob.vercel-storage.com/podcastVIdeo-BxHyrviSTd7gzAflZhZWyDMc9IINLP.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default VideoBackground