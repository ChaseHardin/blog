import { Routes, Route } from "react-router-dom";
import FromCleanCodeToCopilotPost from "./posts/FromCleanCodeToCopilotPost.mdx";
import WritingTestsFeelsSlow from "./posts/WritingTestsFeelsSlowPost.mdx";
import { LandingPage } from "./pages/LandingPage";
import { MainLayout } from "./components/MainLayout";
import { BlogPostWrapper } from "./components/BlogPostWrapper";

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
              <WritingTestsFeelsSlow />
            </BlogPostWrapper>
          }
        />
      </Route>
    </Routes>
  );
};
