import "./buttoncom.css";

const buttoncom = ({ type, text }) => {
  return <h1 className={type}>{text}</h1>;
};

export default buttoncom;
