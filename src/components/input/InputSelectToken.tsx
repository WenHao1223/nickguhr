import { useState } from 'react';

interface InputTokenProps {
  val?: number;
  defaultVal?: number;
  id?: string;
}

function InputSelectToken (props: InputTokenProps) {
  const [inputValue, setInputValue] = useState(props.defaultVal || '');

  const handleInputChange = () => {
    const value = Number((document.getElementById("collatTextbox") as HTMLInputElement).value);
    const maxVal = Number((document.getElementById("collatTextbox") as HTMLInputElement).max);
    const minVal = Number((document.getElementById("borrowTextbox") as HTMLInputElement).min);
  
    if (value <= maxVal && value >= minVal) {
      setInputValue(value);
    } else if (value < minVal) {
      setInputValue(minVal);
    } else {
      setInputValue(maxVal);
    }

  }

  return (
    <>
      <input
        className="appearance-none block w-full bg-zinc-800 text-zinc-200 border border-zinc-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-zinc focus:border-gray-500"
        type="number"
        id={props.id}
        defaultValue={props.defaultVal}
        value={props.val}
        min = {0}
        max = {props.defaultVal / 2}
        placeholder="Enter an amount"
        onChange={handleInputChange}
      />
      <select className="block w-1/4 bg-zinc-800 border border-zinc-800 text-zinc-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-zinc focus:border-gray-500" defaultValue={"ETH"} id={props.id + "-unit"}>
        <option>ETH</option>
        <option>DAI</option>
        <option>USDC</option>
        <option>USDT</option>
      </select>
    </>
  );
}

export default InputSelectToken;