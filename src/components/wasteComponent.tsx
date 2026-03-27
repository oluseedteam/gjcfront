import { useModal } from "../context/modal";
import { WastesData } from "../data";
import { values } from "../types";
import { ImageComponent } from "./Tags/image";
export const WasteComponent = ({
  // _style = "grid lg:grid-cols-4 bg-red-500 place-items-center  items-center justify-center mx-auto md:grid-cols-3 grid-cols-2",
  _style = "md:flex grid grid-cols-2 flex-wrap items-center gap-10 md:justify-center",
  Data = WastesData,
}: {
  _style?: string;
  Data?: Array<values>;
}): JSX.Element => {
  const { setModalToggle, initialState } = useModal();

  const handleSubmit = (data: values) => {
    setModalToggle({ ...initialState, editItem: true });
  };
  return (
    <section className={`${_style}  -z-50 gap-6  `}>
      {Data.map((data, index) => {
        return (
          <div
            onClick={() => handleSubmit(data)}
            className="bg-secondary  cursor-pointer  flex flex-col justify-between"
            key={index}
          >
            <div className="p-5">
              <ImageComponent src={data.img} />
            </div>
            <p className="bg-primarySm capitalize text-center text-light p-3">
              {data.name}
            </p>
          </div>
        );
      })}
    </section>
  );
};
