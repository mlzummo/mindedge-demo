<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Author First Name:"
                label-for="input-1"
                description="Enter author first name"
            >
                <b-form-input
                    id="input-1"
                    v-model="form.first_name"
                    required
                    placeholder="Enter author first name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Author Last Name:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.last_name"
                    required
                    placeholder="Enter author last name"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Age:" label-for="input-3">
                <b-form-input
                    id="input-3"
                    v-model="form.age"
                    type="number"
                    required
                    placeholder="50"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                    'first_name': '',
                    'last_name': '',
                    age: ''
                },
                show: true
            }
        },
        methods: {
            updateAuthors(authors) {
            },
            onSubmit(evt) {
                evt.preventDefault()
                let data = this.form;

                console.warn(data)
                console.log('dd');
                fetch('/api/authors', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                // .then(response => response.json() )
                // .then(json => this.updateTable(json) )
                // .catch(error => console.error(error) )
                // TODO: handle update
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                this.form.title = ''
                this.form.authors = []
                this.form.description = ''
                this.form.msrp = ''
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                    this.show = true
                })
            },
            updateAuthorsList(authors) {
                this.authors = authors.map(author => {
                    return { id: author.id, name: author.first_name.concat(' ', author.last_name), age: author.age } // debug age and remove later
                });
                console.warn(this.authors)
                // todo: input validation when i get there
            }
        },
        created() {
            fetch('/api/authors')
                .then(response => response.json() )
                .then(json => this.updateAuthorsList(json) )
                .catch(error => console.error(error) )
            ;
            // todo catch errors
        },
    }
</script>

<style scoped>
</style>
