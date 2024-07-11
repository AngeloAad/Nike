import { offer } from "../nike_landing_assets/assets/images";
import { Button } from "../components";
import { arrowRight } from "../nike_landing_assets/assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex justify-center
    items-center padding max-xl:flex-col-reverse gap-10">
      <div className="">
        <img 
        src={offer} 
        alt="Special Offer" 
        width={773}
        height={687}
        className="object-contain w-full"
        />
      </div>

      <div className="flex flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span> Offer
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
        Step into a world where your shopping experience is redefined. At Nike, we bring you unbeatable deals on premier selections, ensuring you enjoy incredible savings. Our unparalleled value sets us apart, making us your go-to destination for the latest in fashion and sportswear. Explore our curated collections and experience the perfect blend of style, quality, and affordability.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Revamp your wardrobe with our exclusive collections. Our fashion and sportswear pieces are designed to meet your unique tastes, ensuring you always stand out. Experience the perfect blend of comfort and style.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button 
          label="Learn More" 
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray" 
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer;