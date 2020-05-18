import React from 'react';

class DisplayProduct extends React.Component {
//class DisplayProduct extends React.PureComponent { // used for pure component
    render() {
        //console.log('renderItem called'); // used for pure component
        return (
            <tr key={this.props.item.productId}>
                {
                    this.props.showImage ?
                        <td>
                            <img src={this.props.item.imageUrl} width="50" alt={this.props.item.productName} />
                        </td>
                        : <></>}
                <td>
                    {this.props.item.productName.toUpperCase()}
                </td>
                <td>
                    {this.props.item.productCode}
                </td>
                <td>
                    {this.props.item.description}
                </td>
                <td>
                    {this.props.item.price}
                </td>
                <td>
                    {this.props.item.starRating}
                </td>
            </tr>

        )
    }
}

export default DisplayProduct