<template>
    <div class="authors-list-container">
        <b-card class="text-center">
            <div class="card-header text-right">
                <b-button variant="primary" v-b-modal.addAuthorModal>Add Author</b-button>
            </div>
            <div class="card-body">
                <b-table show-empty hover :items="authors">
                    <template v-slot:cell(actions)="row">
                        <b-button  variant="warning" size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                            Edit
                        </b-button>
                        <b-button  variant="danger" size="sm" @click="row.toggleDetails">
                            Delete
                        </b-button>
                    </template>
                </b-table>
                <b-modal id="addAuthorModal" title="Add Author">
                    <add-author-form></add-author-form>
                </b-modal>
            </div>
        </b-card>
    </div>
</template>

<script>
    import Vue from 'vue'
    import AddAuthorForm from "./AddAuthorForm";

    export default {
        components: {
            AddAuthorForm
        },
        data: () => ({
            authors: []
        }),
        // components: { navigation, message },
        created() {
            // this.$store.dispatch('User/' + LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION)
            //     .catch((error) => {})
            fetch('/api/authors')
                .then(response => response.json() )
                .then(json => this.updateTable(json) )
                .catch(error => console.error(error) )
            ;
            // todo catch errors
        },
        methods: {
            updateTable(authors) {
                this.authors = authors.map(author => {
                    return { 'First Name': author['first_name'], 'Last Name': author['last_name'], 'Age': author['age'], actions: null}
                });
            }
                // todo: input validation when i get there
        }
    }
</script>

<style scoped>
    .authors-list-container {
        margin: 50px;
    }
    .card {
        opacity: 0.85 !important;

    }
</style>
