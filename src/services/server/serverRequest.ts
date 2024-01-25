import { cookies } from 'next/headers';

const getCookies = () => {
  const nextCookies = cookies();
  const allCookies = nextCookies.getAll();
  return allCookies.reduce(
    (accumulator, currentValue) => `${accumulator}${currentValue.name}=${currentValue.value};`,
    '',
  );
};

type TReqConfig<T> = (params: T) => { body?: T; urlPath: string } & Omit<RequestInit, 'body'>;
export const serverRequest =
  <T, D>(requestFunction: TReqConfig<D>) =>
  async (params: D) => {
    const { body, urlPath, ...args } = requestFunction(params);

    const res = await fetch(`http://localhost:5700/api${urlPath}`, {
      ...args,
      body: JSON.stringify(body),
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        cookie: getCookies(),
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw data;
    }

    return data as T;
  };

export const serverApi = {
  checkUser: serverRequest<
    { message: string },
    {
      id: string;
    }
  >((data) => ({
    body: data,
    method: 'POST',
    urlPath: `/user/check-user`,
  })),
};
