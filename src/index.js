import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context";

//wahed-test.us.auth0.com
//JAkFB9ADtGRzDVLU0s3fAjwwI5eZpYv0

ReactDOM.render(
  <Auth0Provider
    domain="wahed-test.us.auth0.com"
    clientId="JAkFB9ADtGRzDVLU0s3fAjwwI5eZpYv0"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
