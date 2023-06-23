import { useContext, useEffect, useState } from "react";
import AnimalContext from "../storage/AnimalContext";
import { getAnimals } from "../service/AnimalService";
import { Link } from "react-router-dom";

const Animals = () => {
  const { animals, updateAnimals } = useContext(AnimalContext);

  useEffect(() => {
    getAnimals().then(({ data }) => {
      updateAnimals(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {Array.isArray(animals)
          ? animals.map((animal, id) => (
              <div key={id} className="col m-5" style={{ width: "340px" }}>
                <div className="card shadow-sm">
                  <div className="card-body bg-light border rounded border">
                    <h1 className="card-text">{animal.name}</h1>
                    <div className="mb-1 text-body-secondary">
                      type: {animal.type}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Link
                        className="btn btn-outline-success"
                        to={`/animals/${animal.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-warning"
                        to={`edit/${animal.id}`}
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
export default Animals;
