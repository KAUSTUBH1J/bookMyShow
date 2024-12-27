import axios from "../Config/axiosConfig";

export async function GetUserDetails(user_id) {
    try {
        const response = await axios.get(`/api/v1/users/${user_id}`);
        console.log('GetUserDetails  response :');
        console.log(response.data);
        return response.data; // Return only the data instead of the full response
    } catch (error) {
        console.log('error: ');
        console.error('Error fetching user details:', error);
        throw error; // Propagate the error for the caller to handle
    }
}

export async function GetMovies(){
    try {
        const response = await axios.get(`/api/v1/masters/movie/`);
        console.log('GetMovies  response :');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
        throw error; 
    }
}
