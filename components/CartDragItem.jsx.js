import React          from 'react'
import { DragSource } from 'react-dnd'
import { Thumbnail }  from 'react-bootstrap'
import Toast from './Toast'

const mySource = {

    beginDrag(props) {
        return { 
            id : props.id 
        }
    },

    endDrag(props, monitor, component) {}

}

function collect(connect, monitor) {
    return {
        connectDragSource : connect.dragSource(),
        isDragging        : monitor.isDragging()
    }
}

const CartDragItem = React.createClass({
    getDefaultProps() {
        return { 
            item : {} 
        }
    },
    render() {
        const { id, connectDragSource } = this.props
        return connectDragSource(
            <div className='card'>
                <Thumbnail src={'img/' + this.props.item.thumbnail } />
                <h5>
                    {this.props.item['Seller']}
                </h5>
                <p>
                    {this.props.item['Title']}
                </p>
                <Toast />
            </div>
        )
    }
})

const HigherChild = DragSource('sprite', mySource, collect)(CartDragItem)

module.exports = HigherChild;
