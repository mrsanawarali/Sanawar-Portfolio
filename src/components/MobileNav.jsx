import { useState } from "react";
import { navItems } from "../data";
import profileImage from "../assets/images/sanawar-profile.jpg";

export default function MobileNav({ activeSection, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNavigate = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`sidebar-toggle-btn fixed left-4 top-4 z-50 p-2.5 lg:hidden ${
          open ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Open navigation menu"
      >
        <span className="material-symbols-outlined sidebar-toggle-icon text-xl">menu</span>
      </button>

      <div className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close navigation backdrop"
          className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />

        <aside
          className={`absolute left-0 top-0 h-full w-[78%] max-w-[290px] overflow-y-auto border-r-4 border-primary bg-background-dark px-4 pb-6 pt-4 transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-5 flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="sidebar-toggle-btn p-2.5"
              aria-label="Close navigation menu"
            >
              <span className="material-symbols-outlined sidebar-toggle-icon text-xl">close</span>
            </button>
          </div>

          <div className="mb-7 flex flex-col items-center">
            <div className="profile-glow mb-4">
              <img
                src={profileImage}
                alt="Mr. Sanawar Ali"
                className="size-20 rounded-full border-2 border-primary object-cover object-[center_22%]"
              />
            </div>
            <h2 className="text-center text-[2rem] font-bold leading-none text-slate-100">Mr. Sanawar Ali</h2>
            <p className="mt-2 text-center text-[0.82rem] leading-5 text-slate-400">Mobile Application Developer</p>
          </div>

          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors duration-300 ${
                    isActive ? "bg-white/10 text-primary" : "text-slate-300 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[1.2rem]">{item.icon}</span>
                  <span className="text-[1.05rem] font-semibold">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>
      </div>
    </>
  );
}
