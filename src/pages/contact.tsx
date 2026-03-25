import Layout from "../common/layout";
import { ButtonComponent } from "../components/Tags/button";
import { ParagraphComponent } from "../components/Tags/paragraph";
import FaqsComponent from "../components/faqs";
import Band from "../components/band";
import Wastes from "../components/wastes";
import Pickup from "../components/pickup";
import Drop from "../components/drop";
import ContactForm from "../components/contact";

const Contact = (): JSX.Element => {
  const SectionComponent = () => {
    return (
      <section className=" text-center max-w-4xl mx-auto text-white  ">
        <h1 className="md:text-9xl text-6xl uppercase font-hurl tracking-wider">
          CONTACT US
        </h1>
        <ParagraphComponent
          _style="text-white font-gsans-light my-3 font-light text-light"
          text="Lorem ipsum dolor sit amet consectetur. Tincidunt ipsum enim tellus rhoncus mattis. Id maecenas tincidunt dapibus auctor lectus tortor ligula sed. Aliquam tortor viverra phasellus at euismod id faucibus sem. "
        />
        <ButtonComponent type="light" title="Contact Us" />
      </section>
    );
  };
  return (
    <Layout name="Contact" SectionComponent={SectionComponent}>
      <section>
        <FaqsComponent />
        <ContactForm />
        <Pickup />
        <Drop />
        <Band />
        <Wastes />
      </section>
    </Layout>
  );
};

export default Contact;
