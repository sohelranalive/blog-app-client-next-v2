import Link from "next/link";

export default function RootLayoutPage({
  children,
  accountsSlot,
  salesSlot,
}: {
  children: React.ReactNode;
  accountsSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}) {
  return (
    <div className="w-10/12 border-2 border-b-blue-800 mx-auto">
      <h1 className="text-center">This is the RootLayout Page</h1>
      <div className="flex gap-10 m-8">
        <Link href="/accounts">Accounts</Link>
        <Link href="/development">Development</Link>
        <Link href="/sales">Sales</Link>
      </div>
      {children}
      <hr />
      <div className="flex mt-12">
        {accountsSlot}
        {salesSlot}
      </div>
    </div>
  );
}
