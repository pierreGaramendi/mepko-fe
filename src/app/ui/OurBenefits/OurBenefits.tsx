import { MdStars } from "react-icons/md";
import { FaTruckFast } from "react-icons/fa6";
import { GiStarMedal } from "react-icons/gi";

export const OurBenefitsComponent = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center px-32">
        <MdStars size={45}></MdStars>
        <section className="text-xl pt-6 pb-2">Best Quality</section>
        <p className="text-center subtext">Mean if he they been no hold mr. is at much do made took held help.</p>
      </section>

      <section className="flex flex-col justify-center items-center px-32">
        <FaTruckFast size={45}></FaTruckFast>
        <section className="text-xl pt-6 pb-2">Best Quality</section>
        <p className="text-center subtext">Mean if he they been no hold mr. is at much do made took held help.</p>
      </section>

      <section className="flex flex-col justify-center items-center px-32">
        <GiStarMedal size={45}></GiStarMedal>
        <section className="text-xl pt-6 pb-2">Best Quality</section>
        <p className="text-center subtext">Mean if he they been no hold mr. is at much do made took held help.</p>
      </section>
    </>
  );
};
