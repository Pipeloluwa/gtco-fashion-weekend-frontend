import Image from 'next/image'
import Link from 'next/link'

const LogoComponent = () => {
  return (
    <Link href={"../"}>
      <Image alt='logo' src={"/images/logos/gtco_logo.png"} width={40} height={40} className='object-cover flex'>
      </Image>
    </Link>
  )
}

export default LogoComponent