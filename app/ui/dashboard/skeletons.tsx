export function CardSkeleton() {
  return <div className="rounded-xl bg-gray-200 p-4 animate-pulse h-24" />;
}

export function CardsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
