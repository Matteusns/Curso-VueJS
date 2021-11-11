var products = [
    {
        "id" : 0,
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "id" : 1,
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 1
    },
    {
        "id" : 2,
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "id" : 3,
        "photo": "img/fries.png",
        "name": "Batata frita",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "id" : 4,
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 1
    },
    {
        "id" : 5,
        "photo": "img/salad.png",
        "name": "Salada",
        "price": 2.79,
        "active": false,
        "quantity": 1
    },
    {
        "id" : 6,
        "photo": "img/cola.png",
        "name": "Coca Cola",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "id" : 7,
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "id" : 8,
        "photo": "img/water.png",
        "name": "Água",
        "price": 1.49,
        "active": false,
        "quantity": 1
    }
];
 
const SelfServiceMachine = {
    data() {
        return {
            products: window.products
        }
    },
    methods: {
        total: function (){
            var total = 0
            this.products.forEach(({quantity, price, active}) => {
                if (active) {
                    total += price * quantity
                }
            })
            return total.toFixed(2);
        },
        toggleSelecionar : function (index) {
            this.products[index].active = !this.products[index].active
            if (!this.products[index].active) {
                this.products[index].quantity = 1
            }
        }
    }
}

Vue.createApp(SelfServiceMachine).mount('#app');


