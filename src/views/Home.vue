<template>
    <div>
        <section id="headerSection">
            <div class="container position-absolute titleContainer">
                <div class=" row pt-5">
                    <div class="col-md-12 titleCol">
                        <h1 class="noSelect text-center">
                            <br>
                            <br>
                        </h1>
                    </div>
                    <div class="col-md-12 subTitleCol">
                        <h4 class="text-center">
                        </h4>
                    </div>
                </div>
            </div>
            <img src="../assets/img/bigLogoLanding.png" alt="logo image" class="img-fluid brainImage noSelect"
                 draggable="false">

            <img src="../assets/img/autLogo.png" class="position-absolute autLogo noSelect"
                 alt="amirkabir logo" draggable="false">
        </section>


        <section id="aboutSection" class="sub-section" v-if="about!== '' ">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 justify-content-center">
                        <div class="row">
                            <div class="col-md-12 mx-auto">
                                <h2 class="font-weight-bold text-center text-color-blue">About the Event</h2>
                                <p class="text-justify aboutText text-color-blue">
                                    {{about}}
                                    <br>
                                    <router-link to="/workshops+presentation" class="ps-link">
                                        Presentation and workshops
                                        <span class="material-icons">
                                             launch
                                        </span>
                                    </router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

<!--        <section id="presentation-and-workshops" class="sub-section" v-if="about!== '' ">-->
<!--            <div class="container">-->
<!--                <div class="row justify-content-center">-->
<!--                    <div class="col-md-12 justify-content-center">-->
<!--                        <div class="row">-->
<!--                            <div class="mx-auto">-->
<!--                                <router-link to="/workshops+presentation" class="button">-->
<!--                                    Presentation and workshops-->
<!--                                    <span class="material-icons">-->
<!--                                      launch-->
<!--                                    </span>-->
<!--                                </router-link>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->


        <!--        <section id="committeeSection">-->
        <!--            <div class="container">-->
        <!--                <div class="row pt-5">-->
        <!--                    <div class="col-md-12">-->
        <!--                        <h1 class="text-center font-weight-bold text-white">Scientific Committee</h1>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="row pt-3">-->
        <!--                    <div class="col-lg" :key="scientificCommittee.indexOf(member)"-->
        <!--                         v-for="member in scientificCommittee">-->
        <!--                        <CommitteMemberBlock :member="member"></CommitteMemberBlock>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </section>-->


        <section id="speakersSection" v-if="presenters.length !== 0">
            <div class="container">
                <div class="row pt-5">
                    <div class="col-md-12">
                        <h1 class="text-center font-weight-bold text-color-blue">Invited Presenters</h1>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-lg-3" :key="speaker.id" v-for="speaker in presenters">
                        <SpeakerBlock :speaker="speaker"></SpeakerBlock>
                    </div>
                </div>
            </div>
        </section>

        <section id="teacherSection" v-if="teachers.length !== 0">
            <div class="container">
                <div class="row pt-5">
                    <div class="col-md-12">
                        <h1 class="text-center font-weight-bold  text-color-blue">Invited Workshop Teachers</h1>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-lg-3" :key="speaker.id" v-for="speaker in teachers">
                        <TeacherBlock :speaker="speaker"></TeacherBlock>
                    </div>
                </div>
            </div>
        </section>

        <!--        <section id="scheduleSection">-->
        <!--            <div class="container">-->
        <!--                <div class="row pt-5">-->
        <!--                    <div class="col-md-12">-->
        <!--                        <h1 class="text-center font-weight-bold text-color-blue">Schedule</h1>-->
        <!--                    </div>-->
        <!--                    <div class="col-md-12">-->
        <!--                        <div class="table-responsive">-->
        <!--                            <table class="table table-bordered table-sm">-->
        <!--                                <thead>-->
        <!--                                <tr>-->
        <!--                                    <th scope="col">Index</th>-->
        <!--                                    <th scope="col">Title (level)</th>-->
        <!--                                    <th scope="col">Lecturer / Type</th>-->
        <!--                                    <th scope="col">Timing</th>-->
        <!--                                </tr>-->
        <!--                                </thead>-->
        <!--                                <tbody>-->
        <!--                                <tr>-->
        <!--                                    <td colspan="4" class="firstSpecRow text-center font-weight-bold">-->
        <!--                                        1st Day (Tuesday - 23rd of July / 1st of Mordad)-->
        <!--                                    </td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <th class="text-center">0</th>-->
        <!--                                    <th>Registration</th>-->
        <!--                                    <th></th>-->
        <!--                                    <th>07:30 – 07:45</th>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <th class="text-center">0</th>-->
        <!--                                    <th>Opening</th>-->
        <!--                                    <th></th>-->
        <!--                                    <th>07:45 – 08:15</th>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>1</td>-->
        <!--                                    <td>Learning to Rank for E-commerce (Intermediate)</td>-->
        <!--                                    <td>Ehsan Ebrahimzadeh / Skype-->
        <!--                                    </td>-->
        <!--                                    <td>08:15 – 09:15</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>2</td>-->
        <!--                                    <td>A Closed-Form Learned Pooling for Deep Classification Networks (Intermediate)-->
        <!--                                    </td>-->
        <!--                                    <td>Hossein Mobahi / Google-->
        <!--                                        Hangout-->
        <!--                                    </td>-->
        <!--                                    <td>09:15 – 10:15</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td colspan="3" class="text-center font-weight-bold">Break</td>-->
        <!--                                    <td>10:15 – 10:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>3</td>-->
        <!--                                    <td>Describing Images by Semantic Modeling using Attributes and Tags-->
        <!--                                        (Intermediate)-->
        <!--                                    </td>-->
        <!--                                    <td>Mahdi M. Kalayeh /-->
        <!--                                        Skype-->
        <!--                                    </td>-->
        <!--                                    <td>10:30 – 11:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>4</td>-->
        <!--                                    <td>Holistic Video Understanding (Intermediate)</td>-->
        <!--                                    <td>Mohsen Fayyaz / Skype</td>-->
        <!--                                    <td>11:30 – 12:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td colspan="3" class="text-center font-weight-bold">Lunch and Prayers</td>-->
        <!--                                    <td>12:30 – 13:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>5</td>-->
        <!--                                    <td>Compressed DNNs and their fault resiliency (Intermediate)</td>-->
        <!--                                    <td>Majid Sabbagh /-->
        <!--                                        Skype-->
        <!--                                    </td>-->
        <!--                                    <td>13:30 – 14:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>6</td>-->
        <!--                                    <td>Corpus based Machine Translation (Intermediate)</td>-->
        <!--                                    <td>Heshaam Faili / In person-->
        <!--                                    </td>-->
        <!--                                    <td>14:30 – 15:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td colspan="3" class="text-center font-weight-bold">Break</td>-->
        <!--                                    <td>15:30 – 15:45</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>7</td>-->
        <!--                                    <td>Generative Adversarial Networks: Image and Text Generation (Intermediate)</td>-->
        <!--                                    <td>Mahdieh Soleymani / In person</td>-->
        <!--                                    <td>15:45 – 16:45</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>8</td>-->
        <!--                                    <td>Building a descriptive graph for a galaxy simulation (Intermediate)</td>-->
        <!--                                    <td>Abolfazl Taghribi /-->
        <!--                                        Skype-->
        <!--                                    </td>-->
        <!--                                    <td>16:45 – 17:45</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td colspan="4" class="text-center font-weight-bold">2nd Day (Wednesday - 24th of-->
        <!--                                        July / 2nd of Mordad)-->
        <!--                                    </td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>9</td>-->
        <!--                                    <td>From Genes To Cognition (Intermediate)</td>-->
        <!--                                    <td>Sajjad Torabian / In person</td>-->
        <!--                                    <td>08:15 – 09:15</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>10</td>-->
        <!--                                    <td>Neuroscience-inspired Computer Vision (Intermediate)</td>-->
        <!--                                    <td>Mohammad-Reza Abolghasemi-Dehaqani / In person-->
        <!--                                    </td>-->
        <!--                                    <td>09:15 – 10:15</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td colspan="3" class="text-center font-weight-bold">Break</td>-->
        <!--                                    <td>10:15 – 10:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>11</td>-->
        <!--                                    <td>Machine Vision as a way of Overcoming Human Visual Disorders (Intermediate)</td>-->
        <!--                                    <td>Farrokh Karimi / In-->
        <!--                                        person-->
        <!--                                    </td>-->
        <!--                                    <td>10:30 – 11:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>12</td>-->
        <!--                                    <td>Consistent Online Optimization (Intermediate)</td>-->
        <!--                                    <td>Mohammad Reza Karimi / Skype</td>-->
        <!--                                    <td>11:30 – 12:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td colspan="3" class="text-center font-weight-bold">Lunch and Prayers</td>-->
        <!--                                    <td>12:30 – 13:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>13</td>-->
        <!--                                    <td>The Application of Fuzzy Deep Systems in Medical Data Analysis (Intermediate)-->
        <!--                                    </td>-->
        <!--                                    <td>Raheleh Davoodi / In person</td>-->
        <!--                                    <td>13:30 – 14:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>14</td>-->
        <!--                                    <td>Semantic Segmentation of Images using Deep Convolutional Neural Networks-->
        <!--                                        (Advanced)-->
        <!--                                    </td>-->
        <!--                                    <td>Fahimeh Fooladgar / In person</td>-->
        <!--                                    <td>14:30 – 15:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td colspan="3" class="text-center font-weight-bold">Break</td>-->
        <!--                                    <td>15:30 – 15:45</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>15</td>-->
        <!--                                    <td>Attacks & Defenses for Deep Neural Networks (Advanced)</td>-->
        <!--                                    <td>Mohammad Khalooei / In person</td>-->
        <!--                                    <td>15:45 – 16:45</td>-->

        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>16</td>-->
        <!--                                    <td>A geometric perspective on the robustness of deep networks (Advanced)</td>-->
        <!--                                    <td>Seyed Mohsen Moosavi Dezfooli / In person</td>-->
        <!--                                    <td>16:45 – 17:45</td>-->
        <!--                                </tr>-->

        <!--                                <tr>-->
        <!--                                    <td colspan="4" class="text-center font-weight-bold">3rd Day (Thursday - 25th of-->
        <!--                                        July / 3rd of Mordad)-->
        <!--                                    </td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>17</td>-->
        <!--                                    <td>Uncertainty estimation with Deep Networks (Advanced)</td>-->
        <!--                                    <td>Hossein Azizpour / Skype</td>-->
        <!--                                    <td>08:15 – 09:15</td>-->

        <!--                                </tr>-->

        <!--                                <tr>-->
        <!--                                    <td>18</td>-->
        <!--                                    <td>Representation Learning Without Labels (Advanced)</td>-->
        <!--                                    <td>Ali Eslami / Skype-->
        <!--                                    </td>-->
        <!--                                    <td>09:15 – 10:15</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td colspan="3" class="text-center font-weight-bold">Break</td>-->
        <!--                                    <td>10:15 – 10:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>19</td>-->
        <!--                                    <td>The spatiotemporal neural dynamics of perceptual processes in the brain and deep-->
        <!--                                        network models (Advanced)-->
        <!--                                    </td>-->
        <!--                                    <td>Yalda Mohsenzadeh / Skype-->
        <!--                                    </td>-->
        <!--                                    <td>10:30 – 11:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>20</td>-->
        <!--                                    <td>Manifold optimization in machine learning (Advanced)</td>-->
        <!--                                    <td>Reshad Hosseini / Skype</td>-->
        <!--                                    <td>11:30 – 12:30</td>-->
        <!--                                </tr>-->
        <!--                                <tr>-->
        <!--                                    <td>-</td>-->
        <!--                                    <th>Closing</th>-->
        <!--                                    <td></td>-->
        <!--                                    <td>12:30 - 13:00</td>-->
        <!--                                </tr>-->
        <!--                                </tbody>-->
        <!--                            </table>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <div class="row justify-content-center">-->
        <!--                    <div class="col-md-12 justify-content-center">-->
        <!--                        <div class="row">-->
        <!--                            <div class="col-md-12 mx-auto">-->
        <!--                                <button @click.prevent="showRegisterSoonMessage()"-->
        <!--                                        v-if="register_link === '/'"-->
        <!--                                        class="btn btn-primary btn-lg btn-block float-left regBtn">-->
        <!--                                    <span v-bind:class="{'small' : smallerFontSize}">-->
        <!--                                    {{registerValue}}-->
        <!--                                    </span>-->
        <!--                                </button>-->
        <!--                                <a v-else :href="register_link"-->
        <!--                                   class="btn btn-primary btn-lg btn-block float-left regBtn" target="_blank">{{registerValue}}</a>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </section>-->

        <section id="organizerSection">
            <div class="container">
                <div class="row pt-5">
                    <div class="col-md-12">
                        <h1 class="text-center font-weight-bold text-white">Organizer</h1>
                    </div>
                </div>
                <div class="row pt-5 pb-5 details">
                    <div class="col-lg-6 text-white">

                        <h5 class="organizerName">Students' Scientific Chapter of Computer Engineering
                            Technology Department <br> Amirkabir University of Technology(Tehran Polytechnic)</h5>
                        <h6 class="organizerAddress mt-5">Website : <a href="http://www.ceit-ssc.ir" target="_blank">www.ceit-ssc.ir</a>
                        </h6>
                        <h6 class="organizerEmail">
                            Email: <a href="mailto:ceit.aaiss@gmail.com">ceit.aaiss@gmail.com</a></h6>
                        <div class="row pt-3">
                            <div class="col-md-12">
                                <img src="../assets/img/ssc-logo-white-horizontal.png" alt="ssc logo" class="img-fluid"
                                     draggable="false">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>

