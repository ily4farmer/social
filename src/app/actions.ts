'use server';

import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function addPost({
  text,
  title,
  userId,
}: {
  text?: string;
  title: string;
  userId: number;
}) {
  'use server';

  try {
    const body = { text, title, userId };

    const todos = await fetch('http://localhost:5700/api/post/create-post', {
      body: JSON.stringify(body),
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${cookies().get('token')?.value}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
    });

    revalidateTag('todo-items');

    return await todos.json();
  } catch (error) {
    return error;
  }
}

export async function logout() {
  'use server';

  try {
    await fetch('http://localhost:5700/api/user/logout', {
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${cookies().get('token')?.value}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
    });
    redirect('/auth');
  } catch (error) {
    return error;
  }
}
