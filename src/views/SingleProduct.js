import React, { Component } from 'react'
import { getProduct } from '../api/apiCall'
import ProductCard from '../components/ProductCard'

export default class SingleProduct extends Component {
    constructor(){
        super();
        this.state={
            product:false
        }
    }

    componentDidMount() {
        this.getSingleProduct()
    }

    getSingleProduct = async () =>{
        const product=await getProduct(this.props.match.params.id)
        if(product === 400){this.setState({tokenError:true})}
        if(product === 500){this.setState({serverError:true})}
        if (product !== 500 && product !== 400){
            this.setState({product})
        }
    }

    render() {
        return (
            <div>
            {this.state.product ?
                <ProductCard product={this.state.product}/>
                :
                ''
            }
        </div>
        )
    }
}
