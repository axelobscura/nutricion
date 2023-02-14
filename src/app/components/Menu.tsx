import Link from 'next/link';

export default function Menu() {
  return (
    <div className="wrapMenu">
      <Link href='/'>INICIO</Link>
      <Link href='/programa'>PROGRAMA</Link>
      <Link href='/registro'>REGISTRO</Link>
      <Link href='/login'>INGRESAR</Link>
    </div>
  )
}
