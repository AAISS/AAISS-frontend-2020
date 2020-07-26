<template>
    <div id="headerSection">
        <notifications position="top center" class="noti-style"/>

        <div class=" pt-5">
            <div class="col-md-12">
                <h1 class="text-center font-weight-bold">{{workshop.name}}</h1>
            </div>
        </div>

        <div class="main-wrapper">
            <div class="pt-5  sub-wrapper">
                <div class="presentation-container im ">
                    <div id="wrapper-description">
<!--                        <div id="right" class="sub-description">-->
<!--                            <h4 class="text-center">Speakers</h4>-->
<!--                            <Slider-->
<!--                                    animation="fade"-->
<!--                                    v-model="sliderValue"-->
<!--                                    :duration="5000"-->
<!--                                    :speed="1000"-->
<!--                                    class="slider"-->
<!--                            >-->
<!--                                <SliderItem-->
<!--                                        v-for="speaker in teachers"-->
<!--                                        :key="speaker.pic"-->
<!--                                        @click="changeIndex(1)"-->
<!--                                        :style="speaker"-->
<!--                                        class="item slider-item"-->
<!--                                >-->
<!--                                    <div class="content-wrapper">-->
<!--                                        <img :src="this.$store.getters.getMediaRoot + speaker.pic" alt="speaker img"-->
<!--                                             class="rounded-circle img-fluid">-->
<!--                                        <p class="text-center">{{speaker.name}}</p>-->
<!--                                    </div>-->
<!--                                </SliderItem>-->
<!--                            </Slider>-->

<!--                        </div>-->


