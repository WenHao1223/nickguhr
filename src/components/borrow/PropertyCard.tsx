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
}

function PropertyCard (props: PropertyCardProps) {
  if(props.name !== "")
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={props.img}
          alt={props.name}
          className="h-44 aspect-square"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-left">{props.name}</h2>
        <p className="text-left">{props.location}</p>
        <p className="text-left">{props.price} {props.unit}</p>
        <div className="card-actions justify-end">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          { props.isSelectProperty ?
            <>
              <button className="btn btn-primary" onClick={()=>(document.getElementById('propertySelectModel') as HTMLDialogElement).showModal()}>Select another property</button>
              <PropertyModal/>
            </>
            :
            <>
              <button className="btn btn-primary">Select</button>
            </>}
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;