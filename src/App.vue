<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style >
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Nunito', sans-serif;
}

:root {
  --input-color: #eff4f9;
  --input-background: #eff4f9;
  --input-box-shadow: rgba(187, 204, 221, 0.4);
  --blue: #1188ee;
  --header-background: #17222d;
  --section-title-background: #eff4f9;
  --label-color: #445566;
}

html, body{
  height: 100%;
  width: 100%;
}
#container {
  min-height: 100%;
  display: flex;
  flex-direction: column;


}

header {
  background-color: var(--header-background);
  
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 4.5rem;
}

header ul {
  display: flex;
  list-style: none;
  font-size: 1.2rem;
  font-weight: bold;
}

header li {
  margin-right: 40px;
}

header li a{
  text-decoration: none;
  color: var(--section-title-background);
}

section {
  padding: 100px 0 40px 0;
  background: var(--input-background);
  color: var(--label-color);
  flex-grow: 1;
}

section h1 {
  font-size: 4rem;
  width: 50vw;
  margin: 0 auto;
}

main {
  width: 50vw;
  margin: 50px auto 40px auto;
  height: 100vh;

  flex: 1;
}

main h2 {
  
  padding-bottom: 0px;
  color: var(--blue);
}

main h2 hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 3px solid var(--input-background);
}

main .input-block {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  /* width: 90%; */

}

main .input-block label {
  color: var(--label-color);
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
}

main .input-block input {
  /*   margin-top: 20px; */
  /* height: 3.5rem; */
  background: var(--input-background);
  padding: 20px;
  
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 2px var(--input-box-shadow);
  color: var(--label-color);
  font-size: 20px;

}


main form fieldset{
  border: none;

}

main form fieldset .input-row{
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.6rem;
}

table {
  border-collapse: collapse;
  width: 100%;
  text-align: left;
}

table th, table td {
  padding: 12px;
  border: 1px solid var(--blue);
}

footer {
  background: var(--blue);
  height: 8.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 50px;
  margin-top: 15px;
}

footer p {
  color: var(--section-title-background);
  font-weight: bold;
  font-size: 1.3rem;
}
</style>