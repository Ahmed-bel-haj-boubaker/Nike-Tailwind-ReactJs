const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]  shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center bg-coral-red rounded-full items-center">
        {" "}
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-1 font-montserrat text-slate-gray break-words leading- text-lg ">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
