import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Grocery Store</h1>
      <nav>
        <ul>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
