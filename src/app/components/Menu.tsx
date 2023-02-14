import Link from 'next/link';

export default function Menu() {
  return (
    <div className="wrapHeader">
      <Link href='/'>INICIO</Link>
      <Link href='/registro'>REGISTRO</Link>
      <Link href='/programa'>PROGRAMA</Link>
    </div>
  )
}
