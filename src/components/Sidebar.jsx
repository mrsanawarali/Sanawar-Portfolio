import { navItems } from "../data";
import profileImage from "../assets/images/sanawar-profile.jpg";

export default function Sidebar({ activeSection, onNavigate, collapsed, onToggleCollapse }) {
  return (
    <aside
      className={`fixed left-0 top-0 z-40 hidden h-screen flex-col overflow-y-auto border-r border-primary/25 bg-background-dark/95 px-3 py-4 backdrop-blur transition-all duration-300 lg:flex ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      <div className={`mb-6 flex ${collapsed ? "justify-center" : "justify-end"}`}>
        <button
          type="button"
          onClick={onToggleCollapse}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="sidebar-toggle-btn p-2"
        >
          <span className="material-symbols-outlined sidebar-toggle-icon text-base">{collapsed ? "menu" : "close"}</span>
        </button>
      </div>

      <div className="mb-7 flex flex-col items-center">
        <div className="profile-glow mb-4">
          <img
            src={profileImage}
            alt="Mr. Sanawar Ali"
            className={`rounded-full border-2 border-primary object-cover object-[center_22%] transition-all duration-300 ${
              collapsed ? "size-14" : "size-24"
            }`}
          />
        </div>
        <h1
          className={`text-center font-bold tracking-tight text-slate-100 transition-all duration-300 ${
            collapsed ? "max-h-0 max-w-0 overflow-hidden opacity-0" : "max-h-20 text-[2.2rem] leading-none opacity-100"
          }`}
        >
          Mr. Sanawar Ali
        </h1>
        <p
          className={`text-center font-medium text-slate-300 transition-all duration-300 ${
            collapsed ? "max-h-0 max-w-0 overflow-hidden opacity-0" : "mt-2 max-h-20 text-[0.82rem] leading-5 text-slate-400 opacity-100"
          }`}
        >
          Mobile Application Developer
        </p>
      </div>

      <nav className="flex-1 space-y-1.5">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex w-full items-center rounded-xl py-3 text-left transition-all duration-300 ${
                isActive
                  ? "bg-white/10 text-primary"
                  : "text-slate-300 hover:bg-primary/10 hover:text-primary"
              }`}
              style={{
                justifyContent: collapsed ? "center" : "flex-start",
                paddingInline: collapsed ? "0.65rem" : "0.9rem",
              }}
            >
              <span className="material-symbols-outlined text-[1.2rem]">{item.icon}</span>
              <span
                className={`text-[1.05rem] font-semibold transition-all duration-300 ${
                  collapsed ? "max-w-0 overflow-hidden opacity-0" : "ml-3 max-w-40 opacity-100"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div
        className={`border-t border-white/10 pt-6 text-[10px] uppercase tracking-widest text-slate-500 transition-all duration-300 ${
          collapsed ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex items-center justify-between">
          <span>Copyright 2026</span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500" />
            Available
          </span>
        </div>
      </div>
    </aside>
  );
}
