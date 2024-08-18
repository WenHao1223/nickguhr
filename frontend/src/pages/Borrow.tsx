import TokenBox from "@/components/borrow/TokenBox";

import { useState } from "react";

function Borrow () {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState(0);
  const [unit, setUnit] = useState("");
  const [img, setImg] = useState("");

  // const [name, setName] = useState("4,000 sq ft Bungalow");
  // const [location, setLocation] = useState("Ipoh, Perak, Malaysia");
  // const [des, setDes] = useState("This is a 4,000 sq ft bungalow with 4 bedrooms and 3 bathrooms.");
  // const [price, setPrice] = useState(86.62);
  // const [unit, setUnit] = useState("ETH");
  // const [img, setImg] = useState("https://www.mydomaine.com/thmb/K3GkP6INFV9SHaLogJWSpOgRHVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-523235876-a82866095771495f8146e8cd7adb1593.jpg");

  const props = {name, location, des, price, unit, img};

  const setPropertyData = (newProps: any) => {
    setName(newProps.name);
    setLocation(newProps.location);
    setDes(newProps.des);
    setPrice(newProps.price);
    setUnit(newProps.unit);
    setImg(newProps.img);

    const borrowTextbox = document.getElementById("borrowTextbox") as HTMLInputElement;
    if (borrowTextbox) {
      borrowTextbox.value = String(newProps.price / 2);
    }
    
  }

  return (
    <>
      <h1 className="font-semibold text-3xl">Borrow</h1>

      <div className="flex">
        <div className="w-1/2 p-4">
          {/* Left section content */}
          {/* <p>This is the left section.</p> */}
          <TokenBox setPropertyData={setPropertyData} propsNow={props} cardTitle="You collateralize" attachment={true} defaultVal={props.price}/>
        </div>
        <div className="w-1/2 p-4">
          {/* Right section content */}
          {/* <p>This is the right section.</p> */}
          <TokenBox cardTitle="You borrow" attachment={false} defaultVal={props.price} unit={props.unit}/>
        </div>
      </div>
    </>
  );
}

export default Borrow;