const CAKE_ORDERED="CAKE_ORDERED";
const CAKE_RESTORED="CAKE_RESTORED";
const HOTEL_ORDERED="HOTEL_ORDERED";
const HOTEL_RESTORED="HOTEL_RESTORED";
const TV_ORDERED="TV_ORDERED";
const TV_RESTORED="TV_RESTORED";
const AC_ORDERED="AC_ORDERED";
const AC_RESTORED="AC_RESTORED";
const BIKE_ORDERED="BIKE_ORDERED";
const BIKE_RESTORED="BIKE_RESTORED";

const redux=require("redux");
const combineReducers=redux.combineReducers;
let createStore=redux.createStore;
let bindActionCreators=redux.bindActionCreators;


function orderCake(qty){
    return{
        type: CAKE_ORDERED,
        payload: qty
    }
}
function restoreCake(qty){
    return{
        type: CAKE_RESTORED,
        payload: qty
    }
}
function orderHotel(qty){
    return{
        type: HOTEL_ORDERED,
        payload: qty
    }
}
function restoreHotel(qty){
    return{
        type: HOTEL_RESTORED,
        payload: qty
    }
}
function orderTV(qty){
    return{
        type: TV_ORDERED,
        payload: qty
    }
}
function restoredTV(qty){
    return{
        type: TV_RESTORED,
        payload: qty
    }
}
function orderAC(qty){
    return{
        type: AC_ORDERED,
        payload: qty
    }
}
function restoredAC(qty){
    return{
        type: AC_RESTORED,
        payload: qty
    }
}
function orderBike(qty){
    return{
        type: BIKE_ORDERED,
        payload: qty
    }
}
function restoredBike(qty){
    return{
        type: BIKE_RESTORED,
        payload: qty
    }
}

let initialState={
    numberOfCake: 15,
    numberOfHotel: 30,
    numberOfTV: 25,
    numberOfAC: 55,
    numberOfBike: 80
}

let cakeReducer=(state=initialState, action)=>{
    switch(action.type){
        case CAKE_ORDERED: return{
            ...state,
            numberOfCake: state.numberOfCake - action.payload
        }
        case CAKE_RESTORED: return{
            ...state,
            numberOfCake: state.numberOfCake + action.payload
        }
        default: return state
    }
}
let hotelReducer=(state=initialState, action)=>{
    switch(action.type){
        case HOTEL_ORDERED: return{
            ...state,
            numberOfHotel: state.numberOfHotel - action.payload
        }
        case HOTEL_RESTORED: return{
            ...state,
            numberOfHotel: state.numberOfHotel + action.payload
        }
        default: return state
    }
}
let tvReducer=(state=initialState, action)=>{
    switch(action.type){
        case TV_ORDERED: return{
            ...state,
            numberOfTV: state.numberOfTV - action.payload
        }
        case TV_RESTORED: return{
            ...state,
            numberOfTV: state.numberOfTV + action.payload
        }
        default: return state
    }
}
let acReducer=(state=initialState, action)=>{
    switch(action.type){
        case AC_ORDERED: return{
            ...state,
            numberOfAC: state.numberOfAC - action.payload
        }
        case AC_RESTORED: return{
            ...state,
            numberOfAC: state.numberOfAC + action.payload
        }
        default: return state
    }
}
let bikeReducer=(state=initialState, action)=>{
    switch(action.type){
        case BIKE_ORDERED: return {
            ...state,
            numberOfBike: state.numberOfBike - action.payload
        }
        case BIKE_RESTORED: return{
            ...state,
            numberOfBike: state.numberOfBike + action.payload
        }
        default: return state
    }
}
let rootReducer=combineReducers({
    cake: cakeReducer,
    hotel: hotelReducer,
    tv: tvReducer,
    ac: acReducer,
    bike: bikeReducer
});
let store=createStore(rootReducer);
console.log("Initial State", store.getState());

let action=bindActionCreators({orderAC, orderBike, orderCake, orderHotel, orderTV, restoreCake, restoreHotel, restoredAC, restoredBike, restoredTV}, store.dispatch);

let unsubscribe=store.subscribe(()=> console.log("Updating store", store.getState()));
console.log("\n")
console.log("//////////-----////////////------/////////////////------////////////")
console.log("\n")

console.log("Loading Ordering ...................")
console.log("\n")

console.log("Ordering Cake:", action.orderCake(8));
console.log("Ordering Hotel", action.orderHotel(10));
console.log("Ordering TV", action.orderTV(9));
console.log("Ordering AC", action.orderAC(5));
console.log("Ordering Bike", action.orderBike(12));

console.log("Loading Restore .........................")
console.log("\n");

console.log("Restoring Cake:", action.restoreCake(25));
console.log("Restoring Hotel:", action.restoreHotel(50));
console.log("Restoring TV", action.restoredTV(13));
console.log("Restoring AC", action.restoredAC(20));
console.log("Restoring Bike", action.restoredBike(50));