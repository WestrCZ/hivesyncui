import PathDefinition from "./PathDefinition";

const basePath = new PathDefinition({
  fullPath: "/",
  generate: () => "/",
  path: "/",
});

const notFound = new PathDefinition({
  fullPath: `${basePath.fullPath}404`,
  generate: () => `${basePath.generate()}404`,
  path: "404",
});

// const somethingWithId = new PathDefinition({
//   fullPath: `${basePath.fullPath}:id`,
//   generate: (id: string) => `${basePath.generate()}${id}`,
//   path: ":id",
// });

const login = new PathDefinition({
  fullPath: `${basePath.fullPath}login`,
  generate: () => `${basePath.generate()}login`,
  path: "login",
});

const bagr = new PathDefinition({
  fullPath: `${basePath.fullPath}bagr`,
  generate: () => `${basePath.generate()}bagr`,
  path: "bagr",
});

export default {
  bagr,
  basePath,
  login,
  notFound,
};
