import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnimalById } from "../service/AnimalService";

const SingleAnimal = () => {
  const [animal, setAnimal] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getAnimalById(id).then(({ data }) => {
        setAnimal(data);
      });
    }
  }, [id]);

  return (
    <div className="d-flex justify-content-center">
      <div className="card " style={{ width: "300px" }}>
        <div className="card-body">

          <h2 className="card-title">{animal.name}</h2>
          <p className="card-text">Type: {animal.type}</p>
          <p className="card-text">Habitat: {animal.habitat}</p>
          <p className="card-text">Rare: {animal.rare} mins</p>
          <p className="card-text">Count: {animal.count_in_zoo}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleAnimal;
