import fs from "fs";
import path from "path";

export const getMDXPathsRecursively = (
  targetPath: string,
  paths: string[]
): string[] => {
  const currentDirents = fs.readdirSync(targetPath, { withFileTypes: true });

  const directoryDirents = currentDirents.filter((d) => d.isDirectory());
  const directoryPaths = directoryDirents.flatMap((d) =>
    getMDXPathsRecursively(path.join(targetPath, d.name), paths)
  );

  const pathDirents = currentDirents.filter(
    (d) => d.isFile() && /\.mdx?$/.test(d.name)
  );
  const currentPaths = pathDirents.map((d) => path.join(targetPath, d.name));

  const accPaths = directoryPaths.concat(currentPaths);
  return accPaths;
};
