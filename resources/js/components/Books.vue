<template>
    <div>
        <div class="card">
            <div class="card-body">
                <table class="table">
                    <thead>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Description</th>
                    <th scope="col">MSRP</th>
                    </thead>
                    <tbody>
                    <tr scope="row"><td>1</td><td>Harry Potter</td><td>Tolekin</td><td>a book</td><td>19.99</td></tr>
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
    import Vue from 'vue'
    // import navigation from './Navigation'
    // import message from './Message.vue'
    // import { LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION } from 'store/user/actions'

    export default {
        // components: { navigation, message },
        created() {
            // this.$store.dispatch('User/' + LOCAL_STORAGE_LOGIN_ATTEMPT_ACTION)
            //     .catch((error) => {})
        },
    }
</script>
