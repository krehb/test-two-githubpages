import React from 'react';
import { Player, ControlBar } from 'video-react';


function Video(){

    let url = 'https://storage.googleapis.com/www.inputllc.net/Introducing%20Cube%20Reader%20%26%20Lateral%20Flow%20Technology%20with%20IgG.mp4'

  
  return (
    <div  >
    {/* <Player
      autoPlay
      playsInline
      muted
      width
      loop
      fluid
      src="https://storage.googleapis.com/www.inputllc.net/Introducing%20Cube%20Reader%20%26%20Lateral%20Flow%20Technology%20with%20IgG.mp4"
    >
    <ControlBar disableCompletely={true}  className="my-class" />
    </Player> */}

    {/* <video id="background-video" loop muted controls autoPlay>
                <source src={url} type="video/mp4" />
                Your browser does not support the video tag.
    </video> */}
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Kk0XluyIxaY?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </div>
  );
};

export default Video;