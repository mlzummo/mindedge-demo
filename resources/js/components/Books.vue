<template>
    <div class="books-list-container">
        <b-card class="text-center">
            <div class="card-body">
<!--                <table class="table">-->
<!--                    <thead>-->
<!--                    <th scope="col">Id</th>-->
<!--                    <th scope="col">Title</th>-->
<!--                    <th scope="col">Author</th>-->
<!--                    <th scope="col">Description</th>-->
<!--                    <th scope="col">MSRP</th>-->
<!--                    </thead>-->
<!--                    <tbody>-->
<!--                    <tr scope="row"><td>1</td><td>Harry Potter</td><td>Tolekin</td><td>a book</td><td>19.99</td></tr>-->
<!--                    </tbody>-->
<!--                    <tfoot>-->
<!--                    </tfoot>-->
<!--                </table>-->
                <b-table striped hover :items="books"></b-table>

            </div>
        </b-card>
    </div>

</template>

<script>
    import Vue from 'vue'
    // import { CardPlugin } from 'bootstrap-vue'
    // import navigation from './Navigation'
    // import message from './Message.vue'
    // import { LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION } from 'store/user/actions'

    export default {
        data: () => ({
            books: []
        }),
        // components: { navigation, message },
        created() {
            // this.$store.dispatch('User/' + LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION)
            //     .catch((error) => {})
            fetch('/api/books')
                .then(response => response.json() )
                .then(json => this.updateTable(json) )
                .catch(error => console.log(error) )
            ;
                // todo catch errors
        },
        methods: {
            updateTable(books) {
                this.books = books.map(book => {
                    let authors = book.authors.map(author => {
                        return author.first_name.concat(' ', author.last_name);
                    })
                    .join(", ");
                    return { Id: book.id, Title: book.title, 'Author(s)': authors , Description: book.description, MSRP: book.msrp}
                });
            }
        }
    }
</script>

<style scoped>
.books-list-container {
    margin: 50px;
}
</style>
