import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

function Dashboard () {
  return (
    <>
      <div className="flex">
        <div className="w-2/3 p-4">
          {/* This is the main part of the dashboard */}
        </div>
        <div className="w-1/3 p-4">
          {/* This is the sidebar */}
          {/* <p>This is the right section.</p> */}
          <DashboardSidebar/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;