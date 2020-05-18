import React from 'react';
import data from './data.json'
import DisplayProduct from './DisplayProduct.js'
import Button from './Button'
import Search from './Search'
import ErrorBoundary from './ErrorBoundary'
import { Link } from 'react-router-dom'

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: data,
            showImage: true,
            filterProducts: []
        };
        //this.toggleImage = this.toggleImage.bind(this)
    }

    componentDidMount() {
        // fetch('http://localhost:3000/data.json').then(res => res.json()).then((data) => {
        //     console.log('data', data);
        //     this.setState({ products: data });
        // }).catch(err => console.log(err))

        // used for pure component 
        // setInterval(() => {
        //     this.setState((oldState) => {
        //         return { products: [...oldState.products] }
        //     });
        // }, 1000);
    }

    toggleImage = () => {
        this.setState({ showImage: !this.state.showImage });
    };

    renderProduct() {
        const { showImage, products } = this.state
            return products.map(function (item) {
                return <ErrorBoundary key={item.productId}><DisplayProduct item={item} key={item.productId} showImage={showImage} /></ErrorBoundary>
            });
        
    }

    filter = (filteredProducts) => {
        this.setState({ products: filteredProducts })
    }

    render() {
        //console.log('render called') // used for pure component
        const { showImage, products } = this.state
        return (
            <div>
                <h3 align="center">Products</h3>

                <div>
                    <span className="float-left">
                        <Button onClick={this.toggleImage} name={'Toggle Image'} />
                    </span>
                    <span className="float-left" style={{marginLeft:15}}>
                        <Link to={'/addproduct'} className="btn btn-primary">Add Product</Link>
                    </span>
                    <span className="float-right">
                        <Search products={products} filter={this.filter} />
                    </span>
                </div>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            {showImage ? <th>Image</th> : <></>}
                            <th>Product Name</th>
                            <th>Product Code</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Star Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Products