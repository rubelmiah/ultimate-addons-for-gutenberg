

const attributes = {
  block_id: {
    type: "string"
  },
  dateRequired : {
    type: "boolean",
    default: false
  },
  name: {
    type: "string",
    default: "Date"
  },
  additonalVal : {
    type: "boolean",
    default: false
  },
  minYear: {
    type: "string",    
    default: "",   
  },
  minMonth: {
    type: "string",  
    default: "",   
  },
  minDay: {
    type: "string",   
    default: "",   
  },
  maxYear: {
    type: "string",
    default: "",   
  },
  maxMonth: {
    type: "string",
    default: "",   
  },
  maxDay: {
    type: "string",
    default: "",  
  },
  
  
}
export default attributes
