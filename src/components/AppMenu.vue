<template>
  <header>
    <img alt="App logo" src="../assets/logo.png" height="50" />
    <p>Basic Expense Tracker</p>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="less">
header {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 1rem;
  align-items: center;
  height: 50px;
  p {
    margin-left: 1rem;
  }
}
nav {
  margin-left: auto;
  padding: 30px;
  ul {
    list-style: none;
  }
  ul li {
    display: inline-flex;
    margin-left: 1rem;
  }
  a {
    font-weight: bold;
    color: #ff8c00;

    &.router-link-exact-active {
      color: #1589ff;
    }
  }
}
</style>
