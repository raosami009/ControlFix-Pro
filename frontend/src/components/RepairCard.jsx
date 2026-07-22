function RepairCard({ title, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-3 text-sm font-medium transition duration-300
      ${
        selected
          ? "border-[#2563eb] bg-[#2563eb]/10 text-[#b4c5ff]"
          : "border-[#434655] bg-white/5 text-[#dce2f7] hover:border-[#2563eb]/50"
      }`}
    >
      {title}
    </button>
  );
}

export default RepairCard;