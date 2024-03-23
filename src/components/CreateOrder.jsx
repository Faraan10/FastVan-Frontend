import React, { useEffect, useState } from "react";
import getApi from "../api/getApi";
import postApi from "../api/postApi";
import deleteApi from "../api/deleteApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const CreateOrder = () => {
	const [info, setInfo] = useState({
		senderName: "",
		number: "",
		address: "",
		receiverName: "",
		email: "",
		phone: "",
		location: "",
		parcelName: "",
		parcelType: "",
		parcelWeight: "",
		parcelHeight: "",
		parcelWidth: "",
	});

	const [data, setData] = useState([]);
	const [search, setSearch] = useState("");

	const [loading, setLoading] = useState(false);

	const {
		senderName,
		number,
		address,
		receiverName,
		email,
		phone,
		location,
		parcelName,
		parcelType,
		parcelWeight,
		parcelHeight,
		parcelWidth,
	} = info;

	const getData = async () => {
		const response = await getApi();
		setLoading(false);
		setData(response);
	};

	const deleteData = async (id) => {
		await deleteApi(id);
	};

	useEffect(() => {
		getData();
	}, [deleteData]);

	const handleChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await postApi(info);
		if (response.status) {
			toast.error(response.data.message);
			return;
		}
		setInfo({
			senderName: "",
			number: "",
			address: "",
			receiverName: "",
			email: "",
			phone: "",
			location: "",
			parcelName: "",
			parcelType: "",
			parcelWeight: "",
			parcelHeight: "",
			parcelWidth: "",
		});
		toast.success("Order Created");
		getData();
	};

	useEffect(() => {
		setLoading(true);
		getData();
	}, []);

	const { orders } = data;

	return (
		<>
			<div className="container">
				<h2 style={{ marginTop: "30px", fontWeight: "bold" }}>Send Parcel</h2>
				<br />
				<br />
				<h4 style={{ marginBottom: "30px", marginTop: "20px" }}>Where are you sending from ?</h4>
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col lg-3 col-md-3">
							<label>Contact Name</label>
							<p>
								<input
									className="form-control"
									name="senderName"
									value={senderName}
									required
									onChange={handleChange}
									placeholder="Contact Name"
								/>
							</p>
						</div>
						<div className="col lg-3 col-md-3">
							<label>Phone</label>
							<p>
								<input
									className="form-control"
									name="number"
									required
									value={number}
									onChange={handleChange}
									placeholder="9649433282"
								/>
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col lg-4 col-md-4">
							<label>Address</label>
							<p>
								<input
									className="form-control"
									name="address"
									required
									value={address}
									onChange={handleChange}
									placeholder="Address"
								/>
							</p>
						</div>
					</div>
					<br />
					<h4 style={{ marginBottom: "30px", marginTop: "20px" }}>Where are you sending to ?</h4>
					<div className="row">
						<div className="col lg-3 col-md-3">
							<label>Contact Name</label>
							<p>
								<input
									className="form-control"
									name="receiverName"
									required
									value={receiverName}
									onChange={handleChange}
									placeholder="Contact Name"
								/>
							</p>
						</div>
						<div className="col lg-3 col-md-3">
							<label>Email</label>
							<p>
								<input
									className="form-control"
									name="email"
									required
									value={email}
									onChange={handleChange}
									placeholder="Enter Email"
								/>
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col lg-4 col-md-4">
							<label>Address</label>
							<p>
								<input
									className="form-control"
									name="location"
									required
									value={location}
									onChange={handleChange}
									placeholder="Address"
								/>
							</p>
						</div>
						<div className="col lg-3 col-md-3">
							<label>Phone</label>
							<p>
								<input
									className="form-control"
									name="phone"
									required
									value={phone}
									onChange={handleChange}
									placeholder="9649433282"
								/>
							</p>
						</div>
					</div>
					<h4 style={{ marginBottom: "30px", marginTop: "20px" }}>Parcel Information</h4>
					<div className="row">
						<div className="col lg-4 col-md-4">
							<label>Parcel Name</label>
							<p>
								<input
									className="form-control"
									name="parcelName"
									required
									value={parcelName}
									onChange={handleChange}
									placeholder="Parcel Name"
								/>
							</p>
						</div>
						<div className="col lg-3 col-md-3">
							<label>Parcel Type (Ex:Box, Parcel, Satchel)</label>
							<p>
								<input
									className="form-control"
									name="parcelType"
									required
									value={parcelType}
									onChange={handleChange}
									placeholder="Parcel Type"
								/>
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col lg-2 col-md-2">
							<label>Parcel Weight</label>
							<p>
								<input
									className="form-control"
									name="parcelWeight"
									required
									value={parcelWeight}
									onChange={handleChange}
									placeholder="0 kg"
								/>
							</p>
						</div>
						<div className="col lg-2 col-md-2">
							<label>Parcel Height</label>
							<p>
								<input
									className="form-control"
									name="parcelHeight"
									required
									value={parcelHeight}
									onChange={handleChange}
									placeholder="Height cm"
								/>
							</p>
						</div>
						<div className="col lg-2 col-md-2">
							<label>Parcel Width</label>
							<p>
								<input
									className="form-control"
									name="parcelWidth"
									required
									value={parcelWidth}
									onChange={handleChange}
									placeholder="Width cm"
								/>
							</p>
						</div>
					</div>
					<input type="submit" value="Create Order" className="btn btn-primary" />
				</form>

				<h3 style={{ marginTop: "10%", textAlign: "center" }}>Track Order</h3>
				{loading ? (
					<Spinner />
				) : (
					<div className="container" style={{ textAlign: "center" }}>
						<form className="d-flex" role="search" style={{ marginTop: "20px", marginBottom: "50px" }}>
							<input
								className="form-control me-2"
								type="search"
								onChange={(e) => setSearch(e.target.value)}
								placeholder="Enter Order Id"
								aria-label="Search"
							/>
						</form>
						<table className="table table-dark table-striped">
							<thead>
								<tr>
									<th scope="col">Order Id</th>
									<th scope="col">Sender Name</th>
									<th scope="col">Email</th>
									<th scope="col">Receiver Name</th>
									<th scope="col">Number</th>
									<th scope="col">Order Status</th>
									<th scope="col">Actions</th>
								</tr>
							</thead>
							<tbody>
								{orders
									?.filter((emp) => {
										return search.toLowerCase() === "" ? emp : emp._id.includes(search);
									})
									?.map((emp) => (
										<tr key={emp._id}>
											<td>{emp._id}</td>
											<td>{emp.senderName}</td>
											<td>{emp.email}</td>
											<td>{emp.receiverName}</td>
											<td>{emp.phone}</td>
											<td>In Transit</td>
											<td>
												<div style={{ display: "flex" }}>
													<Link to={`/update/${emp._id}`}>
														<button type="button" className="btn btn-warning" style={{ marginRight: "10px" }}>
															Update
														</button>
													</Link>
													<button type="button" className="btn btn-danger" onClick={() => deleteData(emp._id)}>
														Delete
													</button>
												</div>
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</>
	);
};

export default CreateOrder;
