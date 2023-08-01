export const validate = (data) => {
    const regexName = /^[a-zA-Z\s]+$/;
    let errors = {};
  
    if (!data.name) errors.name = "Activity name required";
    else if (data.name.length > 20) errors.name = "Name is too long";
    else if (!regexName.test(data.name)) errors.name = "You can only use letters";
  
    if (data.difficulty === 0) errors.difficulty = "Choose a difficulty level";
    if (!data.duration) errors.hours = "Choose estimate duration";
    if (data.season === "") errors.season = "Choose a season";

    if (!data.countries.length) errors.countries = "You must select at least one country"
  
    return errors;
  };