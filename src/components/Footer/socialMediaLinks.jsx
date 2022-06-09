import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function SocialMediaLinks () {
	const { organizationData } = useSelector((state) => state.organization);

	const socialMediaLinks = [
		{
			icon: <FaFacebookSquare size={30} color="black" style={{ margin: 0 }}/>,
			link: (organizationData && organizationData.facebook) ? organizationData.facebook : '#'
		},
		{
			icon: <FaLinkedin size={30} color="black"/>,
			link: (organizationData && organizationData.linkedin) ? organizationData.linkedin : '#'
		},
		{
			icon: <FaInstagram size={30} color="black"/>,
			link: (organizationData && organizationData.instagram) ? organizationData.instagram : '#'
		}
	];

	return (
		<div className="flex mx-auto gap-5">
			{socialMediaLinks.map((social, i) => (
				<a
					className="transition-colors no-underline visited:text-gray-500"
					href={social.link}
					key={`${i}${social.link}`}
				>{social.icon}
				</a>
			))}
		</div>
	);
}

export default SocialMediaLinks;
