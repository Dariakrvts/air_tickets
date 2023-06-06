<template>
    <main class="SingInView">
            <div class="register">
            <va-form class="flex flex-col gap-6" ref="formRef">
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
                PhoneNumber: '',
                Login: '',
                Password: '',
            }

        };
    },
    name: 'SingIn'
}

</script>
    
<style>
</style>