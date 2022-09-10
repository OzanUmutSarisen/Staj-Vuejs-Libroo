<template>
<div class="home">
    <v-container class="my-5">
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="book in books" :key="book._id">
                <v-btn @click="bookPage(book._id)" app class="text-xs-center">
                    <v-responsive class="pt-1">
                        <v-img max-height="42" max-width="42" v-bind:src="book.bookImageUrl"></v-img>
                    </v-responsive>
                    <v-card-text>
                        <div class="subheading">{{ book.name }}</div>
                        <div class="grey--text">{{ book.released }}</div>
                    </v-card-text>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import {
    ref,
    onMounted
} from 'vue';
export default {
    setup() {
        const books = ref([]);
        const API_URL = 'http://localhost:3000/libroo';

        onMounted(() => { //start with function
            getPosts();
        })

        async function getPosts() {
            try {
                const response = await fetch(API_URL + "/books"); //its a get method we may not define that
                const json = await response.json()
                books.value = json
            } catch (error) {
                console.log("Error" + error)
            }
        }
        async function bookPage(_id) {
            console.log("hello")
            this.$router.push({
                name: "Book",
                params: {
                    id: _id,
                },
            })
        }

        return {
            books,
            bookPage,
        }
    }
};
</script>
