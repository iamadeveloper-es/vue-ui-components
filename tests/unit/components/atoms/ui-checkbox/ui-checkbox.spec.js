import { createLocalVue, shallowMount } from "@vue/test-utils";
import UiCheckbox from '@/components/atoms/ui-checkbox/index.vue';

describe('Component UiBadge', () => {
    const localVue = createLocalVue();

    const component = shallowMount(UiCheckbox, {
        localVue
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('... Definition', () => {

        test('The name of the component is ui-checkbox', () => {
            expect(UiCheckbox.name).toEqual('ui-checkbox');
        });

        test('Match snapshot', () => {
            expect(component.element).toMatchSnapshot();
        });
    });
});