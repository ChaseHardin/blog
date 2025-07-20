import { Routes, Route } from "react-router-dom";
import {
  fromCleanCodeToAIDetails,
  functionalBuilderPatternDetails,
  LandingPage,
  writingTestsFeelsSlowDetails,
} from "./pages/LandingPage";
import { MainLayout } from "./components/MainLayout";
import { BlogPostWrapper } from "./components/BlogPostWrapper";

import AboutMe from "./pages/AboutMe.mdx";
import WritingTestsFeelsSlowPost from "./posts/WritingTestsFeelsSlowPost.mdx";
import FromCleanCodeToCopilotPost from "./posts/FromCleanCodeToCopilotPost.mdx";
import FunctionalBuilderPattern from "./posts/FunctionalBuilderPatternPost.mdx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route
          path="from-clean-code-to-copilot"
          element={
            <BlogPostWrapper
              title={fromCleanCodeToAIDetails.title}
              description={fromCleanCodeToAIDetails.description}
              keywords={fromCleanCodeToAIDetails.keywords}
            >
              <FromCleanCodeToCopilotPost />
            </BlogPostWrapper>
          }
        />
        <Route
          path="writing-tests-feels-slow"
          element={
            <BlogPostWrapper
              title={writingTestsFeelsSlowDetails.title}
              description={writingTestsFeelsSlowDetails.description}
              keywords={writingTestsFeelsSlowDetails.keywords}
            >
              <WritingTestsFeelsSlowPost />
            </BlogPostWrapper>
          }
        />
        <Route
          path="functional-builder-pattern"
          element={
            <BlogPostWrapper
              title={functionalBuilderPatternDetails.title}
              description={functionalBuilderPatternDetails.description}
              keywords={functionalBuilderPatternDetails.keywords}
            >
              <FunctionalBuilderPattern />
            </BlogPostWrapper>
          }
        />
        <Route
          path="about"
          element={
            <BlogPostWrapper
              title={'About Chase Hardin'}
              description={'Chase Hardin is a full stack software engineer.'}
              keywords={'Chase Hardin, Software Engineer, Software Developer, Chase Hardin Blog'}
              >
              <AboutMe />
            </BlogPostWrapper>
          }
        />
      </Route>
    </Routes>
  );
};
