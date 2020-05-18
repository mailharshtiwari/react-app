import React from 'react'
import FormInput from './FormInput'

class AddProduct extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            productName: '',
            productCode: '',
            imageUrl: '',
            starRating: 0,
            price: '',
            description: '',
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });

        console.log('name', name)
        console.log('value', value)
    }

    render() {
        const {errors} = this.state
        return (
            <React.Fragment>
                <h3>Add Product</h3>
                <form>
                    <div className="form-group">
                        <FormInput
                            label="Product Name"
                            name="productName"
                            type="text"
                            className="form-control"
                            value={this.state.productName}
                            onChange={this.handleChange}
                            placeholder="Product Name"
                            error={errors.productName}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <FormInput 
                            label="Product Code"
                            name="productCode"
                            type="text"
                            className="form-control"
                            value={this.state.productCode}
                            onChange={this.handleChange}
                            placeholder="Product Code"
                            error={errors.productCode}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <FormInput
                            label="Image Url"
                            name="imageUrl"
                            type="text"
                            className="form-control"
                            value={this.state.imageUrl}
                            onChange={this.handleChange}
                            placeholder="Image Url"
                            error={errors.imageUrl}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <FormInput 
                            label="Star Rating"
                            name="starRating"
                            type="text"
                            className="form-control"
                            value={this.state.starRating}
                            onChange={this.handleChange}
                            placeholder="Star Rating"
                            error={errors.starRating}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <FormInput 
                            label="Price"
                            name="price"
                            type="text"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.handleChange}
                            placeholder="Price"
                            error={errors.price}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary" />
                    </div>
                </form>
            </React.Fragment>
        )
    }

}

export default AddProduct