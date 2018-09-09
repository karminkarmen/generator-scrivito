import * as Scrivito from "scrivito";

const "<%= nameUpper %>" = Scrivito.provideObjClass("<%= nameUpper %>", {
    attributes: {
        blob: "binary",
        tags: "stringlist",
        title: "string",
    },
});

export default <%= nameUpper %>;