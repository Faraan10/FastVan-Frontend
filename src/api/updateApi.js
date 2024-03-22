import axios from "axios";
import { url } from "../constants";

const putApi = async (data, id) => {
	const response = await axios({
		url: `${url}/orders/${id}`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data: JSON.stringify(data),
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default putApi;
