import "./container.css";

export default function Container({ children }) {
  return <div className="shadow-2xl container__div ">{children}</div>;
}
