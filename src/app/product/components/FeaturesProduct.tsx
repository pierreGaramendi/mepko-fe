"use client";
import DOMPurify from "isomorphic-dompurify";

export const FeaturesProduct = ({ content }: { content: string }) => {
  const sanitizedContent = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
};
