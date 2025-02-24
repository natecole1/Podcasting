import React from 'react'
import NoteworthyPodcasts from './NoteworthyPodcasts';
import TopTenPodcasts from './TopTenPodcasts';
import TopTechPodcasts from './TopTechPodcasts';



const HomePagePodcastGallery = () => {
    return (
      <div className="w-full">
        <TopTenPodcasts />     
        <NoteworthyPodcasts />
        <TopTechPodcasts />
      </div>
    );
}

export default HomePagePodcastGallery