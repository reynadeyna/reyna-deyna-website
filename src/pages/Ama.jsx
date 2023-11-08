import Contacts from "../components/Contacts";
import Questions from "../components/Questions";

const Ama = () => {
  return (
    <div className="page-container">
      {/* ABOUT ME CONTAINER */}

      <div class="widget-container">
        
        <div className="widget">
          <div className="question-form">
            <Contacts />
          </div>
        </div>

        {/* Q&A CONTAINER */}

        <Questions />
      </div>
    </div>
  );
};

export default Ama;