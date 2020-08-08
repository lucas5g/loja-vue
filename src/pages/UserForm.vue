<template>
  <div id="container-user-form">
    <Header text="Cadastro" />
    <main>
      <form @submit="handleSubmit">
        <fieldset>
          <div class="input-block">
            <label for="name">Nome</label>
            <input type="text" v-model="customer.name" required />
          </div>
          <div class="input-block">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="customer.email" required />
          </div>

          <div class="input-block">
            <label for="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              placeholder="111.111.111-01"
              v-model="customer.cpf"
              required
            />
          </div>

          <div class="input-row">
            <div class="input-block">
              <label for="name">Endereço</label>
              <input
                type="text"
                placeholder="Rua, Número e Bairro"
                v-model="customer.address"
                required
              />
            </div>
            <div class="input-block">
              <label for="state">Estado</label>
              <input type="text" placeholder="Selecione o Estado" v-model="customer.state" required />
            </div>
          </div>

          <div class="input-row">
            <div class="input-block">
              <label for="state">CEP</label>
              <input type="text" placeholder="22.222-000" v-model="customer.cep" />
            </div>
            <div class="input-block">
              <label for="name">CIDADE</label>
              <input type="text" placeholder="Selecione a Cidade" v-model="customer.city" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Forma de Pagamento</legend>
          <div class="input-radio">
            <input type="radio"  id="payCard" v-model="customer.pay" value="Cartão de Crédito"/>
            <label for="payCard">Cartão de Crédito</label>

            <input type="radio" id="payBillet" v-model="customer.pay" value="Boleto Bancário"/>
            <label for="payBillet">Boleto Bancário</label>
          </div>
     
          <div class="input-row">
            <div class="input-block">
              <label for="cardName">Nome no Cartão</label>
              <input type="text" id="cardName" placeholder="Nome impresso no cartão" v-model="customer.nameCard" />
              
            </div>
             <div class="input-block">
              <label for="state">Data de Expiração</label>
              <div class="input-row">
                <input type="text" placeholder="Mês" v-model="customer.cardMonth" />

                <input type="text" placeholder="Ano" v-model="customer.cardYear" />


              </div>
            </div>
   
          </div>
          <div class="input-row">
            <div class="input-block">
              <label for="state">Número do Cartão</label>
              <input type="text" placeholder="5555 5555 5555 5555" v-model="customer.cardNumber" />
            </div>
            <div class="input-block">
              <label for="state">Código de Segurança </label>
              <input type="text" placeholder="XXX" v-model="customer.cardCod" />
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
import Header from "../components/Header";
import moment from 'moment'
import api from "../services/api";
export default {
  name: "UserForm",
  components: {
    Header,
  },
  data() {
    return {
      customer: {
        // name: "Lucas de sousa ",
        // email: "lucasdesousa19@hotmail.com",
        // cpf: "123.123.123-50",
        // address: "Rua x, 215 bairro B",
        // state: "mg",
        // cep: "123.123.50",
        // city: "Belo Horizonte",
        // pay: "Cartão de Crédito",
        // nameCard: "Lucas s sousa",
        // cardMonth: "Novembro",
        // cardYear: "2024",
        // cardNumber: "1234 1234 1234 1234",
        // cardCod: "123",
        created_at: moment().format("DD-MM-YYYY")
      },
    };
    // }
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      try {
        await api.post("customers", this.customer);
        this.$router.push("/");
      } catch (err) {
        alert("Erro ao cadastrar");
      }
    },
  },
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
  border-bottom: 3px solid rgba(187, 204, 221, 0.4);
}

main form fieldset legend {
  font-size: 20px;
  color: var(--blue);
  font-weight: bold;
  border-bottom: 3px solid rgba(187, 204, 221, 0.4);
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
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
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
  content: "";
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

main form .footer {
  display: flex;
  flex-direction: column;
  justify-content: left;

  /* background-color: red; */
  margin-bottom: 30px;
}

main form .footer p {
  color: #445566;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 15px;
}
main form .footer button {
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

main form .footer sub {
  font-size: 12px;
}

@media screen and (min-width: 700px) {
  main form {
    width: 60%;
  }

  main form fieldset .input-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }

  main form .footer button {
    width: 220px;
    padding: 15px;
  }
}
</style>