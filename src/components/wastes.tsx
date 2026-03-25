import { WasteComponent } from "./wasteComponent";

import SubLayout from "../common/subLayout";
const Wastes = (): JSX.Element => {
  return (
    <SubLayout
      _style2="my-20 "
      subText="Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum enim tellus
    rhoncus mattis. Id maecenas tincidunt dapibus auctor lectus tortor
    ligula sed. Aliquam tortor viverra phasellus at euismod id faucibus sem."
      text="what we accept"
    >
      <WasteComponent />
    </SubLayout>
  );
};

export default Wastes;
