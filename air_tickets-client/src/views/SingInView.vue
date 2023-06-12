<template>
  <main class="SingInView">
    <form @submit.prevent="submit" ref="formRef">
      <div class="register__singin">
        <div class="singin-text">
          <h1>вхід до аккаунту</h1>
        </div>
        <va-form class="flex flex-col gap-6" ref="formRef">
          <va-input v-model="loginData.login" :rules="[(value) => (value && value.length > 0) || 'Last name is required']"
            label="Логін" class="singin-input" />
          <va-input v-model="loginData.password"
            :rules="[(value) => (value && value.length > 0) || 'Last name is required']" label="Пароль"
            class="singin-input" />
        </va-form>
      </div>
      <div v-if="showErrorMessage" class="error-message">
          Не вірний логін або пароль
        </div>
      <div class="login">
        <va-button type="submit">Вхід</va-button>
      </div>
    </form>
  </main>
</template>
  
<script>
import { reactive, ref } from "vue";
import router from "@/router/index.js";

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
        this.$router.push('/Account');
        console.log('Успешный вход');
        console.log(savedUsers);
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
}
</script>
    
<style>
.SingInView {
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
  padding: 20px 0 0 0;
}

.singin-input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 30px;
}
</style>