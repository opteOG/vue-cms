import { createProdMockServer } from "vite-plugin-mock/client";

const modules: {
  [key: string]: { default: object[] };
} = import.meta.glob("./mock/*.ts", {
  eager: true,
});

const mockModules: object[] = [];
Object.keys(modules).forEach(key => {
  if (key.includes("/_")) {
    return;
  }
  mockModules.push(...modules[key].default);
});

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules);
}