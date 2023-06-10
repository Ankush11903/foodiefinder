import React from 'react';
import { useState } from 'react';
import { Transition } from 'react-transition-group';

const About= () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <section className="bg-yellow-400 min-h-screen">
      <div className="container mx-auto py-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="text-gray-600 mt-2">Learn more about our Web Page.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <button
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={toggleDescription}
            >
              {showDescription ? 'Hide Description' : 'Show Description'}
            </button>
            <Transition in={showDescription} timeout={300} unmountOnExit>
              {(state) => (
                <p
                  className={`text-gray-600 mt-4 transition-all duration-300 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                >
                  <h3>Calorie tracker</h3>
                  <h3>Dieticien Support</h3>
                  <h3>Grocery Delivery</h3>
                </p>
              )}
            </Transition>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Established</h3>
            <button
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={toggleDescription}
            >
              {showDescription ? 'Hide Description' : 'Show Description'}
            </button>
            <Transition in={showDescription} timeout={300} unmountOnExit>
              {(state) => (
                <p
                  className={`text-gray-600 mt-4 transition-all duration-300 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                >
                  <h2>Established on 2nd July,2023</h2>
                </p>
              )}
            </Transition>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">We Work On A Three Step Process</h3>
            <button
              className="text-blue-500 hover:underline focus:outline-none"
              onClick={toggleDescription}
            >
              {showDescription ? 'Hide Description' : 'Show Description'}
            </button>
            <Transition in={showDescription} timeout={300} unmountOnExit>
              {(state) => (
                <p
                  className={`text-gray-600 mt-4 transition-all duration-300 ${state === 'entered' ? 'opacity-100' : 'opacity-0'}`}
                >
                  <h2>Create</h2>
                  <h2>Curate</h2>
                  <h2>Cook</h2>
                </p>
              )}
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
