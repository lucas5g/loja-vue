<template>
  <nav>
    <ul>
      <li>
        <router-link to="/listar">Lista</router-link>
      </li>
      <li>
        <router-link to="/cadastrar"> Cadastrar</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
nav {
  background-color: #17222d;
  /* position: fixed; */
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
}

nav ul {
  display: flex;
  list-style: none;
  font-size: 1.2rem;

}

nav li {
  margin-right: 60px;
}

nav li a {
  text-decoration: none;
  color: var(--section-title-background);
}
</style>