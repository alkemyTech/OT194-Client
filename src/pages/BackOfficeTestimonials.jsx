import React, { useEffect } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { getAllTestimonials, deleteTestimony, testimonialsActions } from '../features/testimonials/testimonialsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const BackOfficeTestimonials = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const testimonials = useSelector(state => state.testimonials.allTestimonials);

	useEffect(() => {
		dispatch(getAllTestimonials());
	}, []);

	const handleDeleteTestimony = (id) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(deleteTestimony(id));
				testimonialsActions.resetAllTestimonials();
				Swal.fire(
					'Deleted!',
					'Your file has been deleted.',
					'success'
				).then(() => {
					navigate('/backoffice/testimonials');
				});
			}
		});
	};

	const handleEditTestimony = (id) => {
		navigate(`/backoffice/testimonials/${id}`);
	};

	return (
		<div className="flex justify-center items-center">
			<div className="flex gap-14 justify-center items-center flex-wrap my-14" style={{ width: '80%', height: '80%' }}>
				<table>
					<thead >
						<tr className="bg-neutral-200 font-bold">
							<th className="flex px-3">Nombre</th>
							<th className="px-2">Editar</th>
							<th className="px-2">Eliminar</th>
						</tr>
					</thead>
					<tbody>
						{
							testimonials.map((m, i) => (
								<tr className="bg-neutral-100" key={m.id}>
									<td style={{ width: '60vw', maxWidth: '500px' }} className="px-3 py-2 font-medium">{m.name}</td>
									<td className="">
										<button
											onClick={() => handleEditTestimony(m.id)}
											className='w-full py-2 text-white bg-redOng hover:bg-redOng rounded border-0 cursor-pointer hover:opacity-50'
										>
											<AiFillEdit />
										</button>
									</td>
									<td className="">
										<button
											onClick={() => handleDeleteTestimony(m.id)}
											className='w-full py-2 text-white bg-redOng hover:bg-redOng rounded border-0 cursor-pointer hover:opacity-50'
										>
											<AiFillDelete />
										</button>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
				{/* {
					mockTestimonials.map((m, i) => (
						<div
							key={i}
							className='bg-yellowOng bg-opacity-70 p-3 rounded-xl'
							style={{
								width: '212px',
								height: '254px'
							}}
						>
							<div className="rounded-full my-2 overflow-hidden flex items-center bg-neutral-300" style={{ height: '75px', width: '75px' }}>
								<img className="flex" src={m?.image} alt={`Rostro de ${m?.name}`} width={'100%'}/>
							</div>
							<h3 className="font-bold m-0">{m.name}</h3>
							<p className="m-0">{m.content}</p>
						</div>
					))
				} */}
			</div>
		</div>
	);
};

/* <img className="flex" src={details?.images[1]} alt={`Imagen sobre ${details?.titulo}`} width={'100%'}/> */
/*  <div className="flex bg-neutral-800 font-sans text-white w-full items-center justify-center" style={{ height: '500px' }}>
  <p>Imagen no encontrada</p>
</div> */
