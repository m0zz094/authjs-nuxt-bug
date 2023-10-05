<script setup lang="ts">
const { signIn, signOut, session, status, cookies, getProviders } = useAuth();

const route = useRoute();

if (route.path == "/reserved-area") {
    definePageMeta({ middleware: "auth", auth: { guestRedirectTo: "/login" } })
}
</script>

<template>
    <div>
        <h1>Page: {{ route.path }}</h1>
        <NuxtLink to="reserved-area">Reserved area</NuxtLink>
        <div>
            <a href="/api/auth/signin" class="buttonPrimary">Native Link Sign in</a>
            <button @click="signIn(`google`)">
                JS Sign In
            </button>
            <button @click="signOut()">
                Sign Out
            </button>
        </div>
        <div>
            <pre>{{ status }}</pre>
            <pre>{{ session?.user }}</pre>
            <pre>{{ cookies }}</pre>
        </div>
    </div>
</template>