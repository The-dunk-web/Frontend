export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="text-center">
      <div className="flex min-h-[200px] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-red-500"></div>
      </div>
    </div>
  );
}
