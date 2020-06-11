<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Book Title:"
                label-for="input-1"
                description="Book Title"
            >
                <b-form-input
                    id="input-1"
                    v-model="form.title"
                    required
                    placeholder="Enter Book Title"
                ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Authors:" label-for="input-2">
                <multiselect v-model="form.authors" :options="authors" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Select Authors" label="name" track-by="id" :preselect-first="false" > <!-- @input="updateAuthors" -->
                    <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
                </multiselect>
<!--                <pre class="language-json"><code>{{ value  }}</code></pre>-->
            </b-form-group>


<!--            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">-->
<!--                <b-form-input-->
<!--                    id="input-2"-->
<!--                    v-model="form.name"-->
<!--                    required-->
<!--                    placeholder="Enter name"-->
<!--                ></b-form-input>-->
<!--            </b-form-group>-->

            <b-form-group id="input-group-3" label="Description:" label-for="input-3">
                <b-form-input
                    id="input-3"
                    v-model="form.description"
                    required
                    placeholder="Description"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="MSRP:" label-for="input-4">
                <b-form-input
                    id="input-4"
                    v-model="form.msrp"
                    required
                    placeholder="10.00"
                ></b-form-input>
            </b-form-group>

<!--            <b-form-group id="input-group-4">-->
<!--                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">-->
<!--                    <b-form-checkbox value="me">Check me out</b-form-checkbox>-->
<!--                    <b-form-checkbox value="that">Check that out</b-form-checkbox>-->
<!--                </b-form-checkbox-group>-->
<!--            </b-form-group>-->

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
<!--        <b-card class="mt-3" header="Form Data Result">-->
<!--            <pre class="m-0">{{ form }}</pre>-->
<!--        </b-card>-->
    </div>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                    title: '',
                    authors: null,
                    description: '',
                    msrp: ''
                },
                show: true,
                // value: [],
                // options: [
                //     { name: 'Vue.js', language: 'JavaScript' },
                //     { name: 'Adonis', language: 'JavaScript' },
                //     { name: 'Rails', language: 'Ruby' },
                //     { name: 'Sinatra', language: 'Ruby' },
                //     { name: 'Laravel', language: 'PHP' },
                //     { name: 'Phoenix', language: 'Elixir' }
                // ],
                authors: []
            }
        },
        methods: {
            updateAuthors(authors) {
            },
            onSubmit(evt) {
                evt.preventDefault()
                // let data = JSON.stringify(this.form)
                let data = this.form;


                // submit just the id's of the authors
                let authorIdList = [];
                data.authors.forEach((author) => {
                    authorIdList.push(author.id);
                });
                data.authors = authorIdList;

                console.log(data)
                fetch('http://mindedge-demo.test:8080/api/books', {
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
