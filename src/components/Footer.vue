<template>
  <footer>
    <p>Lucas de Sousa Assunção - 2020</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style >
footer {
  background: var(--blue);
  height: 130px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}

footer p {
  color: var(--section-title-background);
  font-weight: bold;
  font-size: 1.3rem;
  width: 90%;
}
</style>