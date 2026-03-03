// import vector1 from "/assets/vector1.png";
// import vector2 from "/assets/vector2.png";
// const hero = () => {
//   return (
//     <div>
//       {/* 1 */}
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <img src={vector1} className="max-w-sm rounded-lg shadow-2xl" />
//           <h1 className="text-4xl font-bold">in progress</h1>
//           <p>0</p>
//         </div>
//       </div>
//       {/* 2 */}
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <img src={vector2} className="max-w-sm rounded-lg shadow-2xl" />
//           <h1 className="text-4xl font-bold">Resolved</h1>
//           <p>0</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default hero;

import vector1 from "/assets/vector1.png";
import vector2 from "/assets/vector2.png";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 md:px-10 lg:px-20 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Card 1: In Progress (Green Theme) */}
        <div className="hero bg-green-500 rounded-3xl p-8 shadow-xl transform transition-all hover:scale-[1.02]">
          <div className="hero-content flex-row justify-between w-full p-0">
            <div className="text-white">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-2">
                In Progress
              </h1>
              <p className="text-5xl font-black">12</p>{" "}
            </div>
            <img
              src={vector2}
              className="w-24 md:w-32 lg:w-40 object-contain drop-shadow-lg"
              alt="In Progress Illustration"
            />
          </div>
        </div>

        {/* Card 2: Resolved (Purple Theme) */}
        <div className="hero bg-purple-600 rounded-3xl p-8 shadow-xl transform transition-all hover:scale-[1.02]">
          <div className="hero-content flex-row justify-between w-full p-0">
            <div className="text-white">
              <h1 className="text-2xl md:text-3xl font-extrabold mb-2">
                Resolved
              </h1>
              <p className="text-5xl font-black">45</p>
            </div>
            <img
              src={vector1}
              className="w-24 md:w-32 lg:w-40 object-contain drop-shadow-lg"
              alt="Resolved Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
