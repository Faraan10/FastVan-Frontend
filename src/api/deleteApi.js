import axios from "axios";

const GetCartApi = async (id) => {
	const response = await axios({
		url: `http://localhost:5000/orders/${id}`,
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
	});
	return response.data;
};

export default GetCartApi;
