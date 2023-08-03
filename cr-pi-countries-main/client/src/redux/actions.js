import axios from "axios";
import { GET_ALL_COUNTRIES, 
         GET_COUNTRY_DETAIL, 
         GET_COUNTRY_BY_NAME, 
         FILTER_BY_CONTINENTS,
         FILTER_BY_ACTIVITIES,
         GET_ALL_ACTIVITIES,
         ORDER_BY_NAME,
         ORDER_BY_POPULATION,
         } from "./actions-types.js";

export function getCountries() {
  return async function (dispatch) {
      try {
          var response = await axios.get('/countries')
          return dispatch({
              type: GET_ALL_COUNTRIES,
              payload: response.data
          });
      } catch (error) {
          console.log(error)
      }
  }
}

export function getActivities() {
    return async function (dispatch) {
        try {
            var response = await axios.get('/activities')
            const activities = response.data;
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: activities,
            });
        } catch (error) {
            console.log(error)
        }
    }
  }


export function getCountryDetail(id) {
    return async function (dispatch) {
        try {
            var response = await axios.get(`/countries/${id}`)
            return dispatch({
                type: GET_COUNTRY_DETAIL,
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
  }

  export function getCountryByName(name) {
    return async function (dispatch) {
        try {
            var response = await axios.get(`/countries?name=${name}`)
            return dispatch({
                type: GET_COUNTRY_BY_NAME,
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
  }

  export const filterByContinents = (continents) => {
    return {
        type : FILTER_BY_CONTINENTS,
        payload :continents
    }
  }
   export const filterByActivities = (selectedActivity) => {
        return {
            type : FILTER_BY_ACTIVITIES,
            payload :selectedActivity
        }
    }

    export const orderByName = (orderBy) => {
        return {
          type: ORDER_BY_NAME,
          payload :orderBy,
        };
      };

    export const orderByPopulation = (orderByN) => {
        return {
          type: ORDER_BY_POPULATION,
          payload :orderByN,
        };
      };