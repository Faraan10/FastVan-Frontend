import axios from "axios";

const getSingleApi = async (id) => {
	console.log(id);
	const response = await axios({
		url: `http://localhost:5000/orders/${id}`,
		method: "GET",
		headers: { "Content-Type": "application/json" },
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default getSingleApi;
