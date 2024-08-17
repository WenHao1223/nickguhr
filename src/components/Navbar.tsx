import { Link } from "react-router-dom";

import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";

import { WalletDetails } from "@/components/wallet/WalletDetails";
import { NetworkInfo } from "@/components/NetworkInfo";
// import { AccountInfo } from "@/components/AcoountInfo";

function Navbar () {
  const { connected } = useWallet();

  return (
    <>
      <div className="navbar bg-zinc-900 rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/lend">Lend</Link></li>
              <li><Link to="/borrow">Borrow</Link></li>
              <li><Link to="/tokenize">Tokenize Your Assets</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">RWAR </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/lend">Lend</Link></li>
            <li><Link to="/borrow">Borrow</Link></li>
            <li><Link to="/tokenize">Tokenize Your Assets</Link></li>
          </ul>
        </div>  
        <div className="navbar-end">
          {/* <a className="btn btn-primary">Connect Your Wallet</a> */}
          {/* <WalletSelector /> */}
          <div className="flex items-center justify-center">
            <Header />

            {connected && (
              <>
                <button className="btn" onClick={() => (document.getElementById('walletDetailsModal') as HTMLDialogElement).showModal()}>
                  <i className="fa-solid fa-info"></i>
                </button>
                <dialog id="walletDetailsModal" className="modal justify-normal items-center">
                  <div className="modal-box">
                    <p className="mb-4 text-xs font-gray-600 opacity-75">Press ESC key or click the button below to close</p>
                    <Card>
                      <CardContent className="flex flex-col gap-10 pt-6">
                        <WalletDetails />
                        <NetworkInfo />
                        {/* <AccountInfo /> */}
                      </CardContent>
                    </Card>

                    <div className="modal-action">
                      <form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;