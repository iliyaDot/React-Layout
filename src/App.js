import React from 'react';
import { useRoutes } from 'hookrouter';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import NotFoundPage from './pages/NotFoundPage';

// Define the routes as a map of path to component rendering function
const routes = {
  '/': () => <HomePage />,
  '/blog': () => <BlogPage />,  // This handles the "/blog" path
  '/post/:id': ({ id }) => <PostPage id={id} />  // Dynamic path segment for post IDs
};

export default function App() {
  const match = useRoutes(routes);  // This uses the routes map to find a matching route

  return match || <NotFoundPage />;  // Render the matching route component or NotFoundPage if no match
}
