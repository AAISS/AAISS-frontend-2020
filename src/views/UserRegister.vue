<template>
    <div id="registerSection">
        <notifications position="top center" class="noti-style"/>
        <div class="pt-5">
            <div class="col-md-12">
                <h1 class="text-center font-weight-bold">Register</h1>
            </div>
        </div>

        <div class="register-wrapper">
            <div class="pt-5  sub-register">
                <div class="register-container im ">
                    <div class="col-md-12">
                        <h5 class="text-center font-weight-bold">Personal Information</h5>
                    </div>

                    <form
                            id="app"
                            @submit="checkForm"
                            action="https://vuejs.org/"
                            method="post"
                    >


                        <p>Name</p>
                        <input class="user-data" v-model="user.name" type="text" placeholder="">

                        <p>Phone Number</p>
                        <input class="user-data" v-model="user.phone_number" type="text" placeholder="">

                        <p>Email</p>
                        <input class="user-data" v-model="user.email" type="email" placeholder="">


                        <p>Fields Of Interest</p>
                        <div class="check-box-wrapper">
                            <div v-for="field in FOI" class="choice-wrapper">
                                <p>{{field.name}}</p>
                                <input class="check-box" type="checkbox" :value="field.id"
                                       v-model="user.fields_of_interest">
                            </div>
                        </div>

                        <div v-if="errors.length" class="text-danger errors">
                            <b>Please correct the following error(s):</b>
                            <ul>
                                <li v-for="error in errors">{{ error }}</li>
                            </ul>
                        </div>

                    </form>
                </div>

            </div>
            <div class="sub-register">

                <input @click="[checkForm() , navigateToNextPage()]" class="button" type="submit" value="Submit">
            </div>
        </div>
    </div>
</template>

<script>

    import axios from "axios";

    export default {
        name: "UserRegister",
        data: function () {
            return {
                user: {
                    name: "",
                    email: "",
                    fields_of_interest: [],
                    phone_number: ""
                },
                errors: [],
            }
        },
        methods: {
            checkForm: function (e) {

                this.errors = [];

                if (!this.user.name) {
                    this.errors.push("Name required.");
                }
                if (!this.user.phone_number) {
                    this.errors.push("Phone number required.");
                }
                if(!this.validNumber(this.user.phone_number) || this.user.phone_number.length > 12){
                    this.errors.push("Phone number not valid.");
                }
                if (!this.user.email) {
                    this.errors.push('Email required.');
                } else if (!this.validEmail(this.user.email)) {
                    this.errors.push('Valid email required.');
                }

                if (!this.errors.length) {
                    return true;
                }


            },
            validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            validNumber: function(number){
                var re = /^[0-9]+$/;
                return re.test(number)

            },
            navigateToNextPage: async function () {
                // this.checkForm()
                if (this.errors.length === 0) {
                    if (this.user.fields_of_interest[0] === "") {
                        this.user.fields_of_interest = [];
                    }

                    try {
                        const response = await this.registerUser();
                        if (response.message === "User already exist" || response.message === "User created") {
                            this.$notify({
                                group: "auth",
                                title: "Success",
                                text: response.message,
                                type: "success"
                            })
                           await localStorage.setItem('email', this.user.email)
                            this.$router.push({
                                name: 'register_presentation',
                            })
                        } else {
                            this.$notify({
                                group: "auth",
                                title: "Error",
                                text: "Something went wrong!",
                                type: "error"
                            })
                        }
                        return true
                    } catch (e) {
                        console.log(e);
                        this.$notify({
                            group: "auth",
                            title: "Error",
                            text: "Internal Error",
                            type: "error"
                        });
                        return false
                    }


                }
            },
            registerUser: function () {
                return new Promise((resolve, reject) => {
                    axios({
                        url: this.$store.getters.getApi + '/user/',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        data: this.user,
                        method: 'POST',
                    }).then((response) => {
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
            this.$store.dispatch('getFieldsOfInterest');
        },
        computed: {
            FOI: function () {
                return this.$store.getters.getFOI;
            }
        }
    }

</script>

<style scoped>
    #registerSection {
        background-color: #ceccc0;
        min-height: 100vh;
        min-width: 100vw;
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
        width: 40vw;
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
        padding: 2px;
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
        margin-top: 6px;
    }

    .check-box-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

    }

    .choice-wrapper {
        padding: 10px 20px 10px 20px;
        display: flex;
        flex-direction: row-reverse;
    }

    .errors {
        margin-top: 30px;
    }

    /*notification*/
    .noti-style {
        padding: 0px;
        margin: 0px 5px 5px;
        font-size: 15px;
    }

    @media only screen and (min-width: 500px) and (max-width: 767.98px) {
        .register-container {
            width: 60vw;
        }

        .button {
            width: 60vw;
        }

        h1 {
            padding-top: 50px;
        }
    }

    @media only screen and (min-width: 0) and (max-width: 500px) {
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
</style>