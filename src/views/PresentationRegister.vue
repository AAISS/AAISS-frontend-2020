<template>
    <div id="headerSection">
        <notifications position="top center" class="noti-style"/>
        <div class=" pt-5">
            <div class="col-md-12">
                <h1 class="text-center font-weight-bold">Register</h1>
            </div>
        </div>

        <div class="register-wrapper">
            <div class="pt-5  sub-register">
                <div class="register-container im ">
                    <div class="col-md-12 workshop">
                        <h5 v-if="presentations.length !== 0" class="text-center font-weight-bold">Presentations</h5>
                        <h5 v-else class="text-center font-weight-bold ">Workshops</h5>
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
                            <tr class="workshop">
                                <th scope="col"></th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>

                            <tbody>

                            <tr v-if="presentations.length !== 0"
                                class="choice-wrapper">
                                <td><input v-if="!presentations[presentations.length -1].is_full" class="check-box" type="checkbox" :value="true"
                                           v-model="presentation"></td>
                                <td><p class="text-left">presentation <span v-if="presentations[presentations.length -1].is_full"
                                                          class="text-danger">(FULL)</span></p></td>
                                <td><p>{{presentation_fee}}</p>
                                </td>
                                <td>
                                    <router-link :to="'/presentations/'+ userData.email" class="more-info">
                                        More Information
                                    </router-link>
                                </td>
                            </tr>

                            <tr class="workshop">
                                <td v-if="workshops.length !== 0 && presentations.length !== 0" colspan="4"
                                    class="text-center font-weight-bold">
                                    <h5 class="text-center font-weight-bold ">Workshops</h5>
                                </td>

                            </tr>

                            <tr v-for="workshop in workshops" v-bind:key="workshop.id"
                                class="choice-wrapper">
                                <td><input v-if="!workshop.is_full" class="check-box" type="checkbox" :value="workshop.id"
                                           v-model="payment.workshops"></td>
                                <td><p class="text-left">{{workshop.name}} <span v-if="workshop.is_full" class="text-danger">(FULL)</span>
                                </p></td>
                                <td><p>{{workshop.cost}}</p>
                                </td>
                                <td>
                                    <router-link :to="'/workshop/' + workshop.id +'/'+ userData.email" class="more-info">
                                        More Information
                                    </router-link>
                                </td>
                            </tr>

                            </tbody>

                        </table>

                        <div v-if="error" class="text-danger errors">
                            <b>Please select at least one item to buy</b>

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
    import axios from "axios";

    export default {
        name: "PresentationRegister",
        data: function () {
            return {
                presentation: [],
                error: false,
                presentation_fee: "default",
                user: {
                    name: "",
                    email: "",
                    national_code: "",
                    fields_of_interest: [],
                    phone_number: ""
                },
                payment: {
                    email: "",
                    workshops: [],
                    presentations: false
                }

            }
        },
        methods: {
            buy: async function () {
                this.checkItems();
                if (this.error === false) {
                    try {
                        const response = await this.makePayment();
                        this.$notify({
                            group: "auth",
                            title: "Success",
                            text: "Redirecting to payment page",
                            type: "success"
                        })
                        window.location.replace(response.message);
                        return true
                    } catch (e) {
                        console.log(e);
                        return false
                    }


                }
            },
            checkItems: function () {
                if (this.payment.workshops.length === 0 && this.presentation.length === 0) {

                    this.error = true
                } else this.error = false
            },
            getPresentationPrice: function () {
                return new Promise((resolve, reject) => {
                    axios({
                        url: this.$store.getters.getApi + '/misc/presentation_fee',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: 'GET',
                    }).then((response) => {
                        this.presentation_fee = response.data.desc;
                        resolve(response.data);
                    }).catch((error) => {
                        reject(error);
                    })
                })
            },

            makePayment: function () {
                return new Promise((resolve, reject) => {
                    axios({
                        url: this.$store.getters.getApi + '/payment/',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        data: this.paymentData,
                        method: 'POST',
                    }).then((response) => {
                        console.log(response.data)
                        resolve(response.data);
                        return response.data
                    }).catch((error) => {
                        reject(error);
                        return error
                    })
                })
            },

        },
        created() {
            this.$store.dispatch('getWorkshops');
            this.$store.dispatch('getPresentations');
            this.getPresentationPrice()
        },

        computed: {
            workshops: function () {
                return this.$store.getters.getWorkshops;
            },
            presentations: function () {
                return this.$store.getters.getPresentations;
            },
            userData: function () {
                this.user.name = this.$route.params.name;
                this.user.phone_number = this.$route.params.phone_number;
                this.user.email = this.$route.params.email;
                this.user.national_code = this.$route.params.national_code;

                this.user.fields_of_interest = localStorage.getItem('FOI').split(',') || [];
                console.log(this.user);
                return this.user;
            },
            paymentData: function () {
                this.payment.email = this.$route.params.email;
                if (this.presentation.length !== 0) {
                    this.payment.presentations = this.presentation[0];
                }
                console.log(this.payment)
                return this.payment
            }
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
        border-radius: 10px;
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
        border-radius: 10px;
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
        border-radius: 10px;
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

    .more-info {
        background-color: #9c9ea2;
        color: white;
        text-decoration: none;
        padding: 5px 15px 5px 15px;
        border-radius: 10px;
        font-weight: bolder;
    }

    .more-info:hover {
        box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
        background-color: #626264;

    }

    .table-responsive {
        background-color: white;
        font-size: 12px;
        padding: 10px;
        border-radius: 10px;
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

    th {
        font-weight: bolder;
    }

    tr:hover {
        background-color: #f5f5f5;
    }

    .workshop:hover {
        background-color: white;
    }

    .workshop-title {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    /*notification*/
    .noti-style {
        padding: 0px;
        margin: 0px 5px 5px;
        font-size: 15px;
    }


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

    @media only screen and (min-width: 0px) and (max-width: 460px) {
        .register-container {
            width: 90vw;
        }

        .button {
            width: 90vw;
        }

        h1 {
            padding-top: 50px;
        }

        th, td {
            padding: 15px 5px 15px 5px;
        }

        .more-info {
            padding: 5px;
            font-size: smaller;
        }
    }


</style>