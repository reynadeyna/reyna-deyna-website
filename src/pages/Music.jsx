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
            <p className="text-[12px] leading-5 text-white mt-5">
              Always alive in the fire, who said that I've died? I live eternal
              life, I fall with grace, and then, I rise. Because I am hot like
              Phoenix! I am lit by eternal glow and rising slowly...
              <br />
              Klaida sistemoje. Aš tau laidu išlysiu. Kas ji tokia? Tu pabandyk
              išencryptint. Ji ištrina viską. Ji plika ir basa, bet amzina.lt
              servery tvarka. Metų išpuolis, computer virus, Tity Pop Smoke.
              Manęs čia per daug!
              <br />
              Aš važiuoju lėtai, kad matytų velnei, and no one does it like
              me...
              <br />
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
