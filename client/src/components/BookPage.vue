<template>
<div class="home">
    <v-container class="my-5">
        <v-layout row wrap>
            <v-card app class="text-xs-center">
                <v-responsive class="pt-1">
                    <v-img max-height="42" max-width="42" v-bind:src="book.bookImageUrl"></v-img>
                </v-responsive>
                <v-card-text>
                    <div >Book Name :{{ book.name }}</div>
                    <div >Book Released :{{ book.released }}</div>
                    <div >Book Author :{{ book.authorName }}</div>
                    <div >Book Summary :{{ book.summary }}</div>
                </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</div>
</template>

<script>
import {
    ref,
    onMounted
} from 'vue';
import { useRoute } from 'vue2-helpers/vue-router';
export default {
    setup() {
        
        let book = ref({
            name:"",
            released:"",
            summary:"",
            authorID:"",
            bookImageUrl:"",
            authorName:"",
        })


        const API_URL = 'http://localhost:3000/libroo';
        const route = useRoute()

        onMounted(() => {
            getPosts();
        })

        async function getPosts() {
            try {
                const { id } = route.params
                const response = await fetch(API_URL + "/book/"+id);
                const json = await response.json()
                const response2 = await fetch(API_URL + "/author/"+json.authorID)
                const json2 = await response2.json()
                const response3 = await fetch(API_URL + "/user/"+json2.userID)
                const json3 = await response3.json()
                book.value = {name:json.name,released:json.released,summary:json.summary,bookImageUrl:json.bookImageUrl,authorName:json3.name}
            } catch (error) {
                console.log("Error" + error)
            }
        }

        return {
            book,
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
