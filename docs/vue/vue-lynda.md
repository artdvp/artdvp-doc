# Vue.js with Lynda.com

source : [Learning Vue.js with Lynda.com](https://www.lynda.com/JavaScript-tutorials/Learning-Vue-js/562924-2.html#tab)

## 1. Vue Fundamentals

## 1-1 Data binding

```html
<body>
    <div id="app">
        <h1>{{msg}}</h1>
        <!--NOT ALLOWED<a href="{{url}}">Home</a>-->
        <a v-bind:href="url + '?myParam=1'">Home</a>
         <p>
            <form action="">
                Name : <input type="text" :value="name" >
            </form>
        </p>
    </div>

</body>
<script>
   var vm =  new Vue({
        el : '#app',
        data : {
            msg : 'Hello Vue my Artdvp',
            url : 'https://www.google.com',
            name: 'artdvp'
        }
    });
</script>

//bind dom -> vm.name = 'aaa'
```

## 1-2 Two way Data binding

```html
www.hplsusport.com

<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
	<form method="post" action="/">
		<!--<label for="email">Email</label> <input type="email" :value="email" id="email">-->
		<label for="email">Email</label> <input type="email" v-model.lazy="email" id="email">

		<fieldset>
			<legend>Interests</legend>
			<div>
				<input v-model="selectedInterest" type="checkbox" value="Running"> Running
			</div>
			<div>
				<input v-model="selectedInterest" type="checkbox" value="Cycling"> Cycling
			</div>
			<div>
				<input v-model="selectedInterest" type="checkbox" value="Swimming"> Swimming
			</div>
		</fieldset>
		<input type="submit" value="Subscribe">
		<p>Your email {{email}}.</p>

		<p>You selected : {{selectedInterest.join(', ')}}</p>
	</form>
</div>

<script>
	var vm = new Vue({
	   el: '#app',
	   data: {
		   email: '',
		   selectedInterest : []
	   }
	});
</script>
//lazy is unbound focus
```

## 1-3 Applying control logic

subscribe.html

```html
<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
	<form method="post" action="/">
		<!--<label for="email">Email</label> <input type="email" :value="email" id="email">-->
		<label for="email">Email</label> <input type="email" v-model.lazy="email" id="email">

		<fieldset>
			<legend>Interests</legend>
			<div v-for="interest in interests">
				<input v-model="selectedInterest" type="checkbox" :value="interest"> {{interest}}
			</div>

		</fieldset>
		<input type="submit" value="Subscribe">
		<p>Your email {{email}}.</p>

		<p v-show="selectedInterest.length > 0">You selected : {{selectedInterest.join(', ')}}</p>
		<p v-if="selectedInterest.length == 3">You must be very active!</p>
		<p v-else-if="selectedInterest.length > 0">You selected : {{selectedInterest.join(', ')}}</p>
		<p v-else>You please select one lease</p>
	</form>
</div>

<script>
	var vm = new Vue({
	   el: '#app',
	   data: {
		   email: '',
		   interests : ['Running','Cycling','Swimming'],
		   selectedInterest : []
	   }
	});
</script>
```

```html
<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
	<form method="post" action="/">
		<!--<label for="email">Email</label> <input type="email" :value="email" id="email">-->
		<label for="email">Email</label> <input type="email" v-model.lazy="email" id="email">

		<fieldset>
			<legend>Interests</legend>
			<div v-for="(interest,index) in interests">
				<input v-model="selectedInterest" type="checkbox" :value="interest.id"> {{interest.name}}
			</div>

		</fieldset>
		<input type="submit" value="Subscribe">
		<p>Your email {{email}}.</p>

		<p v-show="selectedInterest.length > 0">You selected : {{selectedInterest.join(', ')}}</p>
		<p v-if="selectedInterest.length == 3">You must be very active!</p>
		<p v-else-if="selectedInterest.length > 0">You selected : {{selectedInterest.join(', ')}}</p>
		<p v-else>You please select one lease</p>

		<div v-for="(value,key,index) in address">
		   {{index + 1}}. {{key}} : {{value}}
		</div>
		<div v-for="i in 10">{{i}}</div>
	</form>
</div>

<script>
	var vm = new Vue({
	   el: '#app',
	   data: {
		   email: '',
		   interests : [
		       {
		           id: 1,
		           name : 'Running'
		       },
		       {
		           id: 2,
		           name : 'Cycling'
		       },
		       {
		           id: 3,
		           name : 'Swimming'
		       }],
		   selectedInterest : [],
		   address : {
		       street :'100 Broadway',
		       city : 'New York',
		       state : 'NY'
		   }
	   }
	});
</script>

```

## 1-4 Event handling

login.html

```html
<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
	<button v-on:click="msg = 'Welcome!'">Log in</button>
	{{msg}}
</div>

<script>
    new Vue({
       el: '#app',
       data: {
           msg: ''
       },
       methods : {
           logIn : function(){
               this.msg = 'Welcome!'
           }
       }
    });
</script>

```

```html
<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
	<button v-if="!loggedIn" v-on:click="logIn('Mike')">Log in</button>
	<button v-else v-on:click.prevent="logOut">Log out</button>
	{{msg}}
</div>

<script>
    new Vue({
       el: '#app',
       data: {
           msg: '' ,
           loggedIn : false
       },
       methods : {
           logIn : function(username,event){
               //event.preventDefault();
               this.loggedIn = true;
               this.msg = 'Welcome ' + username ;
           },
           logOut : function() {
               this.loggedIn = false;
               this.msg = 'So long!';
           }
       }
    });
</script>
```

## 1-5 Binding to the style attribute

```html
<script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
    <div :style="{border : 'solid 2px black', 'margin-bottom': '30px' , fontSize : myFontSize + 'px' }">
        JS object lteral bound to style attribute
    </div>
    <div :style="fancyDiv">
        object literal in data bound to style attribute
    </div>

    <div :style="[fancyDiv , fancierDiv]">
        multiple objects bound to style attribute
    </div>
</div>

<script>
    new Vue({
       el: '#app',
       data: {
           myFontSize : 24,
           fancyDiv : {
               backgroundColor : 'lightgrey',
               borderRadius : '10px',
               padding : '10px',
               marginTop : '30px'
           },
           fancierDiv : {
               fontFamily : 'Arial, Helvetica',
               border : 'solid 1px black',
               padding : '30px'
           }
       }
    });
</script>
```

```html
<script src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
    <input type="number" name="" v-model="myFontSize">
    <div :style="{border : 'solid 2px black', 'margin-bottom': '30px' , fontSize : myFontSize + 'px' }">
        JS object lteral bound to style attribute
    </div>
    <div :style="fancyDiv">
        object literal in data bound to style attribute
    </div>

    <div :style="[fancyDiv , fancierDiv]"
    @mouseover="fancierDiv.border ='dashed 1px blue'"
    @mouseout="fancierDiv.border = 'solid 1px black'">
        multiple objects bound to style attribute
    </div>
</div>

<script>
    new Vue({
       el: '#app',
       data: {
           myFontSize : 24,
           fancyDiv : {
               backgroundColor : 'lightgrey',
               borderRadius : '10px',
               padding : '10px',
               marginTop : '30px'
           },
           fancierDiv : {
               fontFamily : 'Arial, Helvetica',
               border : 'solid 1px black',
               padding : '30px'
           }
       }
    });
</script>
```

## 1-6 Binding to the class atrribute

```html
<!DOCTYPE html>

<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
    <div class="square" :class="{ blue : cold , red : hot }"></div>
    <div :class="cssClassess"></div>
    <div :class="[squareClass , bgColorClass , { 'dashed-border' : selected }]"></div>
    <input type="checkbox" name="" v-model="selected"/> selected
    <input type="text" v-model="bgColorClass">
</div>

<script>
    var vm = new Vue({
       el: '#app',
       data: {
           cold : true,
           hot : false,
           cssClassess : {
               square : true,
               'dashed-border' : true,
               blue : false
           },
           squareClass : 'square',
           bgColorClass : 'red',
           selected : false
       },
       method : {
           setSquare : function(){
                this.selected = true;
        }
       }
    });
</script>

<style>
    .square {
         width: 200px;
         height: 200px;
         margin-bottom: 20px;
    }
    .blue {
        background-color: blue;
    }
    .red {
        background-color: red;
    }
	.yellow {
        background-color: yellow;
    }
    .dashed-border {
        border: dashed 4px black;
    }
</style>
```

## 2. Features of a Vue Instance

## 2-1 Understanding reactive properties

```js
Constructor Parameter

{
    data:{
        firstName:''
    }
}

Vue Instance
get firstName(){
    /*
    Register this property and watch
    for changes so we can react.
    Return the value
    */
}
set firstName(){
    /*
    Update the value.
    Re0render any elements that use it.
    */
    }

Virtual DOM Update
When the vitual DOM Chnages
- Compare it to the previous version ("diff" them)
- Identify the components that need to be re-rendered
- Determine the most efficient way to update the actual DOM and apply the updates.
```

```html
<div id="app">
    <p>
        {{firstName}} {{lastName}}
    </p>
    <div v-for="item in framework">{{item}}</div>
    <p>{{browser.name}} {{browser.version}}</p>
</div>

<script>
    var vm = new Vue({
       el: '#app',
       data: {
            firstName: 'Mike',
            lastName : '',
            framework : ['Ember','Angular','React'],
            browser : {
                name : 'Google Chrome'
            }
       }
    });
    vm.lastName = 'SSSSS';
    //in console

    //vm.framework[2]
    //>"React"
    //vm.framework[3] = "Vue";
    //>"Vue"
    //vm.framework.push('Vue');
    //>5

    //Vue.set(vm.browser, 'version' , 55)
    //Vue.delete(vm.framework,1)
    //
</script>
```

## 2-2 Adding computed properties

```html
<div id="app">
    <!--{{firstName}} {{lastName}}-->
    <div>
        <input type="number" v-model.number.lazy="tempFarenheit">
        <!--Temperature in Celsius  : {{Math.round(5/9 * tempFarenheit -32 )}}-->
         Temperature in Celsius  : {{ tempCelsius }}
         <br>
          <!--Temperature in Celsius  : {{ tempCelsiusFunc() }}-->
    </div>
</div>

<script>
    var vm = new Vue({
        el: '#app',
        data: {
            firstName: 'Mike',
            lastName: 'Sullivan',
            //fullName : this.firstName + ' ' + this.lastName
            tempFarenheit : 0
       },
       computed : {
           tempCelsius : function(){
               return Math.round(5/9 * (this.tempFarenheit - 32)) ;
           }
           //computed call when rerender
       },
       methods : {
           tempCelsiusFunc : function(){
               return Math.round(5/9 * (this.tempFarenheit - 32)) ;
           }
       }
       //methods not call when rerender
    });
</script>
```

## 2-3 Adding watchers

```html
<div id="app">
    Got a question for our virtual agent? Just ask!
    <input type="text" v-model="question">
    {{response}}
    <ul>
        <li v-for="product in products">{{product.name}}</li>
    </ul>
</div>

<script>
    vm = new Vue({
        el: '#app',
        data: {
            question: '',
            response: '',
            products : []
        },
        // computed : {
        //   products : function(){
        //       //this needs to return a value immediately, can't wait for Ajax response
        //   }  
        // },
        watch : {
            question : function(newValue){
                if(newValue.indexOf('products') > -1)
                {
                    this.response = 'Sure, I can list the products for you';
                    $.getJSON('https://hplussport.com/api/products')
                    .done(function(data){
                        vm.products = data ;
                    });
                }
                else
                {
                    this.response = "Sorry, I don't understand that question.";
                    this.products = [];
                }
            }
            // watch run asynchronous task
        }
    });
</script>
```

## 2-4 Using lifecycle hooks

### Available Hooks

**beforeCreate**

* Before instance initialization

**Created**

* Reactive properties configured; instance not yet mounted

**beforeMount**

* Template complied; ready to be inserted in DOM

**Mounted**

* Template inserted in DOM, replacing "el" element

**beforeUpdate**

* Data changed; update pending

**Upddated**

* Re-rendered to reflect changes

**beforeDestroy**

* vm.$destroy() call

**Destroyed**

* Watchers and event handlers removed; no reactivity

```html
   <div id="app">
                    Got a question for our virtual agent? Just ask!
                    <input type="text" v-model="question"> {{response}}
                    <ul>
                        <li v-for="product in products">{{product.name}}</li>
                    </ul>
                </div>

                <script>
                    var vm = new Vue({
                        el: '#app',
                        data: {
                            question: '',
                            response: '',
                            products: []
                        },
                        beforeCreate: function() {
                            console.log('beforeCreate');
                        },
                        created: function() {
                            console.log('created');
                            this.question = 'A default question about products?';
                        },
                        beforeMount: function() {
                            console.log('beforeMount');
                        },
                        mounted: function() {
                            console.log('mounted');
                        },
                        beforeUpdate: function() {
                            console.log('beforeUpdate');
                        },
                        updated: function() {
                            console.log('updated');
                        },
                        beforeDestroy: function() {
                            console.log('beforeDestroy');
                        },
                        destroyed: function() {
                            console.log('destroyed');
                        },
                        watch: {
                            question: function(newValue) {
                                if (newValue.indexOf('products') > -1) {
                                    console.log('API call');
                                    this.response = "Sure, I can list the products for you.";
                                    $.getJSON('https://hplussport.com/api/products')
                                        .done(function(data) {
                                            console.log('API response');
                                            vm.products = data;
                                        });
                                }
                                else {
                                    this.response = "Sorry, I don't understand this question.";
                                    this.products = [];
                                }
                            }
                        }
                    });

                    //vm.$destroy();

                </script>
```

## 3. Vue Components

## 3-1 Registering and using components

```html
<div id="app">
    <global-component></global-component>
    <local-component></local-component>
    <local-component></local-component>
</div>

<script>
    Vue.component('global-component',{
        template : '<div> a global component</div>'
    });
    var LocalComponent = {
        // template : '<div @click="showNum()">a local component <div>The number {{num}}</div></div>',
        template : '<div @click="showNum()">a local component </div>',
        data : function(){
            return {
                num : Math.random()
            };
        },
        methods:{
            showNum : function()
            {
                alert('My number is '+ this.num);
            }
        }

    };
    new Vue({
       el: '#app',
       data: {
           num: 42
       },
       components : {'local-component' : LocalComponent}
    });
</script>

<style>
    div#app {
        border: none;
    }
    div {
        border: solid 2px black;
        margin-bottom: 20px;
        padding: 10px;
    }
</style>
```

link : [demo 3-1 Registering and using components]()

## 3-2 Using component props

```html
<script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

<div id="app">
    <product-list :products="theProducts" the-title="Shop our award-winning product line"></product-list>
</div>

<script>
//------------------------------------
Vue.component('product-list',
{
    template: `
        <div class="product-list"> <h2>{{theTitle}}</h2>
            <ul>
                <li v-for="product in products">
                    <img :src="product.image">
                    <p><strong>{{product.name}}</strong></p>
                    <p>{{product.image_title}}</p>
                </li>
            </ul>
        </div>`,
    props: ['theTitle', 'products'] //---- props
});

var vm = new Vue({
    el: '#app',
    data: {
        theProducts: []
    },
    created: function() {
        $.ge('https://hplussport.com/api/products')
            .done(function(data) {
                vm.theProducts = data;
                console.log(data);
            });
    }
});
</script>

<style>
    .product-list h2 {
        margin-bottom: 40px;
    }

    .product-list ul img {
        float: left;
        width: 300px;
    }

    .product-list ul {
        list-style-type: none;
    }

    .product-list li {
        margin-bottom: 40px;
        clear: both;
    }
</style>
```

## 3-3 Composing and swapping components

```html
 <script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

                <div id="app">
                    <!--<product-list :products="theProducts" the-title="Shop our award-winning product line"></product-list>-->
                    <button v-if="listType == 'product-list'" @click="listType = 'product-list-simple'">Show less detail</button>
                    <button v-else @click="listType = 'product-list'">Show more detail</button>
                    <component :is="listType" :products="theProducts" the-title="Shop our award-winning product line"></component>
                </div>

                <script>
                    Vue.component('product-list', {
                        template: '<div class="product-list">\
                                    <h2>{{theTitle}}</h2>\
                                    <ul>\
                                        <product-list-item v-for="product in products" :product="product">\
                                        </product-list-item>\
                                    </ul>\
                                </div>',
                        props: ['theTitle', 'products']
                    });

                    Vue.component('product-list-simple', {
                        template: '<div class="product-list">\
                                    <h2>{{theTitle}}</h2>\
                                    <ul>\
                                       <li v-for="product in products">\
                                        <img :src="product.image" class="small">{{product.name}}\
                                        </li>\
                                    </ul>\
                                </div>',
                        props: ['theTitle', 'products']
                    });

                    Vue.component('product-list-item', {
                        template: '<li>\
                            <img :src="product.image">\
                            <p><strong>{{product.name}}</strong></p>\
                            <p>{{product.description}}</p>\
                        </li>',
                        props: ['product']
                    });

                    var vm = new Vue({
                        el: '#app',
                        data: {
                            theProducts: [],
                            listType: 'product-list'
                        },
                        created: function() {
                            $.getJSON('https://hplussport.com/api/products')
                                .done(function(data) {
                                    vm.theProducts = data;
                                });
                        }
                    });
                </script>

                <style>
                    .product-list h2 {
                        margin-bottom: 40px;
                    }

                    .product-list ul img {
                        float: left;
                        width: 300px;
                    }

                    .product-list ul {
                        list-style-type: none;
                    }

                    .product-list li {
                        margin-bottom: 40px;
                        clear: both;
                    }

                    .product-list img.small {
                        width: 100px;
                    }

                    .product-list img.small {
                        width: 100px;
                    }
                </style>
```

## 3-4 Managing-content-withs-slots

```html
           <script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

                <div id="app">
                    <product-list the-title="Shop our award-winning product line" :products="theProducts">
                        <p slot="top">All items on sale now!</p>
                        <em slot="bottom">Limited availability order soon.</em>
                    </product-list>
                    <product-list-flexible :products="theProducts" the-title="Custom layout">
                        <template scope="props">
                            <strong>{{props.product.name}} </strong> - {{props.product.description}}
                        </template>
                    </product-list-flexible>
                </div>

                <script>
                    Vue.component('product-list', {
                        template: '<div class="product-list">\
                        <h2>{{theTitle}}</h2>\
                        <slot name="top">Watch this space for message!</slot>\
                        <ul>\
                            <product-list-item v-for="product in products" :product="product">\
                            </product-list-item>\
                            <li><slot name="bottom"></slot></li>\
                        </ul>\
                    </div>',
                        props: ['theTitle', 'products']
                    });

                    Vue.component('product-list-flexible', {
                        template: '<div class="product-list">\
                        <h2>{{theTitle}}</h2>\
                        <ul>\
                           <li v-for="product in products">\
                            <slot :product="product"></slot>\
                           </li>\
                        </ul>\
                    </div>',
                        props: ['theTitle', 'products']
                    });

                    Vue.component('product-list-item', {
                        template: '<li>\
                    <img :src="product.image">\
                    <p><strong>{{product.name}}</strong></p>\
                    <p>{{product.description}}</p>\
                  </li>',
                        props: ['product']
                    });

                    var vm = new Vue({
                        el: '#app',
                        data: {
                            theProducts: []
                        },
                        created: function() {
                            $.getJSON('https://hplussport.com/api/products')
                                .done(function(data) {
                                    vm.theProducts = data;
                                });
                        }
                    });
                </script>
```

## 3-5 Handling events with components

```html
 <script type="text/javascript" src="https://unpkg.com/vue@2.1.10/dist/vue.js"></script>

                <div id="app">
                    <product-list :products="theProducts" title="Shop our award-winning product line"></product-list>
                </div>

                <script>
                    //     Vue.component('product-list', {
                    //         template: '<div class="product-list">\
                    //         <h2>{{title}}</h2>\
                    //         <ul>\
                    //             <product-list-item v-for="(product,i) in products" :remove-method="remove.bind(this,i)" :product="product">\
                    //             </product-list-item>\
                    //         </ul>\
                    //     </div>',
                    //         props: ['products', 'title'],
                    //         methods: {
                    //             remove: function(i) {
                    //                 this.products.splice(i, 1);
                    //             }
                    //         }
                    //     });

                    //     Vue.component('product-list-item', {
                    //         template: '<li>\
                    //     <img :src="product.image">\
                    //     <p><strong>{{product.name}}</strong></p>\
                    //     <p>{{product.description}}<a @click="removeMethod">Hide this item</a></p>\
                    // </li>',
                    //         props: ['product', 'removeMethod']
                    //     });
                    Vue.component('product-list', {
                        template: '<div class="product-list">\
                        <h2>{{title}}</h2>\
                        <ul>\
                            <product-list-item @remove="remove(i)" v-for="(product,i) in products" :product="product">\
                            </product-list-item>\
                        </ul>\
                    </div>',
                        props: ['products', 'title'],
                        methods: {
                            remove: function(i) {
                                this.products.splice(i, 1);
                            }
                        }
                    });

                    Vue.component('product-list-item', {
                        template: '<li>\
                    <img :src="product.image">\
                    <p><strong>{{product.name}}</strong></p>\
                    <p>{{product.description}}<a @click="requestRemoval">Hide this item</a></p>\
                </li>',
                        props: ['product'],
                        methods: {
                            requestRemoval: function() {
                                this.$emit('remove');
                            }
                        }
                    });

                    var vm = new Vue({
                        el: '#app',
                        data: {
                            theProducts: []
                        },
                        created: function() {
                            $.getJSON('https://hplussport.com/api/products.php?function=products')
                                .done(function(data) {
                                    vm.theProducts = data;
                                });
                        }
                    });
                </script>
```

## 4-1 Installing vue cli and webpack

* Advantages to Single-File Components
  1.  Syntax highlighting for HTML
  2.  Modern JavaScript(ES6 and beyond) support
  3.  Component-specific (scoped) CSS
  4.  Hot Module Replacement with webpack
* Webpack and Vue-loader
* vue-cli (command line interface)

```sh
$ npm install -g vue-cli
$ vue init webpack-simple single-file-components
$ cd single-file-components
$ npm install
```

````
run in c9

-- package.json
 "dev": "cross-env NODE_ENV=development webpack-dev-server --host $IP --open --hot"
$ npm run dev
```html
````

## 4-2 Understanding the Vue App skeleton

* webpack

```html
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
```

> some render

main.js

```js
import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: "#app",
  render: h => h(App),
  components: {
    app: App
  }
});
```

index.html

```html
<body>
    <div id="app">
        <app></app>
    </div>
    <script src="/dist/build.js"></script>
