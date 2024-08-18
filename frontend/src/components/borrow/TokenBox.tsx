import InputSelectToken from "@/components/input/InputSelectToken";
import PropertyCard from "@/components/borrow/PropertyCard";

import conversionData from "@/data/conversionData.json";

import { useEffect } from "react";
import Swal from 'sweetalert2'

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
      const valAftConversion = props.defaultVal * conversionData[props.propsNow?.unit];
      collatTextbox.value = String(valAftConversion);
    }

    const collatUnit = document.getElementById('collatTextbox-unit') as HTMLSelectElement;
    collatUnit.value = "USDT";
    collatUnit.disabled = true;
    collatUnit.style.color = "white";
    collatUnit.style.opacity = "1";

    const borrowUnit = document.getElementById('borrowTextbox-unit') as HTMLSelectElement;
    borrowUnit.value = "USDT";
    // borrowUnit.value = props.propsNow?.unit;

    const borrowTextbox = document.getElementById('borrowTextbox') as HTMLInputElement;
    borrowTextbox.value = String((props.defaultVal / 2) * conversionData[props.propsNow?.unit]);

    const maxAmount = document.getElementById('t-maxAmount') as HTMLSpanElement;
    if (maxAmount) {
      maxAmount.innerText = String((props.defaultVal / 2) * conversionData[props.propsNow?.unit]);
    }
  }, [props.propsNow?.img]);

  const confirmBorrow = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, borrow it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Borrowed!",
          text: "Your asset has been borrowed.",
          icon: "success"
        });

        window.location.reload();
      }
    });
  }
  
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
        props?.defaultVal !== 0 &&
        <>
          <p className="text-xs font-gray-600 opacity-75">
            Maximum amount of money you can borrow is <span className="text-zinc-200 font-bold" id="t-maxAmount"></span>  USDT
          </p>
          <button
            disabled={(document.getElementById("borrowTextbox") as HTMLInputElement)?.value === "0" || null}
            onClick={confirmBorrow} className="btn btn-primary w-full mt-6">Borrow now!</button>
        </>
      }
    </div>
  );
}

export default TokenBox;