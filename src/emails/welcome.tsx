import {
  Html, Body, Head, Container, Heading, Text,
  Hr, Preview, Link, Tailwind,
} from '@react-email/components';

interface Props {
  firstName: string;
}

export function WelcomeEmail({ firstName = 'leitor(a)' }: Props) {
  return (
    <Html lang="pt-BR">
      <Head />
      <Preview>Bem-vindo(a) à newsletter de Engenharia Biomédica!</Preview>
      <Tailwind>
        <Body className="bg-gray-50 font-sans">
          <Container className="mx-auto py-8 px-6 max-w-xl bg-white rounded-lg">
            <Text className="text-sm text-blue-600 font-semibold">ENGENHARIA BIOMÉDICA</Text>
            <Heading className="text-2xl font-bold mt-2">Bem-vindo(a)!</Heading>
            <Text className="text-base text-gray-700 leading-relaxed">
              {`Olá ${firstName},`}
            </Text>
            <Text className="text-base text-gray-700 leading-relaxed">
              Sua inscrição foi confirmada com sucesso! A partir de agora, você receberá
              nossos conteúdos sobre Engenharia Biomédica diretamente no seu email.
            </Text>
            <Text className="text-base text-gray-700 leading-relaxed">
              Enviamos no máximo 2 emails por mês com:
            </Text>
            <Text className="text-base text-gray-700 leading-relaxed">
              - Análises de mercado e dados salariais{'\n'}
              - Guias práticos sobre carreira e regulamentação{'\n'}
              - Novos cursos, eventos e oportunidades{'\n'}
              - Tendências em healthtech e dispositivos médicos
            </Text>
            <Hr className="my-6" />
            <Text className="text-sm text-gray-500">
              Enquanto isso, explore nosso portal:{' '}
              <Link href="https://engenhariabiomedica.com">engenhariabiomedica.com</Link>
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
