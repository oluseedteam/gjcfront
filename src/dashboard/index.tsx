import Layout from "./common/layout";
import { OverviewComponent } from "./common/overview";
import Charts from "./charts";
const Index = (): JSX.Element => {
  return (
    <Layout text="Dashboard">
      <main className="">
        <h1 className="text-primary font-semibold text-2xl">Hey! Tech Bro</h1>
        <p className="font-light font-gsans-light md:text-xl text-base my-4">
          Convert your waste to money & tack your waste record
        </p>
        <h1 className="text-dark text-xl my-3 font-bold">Total Overview</h1>
        <OverviewComponent />
        <Charts />
      </main>
    </Layout>
  );
};

export default Index;
