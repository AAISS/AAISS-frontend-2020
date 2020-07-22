<template>
    <div id="headerSection">
        <div class=" pt-5">
            <div class="col-md-12">
                <h1 class="text-center font-weight-bold">Presentation</h1>
            </div>
        </div>

        <div class="main-wrapper">
            <div class="pt-5  sub-wrapper">
                <div class="all-presentations-wrapper">
                    <div class="presentation-container im " v-for="presentation in presentations"
                         :key="presentation.id">
                        <div id="wrapper-description">
                            <div id="right" class="sub-description">
                                <h4 class="text-center">Speakers</h4>
                                <Slider
                                        animation="fade"
                                        v-model="sliderValue"
                                        :duration="5000"
                                        :speed="1000"
                                        class="slider"
                                >
                                    <SliderItem
                                            v-for="speaker in presenters"
                                            :key="speaker.id"
                                            @click="changeIndex(1)"
                                            :style="speaker"
                                            class="item slider-item"
                                    >
                                        <div class="content-wrapper">
                                            <img :src="this.$store.getters.getMediaRoot + speaker.pic" alt="speaker img"
                                                 class="rounded-circle img-fluid">
                                            <p class="text-center">{{speaker.name}}</p>
                                            <p class="text-center">{{speaker.workplace}}</p>
                                        </div>
                                    </SliderItem>
                                </Slider>

                            </div>


                            <div class="vl"></div>


                            <div id="left" class="sub-description">
                                <h4 class="text-center">Description</h4>
                                <p class="text-justify description">{{presentation.desc}}</p>
                                <div class="date-time-wrapper">
                                    <div class="minor-date-time">
                                        <h5>Date</h5>
                                        <span class="material-icons">
                                    event
                                    </span>
                                        <p>{{datePicker(presentation.start_date)}}</p>
                                    </div>
                                    <div class="minor-date-time">
                                        <h5>Time</h5>
                                        <span class="material-icons">
                                    schedule
                                    </span>
                                        <p>{{timePicker(presentation.start_date)}}</p>
                                    </div>
                                </div>
                                <input @click="buy()" class="register-button button" type="submit"
                                       value="Register and Buy">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Slider, SliderItem} from "vue-easy-slider";

    export default {
        name: "PresentationDescription",
        components: {
            Slider,
            SliderItem
        },
        data: function () {
            return {
                sliderValue: 2,
                presenters: [],
            }
        },
        methods: {
            changeIndex(index) {
                this.sliderValue = index;
            },
            buy: function () {

            },
            getAllSpeakers: function () {
                let eachPresentation = [];
                for (let i = 0; i <this.$store.getters.getPresentations; i++) {
                    for (let j = 0; j <this.$store.getters.getPresentations.presenters.length ; j++) {
                        let newPresenter = this.$store.commit('getPresenterById', this.$store.getters.getPresentations.presenters.get(i));
                        eachPresentation.push(newPresenter);
                    }
                    this.presenters.push(eachPresentation);
                    eachPresentation= [];
                }
            },
            datePicker: function (date){
                return  date.split('T')[0];
            },
            timePicker: function (date){
                var d= date.split('T')[1];
                return  d.split('.')[0]
            },
        },
        computed: {
            presentations: function () {
                console.log(this.$store.getters.getPresentations);
                return this.$store.getters.getPresentations;
            }
        },
        mounted() {
            setTimeout(
                () =>
                    1000
            );
        },
        created() {
            this.$store.dispatch('getPresentations');
        },

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

    h5, .material-icons {
        color: #B7867E;
        padding: 20px 1px 20px 1px;
        font-weight: bolder;
    }

    .date-time-wrapper p {
        padding: 20px;
        font-weight: bolder;
    }

    .presentation-container {
        border-radius: 15px;
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
        margin-top: 30px;
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
        min-height: 100%;

    }

    #right {
        min-width: 30%;

    }

    #left {
        max-width: 60%;
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
        border-radius: 30px;
        min-width: 100%;
        min-height: 30px;
        margin-top: 20px;
    }
    .all-presentations-wrapper{
        display: flex;
        flex-direction: column;
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