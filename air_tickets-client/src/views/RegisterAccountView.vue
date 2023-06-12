<template>
  <main class="RegisterAccountView">
    <form @submit.prevent="submit">
      <div class="register__account">
        <div class="input">
          <div class="regtext">
            <h1>реєстрація аккаунту</h1>
          </div>
          <va-form class="flex flex-col gap-6" ref="formRef">
            <va-input class="form-control" v-model="data.firstName"
              :rules="[(value) => (value && value.length > 0) || 'Обов`язкове поле']" label="Ім'я" />
            <va-input class="form-control" v-model="data.lastName"
              :rules="[(value) => (value && value.length > 0) || 'Обов`язкове поле']" label="Фамілія" />
            <va-input class="form-control" v-model="data.phoneNumber"
              :rules="[(value) => (value && value.length > 0) || 'Обов`язкове поле']" label="Номер телефону" />
            <va-input class="form-control" v-model="data.login"
              :rules="[(value) => (value && value.length > 0) || 'Логін має бути мінімум з 3 символів']" label="Логін" />
            <va-input class="form-control" v-model="data.password"
              :rules="[(value) => (value && value.length >= 5) || 'Пароль має бути мінімум з 5 символів']"
              label="Пароль" />
          </va-form>
        </div>
        <div v-if="showErrorMessage" class="error-message">
          Будь ласка, заповніть всі поля
        </div>
        <div class="register">
          <va-button type="submit">Реєстрація</va-button>
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
  }
};
</script>

  
<style>
.register__account {
  margin: 34px;
  background-color: #BCDEE0;
  border-radius: 18px;
  overflow: hidden;
  min-height: 600px;
  padding: 20px 0 0 0;
}

/* .va-input-wrapper--solid .va-input-wrapper__field {
  display: flex;
   border-radius: 15px;
}  */

.input {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.register__account .va-input {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.register {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  /* border-radius: 30px; */
}

.button {
  border-radius: 15px;
}
</style>
  