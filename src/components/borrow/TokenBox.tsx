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
  unit?: string;
}

function TokenBox (props: TokenBoxProps) {
  useEffect(() => {
    if (props.cardTitle === "You collateralize") {
      const collatTextbox = document.getElementById('collatTextbox') as HTMLInputElement;
      collatTextbox.value = String(props.defaultVal);
    } else {
      const borrowTextbox = document.getElementById('borrowTextbox') as HTMLInputElement;
      borrowTextbox.value = String(props.defaultVal / 2);
      
    }
    const collatUnit = document.getElementById('collatTextbox-unit') as HTMLSelectElement;
    collatUnit.value = props.propsNow?.unit;
    
    const borrowUnit = document.getElementById('borrowTextbox-unit') as HTMLSelectElement;
    borrowUnit.value = props.propsNow?.unit;

    // const borrowTextbox = document.getElementById('borrowTextbox') as HTMLInputElement;
    // borrowTextbox.value = String(props.defaultVal);
  }, [props.propsNow?.img]);
  
  return (
    <div className="border border-zinc-800 bg-zinc-800 rounded-md p-4">
      <h1 className="text-xl font-bold">{props.cardTitle}</h1>
      <div className="flex justify-between items-center mt-4">
        {/* <label className="block uppercase tracking-wide text-zinc-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Value
        </label> */}
        {
          props.cardTitle === "You collateralize" ?
            <InputSelectToken id="collatTextbox" val={props.val} defaultVal={props.defaultVal}/>
            :
            <InputSelectToken id="borrowTextbox" val={props.val} defaultVal={props.defaultVal}/>
        }
      </div>
      { props.cardTitle === "You collateralize" ?
        props.attachment && 
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
      :
        <>
          <p className="text-xs font-gray-600 opacity-75">
            Maximum amount of money you can borrow is
            <span className="text-zinc-200 font-bold"> {props.defaultVal / 2} {props.unit}</span>
          </p>
        </>
      }
    </div>
  );
}

export default TokenBox;