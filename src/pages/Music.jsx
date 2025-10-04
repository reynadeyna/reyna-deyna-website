import React from "react";

const Music = () => {
  const widgets = [
    {
      type: "iframe",
      src: "https://www.youtube.com/embed/izSlIxitGUg?controls=1&autoplay=1&mute=1&rel=0&modestbranding=1",
      description:
        "System Error I will reach you through the wire. Who Am I? Try to decrypt it. I erase everything. I am naked and bare, but my servers are in order. Attack of the year, computer virus, Titty Pop Smoke. There’s too much of me here. As vaziuoju letai kad matytu velnei and no one does it like me.",
    },
    {
      type: "img",
      src: "https://f4.bcbits.com/img/a1794344270_10.jpg",
      description: "Album, Xtraxeyna. Artwork by Jelena Luise",
    },
    {
      type: "img",
      src: "https://images.squarespace-cdn.com/content/v1/54faf78ce4b04da0abdfbde8/1620210338591-M9D00EAJIH39WMSTZ6GC/reyna_deyna_1612550545.jpg?format=2500w",
      description:
        "Interview, Coeval Magazine. Photography by Gedvile Tamosiunaite",
      link: "https://www.coeval-magazine.com/coeval/reyna-deyna",
    },
    {
      type: "img",
      src: "https://f4.bcbits.com/img/a3817085623_10.jpg",
      description: "Single, Say. Artwork by Jelena Luise",
    },
    {
      type: "img",
      src: "https://www.ore.lt/wordpress/wp-content/uploads/2018/10/Rugile_7-293x390.jpg",
      description: "Interview, Ore.lt. Photography Jacopo Falsetta",
      link: "https://www.ore.lt/2018/10/rugile-pas-muzika-del-drasos",
    },
    {
      type: "img",
      src: "https://images.squarespace-cdn.com/content/v1/54faf78ce4b04da0abdfbde8/1620210365475-Q0BDOMW6VK7DU467A1LG/reyna_deyna_1614103978_1.jpg?format=2500w",
      description:
        "Interview, Coeval Magazine. Photography by Gedvile Tamosiunaite",
      link: "https://www.coeval-magazine.com/coeval/reyna-deyna",
    },
    {
      type: "img",
      src: "https://f4.bcbits.com/img/a3986550602_10.jpg",
      description: "Single, Scam Angel. Artwork by Jelena Luise",
    },
    {
      type: "img",
      src: "https://images.squarespace-cdn.com/content/v1/54faf78ce4b04da0abdfbde8/1620210300747-FK25SBJWX4TE7U8POEZU/01_Gedvile_Tamosiunaite_Reyna_Deyna.jpg?format=2500w",
      description:
        "Interview, Coeval Magazine. Photography by Gedvile Tamosiunaite",
      link: "https://www.coeval-magazine.com/coeval/reyna-deyna",
    },
    {
      type: "img",
      src: "https://f4.bcbits.com/img/a0630777698_10.jpg",
      description: "Single, Xtra. Artwork by Jelena Luise",
    },
    {
      type: "img",
      src: "https://www.ore.lt/wordpress/wp-content/uploads/2018/10/Rugile_1-e1538597464889-293x390.jpg",
      description: "Interview, Ore.lt. Photography Jacopo Falsetta",
      link: "https://www.ore.lt/2018/10/rugile-pas-muzika-del-drasos",
    },
  ];

return (
    <div className="flex justify-center px-4 py-20 min-h-screen">
      <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 flex flex-col gap-8">
        {widgets.map((widget, i) => {
          const content = (
            <>
              {widget.type === "iframe" && (
                <div className="w-full" style={{ height: "500px" }}>
                  <iframe
                    src={widget.src}
                    title={`widget-${i}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              )}
              {widget.type === "img" && (
                <img
                  src={widget.src}
                  alt={`widget-${i}`}
                  className="w-full h-auto rounded-xl"
                />
              )}
              <p className="text-[12px] leading-5 text-white mt-3 text-center">
                {widget.link ? (
                  <>
                    <span className="underline"></span>{" "}
                    {widget.description.split("Interview,")[1]}
                  </>
                ) : (
                  widget.description
                )}
              </p>
            </>
          );

          return widget.link ? (
            <a
              key={i}
              href={widget.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-5 bg-white/5 backdrop-blur-lg rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-200"
            >
              {content}
            </a>
          ) : (
            <div
              key={i}
              className="w-full p-5 bg-white/5 backdrop-blur-lg rounded-xl shadow-md flex flex-col items-center"
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Music;
