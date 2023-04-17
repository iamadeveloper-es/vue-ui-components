import { createLocalVue, shallowMount } from "@vue/test-utils";
import UiBadge from '@/components/atoms/ui-badge/index.vue';

describe('Component UiBadge', () => {
    const localVue = createLocalVue();

    const component = shallowMount(UiBadge, {
        localVue
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('... Definition', () => {

        test('The name of the component is ui-badge', () => {
            expect(UiBadge.name).toEqual('ui-badge');
        });

        test('Match snapshot', () => {
            expect(component.element).toMatchSnapshot();
        });
    });
});