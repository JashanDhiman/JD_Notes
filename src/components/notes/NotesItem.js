import React, { memo } from "react";

const NotesItem = (messages) => {
  console.log(messages);
  const { text, content } = messages;
  console.log(text);

  return (
    <li>
      {/*<div>Created at{createdAt}</div>*/}
      {/*<div>*/}
      {messages.content}
      {/*{text && <span className="word-breal-all">{text}</span>}*/}
      {/*{content && <span className="word-breal-all">{content}</span>}*/}
      {/*</div>*/}
    </li>
  );
};

export default memo(NotesItem);
