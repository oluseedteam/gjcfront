import Layout from "../common/layout";
import { OverviewComponent } from "../components/overview";
import Charts from "./charts";
import bg from "../assets/dashboardBg.png";

const Index = (): JSX.Element => {
  return (
    <Layout text="Dashboard">
      <main className="">
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="rounded-3xl p-5"
        >
          <h1 className="text-primary  font-semibold text-2xl">
            Hey welcome Back, Bedlam!👋
          </h1>
          <p className="font-light font-gsans-light text-primary md:text-xl text-base my-4">
            Welcome back to your{" "}
            <strong className="font-bold font-gsans-medium">
              {" "}
              GJC Recycling dashboard!
            </strong>{" "}
            I’m excited to help you monitor your user’s bookings and give you
            the over view of what is going on with your company.d
          </p>
        </div>
        <h1 className="text-dark text-xl my-8 font-bold">
          Overview of this Month
        </h1>
        <OverviewComponent />
        <Charts />
      </main>
    </Layout>
  );
};

export default Index;
