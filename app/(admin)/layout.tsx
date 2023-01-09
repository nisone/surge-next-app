import SideNavbar from "../../components/Navbars/side-navbar"
import AdminNavbar from "../../components/Navbars/admin-navbar"
import FooterAdmin from "../../components/Footers/footer-admin"
import HeaderStats from '../../components/Headers/HeaderStats'


import { firestore } from "../../lib/firebase";

async function getStats() {
  const drivers = await firestore.collection('drivers').count().get();
  const users = await firestore.collection('users').count().get();
  const requests = await firestore.collection('requests').count().get();
  const transactions = await firestore.collection('transactions').count().get();

    return {
        drivers: drivers.data().count,
        users: users.data().count,
        requests: requests.data().count,
        transactions: transactions.data().count,
      };
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const data = await getStats()

  return (
    <>
      <SideNavbar />
      <div className={"relative md:ml-64 bg-slate-100"}>
        <AdminNavbar />
        <HeaderStats data={data}/>
        <div className={"px-4 md:px-10 mx-auto w-full -m-100"}>
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
