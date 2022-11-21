import React from "react";
import WritingToggle from "./WritingToggle";

export default function Writing() {
  return (
    <>
      <WritingToggle context="새로 생겼어요" />
      <WritingToggle context="행사/축제" />
      <WritingToggle context="고민상담" />
      <WritingToggle context="소모임" />
      <WritingToggle context="잃어버렸어요" />
      <WritingToggle context="자유게시판" />
      <WritingToggle context="내가 쓴 댓글" />
      <WritingToggle context="관심 목록" />
    </>
  );
}
