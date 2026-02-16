export default function ProductSkeleton() {
  return (
    <div className="bg-[#F3D6D3] rounded-2xl p-4 animate-pulse">
      <div className="h-64 bg-[#FAF7F5] rounded-xl mb-4" />
      <div className="h-4 bg-[#7A7A7A]/40 rounded mb-2" />
      <div className="h-4 bg-[#7A7A7A]/40 rounded w-2/3 mb-4" />
      <div className="flex justify-between items-center">
        <div className="h-5 w-16 bg-[#C97A74]/60 rounded" />
        <div className="h-8 w-24 bg-[#C97A74]/60 rounded" />
      </div>
    </div>
  );
}
