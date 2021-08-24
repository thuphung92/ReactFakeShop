import { create } from 'apisauce';

//define the api, the baseURL should be the starting point
const apiClient = create(
    {
        baseURL: "https://fakestoreapi.com",
        headers:{
            'Content-Type': 'application/json'
        }
    }
);

//login
const endpoint ="/auth/login";

export const getToken = async ({username, password}) => {
    let response = await apiClient.post(
            endpoint,
            JSON.stringify({username,password})
        );
    if (!response.ok) {return 500};
    if (response.ok) {
        return (response.data.token)? response.data.token : null
    }
    return
};

//get all products
const endpointProducts = "/products"

export const getProducts = async () =>{
    const response = await apiClient.get(endpointProducts);
    if (500 <= response.status && response.status <600){return 500}
    if (response.ok){ return response.data}
    return
}

//get a single product
export const getProduct =  async (id) =>{
    const response =  await apiClient.get(`/products/${id}`);
    if (500 <= response.status && response.status <600){return 500}
    if (response.ok){ return response.data}
    return

}