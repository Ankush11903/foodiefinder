import React from "react";
import { FaRegClock } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

const ComingSoonPage = () => {
  const [showContent, setShowContent] = React.useState(false);

  React.useEffect(() => {
    // Simulating a delay before showing the content
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <CSSTransition
        in={showContent}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">Calorie Tracker</h1>
          <div className="flex items-center text-gray-500 mb-8">
            <FaRegClock className="mr-2" />
            Coming Soon
          </div>
          <p className="text-lg text-gray-700 mb-8 text-center">
            We are working hard to bring you an amazing calorie tracking
            experience. Stay tuned for updates!
          </p>
          <img
            src="/calorie-tracker.png"
            alt="Calorie Tracker"
            className="max-w-lg"
          />
        </div>
      </CSSTransition>
    </div>
  );
};

export default ComingSoonPage;
