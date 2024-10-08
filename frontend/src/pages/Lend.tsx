import InputSelectToken from "@/components/input/InputSelectToken";
import InputFixToken from "@/components/input/InputFixToken";

import Swal from "sweetalert2";

function Lend () {
  const createPool = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, create pool!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Pool created!",
          text: "You can now lend your assets to borrowers.",
          icon: "success"
        });

        window.location.reload();
      }
    });
  }

  return (
    <div >
      <h1 className="font-semibold text-3xl">Create Pool</h1>
      <p className="text-base mb-4 mt-2 text-gray-400">Create a pool to lend your assets to borrowers.</p>

      {/* Amount to lend */}
      <div className="mb-4 text-left rounded-md p-4 w-full border border-zinc-800 bg-zinc-800">
        <label className="inline-block text-zinc-200 text-sm font-bold mb-2" htmlFor="lendAmount">
          Amount To Lend
        </label>
        <div className="flex justify-between items-center">
          <InputSelectToken id="lendAmount" defaultVal={0}/>
        </div>
      </div>

      {/* Loan Duration */}
      <div className="mb-4 text-left rounded-md p-4 w-full border border-zinc-800 bg-zinc-800">
        <label className="inline-block text-zinc-200 text-sm font-bold mb-2" htmlFor="lendDays">
          Loan Duration
        </label>
        <p className="text-xs font-gray-600 opacity-75">The maximum duration of a loan in days</p>
        <div className="flex justify-between items-center">
          <InputFixToken id="lendDays" defaultVal={7} fixVal="Days"/>
        </div>
      </div>

      {/* Interest Rate */}
      <div className="mb-4 text-left rounded-md p-4 w-full border border-zinc-800 bg-zinc-800">
        <label className="inline-block text-zinc-200 text-sm font-bold mb-2" htmlFor="lendInterest">
          Interest Rate
        </label>
        <p className="text-xs font-gray-600 opacity-75">The interest rate of the loan</p>
        <div className="flex justify-between items-center">
          <InputFixToken id="lendInterest" defaultVal={5} fixVal="%"/>
        </div>
      </div>

      {/* Create Pool button */}
      <div className="mb-4 text-left rounded-md p-4 w-full border border-zinc-800 bg-zinc-800">
        <button className="btn bg-primary text-zinc-200 w-full" onClick={createPool}>Create Pool</button>
      </div>
    </div>
  );
}

export default Lend;