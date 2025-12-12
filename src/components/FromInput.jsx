import axios from "axios";
import { useState } from "react";

export default function FromInput({fetch}) {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    position: "",
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitFrom = (e) => {
    const URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";
    e.preventDefault();
    setLoading(true);
    try {
      axios.post(URL, formData).then(() => {
        setFormData({ name: "", lastname: "", position: "" });
      });
    } catch (error) {
      console.error("Cannot create user:", error);
    } finally {
      setLoading(false);
      fetch();
    }
  };
  return (
    <form
      onSubmit={submitFrom}
      className="InputField flex flex-col justify-between gap-4 mt-2 md:flex-row"
    >
      <input
        className=" bg-white grow p-2 rounded-lg shadow-md"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={onChange}
        disabled={loading}
      ></input>
      <input
        className=" bg-white grow p-2 rounded-lg shadow-md"
        placeholder="Lastname"
        name="lastname"
        value={formData.lastname}
        onChange={onChange}
        disabled={loading}
      ></input>
      <input
        className=" bg-white grow p-2 rounded-lg shadow-md"
        placeholder="Position"
        name="position"
        value={formData.position}
        onChange={onChange}
        disabled={loading}
      ></input>
      <button
        type="submit"
        className=" bg-blue-500 p-2 rounded-lg text-white shadow-md hover:shadow-lg"
        disabled={loading}
      >
        Save
      </button>
    </form>
  );
}
