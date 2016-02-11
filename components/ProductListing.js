import React   from 'react'
import Cart    from './ProductListing-LogicLayout'
import Griddle from 'griddle-react'
import items   from './sampledata'
var ReactDOM 	= require('react-dom');

const MainComponent = React.createClass({
    getInitialState() {
        let data = []
        for (var key in items) {
            let item = items[key]
            item.id = key
            data.push(item)
        }
        return {
            data : data
        }
    },
    handleRowClick(row) {
        this.refs.cart.addItem(row.props.data.id, 1, row.props.data)
    },
    notifyItemAdded(item) {
        console.log('--------------------------------------------------')
        console.log('item added')
        console.log(item)
    },
    notifyItemRemoved(item) {
        console.log('--------------------------------------------------')
        console.log('item removed')
        console.log(item)
    },
    notifyQtyChanged(item, quantity, oldQty) {
        console.log('--------------------------------------------------')
        console.log('item quantity changed')
        console.log(item)
        console.log('New quantity : ' + quantity)
        console.log('Old quantity : ' + oldQty)
    },
    handleSubmit() {
        console.log(this.refs.cart.getSelection())
    },
    handleEmptyCart() {
        this.refs.cart.emptyCart()
    },
    handleReset() {
        this.refs.cart.reset()
    },
    refresh() {
        this.setState({
            buttonsVisible : !this.refs.cart.isEmpty()
        })
    },
    componentDidMount() {
        this.refresh()
    },
    rowIterator(context, row) {
        if (!context) {
            return {
                total : 0
            }
        } else {
            const price = Number(row.data['Price'])
            return {
                total : context.total + row.quantity * price
            }
        }
    },
    render() {
        return (
            <div>
                <Griddle 
                  showFilter        = {true}
                  columns           = {['Seller', 'Title', 'Label', 'City', 'Weight', 'State', 'Price']}
                  useGriddleStyles  = {false}
                  onRowClick        = {this.handleRowClick}
                  results           = {this.state.data} />
                <hr />
                <Cart 
                  ref               = 'cart'
                  selection         = {[
                      {
                          id       : 'item-1',
                          quantity : 2,
                          data     : items['item-1']
                      },
                      {
                          id       : 'item-3',
                          quantity : 4,
                          data     : items['item-3']
                      }
                  ]}
                  onItemAdded       = {this.notifyItemAdded}
                  onItemRemoved     = {this.notifyItemRemoved}
                  onItemQtyChanged  = {this.notifyQtyChanged}
                  onChange          = {this.refresh}
                  columns           = {['Seller', 'Title', 'Price']}
                  iterator          = {this.rowIterator}
                  cartEmptyMessage  = {'No items.'} />
                <hr />
                {this.state.buttonsVisible ? ( 
                    <div>
                        <button onClick={this.handleSubmit}>
                            Submit
                        </button>
                        <button onClick={this.handleEmptyCart}>
                            Clear cart
                        </button>
                    </div>
                ) : <span />}
                <button onClick={this.handleReset}>
                    Reset
                </button>
            </div>
        )
    }
})

ReactDOM.render(
    <MainComponent />,
    document.getElementById('product-container')
)

module.exports = MainComponent;