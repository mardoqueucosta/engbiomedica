import Image from 'next/image';

export interface ImagemPalco {
  src: string;
  alt: string;
}

/**
 * Imagens à direita da capa azul. Com várias, ficam lado a lado em alturas crescentes,
 * alinhadas pela base, como a fileira de máquinas da Biopdi. Com uma, um quadro maior.
 */
export function PalcoImagens({ imagens }: { imagens: ImagemPalco[] }) {
  const lista = imagens.slice(0, 3);

  if (lista.length === 1) {
    const img = lista[0];
    return (
      <div className="relative w-full max-w-[560px] mx-auto lg:mr-0 aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
        <Image src={img.src} alt={img.alt} fill priority unoptimized className="object-cover" sizes="(min-width: 1024px) 560px, 100vw" />
      </div>
    );
  }

  // alturas crescentes da esquerda para a direita
  const alturas = lista.length === 2 ? ['h-[190px] lg:h-[230px]', 'h-[240px] lg:h-[300px]'] : ['h-[150px] lg:h-[190px]', 'h-[200px] lg:h-[250px]', 'h-[250px] lg:h-[320px]'];

  return (
    <div className="flex items-end justify-center lg:justify-end gap-3 lg:gap-4">
      {lista.map((img, i) => (
        <div
          key={img.src}
          className={`relative flex-1 max-w-[200px] ${alturas[i]} rounded-xl overflow-hidden border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.35)]`}
        >
          <Image src={img.src} alt={img.alt} fill priority unoptimized className="object-cover" sizes="200px" />
        </div>
      ))}
    </div>
  );
}