</template>

<script>
    // @ is an alias to /src
    import SpeakerBlock from '../components/SpeakerBlock';
    import TeacherBlock from "../components/TeacherBlock";
    import axios from "axios";


    export default {
        name: 'Home',
        data: function () {
            return {
                register_link: "/",
                registerValue: 'Registration',
                smallerFontSize: false,
                about: "",
            }
        },
        computed: {
            presenters: function () {
                console.log(this.$store.getters.getPresenters)
                return this.$store.getters.getPresenters;
            },
            teachers: function () {
                console.log(this.$store.getters.getTeachers)
                return this.$store.getters.getTeachers;
            },

        },
        components: {
            TeacherBlock,
            SpeakerBlock,
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
            getAbout: function () {
                return new Promise((resolve, reject) => {
                    axios({
                        url: this.$store.getters.getApi + '/misc/about/',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: 'GET',
                    }).then((response) => {
                        this.about = response.data.desc;
                        resolve(response.data);
                    }).catch((error) => {
                        reject(error);
                    })
                })
            },
        },
        created() {
            let promisedTeachers = this.$store.dispatch('getTeachers');
            let promisedPresenters = this.$store.dispatch('getPresenters');
            this.getAbout();

        },
        mounted() {
            scrollTo(0, 0);
        }
    }
