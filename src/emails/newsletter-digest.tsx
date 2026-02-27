import * as React from 'react';
import {
  Html, Body, Head, Container, Heading, Text,
  Hr, Preview, Link, Tailwind, Img, Section, Button,
} from '@react-email/components';

interface ArtigoDigest {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  categoriaVariant: 'primary' | 'teal' | 'coral' | 'amber';
}

interface Props {
  firstName?: string;
  issueNumber: number;
  featured: ArtigoDigest;
  featuredImage: string | null;
  articles: ArtigoDigest[];
  baseUrl?: string;
}

const VARIANT_COLORS: Record<string, { bg: string; text: string }> = {
  primary: { bg: '#EFF6FF', text: '#2563EB' },
  teal: { bg: '#F0FDFA', text: '#0D9488' },
  coral: { bg: '#FFF1F2', text: '#E11D48' },
  amber: { bg: '#FFFBEB', text: '#D97706' },
};

function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  return text.substring(0, maxLen).trimEnd() + '...';
}

export function NewsletterDigest({
  firstName = '{{{FIRST_NAME|leitor(a)}}}',
  issueNumber,
  featured,
  featuredImage,
  articles,
  baseUrl = 'https://engenhariabiomedica.com',
}: Props) {
  const colors = VARIANT_COLORS[featured.categoriaVariant] || VARIANT_COLORS.primary;

  return (
    <Html lang="pt-BR">
      <Head />
      <Preview>{`Newsletter #${issueNumber} — ${featured.titulo}`}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="mx-auto py-8 px-6 max-w-xl bg-white rounded-lg">
            {/* Header */}
            <Text className="text-sm text-blue-600 font-semibold tracking-wide m-0">
              ENGENHARIA BIOMÉDICA
            </Text>
            <Heading className="text-2xl font-bold mt-1 mb-1">
              {`Newsletter #${issueNumber}`}
            </Heading>
            <Text className="text-base text-gray-700 leading-relaxed mt-3">
              {`Olá ${firstName},`}
            </Text>
            <Text className="text-sm text-gray-600 mt-1">
              Confira os destaques das últimas duas semanas:
            </Text>

            <Hr className="my-4 border-gray-200" />

            {/* Artigo Destaque */}
            <Section>
              {featuredImage && (
                <Img
                  src={featuredImage}
                  alt={featured.titulo}
                  width="100%"
                  style={{ borderRadius: '8px', marginBottom: '12px' }}
                />
              )}
              <Text
                style={{
                  display: 'inline-block',
                  backgroundColor: colors.bg,
                  color: colors.text,
                  padding: '2px 10px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                {featured.categoria}
              </Text>
              <Heading as="h2" className="text-xl font-bold mt-2 mb-1">
                <Link
                  href={`${baseUrl}/artigos/${featured.slug}`}
                  className="text-gray-900 no-underline"
                >
                  {featured.titulo}
                </Link>
              </Heading>
              <Text className="text-sm text-gray-600 leading-relaxed mt-1">
                {featured.resumo}
              </Text>
              <Button
                href={`${baseUrl}/artigos/${featured.slug}`}
                className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-semibold mt-2"
              >
                Ler artigo completo →
              </Button>
            </Section>

            {/* Artigos Secundários */}
            {articles.length > 0 && (
              <>
                <Hr className="my-5 border-gray-200" />
                <Section>
                  <Heading as="h3" className="text-base font-bold mb-3">
                    Mais artigos recentes
                  </Heading>
                  {articles.map((artigo) => {
                    const c = VARIANT_COLORS[artigo.categoriaVariant] || VARIANT_COLORS.primary;
                    return (
                      <Section key={artigo.slug} style={{ marginBottom: '16px' }}>
                        <Text
                          style={{
                            display: 'inline-block',
                            backgroundColor: c.bg,
                            color: c.text,
                            padding: '1px 8px',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: 600,
                            margin: '0 0 4px 0',
                          }}
                        >
                          {artigo.categoria}
                        </Text>
                        <Link
                          href={`${baseUrl}/artigos/${artigo.slug}`}
                          className="text-blue-700 font-semibold text-sm no-underline"
                          style={{ display: 'block', marginBottom: '2px' }}
                        >
                          {artigo.titulo}
                        </Link>
                        <Text className="text-xs text-gray-500 mt-0 mb-0 leading-snug">
                          {truncate(artigo.resumo, 120)}
                        </Text>
                      </Section>
                    );
                  })}
                </Section>
              </>
            )}

            <Hr className="my-5 border-gray-200" />

            {/* Rodapé */}
            <Text className="text-xs text-gray-400 text-center">
              Você recebeu este email por estar inscrito na newsletter
              do portal engenhariabiomedica.com
            </Text>
            <Text className="text-xs text-gray-400 text-center m-0">
              © {new Date().getFullYear()} engenhariabiomedica.com ·{' '}
              <Link href="{{{RESEND_UNSUBSCRIBE_URL}}}" className="text-gray-400">
                Cancelar inscrição
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
