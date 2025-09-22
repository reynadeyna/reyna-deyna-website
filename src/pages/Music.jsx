import React from "react";

const Music = () => {
  return (
    <div className="flex justify-center pt-40 pb-40 px-5">
      <div className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
        <div className="flex flex-col items-center justify-center text-center mt-12 gap-16">
          {/* Widget 1 */}
          <div className="widget w-full  border border-gray-300 p-5">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/izSlIxitGUg"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-[10px] leading-4 text-white mt-5">
              System Error I will reach you through the wire. Who is she? Try to
              decrypt it. She erases everything. She’s naked and bare, but her
              server is in order. Attack of the year, computer virus, Titty Pop
              Smoke. There’s too much of me here. As vaziuoju letai kad matytu
              velnei and no one does it like me.
            </p>
            
            {/* W2 */}
          </div>

          <div className="widget h-40 w-full border border-gray-300"></div>

          {/* W3 */}
          <div className="widget h-40 w-full  border border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Music;
