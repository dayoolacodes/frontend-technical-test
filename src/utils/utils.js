export function formatEmissions(emissions) {
  if (
    emissions
        && emissions.template
        && typeof emissions.value === 'number'
  ) {
    return `Emission: ${emissions.template} ${emissions.value} g/km`;
  }
  return '';
}

/**
 * Truncates a string and adds an ellipsis if it exceeds a specified maximum length.
 *
 * @param {string} text - The input text to truncate.
 * @param {number} [maxLength=20] - The maximum length at which the text should be truncated.
 * @returns {string} The truncated text with an ellipsis (if applicable).
 */
export function ellipsis(text = '', maxLength = 20) {
  /**
     * If the length of the input text exceeds the maxLength, it shortens the text
     * and adds "..." at the end.
     */
  let ret = text;
  if (ret.length > maxLength) {
    ret = `${ret.substring(0, maxLength - 3)}...`;
  }
  return ret;
}
