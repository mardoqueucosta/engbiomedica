// Register API — será implementado na Fase 2
import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Cadastro não configurado nesta fase.' }, { status: 501 });
}
