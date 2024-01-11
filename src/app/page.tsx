import Image from 'next/image';
import Link from 'next/link';
import image from '../images/desktop-preview.jpg'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* <div className={styles.shape}></div>; */}
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bem vindo ao meu projeto.</strong> uma loja virtual de tênis{' '}
            <a className="">
              Com uma ótima ui {' '}
            </a>
            Desenvolvida por mim
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-primary"
          >
            <span>Bem-vindo</span>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src={image}
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src={image}
            width={560}
            height={620}
            className="md:hidden block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}