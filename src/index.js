import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyAppButton from "./component/MyButton";
import Profile from "./component/MyProfile";
import "./styles.css"
import ShoppingList from "./component/Vegetables";

document.body.innerHTML = '<div id="app"></div>'

const root = createRoot(document.getElementById('app'))
root.render(
  <StrictMode>
    <MyAppButton />
    <Profile />
    <ShoppingList />
  </StrictMode>
)