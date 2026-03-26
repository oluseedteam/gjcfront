import Layout from "../../common/layout";
import { useModal } from "../../context/modal";
import { CoverAreaDatas } from "../../data";
import { values } from "../../types";

const Areas = (): JSX.Element => {
  const { setModalToggle, initialState } = useModal();

  const EditData = (data: string) => {
    console.log(initialState);
    setModalToggle({ ...initialState, editArea: true });
  };

  return (
    <Layout showSearch={true} type="Area" text="Cover Area">
      <section className="max-w-4xl mx-auto grid lg:grid-cols-3 grid-cols-2 gap-5">
        {CoverAreaDatas.map((data, index) => {
          return (
            <div
              onClick={() => EditData(data)}
              key={index}
              className="bg-secondary cursor-pointer  rounded-md text-center py-3"
            >
              {data}
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default Areas;
