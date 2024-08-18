import propertyData from "@/data/propertyData.json";
import PropertyCard from "@/components/borrow/PropertyCard";

function DashboardSidebar () {
  return (
    <div className="p-4 text-left">
      <h2 className="text-lg font-semibold">My Properties / Market Place</h2>
      <p className="mb-4 text-xs font-gray-600 opacity-75">View your properties here.</p>

      <div className="flex flex-col overflow-y-auto h-[60vh]">
        {
          propertyData.map((property) => {
            return (
              <>
                <PropertyCard
                  key={property.id} // Assuming 'id' is a unique identifier for each property
                  name={property.name}
                  location={property.location}
                  des={property.des}
                  price={property.price}
                  unit={property.unit}
                  img={property.img}
                  isSelectProperty={false}
                  setPropertyData={null}
                  size = "small"
                />
                <hr className="my-4"/>
              </>
            );
          })
        }
      </div>
    </div>
  );
}

export default DashboardSidebar;