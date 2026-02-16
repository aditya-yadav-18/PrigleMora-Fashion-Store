export default function OverlayLoader() {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-12 h-12 border-4 border-pink-300 border-t-pink-500 rounded-full animate-spin" />
    </div>
  );
}
// use
// {loading && <OverlayLoader />}