</body>
```

## 4-3 Converting to single file component

ProductLitItem.vue

```html
<template>
    <li>
        <img :src="product.image">
        <p><strong>{{product.name}}</strong></p>
        <p>{{product.description}} <a @click="requestRemoval">Hide this item</a></p>
    </li>
</template>

<script>
    export default{
        name: 'product-list-item',
        props: ['product'],
        methods: {
            requestRemoval(){
                this.$emit('remove');
            }
        }
    };
</script>

<style scoped>
    img {
        float: left;
        width: 300px;
    }
     li {
        margin-bottom: 40px;
        clear: both;
    }
</style>

```

## 4-4 Using single file components

> move images js css

index.html

```html
 <div id="app"></div>
<script src="/dist/build.js"></script>
```

App.vue

```html
<template>
  <product-list :products="theProducts" title="Shop our award-winning product line"></product-list>
</template>

<script>
import ProductList from './ProductList.vue';

export default {
  name: 'app',
  data() {
    return {
       theProducts: []
    };
  },
  components: {
    'product-list': ProductList
  },
  created: function() {
        $.getJSON('https://hplussport.com/api/products')
                .done(data => { this.theProducts = data;});
                  }
}
</script>
```

## 4-5 Installing and configuring the vue-router

install vue-router

```sh
$ npm install vue-router --save
```

main.js

```js
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import ProductList from "./ProductList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: ProductList
  }
  // {
  //     path: '/products/:id',
  //     component: Product
  // }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
