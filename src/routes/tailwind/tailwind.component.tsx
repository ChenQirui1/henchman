//import { Outlet } from "react-router-dom";
import tailwindData from "../../assets/tailwind.json";
import CardLink from "../../components/card-link/card-link.component";

const Tailwind = () => {
  return (
    <div className="m-3 flex flex-wrap justify-center">
      <CardLink name="Cards" link="/" desc="Test" />
      <CardLink name="Cards" link="/" desc="Test" />
      <CardLink name="Cards" link="/" desc="Test" />
      <CardLink name="Cards" link="/" desc="Test" />
      <CardLink name="Cards" link="/" desc="Test" />
      <CardLink name="Cards" link="/" desc="Test" />
      <CardLink name="Cards" link="/" desc="Test" />
      <CardLink name="Cards" link="/" desc="Test" />
      <CardLink name="Cards" link="/" desc="Test" />
    </div>
  );
};

export default Tailwind;

/*
const testHtml = tailwindData.styles.cards["1"];

  //const toHtml = new DOMParser().parseFromString(testHtml, "text/xml");

  const setHtml = { __html: testHtml };

  return <div dangerouslySetInnerHTML={setHtml}></div>;

  */
