<template>
  <div id="container">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components: {
    Navbar,
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}



</style>