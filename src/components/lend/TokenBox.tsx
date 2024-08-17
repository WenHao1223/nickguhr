interface TokenBoxProps {
  cardTitle: string;
}

function TokenBox (props: TokenBoxProps) {
  return (
    <div className="border border-zinc-800 bg-zinc-800 rounded-md p-4">
      <h1 className="text-xl font-bold">{props.cardTitle}</h1>
      <div className="flex justify-between items-center mt-4">
      {/* <label className="block uppercase tracking-wide text-zinc-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Value
      </label> */}
      <input className="appearance-none block w-full bg-zinc-800 text-zinc-200 border border-zinc-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-zinc focus:border-gray-500" id="grid-last-name" type="number" placeholder="Enter an amount"/>
      <select className="block w-1/4 bg-zinc-800 border border-zinc-800 text-zinc-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-zinc focus:border-gray-500" id="grid-state">
          <option>ETH</option>
          <option>DAI</option>
          <option>USDC</option>
          <option>USDT</option>
        </select>
      </div>          
    </div>
  );
}

export default TokenBox;