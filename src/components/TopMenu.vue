<template>
    <nav class="navbar navbar-expand-md navbar-light fixed-top"
         :class="{'bg-white' : navbarWhiteColorReady,'navbar-shadow': navbarShadowReady}">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#aaissNavbar"
                aria-controls="aaissNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="navbar-brand font-weight-bold" to="/">AAISS</router-link>

        <div class="collapse navbar-collapse justify-content-end" id="aaissNavbar">
            <ul class="navbar-nav mt-2 mt-lg-0 font-weight-bold">

                <li class="nav-item active">
                    <a class="nav-link" @click.prevent="handleHomeButton()">Home</a>
                </li>
                <li class="nav-item">
                    <a href="https://aaiss.ce.aut.ac.ir/2020/#aboutSection" class="nav-link">About</a>
                </li>
<!--                <li class="nav-item">-->
<!--                    <a href="http://aaiss.ce.aut.ac.ir/#committeeSection" class="nav-link">Committee</a>-->
<!--                </li>-->
                <li class="nav-item">
                    <a href="https://aaiss.ce.aut.ac.ir/2020/#speakersSection" class="nav-link">Speakers</a>
                </li>
                <li class="nav-item">
                    <a href="https://aaiss.ce.aut.ac.ir/2020/#teacherSection" class="nav-link">Workshops</a>
                </li>
                <li class="nav-item">
                    <a href="https://aaiss.ce.aut.ac.ir/2020/#scheduleSection" class="nav-link">Schedule</a>
                </li>
                <li class="nav-item">
                    <a href="https://aaiss.ce.aut.ac.ir/2020/#organizerSection" class="nav-link">Organizer</a>
                </li>
                <li class="nav-item">
                    <router-link to="/workshops+presentation" class="nav-link">All Workshops and Presentations</router-link>
                </li>
                <li class="nav-item">
                    <a href="https://aaiss.ce.aut.ac.ir/2019" class="nav-link">AAISS 2019</a>
                </li>
<!--                <li class="nav-item">-->
<!--                    <router-link to="/staff" class="nav-link">Staff</router-link>-->
<!--                </li>-->
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "TopMenu",
        data: function () {
            return {
                navbarWhiteColorReady: false,
                navbarShadowReady: false,
            }
        },
        methods: {
            handleHomeButton: function () {
                if (this.$route.path == '/') {
                    scrollTo(0, 0);
                } else {
                    this.$router.push('/');
                }
            }
        },
        created() {
        },
        mounted() {
            document.addEventListener('scroll', () => {
                if (scrollY >= 100) {
                    this.navbarWhiteColorReady = true;
                    this.navbarShadowReady = true;
                } else {
                    this.navbarWhiteColorReady = false;
                    this.navbarShadowReady = false;
                }
            });
        },
        watch: {}

    }
</script>

<style scoped>
    nav {
        transition: all 0.3s ease-in-out;
    }

    .navbar-shadow {
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    }

    .nav-item {
        margin-right: 10px;
        margin-left: 10px;
    }

    .nav-item:hover > .nav-link {
        color: #8e5751 !important;
    }

    .nav-link {
        cursor:pointer;
        color: #bc8f89 !important;
    }

    .navbar-brand {
        color: #9c9ea2;
        font-size: 30px;
    }

    .navbar {
        height: 65px;
    }

    ul.navbar-nav {
        float: right;
    }


    @media only screen and (min-width: 0) and (max-width: 767.98px) {
        nav {
            background-color: white;
        }

        ul.navbar-nav {
            float: none;
            text-align: center;
            border-radius: 0 0 10px 10px;
            background-color: white;
            margin-top: 0 !important;
            -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
            -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        }
    }
</style>