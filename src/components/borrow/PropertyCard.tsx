import PropertyModal from "@/components/borrow/PropertyModal";

interface PropertyCardProps {
  id?: string;
  name: string;
  location: string;
  des: string;
  price: number;
  unit: string;
  img: string;
  isSelectProperty?: boolean;
  setPropertyData?: any;
  size?: string;
}

import { useEffect } from "react";

function PropertyCard (props: PropertyCardProps) {
  useEffect(() => {
    // hide modal when esc key is pressed
    const propertySelectModel = document.getElementById('propertySelectModel') as HTMLDialogElement;
    if (propertySelectModel) {
      propertySelectModel.close();
    }
  }, [props.img]);

  return (
    <div className={`card lg:card-side ${props.size === 'small' ? 'bg-transparent' : 'bg-base-100'} shadow-xl`}>
      <figure>
        {
          props.name !== "" && <>
            <img
              src={props.img}
              alt={props.name}
              className={`${props.size === "small" ? "h-20" : "h-44"} aspect-square`}/>
          </>
        }
      </figure>
      <div className="card-body">
        {
          props.name !== "" && <>
            <h2 className={`card-title text-left ${props.size === 'small' ? 'text-sm' : ''}`}>{props.name}</h2>
            <p className={`text-left ${props.size === 'small' ? 'text-xs' : ''}`}>{props.location}</p>
            {
              props.size !== "small" &&
              <p className="text-left text-sm text-gray-400">{props.des}</p>
            }
            <p className={`text-left ${props.size === 'small' ? 'text-xs' : ''}`}>{props.price} {props.unit}</p>
          </>
        }
        <div className={`card-actions ${props.name !== "" ? "justify-end" : "justify-center w-full"}`}>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          { props.isSelectProperty ?
            <>
              <button className={`btn btn-primary ${props.name === "" && "w-full"}`} onClick={()=>(document.getElementById('propertySelectModel') as HTMLDialogElement).showModal()}>Select another property</button>
              <PropertyModal setPropertyData={props.setPropertyData}/>
            </>
            :
            props.size !== "small" &&
            <>
              <button className="btn btn-primary" onClick={
                () => {
                  props.setPropertyData({
                    name: props.name,
                    location: props.location,
                    des: props.des,
                    price: props.price,
                    unit: props.unit,
                    img: props.img
                  })
                }
              }>Select</button>
            </>}
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;