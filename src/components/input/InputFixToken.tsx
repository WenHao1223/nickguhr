interface InputTokenProps {
  val?: number;
  defaultVal?: number;
  id?: string;
  fixVal: string;
}

function InputFixToken (props: InputTokenProps) {
  return (
    <>
      <input
        className="appearance-none block w-full bg-zinc-800 text-zinc-200 border border-zinc-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-zinc focus:border-gray-500" id="grid-last-name"
        type="number"
        value={props.val}
        defaultValue={props.defaultVal}
        placeholder="Enter an amount"
        />
      <div className="block w-1/4 bg-zinc-800 border border-zinc-800 text-zinc-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-zinc focus:border-gray-500" id="grid-state">
        {props.fixVal}
      </div>
    </>
  );
}

export default InputFixToken;