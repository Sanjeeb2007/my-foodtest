import { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const bellRef = useRef(null);

  // fake messages
  const [notes, setNotes] = useState([
    { id: 1, text: "🍔  New burger recipe added – “Juicy Lucy”!", unread: true },
    { id: 2, text: "🌮  Taco Tuesday: 15 % off today.", unread: true },
    { id: 3, text: "🍕  Margherita pizza is back in stock.", unread: false },
  ]);

  const unreadCount = notes.filter((n) => n.unread).length;

  // close when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (bellRef.current && !bellRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);


  useEffect(() => {
    if (open) setNotes((n) => n.map((item) => ({ ...item, unread: false })));
  }, [open]);

  return (
    <div ref={bellRef} className="relative">
      {/* bell icon */}
      <button
        onClick={() => setOpen(!open)}
        className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white shadow hover:shadow-md"
      >
        <FaBell className="text-sm" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-white text-[10px] font-bold text-red-600">
            {unreadCount}
          </span>
        )}
      </button>

      {/* dropdown card */}
      {open && (
        <div className="absolute center mt-2 w-72 rounded-2xl bg-white/90 p-4 shadow-lg ring-1 ring-black/5 backdrop-blur-sm">
          <h3 className="mb-2 text-sm font-semibold text-gray-900">Notifications</h3>
          <div className="space-y-2">
            {notes.map((n) => (
              <div
                key={n.id}
                className={`rounded-xl px-3 py-2 text-xs ${
                  n.unread ? "bg-orange-50" : "bg-gray-50"
                }`}
              >
                {n.text}
              </div>
            ))}
          </div>
          <button
            onClick={() => setNotes([])}
            className="mt-3 w-full rounded-lg bg-gradient-to-r from-orange-400 to-red-500 py-2 text-xs text-white"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
}