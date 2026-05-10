import { Skeleton } from './Skeleton';

export function ChartSkeleton() {
  return (
    <div className="space-y-4 p-4">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-64 w-full" />
    </div>
  );
}

export function TableRowSkeleton({ columns = 5 }: { columns?: number }) {
  return (
    <tr className="border-b border-[--border]">
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="px-4 py-3">
          <Skeleton className="h-4" />
        </td>
      ))}
    </tr>
  );
}
