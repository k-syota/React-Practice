import "./Container.css";

const Container = ({ title,children }) => {
  return (
    <div className="container">
      <h3>{children}</h3>
    </div>
  );
};

export default Container;
