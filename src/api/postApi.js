import axios from "axios";
import { url } from "../constants";

const postApi = async (data) => {
	const response = await axios({
		url: `${url}/orders/`,
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: JSON.stringify(data),
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default postApi;
