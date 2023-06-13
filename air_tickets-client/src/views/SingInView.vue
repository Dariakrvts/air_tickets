<template>
  <main class="SingInView">
    <form @submit.prevent="submit" ref="formRef">
      <div class="register__singin">
        <div class="singin-text">
          <h1>вхід до аккаунту</h1>
        </div>
        <div class="login-input">
          <va-form class="flex flex-col gap-6" ref="formRef">
            <p>Логін</p>
            <va-input v-model="loginData.login"
              :rules="[(value) => (value && value.length > 3) || 'Логін має бути мінімум з 3 символів']" />
            <p>Пароль</p>
            <va-input v-model="loginData.password"
              :rules="[(value) => (value && value.length > 5) || 'Пароль має бути мінімум з 5 символів']" />
          </va-form>
        </div>
      </div>
      <div v-if="showErrorMessage" class="error-message">
        Не вірний логін або пароль
      </div>
      <div class="login">
        <va-button color="#1C6569" type="submit">Вхід</va-button>
      </div>
    </form>
  </main>
</template>
  
<script>
import { reactive, ref } from "vue";
import router from "@/router/index.js";
import { mapActions } from 'vuex';

export default {
  name: 'SingInView',
  data() {
    const loginData = reactive({
      login: '',
      password: ''
    });

    const formRef = ref(null);
    const showErrorMessage = ref(false);

    const submit = () => {
      // Получение сохраненных пользователей из localStorage
      const savedUsers = localStorage.getItem('users');
      const users = savedUsers ? JSON.parse(savedUsers) : [];

      // Поиск пользователя по логину
      const user = users.find(u => u.login === loginData.login);

      if (user && user.password === loginData.password) {
        // Вход выполнен успешно
        this.isLoggedIn = true;
        this.$router.push('/Account');
        console.log('Успешный вход');
        console.log(savedUsers);
        this.isLoggedIn = true;
        localStorage.setItem('isUserLoggedIn', true);
      } else {
        // Неверный логин или пароль
        showErrorMessage.value = true;
        console.log('Неверный логин или пароль');
      }
    };

    return {
      loginData,
      submit,
      formRef,
      showErrorMessage
    };
  },

  mounted() {
    console.log('SingInIsLog', this.isLoggedIn);
  },
}
</script>
    
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.SingInView {
  --va-font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 34px;
  background-color: #BCDEE0;
  border-radius: 18px;
}

.register__singin {
  justify-content: center;
  overflow: hidden;
  min-height: 450px;
}

.singin-text {
  --va-font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  padding: 20px 0 60px 0;
}

.flex {}

.flex-col {}


.va-form {
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.login-input {
  width: 100%;
}

.error-message {}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 90px;
  margin: auto;
}
</style>