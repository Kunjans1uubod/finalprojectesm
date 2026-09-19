import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Logo + Description */}
        <div>
          <Link to='/'>
            <img
              src={assets.logo}
              className='w-32 mb-5 cursor-pointer'
              alt='Trendify logo'
            />
          </Link>

          <p className='text-gray-600 md:w-2/3'>
            Thank you for shopping with Trendify! We are dedicated to bringing
            you the latest trends and top-quality products. Follow us on social
            media for updates on new arrivals and exclusive offers.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className='mb-5 text-xl font-medium'>COMPANY</p>

          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/delivery'>Delivery</Link></li>
            <li><Link to='/privacy'>Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>

          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>
              <a href='tel:+9779840937702' className='hover:underline'>
                +977 9840937702
              </a>
            </li>

            <li>
              <a href='mailto:KunjanSubodh7@gmail.com' className='hover:underline'>
                KunjanSubodh7@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          © 2024 Trendify. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer