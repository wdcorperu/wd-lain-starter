<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import FormInput from '@/Components/FormInput.vue'

const passwordInput = ref(null);
const currentPasswordInput = ref(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('user-password.update'), {
        errorBag: 'updatePassword',
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordInput.value.focus();
            }

            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordInput.value.focus();
            }
        },
    });
};
</script>

<template>
    <FormSection @submitted="updatePassword">
        <template #title>
            Update Password
        </template>

        <template #description>
            Ensure your account is using a long, random password to stay secure.
        </template>

        <template #form>
            <div class="col-span-6 sm:col-span-4">
                <FormInput 
                    id="current_password"
                    ref="currentPasswordInput"
                    v-model="form.current_password" 
                    type="password"
                    label="Current Password"
                    placeholder="***********" 
                    autocomplete="current-password"
                    :error="form.errors.current_password"
                />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <FormInput 
                    id="password"
                    ref="passwordInput"
                    v-model="form.password" 
                    type="password"
                    label="New Password"
                    placeholder="***********" 
                    autocomplete="new-password"
                    :error="form.errors.password"
                />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <FormInput 
                    id="password_confirmation"
                    v-model="form.password_confirmation" 
                    type="password"
                    label="Confirm Password"
                    placeholder="***********" 
                    autocomplete="new-password"
                    :error="form.errors.password_confirmation"
                />
            </div>
        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="me-3">
                Saved.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing" :loading="form.processing">
                Save
            </PrimaryButton>
        </template>
    </FormSection>
</template>
