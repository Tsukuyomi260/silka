export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-screen-in relative flex flex-1 flex-col overflow-y-auto">
      {children}
    </div>
  );
}
