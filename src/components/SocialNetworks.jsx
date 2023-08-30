import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/gustavonascimentodlx07/" },
    { name: "github", icon: <FaGithub />, url: "https://github.com/gustavokurtz" },
    { name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/gustavowwx/" },
]


const SocialNetworks = () => {
  return (
    <section data-aos="fade-down" data-aos-delay="600" id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.url} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks