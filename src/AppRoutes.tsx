import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MainLayout } from "./components/MainLayout";
import { BlogPostWrapper } from "./components/BlogPostWrapper";

import AboutMe from "./pages/AboutMe.mdx";
import WritingTestsFeelsSlowPost from "./posts/WritingTestsFeelsSlowPost.mdx";
import FromCleanCodeToCopilotPost from "./posts/FromCleanCodeToCopilotPost.mdx";
import FunctionalBuilderPattern from './posts/FunctionalBuilderPatternPost.mdx';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route
          path="from-clean-code-to-copilot"
          element={
            <BlogPostWrapper>
              <FromCleanCodeToCopilotPost />
            </BlogPostWrapper>
          }
        />
        <Route
          path="writing-tests-feels-slow"
          element={
            <BlogPostWrapper>
              <WritingTestsFeelsSlowPost />
            </BlogPostWrapper>
          }
        />
        <Route
          path="functional-builder-pattern"
          element={
            <BlogPostWrapper>
              <FunctionalBuilderPattern />
            </BlogPostWrapper>
          }
        />
        <Route
          path="about"
          element={
            <BlogPostWrapper>
              <AboutMe />
            </BlogPostWrapper>
          }
        />
      </Route>
    </Routes>
  );
};
