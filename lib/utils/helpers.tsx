// Function to format milliseconds to proper time duration
const getDurationFormat = (duration: number): string => {
    let time = duration / 1000;
    let minutes = Math.floor(time / 60);
    let timeForSeconds = time - minutes * 60;
    let seconds = Math.floor(timeForSeconds);
    let secondsReadable = seconds > 9 ? seconds : `0${seconds}`;
    return `${minutes}:${secondsReadable}`;
  };
  
  // If you want to export the function directly:
  export { getDurationFormat };
  
  // If you want to export it as part of an object like in your original JavaScript:
  const helper = {
    getDurationFormat,
  };
  
  export default helper;
  