import PropertyCard from "@/components/borrow/PropertyCard";
import propertyData from "@/data/propertyData.json";

function PropertyModal (props) {
  // if props.img changing, key down esc

  return (
    <dialog id="propertySelectModel" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg">Select Another Property</h3>
        <p className="text-xs font-gray-600 opacity-75">Prwess ESC key or click on ✕ button to close</p>
        {
          propertyData.map((property) => (
            <PropertyCard
              key={property.id} // Assuming 'id' is a unique identifier for each property
              name={property.name}
              location={property.location}
              des={property.des}
              price={property.price}
              unit={property.unit}
              img={property.img}
              isSelectProperty={false}
              setPropertyData = {props.setPropertyData}
            />
          ))
        }
      </div>
    </dialog>
  );
}

export default PropertyModal;