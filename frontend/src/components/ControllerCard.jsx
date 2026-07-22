function ControllerCard({ title, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-5 text-left transition duration-300
      ${
        selected
          ? "border-[#2563eb] bg-[#2563eb]/10 shadow-[0_0_25px_rgba(37,99,235,0.25)]"
          : "border-[#434655] bg-white/5 hover:border-[#2563eb]/50 hover:bg-[#2563eb]/5"
      }`}
    >
      <div className="text-3xl">🎮</div>

      <h3 className="mt-4 font-semibold text-[#f9fafb]">
        {title}
      </h3>
    </button>
  );
}

export default ControllerCard;