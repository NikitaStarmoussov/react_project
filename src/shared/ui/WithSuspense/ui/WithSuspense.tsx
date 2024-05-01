import { FC, Suspense, SuspenseProps } from 'react';
import { Fallback } from 'shared/ui/Fallback';

interface PropsWithSuspense extends SuspenseProps {}
export const WithSuspense: FC<PropsWithSuspense> = ({ children, fallback }) => {
  return <Suspense fallback={fallback || <Fallback />}>{children}</Suspense>;
};
