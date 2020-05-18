import React from 'react';
import FormInput from './FormInput'

class Search extends React.Component {
    constructor(props) {
        super(props)
        //using state for controlled component
        this.state = {
            searchText :''
        };
        //this.handleChange = this.handleChange.bind(this);
        //this.input = React.createRef(); // using ref for uncontrolled component
    }

    handleChange = (e) => {
        this.setState({ searchText : e.target.value }); //using state for controlled component
        this.filteredProducts()
     }

    filteredProducts = () => {
        const {searchText} = this.state //using state for controlled component
        // value = this.input.current.value //using ref for uncontrolled component
        let filteredProductArray = []
         this.props.products.filter(function(product){
            if(product.productName.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())){ // using state for controlled component
            //if(product.productName.toLocaleLowerCase().includes(value.toLocaleLowerCase())){ // using ref for uncontrolled component
                filteredProductArray.push(product)
            }
        })
     this.props.filter(filteredProductArray)
    }

    render() {
        return (
            <label>
              Filter By:
              {/* input tag for controlled component */}
              {/* <input type="text" name="name" className="form-control" value ={this.state.searchText} onChange = {this.handleChange} /> */}
              
              {/* input tag for uncontrolled component */}
              {/* <input type="text" name="name" className="form-control" ref={this.input} onChange = {this.handleChange} /> */}

              {/* Using reusable component FormInput */}
              <FormInput
              name="search"                        
              type="text" 
              className="form-control" 
              value ={this.state.searchText} 
              onChange = {this.handleChange}
              placeholder="Search"
              />
              
</label>
        )
    }
}

export default Search