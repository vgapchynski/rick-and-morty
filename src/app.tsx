import * as C from "components";
import * as P from "pages";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<C.Layout />}>
        <Route index element={<P.Home />} />
        <Route path="/characters/:id" element={<P.Character />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
