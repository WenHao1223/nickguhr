import TokenBox from "@/components/lend/TokenBox";

function Lend () {
  return (
    <>
      <h1 className="font-semibold text-3xl">Lend</h1>

      <div className="flex">
        <div className="w-1/2 p-4">
          {/* Left section content */}
          {/* <p>This is the left section.</p> */}
          <TokenBox cardTitle="You collateralize"/>
        </div>
        <div className="w-1/2 p-4">
          {/* Right section content */}
          {/* <p>This is the right section.</p> */}
          <TokenBox cardTitle="You borrow"/>
        </div>
      </div>
    </>
  );
}

export default Lend;