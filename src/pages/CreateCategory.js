import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addCategory,
	deleteCategory,
	getCategory,
	updateCategory,
} from "../redux/actions/categoryAction";

const CreateCategory = () => {
	const [name, setName] = useState("");
	const { category, auth, alert } = useSelector((state) => state);
	const [onEdit, setOnEdit] = useState(false);
	const [onId, setOnId] = useState('');
    

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategory());
	}, [dispatch, alert.loading]);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addCategory({ name, auth }));
		setName("");
	};

	const hanldeDelete = (id) => {
		dispatch(deleteCategory(id, auth.token));
	};
	const hanldeArgument = (id, name) => {
		setOnEdit(true);
        setName(name)
        setOnId(id)
		
	};

    const hanldeUpdate = () => {
        dispatch(updateCategory(onId, name, auth.token));
        // setName('')
        // setOnId('')
        setOnEdit(false);
    }


	return (
		<div className="createCategory">
			<div className="container">
				<div className="title">Создать категорию</div>
				<div className="createCategory__body">
					<form onSubmit={(e) => e.preventDefault()}>
						<label className="category_label" htmlFor="">
							Введите категорию
						</label>
						<input
							type="text"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{onEdit ? (
							<button onClick={hanldeUpdate} type="submit" className="btn-create w-100">
								Обновить
							</button>
						) : (
							<button onClick={handleSubmit} type="submit" className="btn-create w-100">
								Добавить
							</button>
						)}
                        {
                            onEdit && <div className='w-100' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <i onClick={() => setOnEdit(false)} className="far fa-chevron-down category__edit--icon"></i>
                            </div>
                        }
					</form>

					<div className="createCategory__body__showCategory">
						<label className="category_label" htmlFor="">
							Список всеx категорий
						</label>
						{category.arrCategory.map((cat) => {
							return (
								<div key={cat._id} className="category_name">
									<span>{cat.name}</span>
									<div className="category__icon">
										<i
											onClick={() => hanldeDelete(cat._id)}
											className="category__icon--delete fas fa-trash-alt"></i>
										<i
											onClick={() => hanldeArgument(cat._id, cat.name)}
											className="category__icon--update far fa-edit"></i>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCategory;
