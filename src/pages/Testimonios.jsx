import React from 'react';
import { Link } from 'react-router-dom';

function Testimonios () {
	const testimonies = [{ imageUrl: 'https://s3-alpha-sig.figma.com/img/5808/e9c0/bbe68cf2f59bfa7405fa53542daba17a?Expires=1655683200&Signature=MbYiTW-zXmt-x8ZcDaoE-RPN6cu~6e1vegbY3zLSIrR6Rf2XSKdLS-rDvG0B-80~HOa3MQr15ybPvTtx1s9uFKLzRSOEub~s~8JB07uHBL4tYIyk0l2cp~ceQ~Kn-PMaJ0rmm7OI9Er4B3~00WFXoYcNoZZ08AcLemWX2UtVAZG5WBaYOl5W-J1cR8lFgKQEV4jb2yOlFpnJOpM7bjIjz3t7Qgx10xnqMdReR9us9Qh79i4~zGbsTCy9PktdQMilRpj-TGky-3C90JCucc7KAJa2BxqUMIuUNKj~FbDjAiu5MLGmKKPecBsaSK1U0I0k3dAUNkEvbec1vXrLO59BWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/6898/c9d7/d162e9ac92a924a25e354b547ec53d45?Expires=1655078400&Signature=N5RU5OOTCzSiW6adzVjIBx0d8DD0yfcLSUFjkvzqX3AyLvlVJ4HwP4oLLSiM15QyH2HVOMnmzKuyQZFE2spfugBm5ugGdFRCPRDqdVb0OBF6btF~ANaUgBzCJmw6zLCwj4GYDOIy3gLOHaCzfFLPtYo9zrhuMI6PN48djcER0ya6pIQE~tdiLuyTBg2zE~xr~7hoxO0fnOdZhI5CSUJmgJm9L4drklaxkFUY3l1dVtJE978VUSo8XbRIblg1kB9i0FEi27wdu5Tlvn5vWpkkyfZNL82nDo1oZOWNmhQaK4-zkYX~kalGxsAa~fXYyXyKqFkIqF9GoRMIUel-2NGmpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/3bf9/27e4/0ce6ea1b84e1b973ce170c7ecd18aed3?Expires=1655078400&Signature=KjwUyaPK1GlcilMnh2N6XHI-0GQNVjRyn0EPrawh2FC4RxlXKSj9Uc1WhQfem~TTMmoE1ObOX7ZscFVcv2d8GFiZkbC6sm-IXUzfAYNRc1rYNCK9hLng97fWOia90oiR8ju~tJDRl5BmT1EcejBf7IUZuI5VRqd-kPBv3a~vyiv0spYJ2hLuwpKe-voYhfeEbqewflhaoyb0oq5LWoHHj9C4-jAavjdz54RsV1afUTdKMy5jjOmFWKvMejwLiDvvhI8~kHSfpJN7dq5-R2bNALUO5KQCNXzhfnSJQwbgg7-VIabYQbdckuNlTI3bd3cx9g4dBHIH2duibVlY6ZAayQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/8c43/d067/5ea7411286a8533ecdb0db6e36f9bbdb?Expires=1655078400&Signature=R7Izm1nOoOkYZ-qr1t-LWN7Im8ksVv-0hkqhrpJ-Y21M0DNOSptIBINnxH0ipMRs9CTfyD75Qp~N9nsL4Nv5piwz6jcQSlv~PXlkai1SVaJ8DOeSN3hH5LYGjA~vAGm~Ir3jHzElDpzSPWS6BuAtd5unkgU593o7f2ogOLlin91YmdIIz3r6enrOAc9GMDnWu-eeQ7yukbUh8N7Zs1Xsy0f85Sezx-VEFPnBS8hXzFN4oBhvjDD1~nJU2uU-0j4~6C6qBoibw6OTlSTLXa6Wv6LLzKtL5hP1jUaRXUrWYJcpBeVyKnSfP7MMd~LekbYBuWKC9Xltsg-gE-laIJflzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/8f76/0af1/fc2848f95adfef7468267813bca835c5?Expires=1655078400&Signature=bUS31UatmUtk1P~A7xPwoU-Sf1wLwLJuvhBWbY2g1YuLBELJwR7gM2S8DQINblgmnUgxtzi00S9oI1fGHS9VuXpKXs4txstvVl-twR2VJzIGKPh4GEi7cmE~x9JxsS8fGf5opXo8PHksTQWmHSBEIf4cKuHo2Qz4HWJ1PlPwPPc73NKrKKS6vRXXWTLwPvPp4Fri9yh~yKEkocBb7PquSgfprhQbSZFy7kZLKjByMsHFeCmqFFsQRkRzmnv2q3FHc7gE4ADUkFptt6La3ITPRLch~lMt5xh8aL4mXOB1Dovo6-6BDGpNOC9QFOTC2QbbQkzmiceZkfzVob80UUUIzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/6898/c9d7/d162e9ac92a924a25e354b547ec53d45?Expires=1655078400&Signature=N5RU5OOTCzSiW6adzVjIBx0d8DD0yfcLSUFjkvzqX3AyLvlVJ4HwP4oLLSiM15QyH2HVOMnmzKuyQZFE2spfugBm5ugGdFRCPRDqdVb0OBF6btF~ANaUgBzCJmw6zLCwj4GYDOIy3gLOHaCzfFLPtYo9zrhuMI6PN48djcER0ya6pIQE~tdiLuyTBg2zE~xr~7hoxO0fnOdZhI5CSUJmgJm9L4drklaxkFUY3l1dVtJE978VUSo8XbRIblg1kB9i0FEi27wdu5Tlvn5vWpkkyfZNL82nDo1oZOWNmhQaK4-zkYX~kalGxsAa~fXYyXyKqFkIqF9GoRMIUel-2NGmpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/3bf9/27e4/0ce6ea1b84e1b973ce170c7ecd18aed3?Expires=1655078400&Signature=KjwUyaPK1GlcilMnh2N6XHI-0GQNVjRyn0EPrawh2FC4RxlXKSj9Uc1WhQfem~TTMmoE1ObOX7ZscFVcv2d8GFiZkbC6sm-IXUzfAYNRc1rYNCK9hLng97fWOia90oiR8ju~tJDRl5BmT1EcejBf7IUZuI5VRqd-kPBv3a~vyiv0spYJ2hLuwpKe-voYhfeEbqewflhaoyb0oq5LWoHHj9C4-jAavjdz54RsV1afUTdKMy5jjOmFWKvMejwLiDvvhI8~kHSfpJN7dq5-R2bNALUO5KQCNXzhfnSJQwbgg7-VIabYQbdckuNlTI3bd3cx9g4dBHIH2duibVlY6ZAayQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/8c43/d067/5ea7411286a8533ecdb0db6e36f9bbdb?Expires=1655078400&Signature=R7Izm1nOoOkYZ-qr1t-LWN7Im8ksVv-0hkqhrpJ-Y21M0DNOSptIBINnxH0ipMRs9CTfyD75Qp~N9nsL4Nv5piwz6jcQSlv~PXlkai1SVaJ8DOeSN3hH5LYGjA~vAGm~Ir3jHzElDpzSPWS6BuAtd5unkgU593o7f2ogOLlin91YmdIIz3r6enrOAc9GMDnWu-eeQ7yukbUh8N7Zs1Xsy0f85Sezx-VEFPnBS8hXzFN4oBhvjDD1~nJU2uU-0j4~6C6qBoibw6OTlSTLXa6Wv6LLzKtL5hP1jUaRXUrWYJcpBeVyKnSfP7MMd~LekbYBuWKC9Xltsg-gE-laIJflzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/5808/e9c0/bbe68cf2f59bfa7405fa53542daba17a?Expires=1655683200&Signature=MbYiTW-zXmt-x8ZcDaoE-RPN6cu~6e1vegbY3zLSIrR6Rf2XSKdLS-rDvG0B-80~HOa3MQr15ybPvTtx1s9uFKLzRSOEub~s~8JB07uHBL4tYIyk0l2cp~ceQ~Kn-PMaJ0rmm7OI9Er4B3~00WFXoYcNoZZ08AcLemWX2UtVAZG5WBaYOl5W-J1cR8lFgKQEV4jb2yOlFpnJOpM7bjIjz3t7Qgx10xnqMdReR9us9Qh79i4~zGbsTCy9PktdQMilRpj-TGky-3C90JCucc7KAJa2BxqUMIuUNKj~FbDjAiu5MLGmKKPecBsaSK1U0I0k3dAUNkEvbec1vXrLO59BWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/8f76/0af1/fc2848f95adfef7468267813bca835c5?Expires=1655078400&Signature=bUS31UatmUtk1P~A7xPwoU-Sf1wLwLJuvhBWbY2g1YuLBELJwR7gM2S8DQINblgmnUgxtzi00S9oI1fGHS9VuXpKXs4txstvVl-twR2VJzIGKPh4GEi7cmE~x9JxsS8fGf5opXo8PHksTQWmHSBEIf4cKuHo2Qz4HWJ1PlPwPPc73NKrKKS6vRXXWTLwPvPp4Fri9yh~yKEkocBb7PquSgfprhQbSZFy7kZLKjByMsHFeCmqFFsQRkRzmnv2q3FHc7gE4ADUkFptt6La3ITPRLch~lMt5xh8aL4mXOB1Dovo6-6BDGpNOC9QFOTC2QbbQkzmiceZkfzVob80UUUIzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/8c43/d067/5ea7411286a8533ecdb0db6e36f9bbdb?Expires=1655078400&Signature=R7Izm1nOoOkYZ-qr1t-LWN7Im8ksVv-0hkqhrpJ-Y21M0DNOSptIBINnxH0ipMRs9CTfyD75Qp~N9nsL4Nv5piwz6jcQSlv~PXlkai1SVaJ8DOeSN3hH5LYGjA~vAGm~Ir3jHzElDpzSPWS6BuAtd5unkgU593o7f2ogOLlin91YmdIIz3r6enrOAc9GMDnWu-eeQ7yukbUh8N7Zs1Xsy0f85Sezx-VEFPnBS8hXzFN4oBhvjDD1~nJU2uU-0j4~6C6qBoibw6OTlSTLXa6Wv6LLzKtL5hP1jUaRXUrWYJcpBeVyKnSfP7MMd~LekbYBuWKC9Xltsg-gE-laIJflzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/8f76/0af1/fc2848f95adfef7468267813bca835c5?Expires=1655078400&Signature=bUS31UatmUtk1P~A7xPwoU-Sf1wLwLJuvhBWbY2g1YuLBELJwR7gM2S8DQINblgmnUgxtzi00S9oI1fGHS9VuXpKXs4txstvVl-twR2VJzIGKPh4GEi7cmE~x9JxsS8fGf5opXo8PHksTQWmHSBEIf4cKuHo2Qz4HWJ1PlPwPPc73NKrKKS6vRXXWTLwPvPp4Fri9yh~yKEkocBb7PquSgfprhQbSZFy7kZLKjByMsHFeCmqFFsQRkRzmnv2q3FHc7gE4ADUkFptt6La3ITPRLch~lMt5xh8aL4mXOB1Dovo6-6BDGpNOC9QFOTC2QbbQkzmiceZkfzVob80UUUIzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/6898/c9d7/d162e9ac92a924a25e354b547ec53d45?Expires=1655078400&Signature=N5RU5OOTCzSiW6adzVjIBx0d8DD0yfcLSUFjkvzqX3AyLvlVJ4HwP4oLLSiM15QyH2HVOMnmzKuyQZFE2spfugBm5ugGdFRCPRDqdVb0OBF6btF~ANaUgBzCJmw6zLCwj4GYDOIy3gLOHaCzfFLPtYo9zrhuMI6PN48djcER0ya6pIQE~tdiLuyTBg2zE~xr~7hoxO0fnOdZhI5CSUJmgJm9L4drklaxkFUY3l1dVtJE978VUSo8XbRIblg1kB9i0FEi27wdu5Tlvn5vWpkkyfZNL82nDo1oZOWNmhQaK4-zkYX~kalGxsAa~fXYyXyKqFkIqF9GoRMIUel-2NGmpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/3bf9/27e4/0ce6ea1b84e1b973ce170c7ecd18aed3?Expires=1655078400&Signature=KjwUyaPK1GlcilMnh2N6XHI-0GQNVjRyn0EPrawh2FC4RxlXKSj9Uc1WhQfem~TTMmoE1ObOX7ZscFVcv2d8GFiZkbC6sm-IXUzfAYNRc1rYNCK9hLng97fWOia90oiR8ju~tJDRl5BmT1EcejBf7IUZuI5VRqd-kPBv3a~vyiv0spYJ2hLuwpKe-voYhfeEbqewflhaoyb0oq5LWoHHj9C4-jAavjdz54RsV1afUTdKMy5jjOmFWKvMejwLiDvvhI8~kHSfpJN7dq5-R2bNALUO5KQCNXzhfnSJQwbgg7-VIabYQbdckuNlTI3bd3cx9g4dBHIH2duibVlY6ZAayQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/8c43/d067/5ea7411286a8533ecdb0db6e36f9bbdb?Expires=1655078400&Signature=R7Izm1nOoOkYZ-qr1t-LWN7Im8ksVv-0hkqhrpJ-Y21M0DNOSptIBINnxH0ipMRs9CTfyD75Qp~N9nsL4Nv5piwz6jcQSlv~PXlkai1SVaJ8DOeSN3hH5LYGjA~vAGm~Ir3jHzElDpzSPWS6BuAtd5unkgU593o7f2ogOLlin91YmdIIz3r6enrOAc9GMDnWu-eeQ7yukbUh8N7Zs1Xsy0f85Sezx-VEFPnBS8hXzFN4oBhvjDD1~nJU2uU-0j4~6C6qBoibw6OTlSTLXa6Wv6LLzKtL5hP1jUaRXUrWYJcpBeVyKnSfP7MMd~LekbYBuWKC9Xltsg-gE-laIJflzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' }
	];
	return (
		<section className='m-8 flex flex-col'>
			<h1 className="text-3xl">Testimonios</h1>
			<div className='flex flex-wrap justify-center w-full mx-18 mb-10'>
				{	testimonies.map((testimony) => {
					return (
						<div key={testimony.name} className='bg-yellowOng flex flex-col text-black w-48 h-60 p-2 m-2 rounded-lg border-solid border border-orange-200 mb-4 text-justify'>
							<img className='object-cover w-16 h-16 rounded-full ' src={testimony.imageUrl} alt="Person" />
							<span className='text-l font-mulish pb-2 font-bold mt-4'> {testimony.name}</span>
							<span className='h-full text-sm break-all'>{testimony.testimony}</span>
						</div>
					);
				})
				}
			</div>
			<button className='bg-redOng text-white border-none text-sm py-2 px-4 rounded-full w-64 mb-6 cursor-pointer'>¡Agregar mi Testimonio!</button>
			<Link to={'/'} className="bg-blue-500 hover:bg-blue-700 text-white p-2 pt rounded-full w-40 no-underline">Ir al Inicio</Link>
		</section>
	);
}

export {
	Testimonios
};