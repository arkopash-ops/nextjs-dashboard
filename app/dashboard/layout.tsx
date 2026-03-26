import NavLinks from "../ui/dashboard/nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <aside>
        <NavLinks />
      </aside>
      <main>{children}</main>
    </div>
  );
}
