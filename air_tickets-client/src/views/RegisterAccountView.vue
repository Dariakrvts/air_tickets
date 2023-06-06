<template>
    <main class="RegisterAccountView">
        <div class="register">
            <va-form class="flex flex-col gap-6" ref="formRef">
                <va-input v-model="form.firstName"
                    :rules="[(value) => (value && value.length > 0) || 'First name is required']" label="Ім'я" />
                <va-input v-model="form.lastName"
                    :rules="[(value) => (value && value.length > 0) || 'Last name is required']" label="Фамілія" />
                <va-input v-model="form.PhoneNumber"
                    :rules="[(value) => (value && value.length > 0) || 'Last name is required']" label="Номер телефону" />
                <va-input v-model="form.Login" :rules="[(value) => (value && value.length > 0) || 'Last name is required']"
                    label="Логін" />
                <va-input v-model="form.Password"
                    :rules="[(value) => (value && value.length > 0) || 'Last name is required']" label="Пароль" />
            </va-form>
        </div>
    </main>
</template>
    
<script>
export default {
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                PhoneNumber: '',
                Login: '',
                Password: '',
            }

        };
    },
    name: 'RegisterAccountView'
}

</script>
    
<style>
.register{
    margin: 34px;
    background-color: #BCDEE0;  
    border-radius: 18px;
    overflow: hidden;
}
.register .va-input{
    padding: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>