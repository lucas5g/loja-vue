<template>
  <div id="container-user-form">
    <Header text="Cadastro" />
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
            <input type="text" placeholder="Rua, Número e Bairro" />
          </div>

          <div class="input-row">
            <div class="input-block">
              <label for="state">Estado</label>
              <input type="text" placeholder="Selecione o Estado" />
            </div>
            <div class="input-block">
              <label for="name">Nome</label>
              <input type="text" placeholder="Selecione a Cidade" />
            </div>
          </div>

          <div class="input-row">
            <div class="input-block">
              <label for="state">CEP</label>
              <input type="text" placeholder="22.222-000" />
            </div>
            <div class="input-block">
              <label for="name">CIDADE</label>
              <input type="text" placeholder="Selecione a Cidade" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Forma de Pagamento</legend>
          <div class="input-radio">
            <input type="radio" name="pay" id="pay" />
            <label for="pay">Cartão de Crédito</label>

            <input type="radio" name="pay" id="pay" />
            <label for="pay">Boleto Bancário</label>
          </div>
     
          <div class="input-row">
            <div class="input-block">
              <label for="state">Nome no Cartão</label>
              <input type="text" placeholder="Nome impresso no cartão" />
            </div>
             <div class="input-block">
              <label for="state">Data de Expiração</label>
              <div class="input-row">
                <input type="text" placeholder="Mês" />

                <input type="text" placeholder="Ano" />

              </div>
            </div>
   
          </div>
          <div class="input-row">
            <div class="input-block">
              <label for="state">Número do Cartão</label>
              <input type="text" placeholder="5555 5555 5555 5555" />
            </div>
            <div class="input-block">
              <label for="state">Código de Segurança </label>
              <input type="text" placeholder="XXX" />
            </div>
          </div>
        </fieldset>
        <div class="footer">
          <p>Seu cartão será debitado em R$ 49,00</p>
          <button>Realizar Matrícula</button>
          <sub>Informações seguras e criptografas</sub>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: "UserForm",
  components:{
    Header
  }
};
</script>


<style scoped>
#container-user-form {
  /* padding-top: 5px; */
  width: 100%;
  height: 100vh;
  flex: 1;
  /* margin: */
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

main form {
   width: 95%; 
}

main form fieldset {
  border: none;
  margin-bottom: 40px;
}

main form fieldset:nth-child(2) {
  border-bottom: 3px solid rgba(187, 204, 221, .4);
}

main form fieldset legend {
  font-size: 20px;
  color: var(--blue);
  font-weight: bold;
  border-bottom: 3px solid rgba(187, 204, 221, .4);
  width: 100%;
  margin-bottom: 20px;
}

main form fieldset .input-block {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

main form fieldset .input-block label {
  color: #445566;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
}

main form fieldset .input-block input {
  background: #eff4f9;
  padding: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, .4);
  color: #445566;
  font-size: 20px;
  width: 100%;
}

main form fieldset .input-radio {
  margin-bottom: 20px;
}

main form fieldset .input-radio label {
  margin-right: 20px;
  color: #445566;
  font-weight: bold;
  font-size: 20px;
  /* margin-bottom: ; */
  /* background: red; */
}
main form fieldset .input-radio input[type="radio"] {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
main form fieldset .input-radio input[type="radio"]::after {
  margin-right: 10px;
  color: var(--blue);
  background-color: red;
  content: '';
  width: 20px;
  height: 30px;
}


main form fieldset .input-radio input:checked {
  margin-right: 10px;
  color: var(--blue);
  background-color: red;
}

main form fieldset .input-row:nth-child(2) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

main form  .footer{
  display: flex;
  flex-direction: column;
  justify-content: left;

  /* background-color: red; */
  margin-bottom: 30px;

}

main form .footer p{
  color: #445566;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 15px;
}
main form .footer button{
  color: #445566;
  font-weight: bold;
  margin-bottom: 10px;

  /* width: 200px; */
  padding: 25px;
  text-transform: uppercase;
  background: var(--blue);
  border: #445566;
  border-radius: 5px;
  color: #fff;

}

main form .footer sub{
  font-size: 12px;
}

@media screen and (min-width: 700px) {
  main form{
    width: 50%;
  }

  main form fieldset .input-row{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }

  main form .footer button{
    width: 220px;
    padding: 15px;
  } 
}

</style>