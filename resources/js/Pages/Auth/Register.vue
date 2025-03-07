<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import FormInput from '@/Components/FormInput.vue'

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <Head title="Register" />

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <form @submit.prevent="submit">
            <div class="space-y-3">
                <div>
                    <FormInput 
                        id="name" 
                        v-model="form.name" 
                        type="text"
                        label="Name"
                        placeholder="Ex. Jhon Doe" 
                        :error="form.errors.name" 
                        autofocus
                        autocomplete="name"
                        required
                    />
                </div>
                <div>
                    <FormInput 
                        id="email" 
                        v-model="form.email" 
                        type="email"
                        label="E-mail"
                        placeholder="E-mail"
                        :error="form.errors.email" 
                        autofocus
                        autocomplete="username"
                        required
                    />
                </div>
                <div>
                    <FormInput 
                        id="password" 
                        v-model="form.password" 
                        type="password"
                        label="Password"
                        placeholder="************" 
                        :error="form.errors.password" 
                        autocomplete="new-password" 
                        required
                    />
                </div>
                <div>
                    <FormInput 
                        id="password_confirmation" 
                        v-model="form.password_confirmation" 
                        type="password"
                        label="Confirm Password"
                        placeholder="************" 
                        :error="form.errors.password_confirmation" 
                        autocomplete="new-password" 
                        required
                    />
                </div>
            </div>

            <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature" class="mt-4">
                <InputLabel for="terms">
                    <div class="flex items-center">
                        <Checkbox id="terms" v-model:checked="form.terms" name="terms" required />

                        <div class="ms-2">
                            I agree to the <a target="_blank" :href="route('terms.show')" class="underline text-sm text-wd-l-label dark:text-wd-d-label hover:text-wd-l-label/80 dark:hover:text-wd-d-label/80rounded-md focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-wd-4">Terms of Service</a> and <a target="_blank" :href="route('policy.show')" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500">Privacy Policy</a>
                        </div>
                    </div>
                    <InputError class="mt-2" :message="form.errors.terms" />
                </InputLabel>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link :href="route('login')" class="underline text-sm text-wd-l-label dark:text-wd-d-label hover:text-wd-l-label/80 dark:hover:text-wd-d-label/80 rounded-md focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-wd-4">
                    Already registered?
                </Link>

                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" :loading="form.processing">
                    Register
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
</template>