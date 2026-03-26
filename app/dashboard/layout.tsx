import NavLinks from "@/app/ui/dashboard/nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-50 p-4 border-r sticky top-0 h-screen">
        <h1 className="text-xl font-bold mb-6">Dashboard</h1>
        <NavLinks />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">{children}</main>
    </div>
  );
}
