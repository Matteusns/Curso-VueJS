<template>
  <div class="basket">
    <div class="items">
      <template v-if="productsInBag.length">
        <div class="item" v-for="(prod, index) in productsInBag" :key="index">
          <div class="remove" @click="this.$store.dispatch('removeFromBag', prod.id)">Remover Produto</div>
          <div class="photo"><img :src="prod.image" alt=""></div>
          <div class="description">{{prod.title}}</div>
          <div class="price">
            <span class="quantity-area">
              <button :disabled="prod.quantity <= 1" @click="prod.quantity --">-</button>
              <span class="quantity">{{prod.quantity}}</span>
              <button @click="prod.quantity++">+</button>
            </span>
            <span class="amount">R$ {{(prod.price * prod.quantity).toFixed(2)}}</span>
          </div>
        </div>
        <div class="grand-total"> Total do pedido: R$ {{calculaTotal()}}</div>
      </template>
      <template v-else>
        <h3>Nenhum item no carrinho</h3>
      </template>
        

    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  computed: mapState([
    'productsInBag' 
  ]),
  name: 'Basket',
  methods: {
   calculaTotal() {
     let total = 0;
     this.productsInBag.forEach(item => total += item.price * item.quantity)
     return total.toFixed(2);
   }
  },
 
}
</script>

<style lang="scss">

.basket {
  padding: 60px 0;  
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid lightgrey;
      position: relative;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

            margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
        }
      }

      .description {
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;

      }

      .price {
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;

        }
      }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }

}

</style>
