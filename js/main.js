var app = new Vue ({
    el: '#root',
    
    data: {
        listItem: "",

        list: [
            'Fare la spesa',
            'Fare il bucato',
            'Pulire casa'
        ],

        image: 'img/logo.png',
    },
    methods: {
        add: function () {
            this.list.push(this.listItem);
            this.listItem = '';
        },

        remove: function (tick) {
            this.list.splice(this.list.indexOf(tick), 1); 
        }
    }
})

Vue.config.devtools = true;