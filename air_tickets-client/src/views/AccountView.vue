<template>
  <main class="AccountView">
    <div class="account__container">
      <div class="account">
        <div class="account__sing-in">
          <va-icon class="material-icons sm12" size="8rem">
            account_circle
          </va-icon>
          <div class="btn__sing-in">
            <div class="flex items-center gap-8 flex-wrap">
              <router-link to="/singin">
                <va-button round color="#6B86D9">
                  Увійти
                </va-button>
              </router-link>
            </div>
            <div class="flex items-center gap-8 flex-wrap">
              <router-link to="/Account">
                <va-button @click="logout" round color="#6B86D9" v-if="isRegister && isLoggedIn">
                  Вихід
                </va-button>
              </router-link>
              <router-link to="/Register">
                <va-button round color="#6B86D9B2">
                  Реєстрація
                </va-button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="account__region"></div>

        <div class="account__info xs12">
          <div class="mail">
            <va-collapse v-model="valueMail" header="Зв'язок з розробниками" solid>
              <div><a href="mailto:example@example.com">example@example.com</a></div>
            </va-collapse>
          </div>
          <va-collapse v-model="valuePrivacyPolicy" header="Політика конфіденційності" solid>
            <div>
              Ми вживаємо всіх необхідних заходів для захисту даних від несанкціонованого доступу, зміни, розкриття
              чи знищення. До цих заходів належать, зокрема, внутрішня перевірка процесів збору, зберігання та обробки
              даних і заходів безпеки, включаючи відповідне шифрування і заходи щодо забезпечення фізичної безпеки даних
              для запобігання неавторизованого доступу до систем, в яких ми зберігаємо особисті дані.
              Нагадування. Додаток не є справжнім.
            </div>
          </va-collapse>
          <va-collapse v-model="valueAboutUs" header="Про нас" solid>
            <div>потом заполнить
            </div>
          </va-collapse>
          <va-collapse v-model="valueArchive" header="Архів" solid v-if="isRegister">
            <div>
              потом заполнить
            </div>
          </va-collapse>
          <div class="rating-dialog">
            <h2>Оцените приложение</h2>
            <va-rating v-model="valueRating" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'AccountView',
  data() {
    return {
      valueAboutUs: false,
      valuePrivacyPolicy: false,
      valueMail: false,
      valueArchive: false,
      valueRating: 3,
      isRegister: false,
      isLoggedIn: false,
    };
  },
  methods: {
    handleClickshowExit() {
      this.showExit = true
    },
    registerUser() {
      this.isRegister = true;
      this.isLoggedIn = false;
    },

    scrollPage(opened) {
      if (opened) {
        const element = document.querySelector('.account__info');
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    submit() {
      // Вход выполнен успешно
      this.isRegister = true;
      this.isLoggedIn = true;
    },
  },
};
</script>


<style>
.AccountView {}

.account__container {
  height: 100vh;
  display: flex;
}

.account__sing-in {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.account__info {
  padding: 20px 20px;
  position: static;
  /* display: flex; */
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-height: 360px;
  overflow: auto;
}

.btn__sing-in {
  gap: 4px;
  display: flex;
  flex-direction: column;
}

.account__region {}

.rating-dialog {
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
