import InputSelectToken from "@/components/input/InputSelectToken";
import PropertyCard from "@/components/borrow/PropertyCard";

import { useEffect } from "react";

interface TokenBoxProps {
  cardTitle: string;
  attachment: boolean;
  val?: number;
  defaultVal?: number;
  propsNow?: any;
  setPropertyData?: any;
}

function TokenBox (props: TokenBoxProps) {
  useEffect(() => {
    const collatTextbox = document.getElementById('collatTextbox') as HTMLInputElement;
      collatTextbox.value = String(props.defaultVal);
  }, [props.propsNow?.img]);
  
  return (
    <div className="border border-zinc-800 bg-zinc-800 rounded-md p-4">
      <h1 className="text-xl font-bold">{props.cardTitle}</h1>
      <div className="flex justify-between items-center mt-4">
        {/* <label className="block uppercase tracking-wide text-zinc-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Value
        </label> */}
        <InputSelectToken id="collatTextbox" val={props.val} defaultVal={props.defaultVal}/>
      </div>
        { props.attachment && 
          <PropertyCard
            name = {props.propsNow.name}
            location = {props.propsNow.location}
            des = {props.propsNow.des}
            price = {props.propsNow.price}
            unit = {props.propsNow.unit}
            img = {props.propsNow.img}
            isSelectProperty = {true}
            setPropertyData = {props.setPropertyData}
          />
        }
    </div>
  );
}

export default TokenBox;