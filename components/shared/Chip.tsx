export default function Chip({ children }: { children: string }) {
  return (
    <span
      className={`inline-block align-middle bg-[#faedf5] text-[#93376f] text-sm font-medium py-1 rounded-full pl-3 pr-3 shadow-lg border border-[#93376f]`}
    >
      {children}
    </span>
  );
}
