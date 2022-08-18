export default {
    methods: {
        rippleEffect(ev){
            const element = this.$el;

            const elementRect = element.getBoundingClientRect();

            const circle = document.createElement('span');

            const diameter = Math.max(elementRect.width, elementRect.height);
            const radius = diameter / 2;
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${ev.clientX - (elementRect.left + radius)}px`;
            circle.style.top = `${ev.clientY - (elementRect.top + radius)}px`;

            circle.classList.add('ripple-span');

            const ripple = element.getElementsByClassName('ripple-span')[0];

            if (ripple) {
                ripple.remove();
            }

            element.appendChild(circle);

        }
    }
}