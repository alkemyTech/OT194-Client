import React from 'react';

function UserProfile () {
	return (
		<>
			<div className="flex flex-col items-center mt-6 m-8">
				<h1 className="text-center">Hola User</h1>
				<img className="w-48 rounded-lg" src="./images/user.png" alt=""/>
				<div className="text-center">
					<h2>Información de Usuario</h2>
					<span className="mr-4">Nombre</span>
					<input type="text" name="Nombre" value="Nombre de usuario" className= "outline-0 outline-width: 0px" /><br/>
					<div className="m-4">
						<span className="mr-2">Apellido</span>
						<input type="text" /><br/>
					</div>
					<div className="m-4">
						<span className="mr-2">Email</span>
						<input type="email"/><br/>
					</div>
					<span className="mr-2">Acciones</span>
					<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4">Editar</button>
					<button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Eliminar cuenta</button>
				</div>
			</div>
		</>
	);
}

export {
	UserProfile
};
