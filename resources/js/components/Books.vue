<template>
    <div class="books-list-container">

        <b-card class="text-center">
            <div class="card-header text-right">
                <b-button variant="primary" v-b-modal.addBookModal>Add Book</b-button>

<!--                <button type="button" class="btn btn-primary">Add Book</button>-->

            </div>

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
                <b-table show-empty hover :items="books">
                    <template v-slot:cell(actions)="row">
                        <b-button  variant="warning" size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                            Edit
                        </b-button>
                        <b-button  variant="danger" size="sm" @click="row.toggleDetails">
                            Delete
                        </b-button>
                    </template>
                </b-table>

                <b-modal id="addBookModal" title="Add Book">
                    <add-book-form></add-book-form>
                </b-modal>

            </div>
        </b-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import AddBookForm from './AddBookForm.vue'

    // import { CardPlugin } from 'bootstrap-vue'
    // import navigation from './Navigation'
    // import message from './Message.vue'
    // import { LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION } from 'store/user/actions'

    export default {
        components: {
            AddBookForm
        },
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
                .catch(error => console.error(error) )
            ;
                // todo catch errors
        },
        methods: {
            updateTable(books) {
                this.books = books.map(book => {
                    let authors = book.authors.map(author => {
                        return author.first_name.concat(' ', author.last_name); // concat age
                    })
                    .join(", ");
                    return { Id: book.id, Title: book.title, 'Author(s)': authors , Description: book.description, MSRP: '$'+book.msrp, actions: null}
                });

                // todo: input validation when i get there
            }
        }
    }
</script>

<style scoped>
    .books-list-container {
        margin: 50px;
    }
    .card {
        opacity: 0.85 !important;

    }
</style>
