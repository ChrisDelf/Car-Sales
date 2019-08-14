
export const removeFeature = id => {
  console.log("REMOVE_FEATURE")
  return{type: "REMOVE_FEATURE", payload:id };
}


export const addNewFeature = feature => {
  console.log("action fired", feature )
  return{type: 'ADD_FEATURE', payload: feature };
}
