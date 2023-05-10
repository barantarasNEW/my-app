export const getDateFormat = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true 
  };

  const dateString = date.toLocaleDateString('en-US', options);

  return dateString; 
};