</script>

<style scoped>
    #headerSection {
        min-height: 100vh;
        width: 100%;
        background: #16375a;
        background: -moz-radial-gradient(center, ellipse cover, #102e48 0%, #535053 100%);
        background: -webkit-radial-gradient(center, ellipse cover, #3f494c 0%, #1D4176 100%);
        background: radial-gradient(ellipse at center, #484c5a 0%, #16375 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4e3df', endColorstr='#c6c4b6', GradientType=1);
    }


    .titleContainer {
        top: 42%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
    }


    .titleCol {
        margin-bottom: 50px;
    }

    .subTitleCol h4 {
        color: #55585d;
    }

    .titleCol h1 {
        color: #797B7F;
        text-align: center;
        line-height: 65px;
        font-weight: 700;
        cursor: default;
    }

    .noSelect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none;
    }

    .brainImage {
        width: 700px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

    }

    .autLogo {
        left: 30px;
        bottom: 30px;
        width: 150px;
        height: 100px;
    }

    #aboutSection {
        width: 100%;
        background-color: #ceccc0;
        color: white;
        min-height: 100%;
    }

    #aboutSection h2 {
        margin-top: 45px;
    }

    #aboutSection p {
        margin-bottom: 45px;
        line-height: 30px;
    }

    #speakersSection {
        background-color: #ceccc0;
        min-height: 100vh;
        padding-bottom: 30px;
    }

    #speakersSection h1 {
        padding-top: 45px;
    }


    #teacherSection {
        background-color: #ceccc0;
        padding-bottom: 30px;
    }

    #presentation-and-workshops {
        background: #ceccc0;
        padding: 30px;
    }

    #scheduleSection {
        background-color: #ceccc0;
        min-height: 100vh;
    }

    #scheduleSection h1 {
        padding-top: 45px;
        padding-bottom: 30px;
    }

    #organizerSection {
        background-color: #16375a;
    }

    .organizerEmail {
        margin-bottom: 10px;
    }

    .organizerAddress a, .organizerEmail a {
        text-decoration: none;
        color: white;
        transition: all 0.3s ease-in-out;
    }

    .organizerAddress a:hover, .organizerEmail a:hover {
        color: #c6c4b6;
    }

    .regBtn {
        background-color: white;
        margin-top: 50px;
        margin-bottom: 50px;
        color: #C6C2C4;
        border: none;
        font-size: 2rem;
    }

    .regBtn:hover {
        color: white;
        background-color: #C6C2C4;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    .titleCol h1 {
        font-size: 4rem;
    }

    .ceitMapFrame {
        width: 100%;
        min-height: 350px;
        border-radius: 10px;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

    }

    .text-color-blue {
        color: #787c7f;
    }

    .aboutText {
        font-weight: bolder;
        font-size: 20px;
    }

    td:first-child {
        text-align: center;
    }

    td[colspan="3"] {
        font-size: 16px;
        color: black;
    }

    td[colspan="4"] {
        font-size: 16.5px;
        color: #10a3f0;
    }

    .table-responsive {
        background-color: white;
        font-size: 12px;
        padding: 10px;
        border-radius: 10px;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    .details {
        display: flex;
        justify-content: center;
    }
    .ps-link{
        text-decoration: none;
        color: #B7867E;
    }
    .ps-link:hover{
        color: #8e5751;
    }
    .material-icons{
    }



    @media only screen and (min-width: 416px) and (max-width: 767.98px) {

        .small {
            font-size: 17px;
        }

        .titleContainer {
            top: 42%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
        }

        .titleCol {
            margin-bottom: 25px;
        }

        .titleCol h1 {
            font-size: 2.7rem;
            line-height: 45px;
        }
    }

    @media only screen and (min-width: 0) and (max-width: 415px) {
        .titleContainer {
            top: 42%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
        }

        .titleCol {
            margin-bottom: 10px;
        }

        .titleCol h1 {
            font-size: 1.5rem;
            line-height: 30px;
        }

        .subTitleCol h4 {
            color: #55585d;
            font-size: 1rem;
        }

        .small {
            font-size: 17px;
        }
    }
</style>