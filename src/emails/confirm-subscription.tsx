import {
  Html, Body, Head, Container, Heading, Text,
  Hr, Preview, Link, Button, Tailwind,
} from '@react-email/components';

interface Props {
  firstName: string;
  confirmationUrl: string;
}

export function ConfirmSubscription({ firstName = 'leitor(a)', confirmationUrl = '#' }: Props) {
  return (
    <Html lang="pt-BR">
      <Head />
      <Preview>Confirme sua inscrição na newsletter de Engenharia Biomédica</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="mx-auto py-8 px-6 max-w-xl bg-white rounded-lg">
            <Text className="text-sm text-blue-600 font-semibold">ENGENHARIA BIOMÉDICA</Text>
            <Heading className="text-2xl font-bold mt-2">Confirme sua inscrição</Heading>
            <Text className="text-base text-gray-700 leading-relaxed">
              {`Olá ${firstName},`}
            </Text>
            <Text className="text-base text-gray-700 leading-relaxed">
              Recebemos sua solicitação de inscrição na newsletter de Engenharia Biomédica.
              Para confirmar, clique no botão abaixo:
            </Text>
            <Button
              href={confirmationUrl}
              className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold text-sm"
            >
              Confirmar inscrição
            </Button>
            <Text className="text-sm text-gray-500 mt-4">
              Se você não solicitou esta inscrição, ignore este email.
              O link expira em 24 horas.
            </Text>
            <Hr className="my-6" />
            <Text className="text-xs text-gray-400 text-center">
              engenhariabiomedica.com
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
