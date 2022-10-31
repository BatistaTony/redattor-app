import { SignInDataType } from 'typescript/auth';

export const signIn = async (data: SignInDataType): Promise<string> => {
  // SIMULATE LOGIN STATE
  const myPromise = new Promise<number>((resolve, reject) => {
    if (data) {
      setTimeout(() => resolve(200), 2000);
    } else {
      reject(new Error('something wrong'));
    }
  });

  const result = await myPromise;

  return result === 200 ? 'success' : 'failed';
};
