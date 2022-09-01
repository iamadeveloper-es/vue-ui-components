<template>
  <div class="ui-money-demo">
    <div
    v-for="(item, index) in moneyModels"
    :key="index"
    >
        <ui-money
        :model="item.model"
        :lang="item.lang"
        ></ui-money>
    </div>
  </div>
</template>

<script>
import UiMoney from '../../ui-money'
export default {
    name: 'ui-money-demo',
    components: {
        UiMoney
    },
    data(){
        return {
            moneyModels: [
                {
                    desc: 'US Dollar model',
                    lang: 'en-US',
                    model: {
                        amount: 1475.56,
                        currency: 'USD'
                    },
                },
                {
                    desc: 'Euro model',
                    model: {
                        amount: 1475.56,
                        currency: 'EUR',
                    }
                },
                {
                    desc: 'Pound model',
                    lang: 'en-GB',
                    model: {
                        amount: 1475.56,
                        currency: 'GBP'
                    }
                },
                {
                    desc: 'Yen model',
                    lang: 'ja-JP',
                    model: {
                        amount: 1475.56,
                        currency: 'JPY'
                    }
                }
            ]
        }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-money';

$base : ();

.ui-money{
    @include money($base);
}
</style>