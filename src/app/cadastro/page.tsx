import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cadastro',
  robots: { index: false },
};

export default function CadastroPage() {
  return (
    <div className="container-page py-20 text-center">
      <h1 className="text-h1 text-slate-900 mb-4">Cadastro</h1>
      <p className="text-body text-slate-500 mb-6 font-serif">
        O sistema de cadastro será implementado em uma fase futura do portal.
      </p>
      <Link href="/" className="text-sm font-semibold text-teal-600 hover:text-teal-700">
        ← Voltar ao portal
      </Link>
    </div>
  );
}
