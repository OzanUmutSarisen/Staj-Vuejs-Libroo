<template>
<nav>
    <v-toolbar app>
        <v-toolbar-title class="text-uppercase">
            <span class="front-weigght-light">libroo</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="SinginPage()" color="green">
            <span>Sing up</span>
            <v-icon right>mdi-account</v-icon>
        </v-btn>
        <v-btn @click="SinginPage()" color="grey">
            <span>Sing in</span>
            <v-icon right>mdi-login</v-icon>
        </v-btn>
    </v-toolbar>

</nav>
</template>

<script>
import { useRouter } from 'vue2-helpers/vue-router';
export default {
    setup() {
        const router = useRouter()

        async function SinginPage() {
            console.log("hi")
            this.$router.push({
                name: "Singin"
            })
        }
        return {
            SinginPage,
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
