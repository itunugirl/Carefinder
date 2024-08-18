// src/hooks/useRouterNavigation.ts
'use client';

import { useRouter } from 'next/navigation';

const useRouterNavigation = () => {
  const router = useRouter();
  return { router };
};

export default useRouterNavigation;