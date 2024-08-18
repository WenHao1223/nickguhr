import DashboardCard from "@/components/dashboard/DashboardCardLayout";

function MainDashboard () {
  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        {/* Assets overview */}
        <h3 className="font-bold text-lg">Assets Overview</h3>
        {/* <DashboardCard img="https://cdn-icons-png.flaticon.com/512/4002/4002090.png" name="asset">
          <h3 className="font-bold text-lg">Total Assets</h3>
          <p>0.00</p>
        </DashboardCard>
        <DashboardCard>
          <h3 className="font-bold text-lg">Total Liabilities</h3>
          <p>0.00</p>
        </DashboardCard> */}
      </div>
      <div className="w-1/2 p-4">
        {/* My Wallet */}
        <h3 className="font-bold text-lg">My Wallet</h3>
      </div>
    </div>
  );
}

export default MainDashboard;