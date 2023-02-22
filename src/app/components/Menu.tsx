import Link from 'next/link'
import Image from 'next/image'

export default function Menu() {
  return (
    <div className="wrapMenu">
      <div>
        <Link href='/'>
          <Image
            src='/logo.png'
            width='350'
            height='50'
            alt='Curso Latinoamericano en Nutrición y Alimentación Geriátrica'
          />
        </Link>
      </div>
      <div>
        <Link href='/'>INICIO</Link>
        <Link href='/registro'>REGISTRO</Link>
        <Link href='/login' className='btn_login'>LOGIN</Link>
      </div>
    </div>
  )
}
