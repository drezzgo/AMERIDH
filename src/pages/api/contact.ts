import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email } = body;
    if (!name || !email) {
      return new Response(JSON.stringify({ message: 'name and email required' }), { status: 400 });
    }

    // TODO: Forward to serverless backend or email provider.
    // For now we just echo back a success response.
    return new Response(JSON.stringify({ message: 'ok' }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'invalid json' }), { status: 400 });
  }
};
