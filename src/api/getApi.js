import axios from "axios";
import { url } from "../constants";

const GetCartApi = async () => {
	const response = await axios({
		url: `${url}/orders/`,
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	return response.data;
};

export default GetCartApi;
