<template>
<div>
  <div id="one">
        <div class="layout">
            <div class="blinking" id="blue">G</div>
            <div class="blinking" id="red">a</div>
            <div class="blinking" id="yellow">n</div>
            <div class="blinking" id="blue">g</div>
            <div class="blinking" id="green">l</div>
            <div class="blinking" id="red">e</div>
            <div class="blinking" id="mark">&copy;</div>
        </div>
        <div class="searchbox">
            <input id="search" type="text" placeholder="Input your name" />
            <button id="abutton" @click="toGame()">검색</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    methods: {
        toGame() {
            this.$router.push("game");
        }
    }
}
</script>

<style>
* {
            user-select: none;
        }

        .placeholder{
            font-family: "Noto Sans", sans-serif;
            text-align: center;
            
            margin-top: 4% !important;
            overflow: hidden;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }

        div {
            color: rgb(138, 141, 146);
        }

        #red {
            color: rgb(234, 067, 053);

        }

        #blue {
            color: rgb(066, 133, 244);

        }

        #yellow {
            color: rgb(251, 188, 005);

        }

        #green {
            color: rgb(052, 168, 083);

        }

        /* 검색바 */
        #search {
            margin-top: 6%;
            width: 320px;
            height: 20px;
            margin-right: 2%;

        }

        button {
            width: 50px;
            height: 100%;
            margin-top: 6%;
            background: #ffffff;
            outline: none;
            float: right;
            color: black;
            cursor: pointer;
        }


        .blinking {
            -webkit-animation: blink 1.1s ease-in-out 1;
            -moz-animation: blink 1.1s ease-in-out 1;
            animation: blink 1.1s ease-in-out 1;
            display: flex;
            align-items: flex-end;
        }

        @-webkit-keyframes blink {
            0% {
                opacity: 1;
            }

            20% {
                opacity: 0;
            }

            40% {
                opacity: 1;
            }

            60% {
                opacity: 0;
            }

            80% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        @-moz-keyframes blink {
            0% {
                opacity: 1;
            }

            20% {
                opacity: 0;
            }

            40% {
                opacity: 1;
            }

            60% {
                opacity: 0;
            }

            80% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        @keyframes blink {
            0% {
                opacity: 1;
            }

            20% {
                opacity: 0;
            }

            40% {
                opacity: 1;
            }

            60% {
                opacity: 0;
            }

            80% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        .layout {
            display: flex;
            flex-direction: row;
            justify-content: center;
            font-size: 8em;
        }

        .searchbox {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        #mark {
            font-size: 0.2em;
        }
</style>