export default {
    methods: {
        rippleEffect(ev){
            const x = ev.clientX - ev.target.offsetLeft;
            const y = ev.clientY - ev.target.offsetTop;

            const ripples = document.createElement('span');
            ripples.setAttribute('class', 'ripple-span')
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.$el.appendChild(ripples);

            setTimeout(() => {
                ripples.remove()
            }, 1000);

        }
    }
}