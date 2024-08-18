import DashboardCardLayout from "@/components/dashboard/DashboardCardLayout";

function MainDashboard () {
  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        {/* Assets overview */}
        <h3 className="font-bold text-lg">Assets Overview</h3>
        <DashboardCardLayout img="https://cdn-icons-png.flaticon.com/512/4002/4002090.png" name="asset">
          <h5 className="font-bold text-sm">Account Value</h5>
          <p>0.00</p>
          <h5 className="font-bold text-sm">Available Balance</h5>
          <p>0.00</p>
        </DashboardCardLayout>
        <DashboardCardLayout img="https://cdn-icons-png.flaticon.com/512/4002/4002090.png" name="rent">
          <div className="flex">
            <div className="w-1/2">
              <h5 className="font-bold text-sm">Total Rent Earned</h5>
              <p>$ 0.00</p>
              <h5 className="font-bold text-sm">Rent Balance</h5>
              <p>$ 0.00</p>
            </div>
            <div className="w-1/2">
              <h5 className="font-bold text-sm">Properties Owned</h5>
              <p>$ 0.00</p>
              <h5 className="font-bold text-sm">Est. Property Value</h5>
              <p>$ 0.00</p>
            </div>
          </div>
        </DashboardCardLayout>
      </div>
      <div className="w-1/2 p-4">
        {/* My Wallet */}
        <h3 className="font-bold text-lg">My Wallet</h3>
        <DashboardCardLayout img="https://cdn-icons-png.flaticon.com/512/4002/4002090.png" name="rent">
          <div className="flex">
            <div className="w-1/2">
              <h5 className="font-bold text-sm">Wallet Value</h5>
              <p>$0.00</p>
              <h5 className="font-bold text-sm">Crypto Value</h5>
              <p>$0.00</p>
            </div>
            <div className="w-1/2">
              <h5 className="font-bold text-sm">Property Value</h5>
              <p>$0.00</p>
            </div>
          </div>
        </DashboardCardLayout>
      </div>
    </div>
  );
}

export default MainDashboard;