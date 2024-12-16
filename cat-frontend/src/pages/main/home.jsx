import React from "react";
import CatChat from "@/components/CatChat";

const Home = () => {
  return (
    <div className="min-h-screen  text-base-content mt-2 md:mt-5">
      {/* Hero Section */}
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img
            src="https://placekitten.com/400/300"
            alt="Cute Cat"
            className="rounded-lg shadow-lg w-96"
          /> */}
          <CatChat catSize="100" chatText="Hola"/>
          <div>
            <h1 className="text-5xl font-bold">
              Find Your Purr-fect Companion
            </h1>
            <p className="py-6">
              Join our mission to help adorable cats find loving homes. Explore
              cats up for adoption or share your love by becoming a shelter
              owner.
            </p>
            <a href="/adopt" className="btn btn-primary">
              Start Adopting
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Adopt from Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card */}
          <div className="card bg-base-100 shadow-md p-6 text-center">
            <div className="text-6xl mb-4">🐾</div>
            <h3 className="text-xl font-bold mb-2">Save Lives</h3>
            <p>
              Adopting from shelters saves cats and gives them a second chance
              at life.
            </p>
          </div>

          {/* Feature Card */}
          <div className="card bg-base-100 shadow-md p-6 text-center">
            <div className="text-6xl mb-4">❤️</div>
            <h3 className="text-xl font-bold mb-2">Fur-ever Love</h3>
            <p>
              Experience unconditional love and happiness with your new furry
              friend.
            </p>
          </div>

          {/* Feature Card */}
          <div className="card bg-base-100 shadow-md p-6 text-center">
            <div className="text-6xl mb-4">🌎</div>
            <h3 className="text-xl font-bold mb-2">Join a Community</h3>
            <p>
              Connect with other cat lovers and support shelters in your area.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-100 text-secondary py-12 text-center rounded-md">
        <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="mb-6">
          Whether you're looking to adopt or support shelters, we're here to
          help.
        </p>
        <a href="/shelters" className="btn btn-secondary">
          View Shelters
        </a>
      </div>
    </div>
  );
};

export default Home;
