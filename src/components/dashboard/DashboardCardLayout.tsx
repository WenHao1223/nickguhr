function DashboardCardLayout({children, img, name}: {children: React.ReactNode, img: string, name: string}
) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl text-left m-4">
      <figure className="items-center align-center">
        <img
          src={img}
          alt={name}
          className="h-40 aspect-w-16 aspect-h-9"/>
      </figure>
      <div className="card-body w-3/5">
        {children}
      </div>
    </div>
  );
}

export default DashboardCardLayout;