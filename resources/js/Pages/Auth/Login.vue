<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import FormInput from '@/Components/FormInput.vue'
import { UserIcon, LockClosedIcon } from '@heroicons/vue/24/outline';
import DarkMode from '@/Components/Admin/DarkMode.vue';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Log in" />

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <DarkMode class="absolute top-4 right-4"/>
        
        <form @submit.prevent="submit">
            <div class="space-y-4">
                <div>
                    <FormInput 
                        v-model="form.email" 
                        id="email" 
                        type="email"
                        :label="$t('pages.login.email')"
                        placeholder="E-mail" 
                        :icon="UserIcon"
                        required
                        :error="form.errors.email" 
                        autofocus
                        autocomplete="username"
                        class="text-sm"
                    />
                </div>
                <div>
                    <FormInput 
                        v-model="form.password" 
                        id="password" 
                        type="password"
                        :label="$t('pages.login.password')"
                        :icon="LockClosedIcon"
                        placeholder="************" 
                        required
                        :error="form.errors.password" 
                        autocomplete="current-password"
                        class="text-sm"
                    />
                </div>
            </div>
            
            <div v-if="false" class="block mt-4">
                <label class="flex items-center">
                    <Checkbox v-model:checked="form.remember" name="remember" />
                    <span class="ms-2 text-sm text-wd-l-label dark:text-wd-d-label hover:text-wd-l-label/80 dark:hover:text-wd-d-label/80">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link v-if="canResetPassword" :href="route('password.request')" class="underline text-sm text-wd-l-label dark:text-wd-d-label hover:text-wd-l-label/80 dark:hover:text-wd-d-label/80 rounded-md focus:outline-none focus:ring-4 focus:ring-offset-1 focus:ring-wd-4">
                    {{ $t('pages.login.forgot_password') }}
                </Link>
            </div>
            
            <div class="mt-4">
                <PrimaryButton class="w-full justify-center py-3" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" :loading="form.processing">
                    {{ $t('global.buttons.login') }}
                </PrimaryButton>
            </div>

            
        </form>
    </AuthenticationCard>
</template>