<!--                        <div class="vl"></div>-->


                        <div id="left" class="sub-description">
                            <h4 class="text-center">Description</h4>
                            <div v-html="workshop.desc" class="text-justify description" style="line-height:30px;"></div>
                            <wrap-div>
                                <span class="detail-titles">Capacity: </span>{{workshop.capacity}} <span v-if="workshop.is_full === true"
                                                                         class="text-danger"> FULL </span>
                            </wrap-div>

                            <wrap-div>
                                <span class="detail-titles">Level: </span>{{workshop.level}}
                            </wrap-div>

                            <wrap-div>
                                <span class="detail-titles">Duration: </span>{{getDuration}} Minutes
                            </wrap-div>

                            <wrap-div>
                                <span class="detail-titles">Prerequisites: </span>{{workshop.prerequisites }}
                            </wrap-div>

                            <h6  class="detail-titles" v-if="workshop.has_project === true">This workshop has project.</h6>
                            <div class="date-time-wrapper">
                                <div class="minor-date-time">
                                    <h5>Date</h5>
                                    <span class="material-icons">
                                    event
                                    </span>
                                    <p>{{this.datePicker(workshop.start_date)}}</p>
                                </div>
                                <div class="minor-date-time">
                                    <h5>Time</h5>
                                    <span class="material-icons">
                                    schedule
                                    </span>
                                    <p>{{this.timePicker(workshop.start_date)}}</p>
                                </div>
                            </div>
                            <input v-if="paymentData.email !== 'none' && !workshop.is_full" @click="buy()" class="register-button button" type="submit" value="Register and Buy">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>

    import * as axios from "axios";

    export default {
        name: "WorkshopDescription",
        data: function () {
            return {
                sliderValue: 2,
                workshop: {},
                speakers: [],
                eachPresenter: [],
                payment: {
                    email: "",
                    workshops: [],
                    presentations: false
                }
            }
        },
        methods: {
            changeIndex(index) {
                this.sliderValue = index;
            },
            buy: async function () {
                try {
                    this.$notify({
                        group: "auth",
                        title: "",
                        text: "Validating your request",
                        type: "warn"
                    })
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
                    this.$notify({
                        group: "auth",
                        title: "Error",
                        text: "Internal Error",
                        type: "error"
                    });
                    return false


                }
            },
            getWorkshopById: function (id) {
                return new Promise((resolve, reject) => {
                    axios({
                        url: this.$store.getters.getApi + '/workshop/' + id,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: 'GET',
                    }).then((response) => {
                        this.workshop = response.data
                        resolve(response.data);
                    }).catch((error) => {
                        reject(error);
                    })
                })
            },
            getTeachers: async function (workshop) {
                for (let i = 0; i < workshop.teachers.length; i++) {
                    await this.$store.dispatch('getTeacherById', workshop.teachers[i])
                    this.eachPresenter.push(this.$store.getters.getCurrentTeacher)
                }
                console.log(this.eachPresenter)

            },
            sendRequest: async function () {
                try {
                    await this.getWorkshopById(this.$route.params.id)
                    this.getTeachers(this.$store.getters.getCurrentWorkshop)
                    return true
                } catch (e) {
                    console.log(e);
                    return false
                }
            },
            datePicker: function (date) {
                return date.split('T')[0];
            },
            timePicker: function (date) {
                var d = date.split('T')[1];
                d = d.split('Z')[0];
                return d.split('.')[0]
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
        computed: {
            getDuration: function () {
                let endHour = this.timePicker(this.workshop.end_date).split(':')[0];
                let endMinute = this.timePicker(this.workshop.end_date).split(':')[1];
                let endSecond = this.timePicker(this.workshop.end_date).split(':')[2];
                console.log(endHour, endMinute, endSecond)
                let end = new Date(0, 0, 0, endHour, endMinute, endSecond);
                let startHour = this.timePicker(this.workshop.start_date).split(':')[0];
                let startMinute = this.timePicker(this.workshop.start_date).split(':')[1];
                let startSecond = this.timePicker(this.workshop.start_date).split(':')[2];
                let start = new Date(0, 0, 0, startHour, startMinute, startSecond);

                return Number(((end.getTime() - start.getTime()) / 60000).toFixed(2));
            },
            teachers: function () {
                return this.eachPresenter
            },
            paymentData: function () {
                this.payment.email = this.$route.params.email;
                this.payment.workshops.push(this.$route.params.id)
                console.log(this.payment)
                return this.payment
            }
        },
        mounted() {
            setTimeout(
                () =>
                    1000
            );
        },
        async created() {
            await this.sendRequest()
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

    .vl {
        border-left: 2px solid #ceccc0;
        min-height: 100%;
        margin: 0 3vw 0 3vw;

    }


    h1 {
        color: #787c7f;
        padding: 20px;
    }

    h4 {
        color: #B7867E;
        padding: 20px;
        font-weight: bolder;
    }

    h5, .material-icons, .detail-titles {
        color: #B7867E;
        padding: 20px 1px 20px 1px;
        font-weight: bolder;
    }

    .date-time-wrapper p {
        padding: 20px;
        font-weight: bolder;
    }

    .presentation-container {
        border-radius: 10px;
        background-color: #ffffff;
        min-height: 100px;
        max-width: 60vw;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 20;
        padding: 3vw;
    }

    #wrapper-description {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .sub-description {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        max-height: 100%;

    }

    #right {
        min-width: 30%;

    }

    #left {
        /*max-width: 60%;*/
    }

    .text-center {
        text-align: center;
    }

    .sub-wrapper {
        display: flex;
        justify-content: center;
    }

    img {
        width: 200px;
        height: 200px;
        margin: 5px 5px 20px 5px;
    }

    .slider-item {
        background-color: white;
        width: 100%;
        height: 100%;
        box-shadow: none;
    }

    .slider {
        background: none;
    }

    .content-wrapper {
        background-color: white;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .description {
        font-size: 15px;
    }

    .date-time-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .minor-date-time {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .register-button {
        background-color: #16375a;
        border: none;
        color: white;
        padding: 10px;
        font-weight: bolder;
        border-radius: 10px;
        min-width: 100%;
        min-height: 30px;
        margin-top: 20px;
    }
    /*notification*/
    .noti-style {
        padding: 0px;
        margin: 0px 5px 5px;
        font-size: 15px;
    }


    @media only screen and (min-width: 600px) and (max-width: 1000px) {
        .presentation-container {
            max-width: 80vw;
        }

        .register-button {
            width: 100%;
            margin-top: 2px;
            padding: 5px;
        }

        h1 {
            padding-top: 50px;
        }

        #wrapper-description {
            flex-direction: column-reverse;
        }

        .sub-description {
            min-width: 100%;
        }

        #right {
            min-height: 40%;
        }

        #left {
            min-height: 55%;
        }

        .vl {
            border-left: none;
            border-bottom: 2px solid #ceccc0;
            min-width: 90%;
            min-height: 0px;
            margin: 15px 3vw 15px 3vw;
        }

    }

    @media only screen and (min-width: 0px) and (max-width: 600px) {
        .presentation-container {
            max-width: 90vw;
        }

        .register-button {
            width: 100%;
        }

        h1 {
            padding-top: 50px;
        }

        #wrapper-description {
            flex-direction: column-reverse;
        }

        .sub-description {
            min-width: 100%;
        }

        #right {
            min-height: 30%;
        }

        #left {
            min-height: 65%;
        }

        .vl {
            border-left: none;
            border-bottom: 2px solid #ceccc0;
            min-width: 90%;
            min-height: 0px;
            margin: 15px 3vw 15px 3vw;
        }

        img {
            width: 30vw;
            height: 30vw;
            margin: 5px 5px 20px 5px;
        }
    }


</style>