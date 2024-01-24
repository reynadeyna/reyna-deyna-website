import Contacts from "../components/Contacts";
import Questions from "../components/Questions";

const Ama = () => {
  return (
    <div class="flex justify-center pt-40 pb-40 px-5">
      <div class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
        <div class="flex flex-col items-center justify-center text-center mt-12 gap-16 leading-10">
          <div class="widget">
            <Contacts />
          </div>
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default Ama;
