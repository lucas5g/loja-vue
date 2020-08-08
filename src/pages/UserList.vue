<template>

  <div id="container-user-list">
    <Header text="Lista" />
    <main>
      <h2>Lista de Clientes</h2>
      <div class="input-block">
        <label for="name">Nome do Cliente</label>
        <input id="name" type="text" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cpf</th>
            <th>Criado em</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Exemplo de nome</td>
            <td>sample@gmail.com</td>
            <td>431.739</td>
            <td>Exemplo de nome</td>
          </tr>
          <tr>
            <td>Exemplo de nome</td>
            <td>sample@gmail.com</td>
            <td>431.739</td>
            <td>Exemplo de nome</td>
          </tr>
          <tr>
            <td>Exemplo de nome</td>
            <td>sample@gmail.com</td>
            <td>431.739</td>
            <td>Exemplo de nome</td>
          </tr>
          <tr>
            <td>Exemplo de nome</td>
            <td>sample@gmail.com</td>
            <td>431.739</td>
            <td>Exemplo de nome</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "UserList",
  components: {
    Header,
  },
};
</script>
 
<style scoped >
#container-user-list {
  height: 100%;
  width: 100%;
  flex: 1;

  
}

main {
  margin-top: 50px;
  /* height: 100vh; */

  display: flex;
  flex-direction: column;
  align-items: center; 
 
  /* border: 1px solid black; */
  /* justify-content: center; */
  /* border: 1px solid black; */
}

main h2 { 
  width: 95%;
  align-items: flex-end;
  color: #1188ee;
  border-bottom: 2px solid #eff4f9;
  margin-bottom: 20px;
}

main .input-block {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 95%; 
}

main .input-block label {
  color: var(--label-color);
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
}

main .input-block input{
  background: #eff4f9;
  padding: 20px;
  border: none;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, .4);

}
main table{
  margin-top: 30px;
  border-collapse: collapse;
  text-align: left;
  /* min-width: 70%; */
  /* width: 500px; */
  width: 95%;
  table-layout: fixed;
}
main table, th, td{
  border: 1px solid #1188ee;
  padding: 12px;
  overflow: hidden;
  word-wrap: break-word;
}

</style>