
import { useState } from 'react';
import { FaSteam, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-5xl font-bold mb-4">Silent Pact</h1>
      <p className="text-lg text-gray-400 mb-8">Платформа для найма и выполнения внутриигровых услуг в Rust</p>
      
      <button className="flex items-center bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg text-lg">
        <FaSteam className="mr-3" /> Войти через Steam
      </button>
      
      <div className="mt-8 flex gap-6">
        <Link href="#">
          <a className="text-gray-400 hover:text-white">О проекте</a>
        </Link>
        <Link href="#">
          <a className="text-gray-400 hover:text-white">Заказы</a>
        </Link>
        <Link href="#">
          <a className="text-gray-400 hover:text-white">Исполнители</a>
        </Link>
      </div>
      
      <div className="mt-10 flex items-center gap-3">
        <FaDiscord className="text-xl" />
        <a href="#" className="text-gray-400 hover:text-white">Наш Discord</a>
      </div>
    </div>
  );
}
