import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import tailwind from "../../assets/tailwind.json";
import CardLink from "../../components/card-link/card-link.component";
import { Route, Routes } from "react-router-dom";
import WebElement from "../../components/web-element/web-element.component";

const Tailwind = (cate) => {
  const [currentCat, setCurrentCat] = useState("");

  const cateArray = cate.cate;

  const onSelectCat = (event) => {
    console.log(event.target.name);
    setCurrentCat(event.target);
  };

  console.log(currentCat);

  if (currentCat === "") {
    return (
      <div>
        <div className="flex flex-wrap flex-shrink-0 justify-center">
          {cateArray.map((cat) => (
            <CardLink
              name={cat}
              link={cat.toLowerCase()}
              desc="Test"
              onClickHandler={onSelectCat}
            />
          ))}
        </div>
        <Outlet />
      </div>
    );
  } else {
    return <Outlet />;
  }
};

export default Tailwind;

/*
const testHtml = tailwindData.styles.cards["1"];

  //const toHtml = new DOMParser().parseFromString(testHtml, "text/xml");

  const setHtml = { __html: testHtml };

  return <div dangerouslySetInnerHTML={setHtml}></div>;

  */
