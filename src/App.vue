<template>
    <div class="h-100">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet">
        <notifications group="auth" position="top center" classes="my-vue-notification"></notifications>
        <vue-particles
                color="#b2b4ae"
                :particleOpacity="1"
                :particlesNumber="100"
                shapeType="circle"
                :particleSize="3"
                linesColor="#b2b4ae"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="1"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
                class="particles"
        >
        </vue-particles><!-- stats - count particles -->
        <TopMenu></TopMenu>
        <transition name="fade" mode="out-in">
            <router-view class="iransans "/>
        </transition>
<!--        <Footer></Footer>-->
    </div>
</template>

<script>

    import TopMenu from "./components/TopMenu";

    export default {
        name: 'App',
        data: function () {
            return {}
        },
        components: {
            TopMenu,
        }, methods: {},
        mounted() {
        }

    }
</script>

<style lang="scss">

    *{
        scroll-behavior: smooth;
        font-variant-numeric: normal;
    }

    html, body {
        height: 100%;
    }

    @font-face {
        font-family: system-ui;
        /*src : url('assets/fonts/iranSansFarsiNumber.ttf') format('truetype');*/

    }

    .iransans {
        font-family: system-ui;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    div[style*="z-index: 10000"] {
        display: none !important;
    }

    .particles {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
    .notification-title {
        font-family : system-ui !important;
        direction: rtl !important;
        text-align:left;
    }
    .notification-content {
        font-family : system-ui !important;
        direction: ltr !important;
        text-align:left;
    }

    .my-vue-notification{
        padding: 10px;
        margin: 0 5px 5px;

        font-size: 12px;

        color: #ffffff;
        background: #44A4FC;
        border-left: 5px solid #187FE7;

        &.success {
            background: #16375a;
            border-left-color: #122c48;
        }
        &.warn {
            background: #ffb648;
            border-left-color: #f48a06;
        }

        &.error {
            background: #E54D42;
            border-left-color: #B82E24;
        }

    }

</style>
