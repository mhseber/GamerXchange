import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const CTicket = ({ setInProgressCount, setResolvedCount }) => {
  const [tickets, setTickets] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  // ডাটা ফেচিং
  useEffect(() => {
    const loadTickets = async () => {
      try {
        const response = await fetch("/ticket.JSON");
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        toast.error("Failed to load tickets!");
      }
    };
    loadTickets();
  }, []);

  // ১. টিকেট ইন-প্রগ্রেসে যোগ করা
  const handleAddToStatus = (ticket) => {
    const isExist = taskStatus.find((item) => item.id === ticket.id);
    const isResolved = resolvedTasks.find((item) => item.id === ticket.id);

    if (isResolved) {
      toast.error("This ticket is already resolved!");
      return;
    }

    if (!isExist) {
      setTaskStatus([...taskStatus, ticket]);
      setInProgressCount((prev) => prev + 1);
      toast.success(`Started working on: ${ticket.title}`, {
        style: {
          border: "1px solid #22c55e",
          padding: "16px",
          color: "#166534",
        },
        iconTheme: { primary: "#22c55e", secondary: "#FFFAEE" },
      });
    } else {
      toast("This ticket is already in progress!", { icon: "⚠️" });
    }
  };

  // ২. টিকেট কমপ্লিট করা
  const handleComplete = (task) => {
    // ইন-প্রগ্রেস থেকে রিমুভ করা
    const remainingTasks = taskStatus.filter((item) => item.id !== task.id);
    setTaskStatus(remainingTasks);

    // রিজলভড সেকশনে যোগ করা
    setResolvedTasks([...resolvedTasks, task]);

    // কাউন্ট আপডেট
    setInProgressCount((prev) => prev - 1);
    setResolvedCount((prev) => prev + 1);

    toast.success("Task marked as Resolved!", {
      duration: 3000,
      position: "top-right",
      style: { background: "#9333ea", color: "#fff" },
    });
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10 bg-gray-50 min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Ticket Cards */}
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6">Available Tickets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                onClick={() => handleAddToStatus(ticket)}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-all active:scale-95"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="badge badge-ghost text-xs">{ticket.id}</span>
                  <span className="text-purple-600 font-bold text-xs uppercase">
                    {ticket.priority}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {ticket.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{ticket.customer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Status Sections */}
        <div className="lg:w-1/3 space-y-6">
          {/* Task Status (In Progress) */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-green-500">
            <h2 className="text-xl font-bold mb-4">
              Task Status ({taskStatus.length})
            </h2>
            <div className="space-y-3">
              {taskStatus.map((task, index) => (
                <div
                  key={task.id}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <p className="font-semibold text-sm mb-2">
                    {index + 1}. {task.title}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleComplete(task);
                    }}
                    className="btn btn-success btn-xs w-full text-white"
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Resolved Task Section */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-purple-600">
            <h2 className="text-xl font-bold mb-4 text-purple-700">
              Resolved Task ({resolvedTasks.length})
            </h2>
            <div className="space-y-3">
              {resolvedTasks.length === 0 && (
                <p className="text-gray-400 text-sm text-center">
                  No tasks resolved yet.
                </p>
              )}
              {resolvedTasks.map((task, index) => (
                <div
                  key={task.id}
                  className="p-3 bg-purple-50 rounded-lg flex justify-between items-center"
                >
                  <p className="font-medium text-sm text-purple-800 line-clamp-1">
                    {index + 1}. {task.title}
                  </p>
                  <span className="badge badge-success badge-sm text-white">
                    Done
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTicket;
