export default {
    data() {
        return {
          isfloatingLabel: false,
        };
      },
      computed: {
        hasFloatingActive(){
          return !this.readOnly && (this.isfloatingLabel && this.floatingLabel) || (this.floatingLabel && this.value)
        }
      },
      methods: {
        floatingActive() {
          this.isfloatingLabel = true;
        },
        floatingRemove() {
          this.isfloatingLabel = false;
        }
      }
}