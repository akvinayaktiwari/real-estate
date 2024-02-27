const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        let priceArr=action.payload.map((curElem)=>curElem.price);
        console.log(priceArr);

        let mxPrice=priceArr.reduce((initialVal,curVal)=>
        Math.max(initialVal,curVal),0)
        console.log(mxPrice);
        let mnPrice=priceArr.reduce((initialVal,curVal)=>
        Math.min(initialVal,curVal),1000000000)
        console.log(mnPrice);

        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
          filters: {...state.filters,mxPrice,price:mxPrice,mnPrice}
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };
  
      case "SET_LIST_VIEW":
        return {
          ...state,
          grid_view: false,
        };
  
      case "GET_SORT_VALUE":
        //  let userSortValue = document.getElementById("sort");
        //  let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        //  console.log("sort value",sort_value)
        return {
          ...state,
          sorting_value: action.payload,
        };
  
      case "SORTING_PRODUCTS":
        let newSortData;
       // let tempSortProduct = [...action.payload];
       const {filter_products,sorting_value}=state;
       let tempSortProduct=[...filter_products];

        function sortingProducts(a,b){
          if(sorting_value==='Popularity'){
            return a.price-b.price;
          }
          if(sorting_value==='Newest'){
            return a.price-b.price;
          }
          if(sorting_value==='Low - High Price'){
            return a.price-b.price;
          }
          if(sorting_value==='High - Low Price'){
            return b.price-a.price
          }

        }
        
        newSortData=tempSortProduct.sort(sortingProducts)
       // console.log("newsort data" + newSortData[0]);
        return {
          ...state,
          filter_products: newSortData,
        };

        case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

      case "FILTER_PRODUCTS":
        let { all_products } = state;
        let tempFilterProduct = [...all_products];

        const {text,propertyType,city,area,price}=state.filters

        if (text) {
          tempFilterProduct = tempFilterProduct.filter((curElem) => {
            return curElem.name.toLowerCase().includes(text);
          });
        }
        if (propertyType!=='All') {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.propertyType === propertyType
          );
          console.log(tempFilterProduct)
        }
        if (city !== "All") {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.city === city
          );
        }
        if (area !=="All") {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.area === area
          );
        }

        if (price === 0) {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.price == price
          );
        } else {
          tempFilterProduct = tempFilterProduct.filter(
            (curElem) => curElem.price <= price
          );
        }
        return{
          ...state,
          filter_products:tempFilterProduct
        }
  
      default:
        return state;
    }
  };
  
  export default filterReducer; 