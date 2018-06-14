<template>
    <div class="container" id="app">
        <div class="row">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(customer,index) in customers.data" v-if="(index+1) % 2 == 0" >
                        <td>{{(customers.current_page -1)*15 +(index+1)}}</td>
                        <td>{{customer.name}}</td>
                        <td>{{customer.email}}</td>
                    </tr>
                </tbody>
            </table>


            <pagination :data="customers" @pagination-change-page="getResults"></pagination>

        </div>
    </div>
</template>

<script>
    export default {

        data (){

            return {

                customers :[

                ]
            }

        },

            mounted() {
        // Fetch initial results
        this.getResults();
    },

        methods: {
        // Our method to GET results from a Laravel endpoint
        getResults(page = 1) {
            axios.get('getapi?page=' + page)
                .then(response => {
                    this.customers = response.data;

                    console.log(response.data);
                });
        }
    }



    }
</script>
