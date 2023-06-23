import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Animals from "./components/Animals";
import AnimalContext from "./storage/AnimalContext";
import { useContext } from "react";
import SignUp from "./register/SignUp";
import SignIn from "./register/SignIn";
import UserContext from "./storage/UserContext";
import { useEffect } from "react";
import { getAnimals } from "./service/AnimalService";
import AddAnimal from "./components/AddAnimal";
import ProtectedRoute from "./shared/ProtectedRoute";
import SingleAnimal from "./components/SingleAnimal";

function App() {
  const animalContext = useContext(AnimalContext);
  const { signedIn } = useContext(UserContext);

  useEffect(() => {
    if (signedIn) {
      getAnimals().then(({ data }) => {
        animalContext.updateAnimals(data);
      });
    }
  }, [signedIn]);
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/animals" element={<Animals />}></Route>
      <Route path="/register" element={<SignUp />}></Route>
      <Route path="/login" element={<SignIn />}></Route>
      <Route
        path="/add"
        element={
          <ProtectedRoute>
            <AddAnimal />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/animals/edit/:id"
        element={
          <ProtectedRoute>
            <AddAnimal />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/animals/:id" element={<SingleAnimal />}></Route>
    </Routes>
  );
}

export default App;
