import { WasteComponent } from "../../components/wasteComponent";
import Layout from "../../common/layout";

const Items = (): JSX.Element => {
  return (
    <Layout showSearch={true} type="Item" text="Acceptable Items's">
      <WasteComponent _style="grid -z-10 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5  " />
    </Layout>
  );
};

export default Items;
