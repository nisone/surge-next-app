import SideNavbar from "../../components/Navbars/side-navbar";
import AdminNavbar from "../../components/Navbars/admin-navbar";
import FooterAdmin from "../../components/Footers/footer-admin";
import HeaderStats from "../../components/Headers/HeaderStats";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <SideNavbar />
      <div className={"relative md:ml-64 bg-slate-100"}>
        <AdminNavbar />
        <HeaderStats />
        <div className={"px-4 md:px-10 mx-auto w-full -m-100"}>
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
