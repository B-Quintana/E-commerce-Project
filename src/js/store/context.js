import React from "react";

const ProductContext = React.createContext();
//Provider
//Consumer

export const ProductProvider = props => {
	return <ProductContext.Provider value="Hello from context*****" />;
};
export const ProductConsumer = ProductContext.Consumer;
//export {ProductProvider,ProductConsumer};
