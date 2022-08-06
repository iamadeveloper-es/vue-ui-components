import { createLocalVue, shallowMount } from "@vue/test-utils";
import App from '@/app';

describe('Component App', () => {
    const localVue = createLocalVue();

    const component = shallowMount(App, {
        localVue
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('... Definition', () => {

        test('The name of the component is app', () => {
            expect(App.name).toEqual('app');
        });

        test('Match snapshot', () => {
            expect(component.element).toMatchSnapshot();
        });
    });
});