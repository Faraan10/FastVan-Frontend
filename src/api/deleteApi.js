import axios from "axios";
import { url } from "../constants";

const GetCartApi = async (id) => {
	const response = await axios({
		url: `${url}/orders/${id}`,
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
	});
	return response.data;
};

export default GetCartApi;
