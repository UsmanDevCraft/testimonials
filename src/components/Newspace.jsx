import { useState } from "react";
import { useCreateSpace } from "../hooks/app/useCreateSpace";

const Newspace = () => {
  const [data, setData] = useState({
    spaceName: "",
    headerTitle: "",
    customMessage: "",
  });
  const { mutate } = useCreateSpace();

  const fetchNewspace = async (e) => {
    e.preventDefault();
    mutate(data);
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h3 className="text-center">Create a new Space</h3>

      <form onSubmit={fetchNewspace}>
        <div className="mb-3">
          <label htmlFor="spaceName" className="form-label">
            Space name<code>*</code>
          </label>
          <input
            type="text"
            className="form-control"
            id="spaceName"
            name="spaceName"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="headerTitle" className="form-label">
            Header title<code>*</code>
          </label>
          <input
            type="text"
            className="form-control"
            id="headerTitle"
            name="headerTitle"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="customMessage" className="form-label">
            your custom message<code>*</code>
          </label>
          <input
            type="text"
            className="form-control"
            id="customMessage"
            name="customMessage"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Newspace;
