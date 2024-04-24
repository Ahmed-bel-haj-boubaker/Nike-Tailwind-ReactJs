import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialsOffers = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full "
        />
      </div>
      <div>
        <h2
          className="mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg
        "
        >
          <span className="text-coral-red"> Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          earum ratione nihil cumque consequatur nemo consectetur magni
          quibusdam expedita molestiae saepe iusto eaque, officiis, asperiores
          illo deleniti unde porro maiores.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
          temporibus esse labore incidunt
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialsOffers;
