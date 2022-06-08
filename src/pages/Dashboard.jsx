import React from 'react';
import { Link } from 'react-router-dom';
import { News } from '../components/News';

function Dashboard () {
	const staff = [{
		imageUrl: 'https://s3-alpha-sig.figma.com/img/032c/bda0/d4bf4f7c13f1f38ae7b226e726fb1132?Expires=1655078400&Signature=O954c5F5149K~dNTp5QXOYROihJrPFKpUV44EEMEJ5~nlZnkvYfrW3W-s23CEn6O1dV-RiEdaVBCg-xUFurQOnvnppwTzQGcn6FBBYhWd4Gd0iYDWq3ABVWkbCca7ClsFEfjTQRMMVCLtiaDXdfmFjld-BFSkS9dKy9S70k9izxSYtb5~aX~QyybBOuGCmycSHPcGxihLIVwzv4CRn8WaMiilT-FI5HuPrIFV4E43-6uho8vqOIx79vmxVBW8vGGAEkuAx3HqkHdJIXTu9wp~5qz1eeAuQe9dtlWH3u9z0OLF-V6Om7ooesEH8-cuP3rb6fsF~bdtwXyDRO-dmzk-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		name: 'Julian Fernandez',
		position: 'CEO / Founder'
	},
	{
		imageUrl: 'https://s3-alpha-sig.figma.com/img/6898/c9d7/d162e9ac92a924a25e354b547ec53d45?Expires=1655078400&Signature=N5RU5OOTCzSiW6adzVjIBx0d8DD0yfcLSUFjkvzqX3AyLvlVJ4HwP4oLLSiM15QyH2HVOMnmzKuyQZFE2spfugBm5ugGdFRCPRDqdVb0OBF6btF~ANaUgBzCJmw6zLCwj4GYDOIy3gLOHaCzfFLPtYo9zrhuMI6PN48djcER0ya6pIQE~tdiLuyTBg2zE~xr~7hoxO0fnOdZhI5CSUJmgJm9L4drklaxkFUY3l1dVtJE978VUSo8XbRIblg1kB9i0FEi27wdu5Tlvn5vWpkkyfZNL82nDo1oZOWNmhQaK4-zkYX~kalGxsAa~fXYyXyKqFkIqF9GoRMIUel-2NGmpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		name: 'Julian Fernandez',
		position: 'CEO / Founder'
	}, {
		imageUrl: 'https://s3-alpha-sig.figma.com/img/3bf9/27e4/0ce6ea1b84e1b973ce170c7ecd18aed3?Expires=1655078400&Signature=KjwUyaPK1GlcilMnh2N6XHI-0GQNVjRyn0EPrawh2FC4RxlXKSj9Uc1WhQfem~TTMmoE1ObOX7ZscFVcv2d8GFiZkbC6sm-IXUzfAYNRc1rYNCK9hLng97fWOia90oiR8ju~tJDRl5BmT1EcejBf7IUZuI5VRqd-kPBv3a~vyiv0spYJ2hLuwpKe-voYhfeEbqewflhaoyb0oq5LWoHHj9C4-jAavjdz54RsV1afUTdKMy5jjOmFWKvMejwLiDvvhI8~kHSfpJN7dq5-R2bNALUO5KQCNXzhfnSJQwbgg7-VIabYQbdckuNlTI3bd3cx9g4dBHIH2duibVlY6ZAayQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		name: 'Julian Fernandez',
		position: 'CEO / Founder'
	}, {
		imageUrl: 'https://s3-alpha-sig.figma.com/img/8c43/d067/5ea7411286a8533ecdb0db6e36f9bbdb?Expires=1655078400&Signature=R7Izm1nOoOkYZ-qr1t-LWN7Im8ksVv-0hkqhrpJ-Y21M0DNOSptIBINnxH0ipMRs9CTfyD75Qp~N9nsL4Nv5piwz6jcQSlv~PXlkai1SVaJ8DOeSN3hH5LYGjA~vAGm~Ir3jHzElDpzSPWS6BuAtd5unkgU593o7f2ogOLlin91YmdIIz3r6enrOAc9GMDnWu-eeQ7yukbUh8N7Zs1Xsy0f85Sezx-VEFPnBS8hXzFN4oBhvjDD1~nJU2uU-0j4~6C6qBoibw6OTlSTLXa6Wv6LLzKtL5hP1jUaRXUrWYJcpBeVyKnSfP7MMd~LekbYBuWKC9Xltsg-gE-laIJflzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		name: 'Julian Fernandez',
		position: 'CEO / Founder'
	},
	{
		imageUrl: 'https://s3-alpha-sig.figma.com/img/8f76/0af1/fc2848f95adfef7468267813bca835c5?Expires=1655078400&Signature=bUS31UatmUtk1P~A7xPwoU-Sf1wLwLJuvhBWbY2g1YuLBELJwR7gM2S8DQINblgmnUgxtzi00S9oI1fGHS9VuXpKXs4txstvVl-twR2VJzIGKPh4GEi7cmE~x9JxsS8fGf5opXo8PHksTQWmHSBEIf4cKuHo2Qz4HWJ1PlPwPPc73NKrKKS6vRXXWTLwPvPp4Fri9yh~yKEkocBb7PquSgfprhQbSZFy7kZLKjByMsHFeCmqFFsQRkRzmnv2q3FHc7gE4ADUkFptt6La3ITPRLch~lMt5xh8aL4mXOB1Dovo6-6BDGpNOC9QFOTC2QbbQkzmiceZkfzVob80UUUIzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
		name: 'Julian Fernandez',
		position: 'CEO / Founder'
	}];

	const testimonies = [{ imageUrl: 'https://s3-alpha-sig.figma.com/img/5808/e9c0/bbe68cf2f59bfa7405fa53542daba17a?Expires=1655683200&Signature=MbYiTW-zXmt-x8ZcDaoE-RPN6cu~6e1vegbY3zLSIrR6Rf2XSKdLS-rDvG0B-80~HOa3MQr15ybPvTtx1s9uFKLzRSOEub~s~8JB07uHBL4tYIyk0l2cp~ceQ~Kn-PMaJ0rmm7OI9Er4B3~00WFXoYcNoZZ08AcLemWX2UtVAZG5WBaYOl5W-J1cR8lFgKQEV4jb2yOlFpnJOpM7bjIjz3t7Qgx10xnqMdReR9us9Qh79i4~zGbsTCy9PktdQMilRpj-TGky-3C90JCucc7KAJa2BxqUMIuUNKj~FbDjAiu5MLGmKKPecBsaSK1U0I0k3dAUNkEvbec1vXrLO59BWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/6898/c9d7/d162e9ac92a924a25e354b547ec53d45?Expires=1655078400&Signature=N5RU5OOTCzSiW6adzVjIBx0d8DD0yfcLSUFjkvzqX3AyLvlVJ4HwP4oLLSiM15QyH2HVOMnmzKuyQZFE2spfugBm5ugGdFRCPRDqdVb0OBF6btF~ANaUgBzCJmw6zLCwj4GYDOIy3gLOHaCzfFLPtYo9zrhuMI6PN48djcER0ya6pIQE~tdiLuyTBg2zE~xr~7hoxO0fnOdZhI5CSUJmgJm9L4drklaxkFUY3l1dVtJE978VUSo8XbRIblg1kB9i0FEi27wdu5Tlvn5vWpkkyfZNL82nDo1oZOWNmhQaK4-zkYX~kalGxsAa~fXYyXyKqFkIqF9GoRMIUel-2NGmpw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/3bf9/27e4/0ce6ea1b84e1b973ce170c7ecd18aed3?Expires=1655078400&Signature=KjwUyaPK1GlcilMnh2N6XHI-0GQNVjRyn0EPrawh2FC4RxlXKSj9Uc1WhQfem~TTMmoE1ObOX7ZscFVcv2d8GFiZkbC6sm-IXUzfAYNRc1rYNCK9hLng97fWOia90oiR8ju~tJDRl5BmT1EcejBf7IUZuI5VRqd-kPBv3a~vyiv0spYJ2hLuwpKe-voYhfeEbqewflhaoyb0oq5LWoHHj9C4-jAavjdz54RsV1afUTdKMy5jjOmFWKvMejwLiDvvhI8~kHSfpJN7dq5-R2bNALUO5KQCNXzhfnSJQwbgg7-VIabYQbdckuNlTI3bd3cx9g4dBHIH2duibVlY6ZAayQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/8c43/d067/5ea7411286a8533ecdb0db6e36f9bbdb?Expires=1655078400&Signature=R7Izm1nOoOkYZ-qr1t-LWN7Im8ksVv-0hkqhrpJ-Y21M0DNOSptIBINnxH0ipMRs9CTfyD75Qp~N9nsL4Nv5piwz6jcQSlv~PXlkai1SVaJ8DOeSN3hH5LYGjA~vAGm~Ir3jHzElDpzSPWS6BuAtd5unkgU593o7f2ogOLlin91YmdIIz3r6enrOAc9GMDnWu-eeQ7yukbUh8N7Zs1Xsy0f85Sezx-VEFPnBS8hXzFN4oBhvjDD1~nJU2uU-0j4~6C6qBoibw6OTlSTLXa6Wv6LLzKtL5hP1jUaRXUrWYJcpBeVyKnSfP7MMd~LekbYBuWKC9Xltsg-gE-laIJflzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' },
		{ imageUrl: 'https://s3-alpha-sig.figma.com/img/8f76/0af1/fc2848f95adfef7468267813bca835c5?Expires=1655078400&Signature=bUS31UatmUtk1P~A7xPwoU-Sf1wLwLJuvhBWbY2g1YuLBELJwR7gM2S8DQINblgmnUgxtzi00S9oI1fGHS9VuXpKXs4txstvVl-twR2VJzIGKPh4GEi7cmE~x9JxsS8fGf5opXo8PHksTQWmHSBEIf4cKuHo2Qz4HWJ1PlPwPPc73NKrKKS6vRXXWTLwPvPp4Fri9yh~yKEkocBb7PquSgfprhQbSZFy7kZLKjByMsHFeCmqFFsQRkRzmnv2q3FHc7gE4ADUkFptt6La3ITPRLch~lMt5xh8aL4mXOB1Dovo6-6BDGpNOC9QFOTC2QbbQkzmiceZkfzVob80UUUIzQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', name: 'Nombre y Apellido', testimony: 'testimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoniotestimoni' }
	];
	return (
		<div className='flex flex-col flex-wrap p-2'>

			<section className='flex flex-row w-screen min-h-2/5 justify-center items-center m-3'>
				<div className='flex flex-col w-2/5 h-96 p-5 justify-center items-start'>
					<h1 className='text-5xl font-poppins font-black'>Hola!  Bienvenidx</h1>
					<p className='text-xl font-mulish'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus ac a, elementum ut. Tellus a morbi tincidunt ultricies malesuada eget turpis. Lacus enim non enim, velit hac turpis interdum arcu. Suspendisse at vel ultrices amet orci enim lectus porttitor ut.</p>
					<Link to={'contact'} className='font-mulish shadow appearance-none border rounded border-transparent bg-redOng text-white py-3 px-2 m-2 text-center no-underline w-3/12'>Contactanos</Link>
				</div>
				<div className='hidden sm:hidden md:flex md:w-2/5 md:h-96 md:justify-center'>
					<img src="images/login-hands.png" alt="manos unidas" className='w-5/6 h-full rounded-3xl'/>
				</div>
			</section>

			<section className='flex flex-col w-screen min-h-1/5 m-3'>

				<div className='inline-flex flex-row items-end font-poppins content-center justify-between px-20 py-1'>
					<span className='text-2xl font-black '>Nuestro Staff</span>
					<div className='flex items-center'>
						<Link to={'nosotros'} className='flex items-center no-underline' > Ver todos
							<img src="images/vector.png" alt="go to" className='ml-2' />
						</Link>
					</div>
				</div>

				<div className='flex flex-row  justify-around'>
					{ staff.map((person) => {
						return (
							<div key={person.name} className='staff-card' 	style={{ backgroundImage: `url(${person.imageUrl})` }}>
								<span className='text-xl font-mulish font-bold  '> {person.name}</span>
								<span className='text-l font-mulish pb-2'> {person.position}</span>
							</div>
						);
					})
					}
				</div>

			</section>

			<section className='flex flex-col w-screen min-h-1/5 pt-10 m-3'>

				<div className='inline-flex flex-row items-end font-poppins content-center justify-between px-20 py-1'>
					<span className='text-2xl font-black '>Testimonios</span>
					<div className='flex items-center'>
						<Link to={'testimonios'} className='flex items-center no-underline' > Ver todos
							<img src="images/vector.png" alt="go to" className='ml-2' />
						</Link>
					</div>
				</div>

				<div className='flex flex-row  justify-around'>
					{	testimonies.map((testimony) => {
						return (
							<div key={testimony.name} className=' bg-yellowOng flex flex-col text-black testimony-card'>
								<img className='w-16 h-16 rounded-full ' src={testimony.imageUrl} alt="Person" />
								<span className='text-l font-mulish pb-2 font-bold'> {testimony.name}</span>
								<span className='h-full  font-normal break-all'>{testimony.testimony}</span>
							</div>
						);
					})
					}

				</div>

			</section>

			<section className='w-screen min-h-1/5 m-3'>
				<News />
			</section>

		</div>
	);
}

export {
	Dashboard
};
