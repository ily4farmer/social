import Loading from 'app/(protectedRoutes)/loading';
import { cookies } from 'next/headers';
import { Suspense } from 'react';

import { Posts } from '~features/user';

const getPosts = async (id: string) => {
  'use server';

  try {
    const todos = await fetch('http://localhost:5700/api/post/get-all', {
      body: JSON.stringify({
        page: 1,
        size: 15,
        userId: Number(id),
      }),
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${cookies().get('token')?.value}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      next: { tags: ['todo-items'] },
    }).then((res) => res.json());

    return todos;
  } catch (error) {
    return error;
  }
};

export default async function UserPosts({ params }: { params: { id: string } }) {
  const posts = await getPosts(params.id);

  return (
    <Suspense key="posts" fallback={<Loading />}>
      <Posts posts={posts} />
    </Suspense>
  );
}
