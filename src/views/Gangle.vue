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
            <input id="searchbar" type="text" autocomplete="off" v-on:keyup.enter="toGame()" placeholder="Input your name" />
            <div class="b" @click="toGame()">Press Enter</div>
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


        div {
            color: rgb(138, 141, 146);
        }

        #red {
            color: rgb(234, 067, 053);
            letter-spacing: -5px;
        }

        #blue {
            color: rgb(066, 133, 244);
            letter-spacing: -5px;
        }

        #yellow {
            color: rgb(251, 188, 005);
            letter-spacing: -5px;
        }

        #green {
            color: rgb(052, 168, 083);
            letter-spacing: -5px;
        }

        /* 검색바 */
        #searchbar {
            margin-top: 8%;
            width: 550px;
            height: 40px;
            margin-right: 2%;
            border-radius: 22px;
            box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
            text-shadow: none;
            border: black;
            font-family: 'Segoe UI', 'Roboto', arial, sans-serif;  
            cursor: text;
            display: flex;
            padding-inline-start: 50px;
            font-size: 20px;
            background-color: -internal-light-dark-color(white, black);
            outline: none;
            
        }


        .blinking{
            -webkit-animation: blink 1.2s ease-in-out infinite alternate; /* 1 */
            -moz-animation: blink 1.2s ease-in-out infinite alternate; /* 1 */
            animation: blink 1.2s ease-in-out infinite alternate; /* 1 */
            
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
            font-size: 6em;
            align-items: flex-end;
            letter-spacing: -2px;
            font-weight:550;
            font-family: 'Segoe UI', 'Roboto', arial, sans-serif;
            height: 300px;
        }

        .searchbox {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
        }

        #mark {
            font-size: 0.2em;
        }


        .b{
	-webkit-animation:blinka 0.7s ease-in-out infinite alternate;
    -moz-animation:blinka 0.7s ease-in-out infinite alternate;
    animation:blinka 0.7s ease-in-out infinite alternate;
    font-size: 20px;
    margin-top: 50px;
    cursor: pointer;
}
@-webkit-keyframes blinka{
    0% {opacity:0;}
    100% {opacity:1;}
}
@-moz-keyframes blinka{
    0% {opacity:0;}
    100% {opacity:1;}
}
@keyframes blinka{
    0% {opacity:0;}
    100% {opacity:1;}
}


        
</style>