import { Clock, CheckCircle, Ticket } from "lucide-react";

const Hero = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="pt-28 pb-16 px-4 md:px-10 lg:px-20 bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Card 1: In Progress (Green Theme with BG Image) */}
        <div
          className="relative overflow-hidden rounded-4xl  p-8 shadow-2xl transform transition-all hover:scale-[1.03] duration-300 group "
          style={{
            backgroundColor: "#22c55e",
            backgroundImage: `linear-gradient(to right, rgba(34, 197, 94, 0.9), rgba(34, 197, 94, 0.4)), url('/assets/vector2.png')`,
            backgroundSize: "35%",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 flex flex-col justify-between h-full text-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
                <Clock className="w-6 h-6 animate-pulse" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                Active In-Progress
              </h1>
            </div>

            <div className="mt-6">
              <p className="text-6xl font-black drop-shadow-md tracking-tighter">
                {inProgressCount < 10 ? `0${inProgressCount}` : inProgressCount}
              </p>
              <p className="text-sm font-medium opacity-80 mt-1 uppercase tracking-widest">
                Running Tasks
              </p>
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
        </div>

        {/* Card 2: Resolved (Purple Theme with BG Image) */}
        <div
          className="relative overflow-hidden rounded-4xl  p-8 shadow-2xl transform transition-all hover:scale-[1.03] duration-300 group "
          style={{
            backgroundColor: "#9333ea",
            backgroundImage: `linear-gradient(to right, rgba(147, 51, 234, 0.9), rgba(147, 51, 234, 0.4)), url('/assets/vector1.png')`,
            backgroundSize: "35%",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10 flex flex-col justify-between h-full text-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                Successfully Resolved
              </h1>
            </div>

            <div className="mt-6">
              <p className="text-6xl font-black drop-shadow-md tracking-tighter">
                {resolvedCount < 10 ? `0${resolvedCount}` : resolvedCount}
              </p>
              <p className="text-sm font-medium opacity-80 mt-1 uppercase tracking-widest">
                Completed Tickets
              </p>
            </div>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