```

App.vue

```html
<template>
  <router-view :products="theProducts" title="Shop our award-winning product line"></router-view>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      theProducts: []
    };
  },
  created: function() {
      $.getJSON('https://hplussport.com/api/products')
          .done(data => {this.theProducts = data;});
  }
}
</script>
```

## 4-6 Bulidding a simple SPA with the vue-router

Product.vue

```html
<template>
    <div>
        <h2><strong>{{product.name}}</strong></h2>
        <router-link to="/products">Back to all products </router-link>
        <img :src="product.image">
        <p>{{product.description}} </p>
        <strong>{{product.rpice}}</strong>
        <div>
            <button>Add Cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'product',
        data() {
            return {
                product: {}
            }
        },
        created() {
            let id = this.$route.params.id;
            $.getJSON(`https://hplussport.com/api/products/id/${id}`)
            .done(data => {this.product = data;})
        }
    };
</script>

<style scoped>
    img {
        width: 700px;
        height: 700px;
    }
</style>
```

ProductListItem.vue

```html
<template>
    <li>
        <img :src="product.image">
        <p><strong><router-link :to="`/products/${product.id}/`">{{product.name}}</router-link></strong></p>
        <p>{{product.description}} <a @click="requestRemoval">Hide this item</a></p>
    </li>
</template>

<script>
    export default {
        name: 'product-list-item',
        props: ['product'],
        methods: {
            requestRemoval() {
                this.$emit('remove');
            }
        }
    };
</script>

<style scoped>
    img {
        float: left;
        width: 300px;
    }
    li {
        margin-bottom: 40px;
        clear: both;
    }
</style>
```

App.vue

```html
<template>
  <router-view :products="theProducts" title="Shop our award-winning product line"></router-view>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      theProducts: []
    };
  },
  created: function() {
      $.getJSON('https://hplussport.com/api/products')
          .done(data => {this.theProducts = data;});
  }
}
</script>
```

main.js

```js
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import ProductList from "./ProductList.vue";
import Product from "./Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/products"
  },
  {
    path: "/",
    component: ProductList
  },
  {
    path: "/products/:id",
    component: Product
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
```
