<template lang="pug">
  ui-audio-player(
    :src="src"
  )
</template>

<script>
import UiAudioPlayer from '../../ui-audio-player';
export default {
  name: 'ui-audio-player-demo',
  components: {
    UiAudioPlayer
  },
  data(){
    return {
      src: 'https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3'
    }
  }
}
</script>

<style lang="scss">
@import '../mixins/ui-audio-player';

$base: ();


.ui-audio{
    @include audioPlayer($base)
}
</style>