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
<!--                    <h1 class="display-5">-->
<!--                        {{teacher.paper}}-->
<!--                    </h1>-->

<!--                    <strong>-->
<!--                        Location-->
<!--                    </strong>-->
<!--                    <address>-->
<!--                        {{speaker.talk_location}}-->
<!--                    </address>-->

<!--                    <strong>Date and Time</strong>-->
<!--                    <p>-->
<!--                        <time>-->
<!--                            {{speaker.date_and_time}}-->
<!--                        </time>-->
<!--                    </p>-->

                    <strong>Syllabus</strong>
                    <p class="text-justify" style="line-height:30px;">
                        {{teacher.desc}}
                    </p>

                    <strong>Bio</strong>
                    <p class="text-justify" style="line-height:30px">
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
            }
        },
        created() {
            let speakerPromise = this.$store.dispatch('getTeacherById', this.$route.params.id);
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