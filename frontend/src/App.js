import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import Landing from "./components/layouts/Landing";
import Recipes from "./components/recipe/Recipes";
import RecipeDetail from "./components/recipe/RecipeDetail";
import RecipeCreate from "./components/recipe/RecipeCreate";
import RecipeEdit from "./components/recipe/RecipeEdit";
import WithPrivateRoute from "./utils/WithPrivateRoute";
import Dashboard from "./components/layouts/Dashboard";

import ErrorDiv from "./components/layouts/ErrorDiv";

export default function App() {
  return (
    <Router>
      <Header />
      <ErrorDiv />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/recipe" element={<Recipes />} />
        <Route
          exact
          path="/recipe/:id"
          element={
            <WithPrivateRoute>
              <RecipeDetail />
            </WithPrivateRoute>
          }
        />
        <Route exact path="/recipe/create" element={<RecipeCreate />} />
        <Route exact path="/recipe/:id/edit" element={<RecipeEdit />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
