export function Title1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mb-4 text-3xl font-bold dark:text-g.dark-50">
      {children}
    </h1>
  );
}
export function Title2({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="-mt-4 text-xl font-semibold text-g.warm-500 dark:text-g.warm-400">
      {children}
    </h1>
  );
}
