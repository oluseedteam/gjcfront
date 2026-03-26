import Layout from "../../common/layout";
import { adminData } from "../../data";
import { ButtonComponent } from "../../components/Tags/button";

import EditAdmin from "./edit";
import { useModal } from "../../context/modal";
import { useState } from "react";
import { values } from "../../types";

const Admin = (): JSX.Element => {
  const { initialState, modalToggle, setModalToggle } = useModal();

  const openEdit = (data: values) => {
    setModalToggle({ ...initialState, editUser: true });
  };

  // const [data, setData] = useState()

  const statusStyle: {
    [key: string]: string;
  } = {
    pending: "bg-[#072A6C]",
    active: "bg-primary",
    suspended: "bg-[#C93000]",
  };
  return (
    <>
      <EditAdmin
        open={modalToggle.editUser}
        setOpen={() => setModalToggle({ ...initialState })}
      />
      <Layout showSearch={true} type="user" text="Admin">
        <div className="overflow-x-scroll ">
          <table className="table-fixed  p-4 w-full">
            <thead>
              <tr className="text-xl  text-start font-bold font-gsans0-medium">
                <th className="text-start">Email</th>
                <th className="text-start">Role</th>
                <th className="text-start">Status</th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((data, index) => {
                return (
                  <tr onClick={() => openEdit(data)} className="cursor-pointer">
                    <td className="  py-4">{data.email}</td>
                    <td>{data.role}</td>
                    <td>
                      <ButtonComponent
                        type="dark"
                        _style={` ${
                          statusStyle[data.status.toLowerCase()]
                        } text-white w-36  `}
                        title={data.status}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};

export default Admin;
