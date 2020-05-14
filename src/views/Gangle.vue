<template>
<div>
  <div id="one">
        <div class="layout">
            <div class="blink" id="blue" v-bind:class="{'blinking': isActive}">G</div>
            <div class="blink" id="red" v-bind:class="{'blinking': isActive}">a</div>
            <div class="blink" id="yellow" v-bind:class="{'blinking': isActive}">n</div>
            <div class="blink" id="blue" v-bind:class="{'blinking': isActive}">g</div>
            <div class="blink" id="green" v-bind:class="{'blinking': isActive}">l</div>
            <div class="blink" id="red" v-bind:class="{'blinking': isActive}">e</div>
            <div class="blink" id="mark" v-bind:class="{'blinking': isActive}">&copy;</div>
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
    data(){
        return{
                isActive : false
        }
    },
    methods: {
        toGame() {
            this.isActive=true
            setTimeout(()=>{
                this.$router.push('game')
            },1200)
            
        },
    },
    computed:{
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


        .blinking{
            -webkit-animation: blink 1.2s ease-in-out 10; /* 1 */
            -moz-animation: blink 1.2s ease-in-out 10; /* 1 */
            animation: blink 1.2s ease-in-out 10; /* 1 */
            
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
            align-items: flex-end;
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