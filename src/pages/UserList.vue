<template>
  <div>
    <section>
      <h1>Lista</h1>
    </section>
    <main>
      <h2>
        Lista de Clientes
        <hr />
      </h2>
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
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
export default {
  name:"UserList"
};
</script>

<style>
</style>