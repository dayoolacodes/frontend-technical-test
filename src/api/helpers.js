/**
 * A utility function to make a network api call
 *
 * @param {string} apiUrl
 * @return {Promise<Object>}
 */

export async function request(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
}
