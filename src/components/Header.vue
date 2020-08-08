<template>
   <header>
      <h1>{{ text }}</h1>
    </header>
</template>

<script>
export default {
  name:"Header",
  props:{
    text: String
  }
}
</script>

<style>
header {
  background: #eff4f9;
  height: 120px ;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header h1 {
  font-size: 60px;
  width: 95%;
  color: #445566;
  font-weight: 100;

}

@media screen and (min-width: 700px) {
  header h1{
    width: 50%;
  }
}
</style>