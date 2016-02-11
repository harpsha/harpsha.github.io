var React 		= require('react');
var ReactDOM 	= require('react-dom');
var Cart 		= require('./ProductListing-LogicLayout');
var Griddle 	= require('griddle-react');

const myProducts = {
  "product-1" : { "Name" : "Coffee Truffle",   "Price" : "435"  },
  "product-2" : { "Name" : "Fruit And Nut",  "Price" : "460" },
  "product-3" : { "Name" : "Vanilla Truffle",   "Price" : "420" },
  "product-4" : { "Name" : "Roasted Almond",      "Price" : "460" },
  "product-5" : { "Name" : "Strawberry Truffle", "Price" : "430" }
}

const MyComponent = React.createClass({
    submit() {
        const selection = this.refs.cart.getSelection()
        alert(JSON.stringify(selection))
    },
    addItem(key) {
        this.refs.cart.addItem(key, 1, this.props.products[key])
    },
    rowIterator(context, row) {
        if (!context) {
            /* Initialization call */
            return {
                total : 0
            }
        } else {
            /* Invoked once for each row */
            const price = Number(row.data['Price'])
            return {
                total : context.total + row.quantity * price
            }
        }
    },
    getInitialState() {
        return {
            canSubmit : false
        }
    },
    cartChanged() {
        this.setState({
            canSubmit : !this.refs.cart.isEmpty()
        })
    },
    render() {
        const products = this.props.products
        return (
            <div>
                <h4>Products</h4>
                <ul>
                    {Object.keys(products).map(key => {
                        return (
                            <li key={key}>
                                <a href='#' onClick={() => this.addItem(key)}>
                                    {products[key]['Name']}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <hr />
                <Cart
                	onChange = {this.cartChanged}
                	iterator={this.rowIterator}
                	ref='cart'
                	columns={['Name', 'Price']} 
                	selection = {[
              			{
                 			 id       : 'product-2',
                  			quantity : 5,
                  			data     : myProducts['product-2']
              			},
              			{
                  			id       : 'product-3',
                 			 quantity : 3,
                  			data     : myProducts['product-3']
             			 }
         			 ]}	/>
                <hr />
                {this.state.canSubmit && ( 
           		 <button onClick={this.submit}>
                	Submit
           		 </button>
        		)}
            </div>
        )
    }
})

ReactDOM.render(
    <MyComponent products={myProducts} />,
    document.getElementById('product-container')
)

module.exports = MyComponent;