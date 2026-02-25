import AppRoutes from "./AppRoutes";
import { RouterProvider } from "react-router";
import { AuthProvider } from "./features/auth/auth.context";
import { PostProvider } from "./features/posts/post.context";
function App() {
  return (
    <>
      <AuthProvider>
        <PostProvider>
          <RouterProvider router={AppRoutes} />
        </PostProvider>
      </AuthProvider>
    </>
  );
}

export default App;
