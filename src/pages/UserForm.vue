<template>
  <div>
    <section>
      <h1>Cadastro</h1>
    </section>
    <main>
      <form>
        <fieldset>
          <div class="input-block">
            <label for="name">Nome</label>
            <input type="text" />
          </div>
          <div class="input-block">
            <label for="email">Email</label>
            <input type="text" />
          </div>
          <div class="input-block">
            <label for="cpf">CPF</label>
            <input type="text" id="cpf" placeholder="111.111.111-01" />
          </div>
          <div class="input-block">
            <label for="name">Endereço</label>
            <input type="text" />
          </div>

          <div class="input-row">
            <div class="input-block">
              <label for="state">Estado</label>
              <input type="text" />
            </div>
            <div class="input-block">
              <label for="name">Nome</label>
              <input type="text" />
            </div>
          </div>

          <div class="input-row">
            <div class="input-block">
              <label for="state">CEP</label>
              <input type="text" />
            </div>
            <div class="input-block">
              <label for="name">CIDADE</label>
              <input type="text" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Forma de Pagamento</legend>
          <div class="input-row">
            <div class="input-block">
              <label for="state">Nome no Cartão</label>
              <input type="text" />
            </div>
            <div class="input-block">
              <label for="name">Data de Expiração</label>
              <input type="text" />
            </div>
          </div>
        </fieldset>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "UserForm"
};
</script>

<style>
</style>