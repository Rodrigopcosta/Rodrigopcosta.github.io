import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = 'Rodrigopcosta';

    const token = process.env.GITHUB_TOKEN;

    // Se não tiver token, retorna o valor conhecido
    if (!token) {
      console.log('Token não encontrado, usando fallback');
      return NextResponse.json({ commits: 589 });
    }

    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GraphQL erro:', errorText);
      return NextResponse.json({ commits: 589 });
    }

    const data = await response.json();

    // Verifica se veio o dado correto
    const totalContributions =
      data?.data?.user?.contributionsCollection?.contributionCalendar
        ?.totalContributions;

    if (totalContributions) {
      return NextResponse.json({ commits: totalContributions });
    } else {
      console.log('⚠️ Dados não encontrados, usando fallback');
      return NextResponse.json({ commits: 589 });
    }
  } catch (error) {
    console.error('❌ Erro na API:', error);
    return NextResponse.json({ commits: 589 });
  }
}
