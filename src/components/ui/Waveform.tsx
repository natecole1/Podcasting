import React from 'react'
import Image from 'next/image'

const Waveform = () => {
  return (
    <div>
      <Image
        src={"/assets/waveform_darkBg.gif"}
        alt="animated waveform"
        width={30}
        height={30}
        className="bg-black-3"
        unoptimized
      />
    </div>
  );
}

export default Waveform