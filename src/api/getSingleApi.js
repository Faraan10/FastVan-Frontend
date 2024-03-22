import axios from "axios";
import { url } from "../constants";

const getSingleApi = async (id) => {
	console.log(id);
	const response = await axios({
		url: `${url}/orders/${id}`,
		method: "GET",
		headers: { "Content-Type": "application/json" },
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default getSingleApi;
