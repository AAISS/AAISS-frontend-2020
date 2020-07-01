<template>
    <div class="main-frame">
        <div class="wrapper">
            <img src="../assets/img/bigLogoLanding.png" alt="">
            <div class="detail-frame">
                <p >{{startingDate}}</p>
                <a v-bind:href="previousEventLink"
                        class="btn-more-info btn">{{buttonValue}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Landing",
        data: function () {
            return {
                buttonValue: 'اطلاعات مربوط به دوره قبل',
                startingDate: 'شروع از هفته دوم مردادماه ۹۹',
                previousEventLink: 'http://aaiss.ceit.aut.ac.ir'
            }
        }
    }
</script>

<style scoped>
    .main-frame {
        background-color: #16375a;
        height: 100%;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 700px;
        position: absolute;
    }


    p{
        color: #bdc2c6;
        text-align: center;
        font-size: 25px;
    }
    .btn-more-info{
        font-weight: bold;
        background-color: #7a7b7d;
        border-radius: 25px;
        color: white;
        padding: 5px 25px 5px 25px;
    }
    .wrapper{
        position: relative;
        width: 700px;
        height: 600px;

    }
    .detail-frame{
        position: absolute;
        left: 0;
        bottom: 80px;
    }
</style>