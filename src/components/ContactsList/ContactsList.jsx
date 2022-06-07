import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export const ContactsList = () => {
	const contacts = useFetch('/backoffice/contacts');
	return (
		<div
			className="container w-full mx-auto my-5"
			style={{ overflow: scroll }}
		>
			<table className="mx-auto shadow-lg bg-white  border border-slate-400 ">
				<thead className="bg-redOng">
					<tr>
						<th className="bg-blue-100 border text-left px-36 py-4 text-sm">
              Nombre
						</th>
						<th className="bg-blue-100 border text-left px-36 py-4 text-sm">
              Apellido
						</th>
						<th className="bg-blue-100 border text-left px-64 py-4 text-sm">
              E-mail
						</th>
					</tr>
				</thead>
				<tbody>
					{
						contacts?.map((contact) =>	(
							<tr key={contact.id}>
								<td className="border px-36 py-4 text-sm">{contact.firsName}</td>
								<td className="border px-36 py-4 text-sm">{contact.lastName}</td>
								<td className="text-center px-64 py-4">{contact.email}</td>
							</tr>))
					}
				</tbody>
			</table>
		</div>
	);
};
