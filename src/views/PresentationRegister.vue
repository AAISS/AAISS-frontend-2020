<template>
    <div id="headerSection">
        <div class=" pt-5">
            <div class="col-md-12">
                <h1 class="text-center font-weight-bold">Register</h1>
            </div>
        </div>

        <div class="register-wrapper">
            <div class="pt-5  sub-register">
                <div class="register-container im ">
                    <div class="col-md-12">
                        <h5 class="text-center font-weight-bold">Presentations</h5>
                    </div>

                    <form
                            id="app"
                            @submit="buy()"
                            action="https://vuejs.org/"
                            method="post"
                            class="pt-3 table-responsive"
                    >

                        <table class="table table-sm">
                            <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>

                            <tbody>


                                <tr v-for="presentation in checkBox_presentations" v-bind:key="presentation"
                                    class="choice-wrapper">
                                    <td><input class="check-box" type="checkbox" :value="presentation.name"
                                               v-model="selected_presentations"></td>
                                    <td><p>{{presentation.name}}</p></td>
                                    <td><p>{{presentation.price}}</p>
                                    </td>
                                    <td>
                                        <router-link :to="'/presentations/' + presentation.name" class="more-info">
                                            More Information
                                        </router-link>
                                    </td>
                                </tr>

                            </tbody>

                        </table>
                        <!--                        <div class="check-box-wrapper">-->
                        <!--                            <div v-for="presentation in checkBox_presentations" v-bind:key="presentation" class="choice-wrapper">-->
                        <!--                                <div class="presentation-wrapper">-->
                        <!--                                    <input class="check-box" type="checkbox" :value="presentation.name" v-model="selected_presentations">-->
                        <!--                                    <p>{{presentation.name}}</p>-->
                        <!--                                    <p>{{presentation.price}}</p>-->
                        <!--                                    <router-link :to="'/presentations/' + presentation.name">-->
                        <!--                                        More Information-->
                        <!--                                    </router-link>-->
                        <!--                                </div>-->
                        <!--                            </div>-->
                        <!--                        </div>-->

                        <div v-if="checkItems()" class="text-danger errors">
                            <b>Please select at least one presentation to buy</b>

                        </div>

                    </form>
                </div>

            </div>
            <div class="sub-register">

                <input @click="buy" class="button" type="submit" value="Register and Buy">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PresentationRegister",
        data: function () {
            return {
                errors: [],
                checkBox_presentations: [
                    {price: "200", name: "asghar"},
                    {price: "30000", name: "bagher"},
                    {price: "1000000", name: "mohammad"},
                    {price: '700', name: 'in'},
                    {price: '90000', name: 'oon'},
                    {price: '980', name: 'dard'},
                    {price: '6789', name: 'kooft'}
                ]
                ,
                selected_presentations: []

            }
        },
        methods: {
            buy: function () {
                this.checkItems()
            },
            checkItems: function () {
                if (this.selected_presentations.length === 0) {
                    return true
                } else return false
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>
    #headerSection {
        min-height: 100vh;
        width: 100%;
        background: #ceccc0;
        background: -moz-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);
        background: -webkit-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);
        background: radial-gradient(ellipse at center, #e4e3df 0%, #c6c4b6 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4e3df', endColorstr='#c6c4b6', GradientType=1);
        padding-bottom: 20px;
    }


    h1 {
        color: #787c7f;
        padding: 20px;
    }

    .register-container {
        border-radius: 15px;
        background-color: #ffffff;
        min-height: 100px;
        min-width: 40vw;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 20;
        padding: 3vw;
    }

    .register-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .sub-register {
        display: flex;
        justify-content: center;
    }

    h5 {
        color: #bc8f89;
    }

    .user-data {
        border-radius: 2px;
        border: none;
        background-color: #f4f4f4;
        width: 100%;
        height: 35px;
        color: #556266;
    }

    p {
        margin: 0;
        color: #16375a;
    }

    .button {
        background-color: #16375a;
        border: none;
        color: white;
        padding: 10px;
        font-weight: bolder;
        border-radius: 30px;
        min-width: 40vw;
        min-height: 50px;
        margin-top: 20px;
        z-index: 20;
    }

    .check-box {
        color: #3f494c;
    }

    .check-box-wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

    }

    .choice-wrapper {
        padding: 0 20px 0 20px;
    }

    .errors {
        margin-top: 30px;
    }

    .presentation-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .title-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .more-info{
        background-color: #9c9ea2;
        color: white;
        text-decoration: none;
        padding: 5px 15px 5px 15px;
        border-radius: 15px;
        font-weight: bolder;
    }

    .table-responsive {
        background-color: white;
        font-size: 12px;
        padding: 10px;
        border-radius: 15px;
    }
    table {
        border-collapse: collapse;
        width: 100%;
        text-align: center;
    }
    th, td {
        border-bottom: 1px solid #ddd;
        padding: 15px;
        color: #16375a;
    }
    th{
        font-weight: bolder;
    }
    tr:hover {background-color: #f5f5f5;}



    @media only screen and (min-width: 460px) and (max-width: 800px) {
        .register-container {
            width: 90vw;
        }

        .button {
            width: 90vw;
        }

        h1 {
            padding-top: 50px;
        }


    }
    @media only screen and (min-width: 0px) and (max-width: 460px){
        .register-container {
            width: 90vw;
        }

        .button {
            width: 90vw;
        }

        h1 {
            padding-top: 50px;
        }
        th, td{
            padding: 15px 5px 15px 5px;
        }
        .more-info{
            padding: 5px;
            font-size: smaller;
        }
    }



</style>