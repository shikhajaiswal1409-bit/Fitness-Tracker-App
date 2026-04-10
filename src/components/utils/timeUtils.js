//  ONLY validation 
export const isValidTime = (time) => {
  if (!time) return false;

  const formatted = time.toUpperCase().trim().replace(/\s+/g, "");

  return /^(1[0-2]|[1-9])(:[0-5][0-9])?(AM|PM)$/.test(formatted);
};


//  Convert to 24-hour format (for internal use)
export const convertTo24Hour = (time) => {
  if (!time) return "";

  const formatted = time.toUpperCase().replace(/\s+/g, "");

  const match = formatted.match(
    /(\d{1,2})(?::(\d{2}))?(AM|PM)/
  );

  if (!match) return "";

  let [, hours, minutes, modifier] = match;

  hours = parseInt(hours);
  minutes = minutes || "00";

  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  }

  if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  return `${String(hours).padStart(2, "0")}:${minutes}`;
};