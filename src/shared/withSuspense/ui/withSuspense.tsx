import { FC, PropsWithChildren, ReactNode, Suspense } from 'react';
import { Fallback } from 'shared/fallback';

interface PropsWithSuspense extends PropsWithChildren {
  fallback?: ReactNode;
}
export const WithSuspense: FC<PropsWithSuspense> = ({ children, fallback }) => {
  return <Suspense fallback={fallback || <Fallback />}>{children}</Suspense>;
};
