import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addAnimal,
  editAnimalById,
  getAnimalById,
} from "../service/AnimalService";

const AddAnimal = () => {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({
    name: "",
    type: "",
    habitat: "",
    rare: "",
    count_in_zoo: "",
    favorite_food: "",
  });

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getAnimalById(id).then(({ data }) => {
        setAnimal(data);
      });
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (id) {
      editAnimalById(id, animal);
    } else {
      addAnimal(
        animal.name,
        animal.type,
        animal.habitat,
        animal.rare,
        animal.count_in_zoo,
        animal.favorite_food
      );
      setAnimal({
        name: "",
        type: "",
        habitat: "",
        rare: "",
        count_in_zoo: "",
        favorite_food: "",
      });
    }
    navigate("/");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAnimal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        className="container mt-5"
        style={{ width: "300px" }}
        onSubmit={(event) => handleSubmit(event, animal)}
      >
        <div className="form-floating mt-3">
          <input
            name="name"
            value={animal.name}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="Name"
          />
          <label>Name</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="type"
            value={animal.type}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="type"
          />
          <label>Type</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="habitat"
            value={animal.habitat}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="habitat"
          />
          <label>Habitat</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="rare"
            value={animal.rare}
            type="bool"
            className="form-control"
            onChange={handleInputChange}
            placeholder="rare"
          />
          <label>rare</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="count_in_zoo"
            value={animal.count_in_zoo}
            type="number"
            className="form-control"
            onChange={handleInputChange}
            placeholder="count"
          />
          <label>count</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="favorite_food"
            value={animal.favorite_food}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="food"
          />
          <label>Favorite food</label>
        </div>
        <div>
          {id ? (
            <button
              className="w-100 btn btn-lg btn-warning mt-3"
              type="submit"
              onClick={handleSubmit}
            >
              Edit
            </button>
          ) : (
            <button
              className="w-100 btn btn-lg btn-success mt-3"
              type="submit"
              onClick={handleSubmit}
            >
              Add
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default AddAnimal;
