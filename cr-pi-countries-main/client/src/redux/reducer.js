import { GET_ALLCONTRIES , 
  GET_CONTRY_DETAIL, 
  GET_CONTRY_BY_NAME, 
  FILTER_BY_CONTINENTS,
  FILTER_BY_ACTIVITIES,
  GET_ALL_ACTIVITIES,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION} from "./actions-types.js";

const initialState = {
AllCountries: [],
AllActivities: [],
CountryDetail: [],
filteredCountries: null
};

const reducer = (state = initialState, action) => {
switch (action.type) {
case GET_ALLCONTRIES:
return {
 ...state,
 AllCountries: action.payload
};

case GET_ALL_ACTIVITIES:
return {
   ...state,
   AllActivities: action.payload
 };

case GET_CONTRY_DETAIL:
return {
 ...state,
 CountryDetail: action.payload
};

case GET_CONTRY_BY_NAME:
 return {
   ...state,
   AllCountries: action.payload,
   filteredCountries : action.payload
 };

case FILTER_BY_CONTINENTS:
// const selecteContinent = action.payload;
  const allCountriesFiltered = action.payload === "All"
   ? null
   : state.AllCountries.filter(country => country.continents === action.payload);

 return {
   ...state,
   filteredCountries: allCountriesFiltered
 };

case FILTER_BY_ACTIVITIES:
  const selectedActivity = action.payload;
   if (selectedActivity === 'All') {
     return {
       ...state,
       filteredCountries: null
     };
   
   } else {
      console.log("Selected Activity:", selectedActivity);
     const allCountriesFilteredByActivity = state.AllCountries.filter(country => {
       console.log("Filtered Countries:", country);
       return country.Activities && country.Activities.some(activity => activity.name === selectedActivity);
     });
      console.log(allCountriesFilteredByActivity)
     return {
       ...state,
       filteredCountries: allCountriesFilteredByActivity
     };
   } 

case ORDER_BY_NAME:
const orderBy = action.payload;
if (orderBy === 'All') {
 return {
   ...state,
   filteredCountries: null
 };
} else if (state.filteredCountries && state.filteredCountries.length > 0) {
 console.log(orderBy);
 if (orderBy === 'OrderAZ') {
   const countriesByNameAsc = [...state.filteredCountries].sort(function(a, b){
   if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
   if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
   return 0;
     })
     return {
     ...state,
     filteredCountries: countriesByNameAsc
     };
   }

   if (orderBy === 'OrderZA'){
       const countriesByNameDes = [...state.filteredCountries].sort(function(a, b) {
         if (a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
         if (a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
         return 0;
       });
       return {
         ...state,
         filteredCountries: countriesByNameDes
       };
   } 
} else {
     if (orderBy === 'OrderAZ') {
const countriesByNameAsc = [...state.AllCountries].sort(function(a, b){
if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
return 0;
 })
 return {
 ...state,
 filteredCountries: countriesByNameAsc
 };
}

if (orderBy === 'OrderZA'){
   const countriesByNameDes = [...state.AllCountries].sort(function(a, b) {
     if (a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
     if (a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
     return 0;
   });
   return {
     ...state,
     filteredCountries: countriesByNameDes
   };
 } 
}
break

case ORDER_BY_POPULATION:
const orderByN = action.payload;
if (orderByN === 'All') {
 return {
   ...state,
   filteredCountries: null
 };
} else if (state.filteredCountries && state.filteredCountries.length > 0) {
if (orderByN === 'Minortomajor') {
const MinorToMajor = [...state.filteredCountries].sort(function(a, b){
 return a.population - b.population; })
 
 return {
 ...state,
 filteredCountries: MinorToMajor
 };
}

if (orderByN === 'MajortoMinor') {
 const MajorToMinor = [...state.filteredCountries].sort(function(a, b){
   return b.population - a.population ; })
   
   return {
   ...state,
   filteredCountries: MajorToMinor
   };
}
} else {
if (orderByN === 'Minortomajor') {
const MinorToMajor = [...state.AllCountries].sort(function(a, b){
 return a.population - b.population; })
 
 return {
 ...state,
 filteredCountries: MinorToMajor
 };
}

if (orderByN === 'MajortoMinor') {
 const MajorToMinor = [...state.AllCountries].sort(function(a, b){
   return b.population - a.population ; })
   
   return {
   ...state,
   filteredCountries: MajorToMinor
 };
}
}

break

default:
return {
 ...state
};
}
}

export default reducer;