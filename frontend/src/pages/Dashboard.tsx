import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MainDashboard from "@/components/dashboard/MainDashboard";
import RecentTransaction from "@/components/dashboard/RecentTransaction";

function Dashboard () {
  return (
    <>
      <div className="flex">
        <div className="w-2/3 p-4">
          {/* This is the main part of the dashboard */}
          <MainDashboard/>
        </div>
        <div className="w-1/3 p-4">
          {/* This is the sidebar */}
          {/* <p>This is the right section.</p> */}
          <DashboardSidebar/>
        </div>
      </div>
      <RecentTransaction/>
    </>
  );
}

export default Dashboard;