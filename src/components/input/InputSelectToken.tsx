interface InputTokenProps {
  val?: number;
  defaultVal?: number;
  id?: string;
}

function InputSelectToken (props: InputTokenProps) {
  console.log(props.defaultVal)
  return (
    <>
      <input
        className="appearance-none block w-full bg-zinc-800 text-zinc-200 border border-zinc-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-zinc focus:border-gray-500"
        type="number"
        id={props.id}
        defaultValue={props.defaultVal}
        value={props.val}
        placeholder="Enter an amount"/>
      <select className="block w-1/4 bg-zinc-800 border border-zinc-800 text-zinc-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-zinc focus:border-gray-500" id="grid-state">
        <option>ETH</option>
        <option>DAI</option>
        <option>USDC</option>
        <option>USDT</option>
      </select>
    </>
  );
}

export default InputSelectToken;