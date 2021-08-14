import React, { useEffect, useState } from "react";
import { GLOBALTYPES } from "../redux/actions/globalTypes";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addProduct } from "../redux/actions/productAction";
import axios from "axios";

const CreateProduct = () => {
	const [changeProduct, setChangeProduct] = useState({
		product_id: "",
		title: "",
		price: "",
		discount: "",
		category: "",
	});
	const { product_id, title, price, discount, category } = changeProduct;
	const [categories, setCategories] = useState([]);
	const [images, setImages] = useState([]);
	const [clothSize, setClothSize] = useState("");
	const [size, setSize] = useState([]);
	const { auth } = useSelector((state) => state);
	const { pathname } = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			const res = await axios.get("/api/category");
			setCategories([...categories, ...res.data.category]);
		};
		getProduct();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setChangeProduct({ ...changeProduct, [name]: value });
	};

	const handleChangeImages = (e) => {
		const files = [...e.target.files];
		let err = "";
		let newImages = [];

		files.forEach((file) => {
			if (!file) return (err = "Файл отсутствует!");

			if (file.type !== "image/png" && file.type !== "image/jpeg") {
				return (err = "Формат файла не (png, jpeg)!");
			}

			return newImages.push(file);
		});
		if (err)
			return dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err } });

		setImages([...images, ...newImages]);
	};

	const deleteImage = (index) => {
		const newImages = [...images];
		newImages.splice(index, 1);
		setImages(newImages);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (images.length === 0)
			return dispatch({
				type: GLOBALTYPES.ALERT,
				payload: { error: "Ошибка! Загрузите фото!" },
			});

		dispatch(addProduct({ changeProduct, size, images, auth }));
	};

	const handleChangeSize = () => {
		if (clothSize === "")
			return dispatch({
				type: GLOBALTYPES.ALERT,
				payload: { error: "Сначала введите размер!!!" },
			});
		setSize([...size, clothSize]);
		setClothSize("");
	};

	const deleteSize = (index) => {
		const newArr = [...size]
		newArr.splice(index, 1)
		setSize(newArr)
	};

	return (
		<div className="createProd">
			<div className="container">
				<div className="location_pos">
					<span>Главная </span>
					<span> > </span>
					<span>{pathname === "/create_product" && "Добавить товар"} </span>
				</div>
				<div className=" title createProd__title">Cоздать новый товар</div>
				<div className="createProd__body">
					<div className="file_upload">
						<label htmlFor="file">Выберите фото</label>
						<br />
						<i className="fas fa-image"></i>
						<input
							type="file"
							name="file"
							id="file"
							required
							multiple
							accept="image/*"
							onChange={handleChangeImages}
						/>
					</div>
					{images.length !== 0 && (
						<div className="createProd__body__show-images">
							{images &&
								images.map((image, index) => {
									return (
										<div key={index} className="file_img">
											<img src={URL.createObjectURL(image)} alt="" />
											<i
												onClick={() => deleteImage(index)}
												className="far fa-times"></i>
										</div>
									);
								})}
						</div>
					)}
					<form className="createProd__body__inputs" onSubmit={handleSubmit}>
						<label htmlFor="product_id">Id</label>
						<input
							type="text"
							name="product_id"
							value={product_id}
							onChange={handleChange}
						/>

						<label htmlFor="title">Название одежды</label>
						<input
							type="text"
							name="title"
							value={title}
							onChange={handleChange}
						/>

						<label htmlFor="">Создайте список размеров</label>
						<div className="size__shops">
							<input
								type="text"
								name="clothSize"
								value={clothSize}
								onChange={(e) => setClothSize(e.target.value)}
							/>
							<span className="size__shops__btn" onClick={handleChangeSize}>
								Добавить в список
							</span>
							{size.map((s, index) => (
								<>
									<span
										className="size__shops__clothes"
										key={index}>
										{s} 
										<i onClick={() => deleteSize(index)} className="fal fa-times"></i>
									</span>
								</>
							))}
						</div>

						<label htmlFor="price">Цена</label>
						<input
							type="text"
							name="price"
							value={price}
							onChange={handleChange}
						/>

						<label htmlFor="discount">Скидка</label>
						<input
							type="text"
							name="discount"
							value={discount}
							onChange={handleChange}
						/>

						<label htmlFor="categories">Выбрать категорию</label>
						<select name="category" onChange={handleChange}>
							<option value="">Выберите категорию</option>
							{categories.map((cat) => (
								<option value={cat.name} key={cat._id}>
									{cat.name}
								</option>
							))}
						</select>
						<button className="btn-create" type="submit">
							Добавить
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateProduct;
