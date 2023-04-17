<template lang="pug">
  .ui-audio
    .ui-audio__controls.audio-controls
        UiButton(
            :classes="['audio-controls__play']"
            :iconModel="iconModel"
            @clicked="playPause")
        .audio-controls__time
            span.audio-controls__time-current {{time.current}}
            span /
            span.audio-controls__time-duration {{time.duration}}
</template>

<script>

import UiButton from '@/components/molecules/ui-button'
export default {
    name: 'ui-audio-player',
    components: {
        UiButton
    },
    props: {
        controls: {
            type: Boolean,
            default: true
        },
        src: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'audio/mp3'
        },

    },
    data(){
        return{
            audio: undefined,
            playing: false,
            iconModel: {
                icon: 'play',
                // class: 'ml-2'
            },
            time: {
                current: '',
                duration: ''
            },
            timer: undefined
        }
    },
    computed: {
        
    },
    methods: {
        padZero(v) {
            return (v < 10) ? "0" + v : v;
        },
        setVideoTime(time){
            return this.padZero(parseInt((time / (60 * 60)) % 24)) + ":" + this.padZero(parseInt((time / (60)) % 60)) + ":" + 
                    this.padZero(parseInt((time) % 60));
        },
        playPause(){
            if(!this.playing){
                this.audio.play()
                this.playing = true
                this.iconModel.icon = 'pause'

                this.timer = setInterval(() => {
                    this.time.current = this.setVideoTime(this.audio.currentTime)
                }, 1000);
            }
            else{
                this.audio.pause()
                this.playing = false
                this.iconModel.icon = 'play'

                clearInterval(this.timer)
            }
        },
        configComponent(){
            this.audio = new Audio(this.src);
            this.audio.addEventListener('loadeddata', (e) => {
                console.log(e.target.currentTime)
                console.log(e.target.duration)
                this.time.current = this.setVideoTime(e.target.currentTime)
                this.time.duration = this.setVideoTime(e.target.duration)
            });
            
        }
    },
    created(){
        this.configComponent()
    }
}
</script>

<style>
</style>