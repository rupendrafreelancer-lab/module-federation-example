import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router";
import "./App.css";

const UserList = React.lazy(() => import("remoteAppOne/UserList"));
const PostList = React.lazy(() => import("remoteAppTwo/PostList"));
const GalleryList = React.lazy(() => import("remoteAppThree/GalleryList"));
const PhotoList = React.lazy(() => import("remoteAppFour/PhotoList"));

export function App() {
  return (
    <div className="App">
      <nav>
        <h1>Root Project</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/galleries">Galleries</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<h1>Hello Page</h1>}></Route>
          <Route
            path="/users"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <UserList />
              </Suspense>
            }
          ></Route>
          <Route
            path="/posts"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PostList />
              </Suspense>
            }
          ></Route>
          <Route
            path="/galleries"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <GalleryList />
              </Suspense>
            }
          ></Route>
          <Route
            path="/photos"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <PhotoList />
              </Suspense>
            }
          ></Route>
        </Routes>
        {/* <RouterProvider router={router}></RouterProvider> */}
      </main>
    </div>
  );
}
