import axios from "axios";

const postApi = async (data) => {
	const response = await axios({
		url: "http://localhost:5000/orders/",
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: JSON.stringify(data),
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default postApi;
