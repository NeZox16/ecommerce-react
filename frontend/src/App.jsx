import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Main from "./components/layers/Main/Main";
import { selectIsAuth } from "./redux/slices/authSlice";
import { fetchMe } from "./redux/slices/asyncThunk";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchMe());
  }, []);

  return (
    // <Login/>
    // <Register/>
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category" element={<Category />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </Main>
  );
}

export default App;
