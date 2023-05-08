import "./headercom.css";

const headercom = ({ type, text }) => {
  return <h1 className={type}>{text}</h1>;
};

export default headercom;
