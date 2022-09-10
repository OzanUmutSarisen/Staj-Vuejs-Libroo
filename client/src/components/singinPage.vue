<template>
<v-app id="inspire">
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Login form</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field v-model="mail" prepend-icon="mdi-account" name="login" label="mail" type="text"></v-text-field>
                                <v-text-field v-model="password" id="password" prepend-icon="mdi-key" name="password" label="Password" type="password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="write()" color="primary">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
export default {
    setup() {
        const API_URL = 'http://localhost:3000/libroo';

        async function write() {
            try {
                const response = await fetch(API_URL + "/usermail/" + this.mail);
                const json = await response.json()
                if (json.password === this.password) {
                    this.$router.push({
                        name: "home"
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
        return {
            write,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
