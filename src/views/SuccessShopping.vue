<template>
    <div class="base">
        <div class="sub">
            <h1>Your registration was <span class="blue">Successful!</span></h1>
            <p class="title blue list">Your have registered:</p>
            <br>
            <ul class="list">

                <li v-if="registered.presentation" class="text">Presentation</li>

                <li v-for="register in registered.workshops" :key="register.id" class="text">
                    {{register}}
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: "SuccessShopping",
        data: function () {
            return {}
        },
        computed: {
            registered: function () {
                let string = this.$route.query.data;
                let jsonData = JSON.parse(window.atob(string))
                console.log(jsonData)
                return jsonData;
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style scoped>
    .base {
        min-height: 100vh;
        background: #e4e3df;
        background: -moz-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);
        background: -webkit-radial-gradient(center, ellipse cover, #e4e3df 0%, #c6c4b6 100%);
        background: radial-gradient(ellipse at center, #e4e3df 0%, #c6c4b6 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e4e3df', endColorstr='#c6c4b6', GradientType=1);
        display: flex;
        justify-content: center;
    }

    h1 {
        color: #8e5751;
    }

    .sub {
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .blue {
        color: #16375a;
    }

    .title {
        font-size: 30px;

    }

    .text {
        font-size: 20px;
        color: #16375a;
    }

    .list {
        text-align: left;
    }
    @media only screen and (min-width: 0) and (max-width: 630px) {
        .list {
            text-align: center;
        }
    }
</style>