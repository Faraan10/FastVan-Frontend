import axios from "axios";

const GetCartApi = async () => {
	const response = await axios({
		url: "http://localhost:5000/orders/",
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	return response.data;
};

export default GetCartApi;
