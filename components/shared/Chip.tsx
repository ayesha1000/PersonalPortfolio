export default function Chip({ children }: { children: string }) {
  return (
    <span
      className={`inline-block align-middle bg-[#dee5e7] text-[#072a38] text-sm font-medium py-1 rounded-full pl-3 pr-3 shadow-lg border border-[#072a38]`}
    >
      {children}
    </span>
  );
}
