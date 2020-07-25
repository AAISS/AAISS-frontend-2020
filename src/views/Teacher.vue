<template>
    <section id="speakersSection">
        <!--        <div id="particles-js" class="position-absolute"></div>-->
        <div class="container pt-5" v-if="teacher != null">
            <div class="row mt-5">
                <div class="col-lg-3">
                    <TeacherBlock :speaker="teacher"></TeacherBlock>
<!--                    <button @click.prevent="showRegisterSoonMessage()"-->
<!--                            v-if="staticParts[0].register_link == '/'"-->
<!--                            class="btn btn-primary btn-lg btn-block float-left regBtn"-->
<!--                    >-->
<!--                        <span v-bind:class="{'small' : smallerFontSize}">-->
<!--                            {{registerValue}}-->
<!--                        </span>-->
<!--                    </button>-->
<!--                    <a v-else :href="staticParts[0].register_link"-->
<!--                       class="btn btn-primary btn-lg btn-block float-left regBtn" target="_blank">{{registerValue}}</a>-->
                </div>
                <div class="col-lg-9 infoBlock">
                    <h1 class="display-5">
                        {{workshop.name}}
                    </h1>

<!--                    <strong>-->
<!--                        Location-->
<!--                    </strong>-->
<!--                    <address>-->
<!--                        {{speaker.talk_location}}-->
<!--                    </address>-->

                    <strong v-if="workshop.start_date !== ''">Details</strong>
                    <p v-if="workshop.start_date !== ''">
                        <date>
                            <span class="font-weight-bold">Date: </span> {{datePicker(workshop.start_date)}}
                        </date>
                        <br>
                        <time>
                            <span class="font-weight-bold">Time: </span>{{timePicker(workshop.start_date)}}
                        </time>
                        <br>
                        <level>

                            <span class="font-weight-bold">Workshop Level: </span>{{workshop.level}}
                        </level>
                        <br>
                        <project>
                            <span class="font-weight-bold" v-if="workshop.has_project === true">This workshop has projects</span>
                        </project>
                    </p>


                    <strong>Syllabus</strong>
                    <p class="text-justify" style="line-height:30px;">
                        {{workshop.desc}}
                    </p>

                    <strong>Bio</strong>
                    <p class="text-justify" style="line-height:30px">
                        {{teacher.bio}}
                    </p>

                    <strong v-if="teacher.cv_path !== ''">CV</strong>
                    <p v-if="teacher.cv_path !== ''" class="text-justify" style="line-height:30px" >
                        {{teacher.cv_path}}
                    </p>



                </div>
            </div>
        </div>

    </section>
</template>

<script>

    import TeacherBlock from "../components/TeacherBlock";

    export default {
        name: "Speaker",
        data: function () {
            return {
                registerValue: 'Registration',
                smallerFontSize: false,
            }
        }, computed: {

            teacher: function () {
                return this.$store.getters.getCurrentTeacher;
            },
            workshop: function () {
                return this.$store.getters.getCurrentWorkshop
            }
        },
        components: {
            TeacherBlock
        },
        methods: {
            showRegisterSoonMessage: function () {
                this.registerValue = 'Registration is closed.';
                this.smallerFontSize = true;
                setTimeout(() => {
                    this.registerValue = 'Registration';
                    this.smallerFontSize = false;
                }, 2500)
            },
            datePicker: function (date) {
                return date.split('T')[0];
            },
            timePicker: function (date) {
                var d = date.split('T')[1];
                return d.split('.')[0]
            },
        },
        async created() {
            try {
                await this.$store.dispatch('getTeacherById', this.$route.params.id);
                this.$store.dispatch('getWorkshopById', this.teacher.workshops[0]);
            } catch (e) {
                console.log(e);
            }
        },
        mounted() {
            scrollTo(0, 0);
        }

    }
</script>

<style scoped>

    #speakersSection {
        background: #ceccc0;
        /*background: -moz-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);*/
        /*background: -webkit-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);*/
        /*background: radial-gradient(ellipse at center, #e4e3df 0%, #c6c4b6 100%);*/
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4e3df', endColorstr='#c6c4b6', GradientType=1);
        color: #797B7F;
        padding-bottom: 20px;
        min-height: 100vh;
    }

    h1.display-5 {
        padding-top: 10px;
        padding-left: 10px;
    }

    .infoBlock {
        border-radius: 10px;
        background-color: #ffffff;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        margin-top: 15px;
        padding: 20px;
    }

    .infoBlock p, address {
        padding: 5px 30px;
    }


    .regBtn {
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: #C6C2C4;
        border: none;
    }

    .regBtn:hover {
        background-color: white;
        color: #C6C2C4;
    }

    .small {
        font-size: 12px;
    }

    @media (min-width: 0) and (max-width: 991.98px) {
        #speakersSection {
            height: auto;
        }
    }


</style>