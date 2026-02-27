import {
  Html, Body, Head, Container, Heading, Text,
  Hr, Preview, Link, Tailwind,
} from '@react-email/components';

interface Props {
  firstNameVariable?: string;
  previewText: string;
  title: string;
  content: string;
  unsubscribeUrl?: string;
}

export function NewsletterEmail({
  firstNameVariable = '{{{FIRST_NAME|leitor(a)}}}',
  previewText,
  title,
  content,
  unsubscribeUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'https://engenhariabiomedica.com'}/unsubscribe?email={{{EMAIL}}}`,
}: Props) {
  return (
    <Html lang="pt-BR">
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="mx-auto py-8 px-6 max-w-xl bg-white rounded-lg">
            <Text className="text-sm text-blue-600 font-semibold">ENGENHARIA BIOMÉDICA</Text>
            <Heading className="text-2xl font-bold mt-2">{title}</Heading>
            <Text className="text-base text-gray-700 leading-relaxed">
              {`Olá ${firstNameVariable}, ${content}`}
            </Text>
            <Hr className="my-6" />
            <Text className="text-xs text-gray-400 text-center">
              Você recebeu este email por estar inscrito na newsletter.{' '}
              <Link href={unsubscribeUrl}>Cancelar inscrição</Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
