<template>
  <main class="RegisterAccountView">
    <form @submit.prevent="submit">
      <div class="register__account">
        <div class="input">
          <div class="regtext">
            <h1>реєстрація аккаунту</h1>
          </div>
          <va-form class="flex flex-col gap-6" ref="formRef">
            <p>Ім'я</p>
            <va-input class="form-control" v-model="data.firstName"
              :rules="[(value) => (value && value.length > 0) || 'Обов`язкове поле']" />
            <p>Прізвище</p>
            <va-input class="form-control" v-model="data.lastName"
              :rules="[(value) => (value && value.length > 0) || 'Обов`язкове поле']"/>
            <p>Номер телефону</p>
            <va-input class="form-control" v-model="data.phoneNumber"
              :rules="[(value) => (value && value.length > 0) || 'Обов`язкове поле']"/>
            <p>Логін</p>
            <va-input class="form-control" v-model="data.login"
              :rules="[(value) => (value && value.length > 3) || 'Логін має бути мінімум з 3 символів']"/>
            <p>Пароль</p>
            <va-input class="form-control" v-model="data.password"
              :rules="[(value) => (value && value.length >= 5) || 'Пароль має бути мінімум з 5 символів']" />
          </va-form>
        </div>
        <div v-if="showErrorMessage" class="error-message">
          Будь ласка, заповніть всі поля
        </div>
        <div class="register">
          <va-button color="#1C6569" type="submit">Реєстрація</va-button>
        </div>
      </div>
    </form>
  </main>
</template> 

<script>
import { reactive, ref } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import users from '@/data/AccountCreate.json';
import router from "@/router/index.js";


export default {
  name: 'RegisterAccountView',
  setup() {
    const data = reactive({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      login: '',
      password: ''
    });
    const showErrorMessage = ref(false);

    const submit = () => {
      if (
        data.firstName &&
        data.lastName &&
        data.phoneNumber &&
        data.login &&
        data.password
      ) {
        const newUser = {
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          login: data.login,
          password: data.password
        };

        const savedUsers = localStorage.getItem('users');
        const users = savedUsers ? JSON.parse(savedUsers) : [];
        localStorage.setItem('isUserLoggedIn', true);
        users.push(newUser);
        router.push('/Account');

        // Збереження оновленого масиву користувачів в localStorage 
        localStorage.setItem('users', JSON.stringify(users));
        console.log(localStorage);
      } else {
        showErrorMessage.value = true; // Показать сообщение об ошибке 
        console.log('Будь ласка, заповніть всі поля');
      }
    };

    return {
      showErrorMessage,
      data,
      submit,
      users
    };
  },
  methods: {
    setLogin() {
      this.setIsUserLoggedIn(true);
    }
  },
};
</script>

  
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.RegisterAccountView {
  --va-font-family: 'Roboto', sans-serif;

}

.html, body {
  overflow: hidden;
}


.register__account {
  margin: 30px;
  background-color: #BCDEE0;
  border-radius: 18px;
  overflow: hidden;
  min-height: 460px;
  /* padding: 0px 0 70px 0; */
}

.regtext {
  display: flex;
  justify-content: center;
  padding: 20px 0 40px 0;

}

.input {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.register__account .va-input {
  /* padding: 10px; */
  display: flex;
  align-items: center;
  flex-direction: column;
}

.register {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90px;
  margin: auto;
}
</style>
  