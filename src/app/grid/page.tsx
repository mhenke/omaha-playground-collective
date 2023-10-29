const child = (
  <div className="flex h-full items-center justify-center rounded-md bg-white p-4 shadow-md">
    Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
    Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
  </div>
);

export default function GridAsymmetrical() {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap">
        <div className="w-full p-2 md:w-1/3 lg:w-1/4">{child}</div>
        <div className="w-full p-2 md:w-2/3 lg:w-3/4">{child}</div>
        <div className="w-full p-2 md:w-2/3 lg:w-3/4">{child}</div>
        <div className="w-full p-2 md:w-1/3 lg:w-1/4">{child}</div>
        <div className="w-full p-2 md:w-1/4">{child}</div>
        <div className="w-full p-2 md:w-1/4">{child}</div>
        <div className="w-full p-2 md:w-1/2">{child}</div>
      </div>
    </div>
  );
}
