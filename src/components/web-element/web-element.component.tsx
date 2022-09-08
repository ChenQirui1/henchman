import { useParams } from "react-router-dom";

const WebElement = () => {
  const { id } = useParams();
  console.log(id);
  return <h1>hellow</h1>;
};

export default WebElement;
