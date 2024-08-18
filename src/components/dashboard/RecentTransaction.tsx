function RecentTransaction () {
  return (
    <div className="w-full p-4">
  <h3 className="font-bold text-lg mb-4">Recent Transactions</h3>
  <table className="min-w-full">
    <thead>
      <tr className="hover:bg-zinc-200 hover:text-zinc-700">
        <th className="py-2 px-4 border-b">Transaction ID</th>
        <th className="py-2 px-4 border-b">Action</th>
        <th className="py-2 px-4 border-b">DateTime</th>
        <th className="py-2 px-4 border-b">Transaction Hash</th>
        <th className="py-2 px-4 border-b">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-zinc-200 hover:text-zinc-700">
        <td className="py-2 px-4 border-b">123456</td>
        <td className="py-2 px-4 border-b">addProperty</td>
        <td className="py-2 px-4 border-b">2023-10-01 12:00</td>
        <td className="py-2 px-4 border-b">0x123abc...</td>
        <td className="py-2 px-4 border-b text-success">Success</td>
      </tr>
      <tr className="hover:bg-zinc-200 hover:text-zinc-700">
        <td className="py-2 px-4 border-b">789012</td>
        <td className="py-2 px-4 border-b">borrowProperty</td>
        <td className="py-2 px-4 border-b">2023-10-02 14:30</td>
        <td className="py-2 px-4 border-b">0x456def...</td>
        <td className="py-2 px-4 border-b text-success">Success</td>
      </tr>
      <tr className="hover:bg-zinc-200 hover:text-zinc-700">
        <td className="py-2 px-4 border-b">345678</td>
        <td className="py-2 px-4 border-b">lendProperty</td>
        <td className="py-2 px-4 border-b">2023-10-03 16:45</td>
        <td className="py-2 px-4 border-b">0x789ghi...</td>
        <td className="py-2 px-4 border-b text-success">Success</td>
      </tr>
    </tbody>
  </table>
</div>
  );
}

export default RecentTransaction;