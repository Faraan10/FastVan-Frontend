import axios from "axios";

const putApi = async (data, id) => {
	const response = await axios({
		url: `http://localhost:5000/orders/${id}`,
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		data: JSON.stringify(data),
	})
		.then((response) => response.data)
		.catch((err) => err.response);
	return response;
};

export default putApi;
