import * as path from "path";
import moduleAlias from "module-alias";

const files = path.resolve(__dirname, "../..");

// para o código compilado
moduleAlias.addAliases({
  "@src": path.join(files, "src"),
  "@test": path.join(files, "test"),
});
