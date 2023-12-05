import React from "react";

const convertMarkdownToHTML = (string) => {
  const split = string.split("\n");
  split.splice(0, 1);
  split.splice(-1, 1);

  let html = "";

  split.forEach((line) => {
    if (line.slice(0, 2) == "# ") {
      html += `<h1>${line.slice(2)}</h1>`;
    }
  });

  console.log(html);
};

convertMarkdownToHTML(`
# H1
## H2
### H3
#### H4
##### H5
###### H6
`);
