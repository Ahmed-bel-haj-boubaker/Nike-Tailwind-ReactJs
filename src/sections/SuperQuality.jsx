import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div>
        {" "}
        <h2
          className="mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg
        "
        >
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red"> Quality </span> Shoes
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
        <div className="mt-11">
          <Button label="Shop now" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  );
};

export default SuperQuality;
