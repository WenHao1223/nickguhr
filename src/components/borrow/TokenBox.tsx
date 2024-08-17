import InputSelectToken from "@/components/input/InputSelectToken";

interface TokenBoxProps {
  cardTitle: string;
  attachment: boolean;
  val: number;
}

function TokenBox (props: TokenBoxProps) {
  return (
    <div className="border border-zinc-800 bg-zinc-800 rounded-md p-4">
      <h1 className="text-xl font-bold">{props.cardTitle}</h1>
      <div className="flex justify-between items-center mt-4">
        {/* <label className="block uppercase tracking-wide text-zinc-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Value
        </label> */}
        <InputSelectToken val={props.val}/>
      </div>
      { props.attachment && <>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://www.mydomaine.com/thmb/K3GkP6INFV9SHaLogJWSpOgRHVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-523235876-a82866095771495f8146e8cd7adb1593.jpg"
              alt="NFT"
              className="h-44 aspect-square"/>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-left">4,000 sq ft Bungalow</h2>
            <p className="text-left">Ipoh, Perak, Malaysia.</p>
            <p className="text-left">86.62 ETH</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Select another property</button>
            </div>
          </div>
        </div>
      </>}
    </div>
  );
}

export default TokenBox;