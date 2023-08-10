import React from "react";

const AngelicBeats = () => {
  return (
    <div className="page-container">
      <h1>Angelic Beats</h1>
      <h3>✧✧✧</h3>

      <div class="widget-container">

        <div className="widget">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YrS97gr5ydI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h3>✧ listen to this everyday <br />  for magnetic aura ✧</h3>
        <h3>✧✧✧</h3>
        </div>

        <div className="widget">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/b_41d9XyDYw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h3>✧ unleash your inner goddess ✧</h3>
        <h3>✧✧✧</h3>
        </div>
     
      </div>
    </div>
  );
};

export default AngelicBeats;
