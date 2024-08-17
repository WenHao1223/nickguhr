import InputSelectToken from "@/components/input/InputSelectToken";
import PropertyCard from "@/components/borrow/PropertyCard";

interface TokenBoxProps {
  cardTitle: string;
  attachment: boolean;
  val: number;
  propsNow?: any;
  setPropertyData?: any;
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