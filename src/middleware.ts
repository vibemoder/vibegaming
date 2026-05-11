import { defineMiddleware } from 'astro:middleware';
import { clerkMiddleware } from '@clerk/astro/server';

export const onRequest = clerkMiddleware((auth, context) => {
  // Add custom logic here if needed
});
