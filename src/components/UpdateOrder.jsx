import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import updateApi from "../api/updateApi";
import getSingleApi from "../api/getSingleApi";
import { toast } from "react-toastify";

const UpdateOrder = () => {
	const { id } = useParams();
	console.log(id);

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
		const response = await getSingleApi(id);
		setInfo(response.order);
	};

	const handleChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value });
	};

	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await updateApi(info, id);
		// console.log(response);
		if (response.status) {
			toast.error(response.data.message);
			return;
		}
		toast.success("Order Updated");
		navigate("/");
	};

	useEffect(() => {
		getData();
	}, []);
	console.log(data);

	const order = data.order;

	return (
		<div>
			<h2 style={{ marginTop: "50px", fontWeight: "bold" }}>Update Order Details</h2>
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
								placeholder="Height"
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
								placeholder="Width"
							/>
						</p>
					</div>
				</div>
				<input type="submit" value="Update Order" className="btn btn-primary" />
			</form>
		</div>
	);
};

export default UpdateOrder;
